import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { formatThaiDate, getPublishedArticles } from "@/lib/articles";
import { articles } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "บทความวางแผนการเงิน SUPP Insights",
  description:
    "มุมมองเรื่องการวางแผนการเงินที่เชื่อมกับชีวิตจริง เริ่มจากคำถามใกล้ตัว ไปสู่ความเข้าใจที่มากขึ้น",
  path: "/blog",
  image: "/images/og/home.jpg",
});

function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}/blog#blog`,
    url: `${site.url}/blog`,
    name: "SUPP Insights",
    description:
      "มุมมองเรื่องการวางแผนการเงินที่เชื่อมกับชีวิตจริง เริ่มจากคำถามใกล้ตัว ไปสู่ความเข้าใจที่มากขึ้น",
    inLanguage: "th-TH",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export default async function BlogPage() {
  const posts = await getPublishedArticles();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(blogJsonLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]),
        )}
      />
      <main id="main">
        <section className="page-heading blog-heading">
          <p className="eyebrow">
            <span /> SUPP INSIGHTS
          </p>
          <h1>
            เข้าใจเรื่องเงินมากขึ้น
            <br />
            <span>เห็นทางเลือกชัดขึ้น</span>
          </h1>
          <p>
            มุมมองเรื่องการวางแผนการเงินที่เชื่อมกับชีวิตจริง
            <br />
            เริ่มจากคำถามใกล้ตัว ไปสู่ความเข้าใจที่มากขึ้น
          </p>
        </section>

        {posts.length > 0 ? (
          <section className="section white blog-section">
            <div className="section-heading">
              <h2>บทความล่าสุด</h2>
            </div>
            <div className="article-grid">
              {posts.map((post, index) => (
                <article
                  className={`article-card ${index === 0 ? "article-featured" : ""}`}
                  key={post.slug}
                >
                  <Link href={`/blog/${post.slug}`}>
                    {post.cover_url ? (
                      <div className="article-image">
                        <Image
                          src={post.cover_url}
                          alt={post.cover_alt ?? ""}
                          width={index === 0 ? 1000 : 480}
                          height={370}
                          sizes={
                            index === 0
                              ? "(max-width: 700px) 100vw, 62vw"
                              : "(max-width: 700px) 100vw, (max-width: 1050px) 46vw, 30vw"
                          }
                          priority={index < 2}
                        />
                      </div>
                    ) : null}
                    <div className="article-copy">
                      <p className="article-meta">
                        {post.category}
                        <span>
                          <time dateTime={post.published_at}>
                            {formatThaiDate(post.published_at)}
                          </time>
                        </span>
                      </p>
                      <h3>{post.title}</h3>
                      {post.excerpt ? <p>{post.excerpt}</p> : null}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : (
        <section className="section white blog-section">
          <div className="section-heading">
            <h2>เรื่องที่อยากชวนคุณคุย</h2>
            <span className="coming-label">บทความที่กำลังเตรียมเผยแพร่</span>
          </div>
          <div className="article-grid">
            {articles.map((article, index) => (
              <article
                className={`article-card ${article.featured ? "article-featured" : ""}`}
                key={article.index}
              >
                <div className="article-image">
                  <Image
                    src={article.image}
                    alt=""
                    width={article.featured ? 1000 : 480}
                    height={article.featured ? 370 : 370}
                    sizes={
                      article.featured
                        ? "(max-width: 700px) 100vw, 62vw"
                        : "(max-width: 700px) 100vw, (max-width: 1050px) 46vw, 30vw"
                    }
                    priority={index < 2}
                  />
                </div>
                <div className="article-copy">
                  <p className="article-meta">
                    {article.category}
                    <span>เร็ว ๆ นี้</span>
                  </p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="article-index">
                    SUPP INSIGHTS / {article.index}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
        )}

        <CtaSection />
      </main>
    </>
  );
}
