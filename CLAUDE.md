# CLAUDE.md — SUPP Website Redesign

Project guidance for Claude Code. อ่าน `prd.md` + `workflow.md` ก่อนเริ่มงานทุกครั้ง.

> ⚠️ **เริ่มทุก session ต้องเปิด `tasks.md` ก่อนเสมอ** — ดู Progress snapshot + Status เพื่อรู้ว่าค้าง task ไหน, ทำตาม `Depends-on`, และ **อัปเดต Status (`TODO→WIP→DONE`) ทุกครั้งที่เริ่ม/จบ task**. ห้ามเริ่มงานโดยไม่เช็ค tasks.md.

## โปรเจคนี้คืออะไร

Redesign เว็บ **SUPP — Financial Consultant** (yourgoalswesupp.com, WordPress เดิม) → **Next.js + Vercel** custom code. เว็บเก่าไม่เคยทำ SEO → เป็น **SEO-foundation build** ไม่ใช่ SEO-rescue. ทำตาม workflow 8 เฟสใน `workflow.md` (ตอนนี้: เฟส 1 เสร็จ, ถัดไปเฟส 2 Init).

## Stack

- Next.js (App Router) + Vercel
- Blog content เก็บ **Supabase DB** table `articles` (ไม่ใช่ static/MDX) — render ฝั่ง server
- ภาษาเนื้อหา: ไทยเป็นหลัก

## กฎที่ห้ามฝ่าฝืน (hard rules)

1. **URL parity** — หน้า static คง path เดิมทุกหน้า (ตอบ 200). ห้ามเปลี่ยน path โดยไม่ลง redirect.
2. **Blog 301** — blog slug ใหม่ต้องเป็นภาษาอังกฤษ และต้องมี **301 จาก Thai-encoded slug เดิมครบทุกตัว** บันทึกใน `migration/redirect-map.csv`. ห้ามตกแม้แต่ตัวเดียว.
3. **SEO foundation** — ทุกหน้าที่ build ใหม่ต้องมี metadata, canonical, OG, JSON-LD ครบตั้งแต่แรก. ต้องมี sitemap.xml + robots.txt.
4. **Secret** — Supabase service role key เป็น server-only ใน `.env.local`. **ห้าม commit, ห้าม expose ฝั่ง client, ห้าม log.** ใช้ public anon key สำหรับ client เท่านั้น.
5. **CI/Brand** — modernize บน CI เดิม (โลโก้ SUPP, สี/ฟอนต์จาก `design/brand-extract.md`). ไม่ rebrand.
6. **Content** — rewrite จากของเดิม + ไฟล์ลูกค้า. ห้ามแต่งข้อมูลธุรกิจ/ตัวเลข/บริการที่ไม่มีในต้นทาง.

## Convention

- Sitemap หน้า static: `/` `/about-supp/` `/services/` `/blog/` `/contact/` `/book-a-free-consult/` `/join-supp/` — ไม่ทำ `/sample-page/` `/home-demo/` (WP junk)
- ระบบจองนัดปรึกษา = build เอง (Calendly-like) ไม่ฝัง third-party
- Artifact migration อยู่ใน `migration/`, design ใน `design/`
- ใช้ skill `seo-blog-publisher` สำหรับ upsert blog ลง Supabase (by slug, idempotent)

## ก่อนถือว่างานเสร็จ

- หน้าใหม่: เช็ค metadata/canonical/OG/JSON-LD ครบ + Lighthouse mobile ≥90 + a11y
- Blog: slug อังกฤษ + redirect-map มี 301 ครบ
- ห้าม push/commit ถ้ายังไม่ได้รับคำสั่ง; ถ้าจะ commit ห้ามมี secret ใน diff
