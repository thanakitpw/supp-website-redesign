import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { CtaSection } from "@/components/cta-section";
import {
  formatThaiDate,
  getArticle,
  getPublishedArticles,
  readingMinutes,
} from "@/lib/articles";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

// Prerendered from Supabase at build; unknown slugs 404 (no ISR on Workers).
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  const base = pageMetadata({
    title: article.seo_title ?? article.title,
    description: article.seo_description ?? article.excerpt ?? "",
    path: `/blog/${article.slug}`,
    image: article.cover_url ?? undefined,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: article.published_at,
      modifiedTime: article.updated_at,
      section: article.category ?? undefined,
    },
  };
}

function articleJsonLd(
  article: NonNullable<Awaited<ReturnType<typeof getArticle>>>,
) {
  const url = `${site.url}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: article.title,
    description: article.seo_description ?? article.excerpt ?? undefined,
    ...(article.cover_url ? { image: [article.cover_url] } : {}),
    datePublished: article.published_at,
    dateModified: article.updated_at,
    inLanguage: "th-TH",
    articleSection: article.category ?? undefined,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    isPartOf: { "@id": `${site.url}/blog#blog` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  // The page renders the title as its only <h1>; drop a leading "# title"
  // from the markdown so the post never ships two.
  const html = await marked.parse(
    article.content_md.replace(/^\s*#\s[^\n]*\n/, ""),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleJsonLd(article))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: article.title, path: `/blog/${article.slug}` },
          ]),
        )}
      />
      <main id="main">
        <article className="post">
          <header className="post-heading">
            <nav className="post-crumb" aria-label="Breadcrumb">
              <Link href="/">หน้าแรก</Link> / <Link href="/blog">บทความ</Link>
            </nav>
            {article.category ? (
              <p className="eyebrow">
                <span /> {article.category}
              </p>
            ) : null}
            <h1>{article.title}</h1>
            <p className="post-meta">
              <time dateTime={article.published_at}>
                {formatThaiDate(article.published_at)}
              </time>
              {" · "}อ่าน {readingMinutes(article.content_md)} นาที · โดยทีม{" "}
              {site.name}
            </p>
          </header>

          {article.cover_url ? (
            <div className="post-cover">
              <Image
                src={article.cover_url}
                alt={article.cover_alt ?? ""}
                width={1600}
                height={900}
                sizes="(max-width: 900px) 100vw, 860px"
                priority
                fetchPriority="high"
              />
            </div>
          ) : null}

          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <CtaSection />
      </main>
    </>
  );
}
