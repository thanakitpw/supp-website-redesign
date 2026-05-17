// T3.1 capture — old WP site → migration/raw/
// HTML + full-page screenshot + page images, per URL. Writes manifest.json.
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const BASE = 'https://yourgoalswesupp.com';
const OUT = new URL('./raw/', import.meta.url).pathname;
const SKIP = ['/sample-page/', '/home-demo/']; // WP junk (PRD)

const slug = (u) => {
  const p = decodeURIComponent(new URL(u).pathname);
  const s = p.replace(/^\/|\/$/g, '').replace(/[^\w฀-๿-]+/g, '_');
  return s || 'home';
};

async function sitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  const idx = await res.text();
  const subs = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = new Set();
  for (const sm of subs) {
    const t = await (await fetch(sm)).text();
    for (const m of t.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1]);
  }
  return [...urls].filter((u) => !SKIP.some((s) => u.includes(s)));
}

const urls = await sitemapUrls();
console.log(`sitemap: ${urls.length} urls`);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const manifest = [];

for (const url of urls) {
  const s = slug(url);
  const dir = path.join(OUT, s);
  await mkdir(path.join(dir, 'assets'), { recursive: true });
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    const html = await page.content();
    await writeFile(path.join(dir, 'page.html'), html);
    await page.screenshot({ path: path.join(dir, 'screenshot.png'), fullPage: true });
    const meta = await page.evaluate(() => ({
      title: document.title,
      desc: document.querySelector('meta[name=description]')?.content || '',
      h1: [...document.querySelectorAll('h1')].map((e) => e.textContent.trim()),
      ogImage: document.querySelector('meta[property="og:image"]')?.content || '',
      imgs: [...document.images].map((i) => i.src).filter((x) => x.startsWith('http')),
    }));
    const assets = [...new Set([meta.ogImage, ...meta.imgs].filter(Boolean))].slice(0, 40);
    for (const a of assets) {
      try {
        const r = await fetch(a);
        if (!r.ok) continue;
        const fn = path.basename(new URL(a).pathname) || 'img';
        await pipeline(r.body, createWriteStream(path.join(dir, 'assets', fn)));
      } catch {}
    }
    manifest.push({ url, slug: s, ...meta, status: 'ok' });
    console.log(`ok  ${s}`);
  } catch (e) {
    manifest.push({ url, slug: s, status: 'error', error: String(e) });
    console.log(`ERR ${s}: ${e.message}`);
  }
}

await writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
await browser.close();
console.log(`done. manifest: ${manifest.length} (ok=${manifest.filter((m) => m.status === 'ok').length})`);
