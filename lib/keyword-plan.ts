import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

/** How the keywords were chosen, as explained to the client. */
export const keywordPrinciples = [
  {
    title: "หนึ่งคีย์เวิร์ดหลักต่อหนึ่งหน้า",
    text: "แต่ละหน้าในเว็บรับผิดชอบคำค้นของตัวเอง หน้าในเว็บจะไม่แย่งอันดับกันเอง และ Google เข้าใจได้ชัดว่าคำไหนควรพาไปหน้าไหน",
  },
  {
    title: "เริ่มจากคำที่คนพร้อมคุยกับที่ปรึกษา",
    text: "หน้าบริการจับคำอย่าง “ค่าบริการวางแผนการเงิน” และ “ปรึกษาการเงินฟรี” ก่อน เพราะคนที่ค้นคำเหล่านี้กำลังหาคนช่วยวางแผนอยู่แล้ว ส่วนคำความรู้ทั่วไปให้บทความรับไป",
  },
  {
    title: "บทความเขียนเฉพาะเรื่องที่ SUPP ให้บริการจริง",
    text: "ทั้ง 12 เรื่องอยู่ในบริการ Planning, Protection, Wealth Building และ Ongoing Support ไม่ซ้ำกับบทความเดิมในเว็บ และทุกบทพาผู้อ่านต่อไปที่หน้าบริการหรือหน้าขอคำปรึกษา",
  },
] as const;

export type KeywordRow = {
  keyword: string;
  page: string;
  path: string;
  type: string;
  competitors: string;
};

/** Main keyword → target page. One keyword per page. */
export const pageKeywords: KeywordRow[] = [
  { keyword: "SUPP, SUPP Financial, ซัพพ์", page: "หน้าแรก", path: "/", type: "แบรนด์", competitors: "ชื่อเฉพาะของ SUPP" },
  { keyword: "ที่ปรึกษาการเงินส่วนบุคคล", page: "หน้าแรก", path: "/", type: "บริการ", competitors: "K-Expert กสิกรไทย, Krungsri the Coach" },
  { keyword: "บริการวางแผนการเงิน, ค่าบริการวางแผนการเงิน", page: "บริการ", path: "/services/", type: "ซื้อ", competitors: "K-Expert กสิกรไทย, wealthythai" },
  { keyword: "ทีมที่ปรึกษาการเงิน มีใบอนุญาต", page: "เกี่ยวกับเรา", path: "/about-supp/", type: "บริการ", competitors: "ยังไม่พบคู่แข่งที่ตรงคำนี้" },
  { keyword: "ปรึกษาการเงินฟรี", page: "ขอคำปรึกษาเบื้องต้น", path: "/book-a-free-consult/", type: "ซื้อ", competitors: "ธนาคาร, คลินิกการเงินของสมาคมนักวางแผนการเงินไทย" },
  { keyword: "สมัครงานที่ปรึกษาการเงิน", page: "ร่วมงานกับเรา", path: "/join-supp/", type: "อาชีพ", competitors: "JobsDB, JobThai, K-Advisor" },
  { keyword: "บทความวางแผนการเงิน", page: "บทความ", path: "/blog/", type: "ความรู้", competitors: "Finnomena, SCB, Krungsri the Coach" },
  { keyword: "ติดต่อ SUPP", page: "ติดต่อ", path: "/contact/", type: "แบรนด์", competitors: "ชื่อเฉพาะของ SUPP" },
];

export type PlannedArticle = {
  order: number;
  slug: string;
  url: string;
  title: string;
  keyword: string;
  secondary: string[];
  type: string;
  links: string[];
};

const articlesDir = path.join(process.cwd(), "content", "articles");

/**
 * Reads the frontmatter of content/articles/NN-slug.md — the single source of
 * each article's keywords — so the report never retypes them.
 */
export async function getPlannedArticles(): Promise<PlannedArticle[]> {
  const files = (await readdir(articlesDir))
    .filter((file) => /^\d{2}-.+\.md$/.test(file))
    .sort();

  return Promise.all(
    files.map(async (file) => {
      const fields = parseFrontmatter(await readFile(path.join(articlesDir, file), "utf8"));
      const secondary = fields["keyword_รอง"];

      return {
        order: Number.parseInt(String(fields["ลำดับ"]), 10),
        slug: String(fields.slug),
        url: String(fields.url),
        title: String(fields.title),
        keyword: String(fields["keyword_หลัก"]),
        secondary: Array.isArray(secondary) ? secondary.map(String) : [],
        type: String(fields["ประเภท"]),
        links: Array.isArray(fields["ลิงก์ภายใน"]) ? fields["ลิงก์ภายใน"].map(String) : [],
      };
    }),
  );
}

/**
 * Minimal reader for the article template's frontmatter: top-level
 * `key: value` lines (quoted strings or JSON arrays) and `key:` followed by
 * indented `- item` lines. Nested blocks deeper than that are ignored.
 */
function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const fields: Record<string, string | string[]> = {};
  if (!match) return fields;

  let listKey: string | null = null;
  for (const line of match[1].split("\n")) {
    const item = line.match(/^ {2}- (.*)$/);
    if (item && listKey) {
      (fields[listKey] as string[]).push(item[1].trim());
      continue;
    }

    const pair = line.match(/^([^\s:][^:]*):\s*(.*)$/);
    if (!pair) continue;

    const [, key, raw] = pair;
    listKey = null;
    if (raw === "") {
      fields[key] = [];
      listKey = key;
    } else if (raw.startsWith("[")) {
      fields[key] = JSON.parse(raw) as string[];
    } else {
      fields[key] = raw.replace(/^"(.*)"$/, "$1");
    }
  }
  return fields;
}
