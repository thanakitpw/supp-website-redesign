import { createClient } from "@supabase/supabase-js";

/**
 * Blog posts from Supabase `articles` (schema: supabase/migrations). Read with
 * the publishable key — RLS only returns published rows whose published_at has
 * passed. Pages are prerendered at build (no ISR on Workers), so publishing a
 * post = upsert the row, then redeploy (`npm run cf:deploy`).
 */
export type Article = {
  slug: string;
  title: string;
  seo_title: string | null;
  seo_description: string | null;
  excerpt: string | null;
  content_md: string;
  cover_url: string | null;
  cover_alt: string | null;
  category: string | null;
  published_at: string;
  updated_at: string;
};

export type ArticleSummary = Omit<Article, "content_md">;

const SUMMARY_COLUMNS =
  "slug,title,seo_title,seo_description,excerpt,cover_url,cover_alt,category,published_at,updated_at";

function client() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

/**
 * Published posts, newest first. Returns [] when Supabase is unreachable so a
 * build never fails (or ships a broken sitemap) because the DB blinked.
 */
export async function getPublishedArticles(): Promise<ArticleSummary[]> {
  const supabase = client();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("articles")
    .select(SUMMARY_COLUMNS)
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) {
    console.warn(`[articles] list failed: ${error.message}`);
    return [];
  }
  return data ?? [];
}

export async function getArticle(slug: string): Promise<Article | null> {
  const supabase = client();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("articles")
    .select(`${SUMMARY_COLUMNS},content_md`)
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.warn(`[articles] ${slug} failed: ${error.message}`);
    return null;
  }
  return data;
}

/** Thai reading time: ~ 500 Thai characters a minute, at least 1 minute. */
export function readingMinutes(markdown: string) {
  const text = markdown.replace(/[#>*_`\-\[\]()!]/g, "").replace(/\s+/g, "");
  return Math.max(1, Math.round(text.length / 500));
}

export function formatThaiDate(iso: string) {
  return new Intl.DateTimeFormat("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date(iso));
}
