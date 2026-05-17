# Tech Baseline — WP เดิม (yourgoalswesupp.com)

> T3.4 · วัด 2026-05-17 · Lighthouse 12.8.2 local (chromium ผ่าน playwright), default throttling
> ใช้เทียบตอนส่งมอบ (เฟส 8 `post-launch-report.md`) — พิสูจน์คำขาย "custom code เร็วกว่า"
> วิธี re-run: `CHROME_PATH=$(node -e "console.log(require('playwright').chromium.executablePath())") npx lighthouse@12 <url> --output=json` (PSI public API quota หมด — ใช้ local)

## Lighthouse — Mobile (PRD target: perf ≥90)

| หน้า | Perf | SEO | A11y | BP | LCP | CLS | TBT | SI |
|---|---|---|---|---|---|---|---|---|
| Home | **66** | 92 | 92 | 100 | 6.6 s | 0.032 | 90 ms | 6.0 s |
| About | **66** | 92 | 96 | 100 | **26.8 s** | 0.007 | 240 ms | 3.7 s |
| Services | **75** | 92 | 96 | 100 | 5.6 s | 0.022 | 20 ms | 2.9 s |
| Blog post | N/A | N/A | N/A | N/A | — | — | — | — |

Blog post: วัดไม่ได้ (Thai-encoded URL + อักขระไทยใน slug ทำ Lighthouse runner พัง — เป็น *finding* ของปัญหา slug เดิม ดู `url-inventory.csv`)

## Lighthouse — Desktop

| หน้า | Perf | SEO | A11y | BP | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Home | 70 | 92 | 92 | 100 | 5.3 s | 0.013 | 0 ms |

## สรุป baseline / จุดที่เว็บใหม่ต้องชนะ

- **Performance แย่ทุกหน้า** — mobile perf 66–75 (เป้า ≥90), **LCP สูงมาก** (Home 6.6s, About **26.8s**, เกณฑ์ดี ≤2.5s) → จุดขายชัด
- สาเหตุเชิงโครงสร้าง: WP + Astra + Elementor, **40 ไฟล์ CSS**, font ซ้ำซ้อน 4 ตระกูล (Roboto/Roboto Slab/DM Sans/Noto Sans Thai), รูปไม่ optimize
- CLS/TBT พอใช้ — ปัญหาหลักคือ LCP/payload
- SEO score 92 (Lighthouse) **หลอกตา** — category นี้ไม่จับ: ทุกหน้า**ไม่มี meta description**, 39/45 **ไม่มี h1**, slug Thai-encoded (ดู `url-inventory.csv`) → SEO foundation เฟส 5 ต้องแก้ครบ
- A11y 92–96, Best practices 100 (HTTPS/no console err)

## เป้าเว็บใหม่ (วัดซ้ำเฟส 8 ด้วยวิธีเดียวกัน)
mobile perf ≥90 ทุกหน้า · LCP ≤2.5s · meta/h1/JSON-LD ครบทุกหน้า · CSS/font payload ลดลงมาก
