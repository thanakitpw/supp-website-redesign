import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { articles } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "SUPP Insights — เรื่องเงินที่เชื่อมกับชีวิต",
  description:
    "มุมมองเรื่องการวางแผนการเงินที่เชื่อมกับชีวิตจริง เริ่มจากคำถามใกล้ตัว ไปสู่ความเข้าใจที่มากขึ้น",
  path: "/blog",
  image: "/images/life.webp",
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

export default function BlogPage() {
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

        <CtaSection />
      </main>
    </>
  );
}
