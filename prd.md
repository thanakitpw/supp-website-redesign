# PRD — SUPP Website Redesign

> เฟส 1 ของ migration workflow. อ้างอิง workflow ฉบับปรับ: `~/.claude/plans/workflow-inherited-russell.md`

## 1. ภาพรวม

- **ธุรกิจ:** **SUPP — Financial Consultant** (ที่ปรึกษาวางแผนการเงินส่วนบุคคล, ตลาดไทย)
- **Tagline:** *"Empowering Your Financial Journey"* — "เพราะเราเชื่อว่าเป้าหมายของแต่ละคนไม่เหมือนกัน"
- **เว็บเก่า:** https://yourgoalswesupp.com/ · platform = **WordPress** (มี admin access)
- **เว็บใหม่:** Custom code — **Next.js + Vercel**
- **ประเภทงาน:** Redesign + content rewrite, คง URL หน้า static, **เปลี่ยน blog slug → English + 301**, คง CI/Brand เดิม (modernize)
- **ไม่ใช่:** SEO-rescue migration (เว็บเก่าไม่เคยทำ SEO) → เป็น **SEO-foundation build**

## 2. ทำไมต้องทำ (Problem)

- เว็บ WP เดิม: ดูไม่ทันสมัย, ช้า/CWV แย่, mobile UX อ่อน, ไม่มี SEO foundation, blog slug เป็น Thai-encoded (`%e0%b8…`) แย่ต่อ SEO/แชร์, ได้ lead น้อย
- ข้อเสนอที่ขายลูกค้าไปแล้ว: **custom code เร็วกว่า + SEO ง่ายกว่า + ดูแลง่ายกว่า WP** → ต้อง deliver ตรงคำสัญญานี้

## 3. เป้าหมาย (Goals) + Success metric

| เป้าหมาย | วัดผลด้วย |
|---|---|
| ดูทันสมัย/น่าเชื่อถือ | ลูกค้า approve design + brand consistency กับ CI เดิม |
| ได้ lead/นัดหมายมากขึ้น | ระบบจองนัดทำงานครบ flow, จำนวน booking/lead หลัง launch (baseline ใหม่) |
| วางรากฐาน SEO | ทุกหน้ามี metadata/canonical/OG/JSON-LD/sitemap/robots; blog slug English + 301 ครบทุกตัว |
| เร็ว/CWV/mobile | Lighthouse mobile ≥90, CWV ผ่านเกณฑ์ — เทียบ `migration/tech-baseline.md` (WP เดิม) |

## 4. ผู้ใช้ (Users)

- **ผู้เยี่ยมชม** — หาข้อมูลบริการวางแผนการเงิน, อ่าน blog, **จองนัดปรึกษาฟรี**
- **ที่ปรึกษา SUPP / แอดมิน** — รับ/จัดการนัด, ดูคิว availability, จัดการ content
- **ลูกค้า (เจ้าของ)** — ส่ง content, review/approve, อนาคตแก้เองผ่าน CMS

## 5. ขอบเขต (Scope)

**Sitemap เว็บใหม่ (จาก WP เดิม):** `/` · `/about-supp/` · `/services/` · `/blog/` + บทความ · `/contact/` · `/book-a-free-consult/` · `/join-supp/`
ไม่ migrate: `/sample-page/`, `/home-demo/` (WP junk)

**In scope รอบนี้:**
- หน้า static ทั้งหมดข้างบน — redesign + content rewrite
- Blog: **เก็บใน Supabase DB** (table `articles`) → Next.js ดึงมา render (ไม่ใช่ static/MDX). migrate จาก WP, **slug ใหม่ภาษาอังกฤษ + 301 จาก Thai-encoded เดิมทุกตัว**. ใช้ skill `seo-blog-publisher` upsert by slug ได้
- Content: ใช้ของเดิม + ลูกค้าส่งไฟล์ปรับมาให้ (rewrite ทันสมัย/ดี SEO)
- **ระบบจองนัดปรึกษา (custom — Calendly-like, build เอง):** เลือกช่วงเวลา, จัดการ availability, ยืนยัน/แจ้งเตือน, มุมมองแอดมิน — มี backend + DB
- SEO foundation ครบ + redirect-map (blog) + URL parity (static)

**Out of scope (เฟสอนาคต):**
- ระบบ CMS หลังบ้าน — ออกแบบ DB schema เผื่อ แต่ **ยังไม่ build** รอบนี้
- e-commerce/payment, ระบบสมาชิก

## 6. ข้อจำกัด/กฎ (Constraints)

- URL parity: หน้า static คง path เดิม (200); blog slug ใหม่ต้องมี **301 จาก slug เดิมครบทุกตัว** ห้ามตก
- CI/Brand: extract จาก WP เดิม (โลโก้ SUPP-Logo.png + ขาว, สี/ฟอนต์) → modernize ไม่ rebrand
- Content rewrite รอไฟล์ลูกค้า — dependency
- ระบบจองนัด build เอง (ไม่ฝัง Calendly) — เพิ่ม backend/DB/แจ้งเตือน
- WP → Next.js: export content/media จาก WP (มี access) → ลง Supabase `articles`
- Supabase service role key = server-only ใน `.env.local`, **ห้าม commit / ห้าม expose client**

## 7. Dependency / Open item

- [x] ไฟล์ content ปรับใหม่ (ลูกค้าส่ง) — `assets/Website SUPP.docx` → `migration/content-spec.md`
- [ ] WP access credential (ยืนยันมี)
- [ ] Supabase project ref + service role key (ส่งให้ → ตั้งใน `.env.local`)
- [ ] ยืนยัน schema `articles` ตรง data contract ของ `seo-blog-publisher` หรือต้องปรับ
- [ ] ระบบจองนัด: ช่องทางแจ้งเตือน (อีเมล/LINE?), ใครเป็นเจ้าของ availability — เก็บละเอียดตอน `architecture.md`
- [ ] ตรวจ `/about/` vs `/about-supp/` (เมนูชี้ /about/ แต่ sitemap มี /about-supp/) — เคลียร์ตอน url-inventory
