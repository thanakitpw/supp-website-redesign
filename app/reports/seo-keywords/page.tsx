import type { Metadata } from "next";
import Image from "next/image";
import {
  getPlannedArticles,
  keywordPrinciples,
  pageKeywords,
} from "@/lib/keyword-plan";
import { site } from "@/lib/site";
import styles from "./report.module.css";

export const dynamic = "force-static";

const reportUrl = `${site.url}/reports/seo-keywords`;

/** Client-facing review page: never indexed, never in the sitemap. */
export const metadata: Metadata = {
  title: { absolute: "แผนคีย์เวิร์ด SEO | SUPP" },
  description: "แผนคีย์เวิร์ดหลักของแต่ละหน้า และคีย์เวิร์ดของบทความ 12 บท สำหรับเว็บไซต์ SUPP",
  alternates: { canonical: reportUrl },
  robots: { index: false, follow: false, nocache: true },
  openGraph: { url: reportUrl, title: "แผนคีย์เวิร์ด SEO | SUPP" },
};

const pageNames: Record<string, string> = Object.fromEntries(
  pageKeywords.map((row) => [row.path, row.page]),
);

export default async function SeoKeywordReport() {
  const articles = await getPlannedArticles();

  return (
    <div className={styles.report}>
      <header className={styles.top}>
        <Image src="/images/logo-red.png" alt="SUPP" width={120} height={38} priority />
        <span className={styles.stamp}>ฉบับ ต.ค. 2569</span>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <p className={styles.eyebrow}>SEO · Keyword plan</p>
          <h1>แผนคีย์เวิร์ดของเว็บไซต์ SUPP</h1>
          <p>
            หน้านี้สรุปว่าแต่ละหน้าในเว็บจะรับคำค้นอะไร และบทความใหม่ 12 บทจะเขียนเพื่อคำค้นไหน
            ใช้เป็นกรอบเดียวกันระหว่างทีม SUPP กับทีมทำเว็บ
          </p>
        </section>

        <section className={styles.block} aria-labelledby="principles">
          <h2 id="principles">หลักการเลือกคีย์เวิร์ด</h2>
          <ol className={styles.principles}>
            {keywordPrinciples.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.block} aria-labelledby="pages">
          <h2 id="pages">คีย์เวิร์ดหลักของแต่ละหน้า</h2>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th scope="col">คีย์เวิร์ด</th>
                  <th scope="col">หน้าเป้าหมาย</th>
                  <th scope="col">ประเภท</th>
                  <th scope="col">เว็บที่แข่งอยู่ในคำนี้</th>
                </tr>
              </thead>
              <tbody>
                {pageKeywords.map((row) => (
                  <tr key={row.keyword}>
                    <td className={styles.keyword}>{row.keyword}</td>
                    <td>
                      {row.page}
                      <span className={styles.path}>{row.path}</span>
                    </td>
                    <td>
                      <span className={styles.tag}>{row.type}</span>
                    </td>
                    <td>{row.competitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.block} aria-labelledby="articles">
          <h2 id="articles">คีย์เวิร์ดของบทความ {articles.length} บท</h2>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ชื่อบทความ</th>
                  <th scope="col">คีย์เวิร์ดหลัก</th>
                  <th scope="col">คีย์เวิร์ดรอง</th>
                  <th scope="col">ประเภท</th>
                  <th scope="col">พาผู้อ่านไปที่</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.slug}>
                    <td className={styles.num}>{article.order}</td>
                    <td>{article.title}</td>
                    <td className={styles.keyword}>{article.keyword}</td>
                    <td>
                      <ul className={styles.secondary}>
                        {article.secondary.map((keyword) => (
                          <li key={keyword}>{keyword}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <span className={styles.tag}>{article.type}</span>
                    </td>
                    <td>{pageNames[article.links[0]] ?? article.links[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.legend}>
            ประเภท: <b>ซื้อ</b> คนกำลังหาบริการ · <b>บริการ</b> อธิบายบริการของ SUPP ·{" "}
            <b>ความรู้</b> คำถามทั่วไปเรื่องเงิน · <b>กฎหมาย</b> สิทธิและเงื่อนไขตามกฎหมาย ·{" "}
            <b>แบรนด์</b> ค้นชื่อ SUPP โดยตรง · <b>อาชีพ</b> หางาน
          </p>
        </section>
      </main>

      <footer className={styles.foot}>
        จัดทำสำหรับ {site.legalName}
      </footer>
    </div>
  );
}
