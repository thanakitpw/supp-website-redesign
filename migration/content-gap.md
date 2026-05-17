# Content & On-Page Gap — WP เดิม

> T3.5 · จาก capture (`raw/manifest.json`) + `url-inventory.csv` + `tech-baseline.md`
> ป้อนงาน: content **rewrite** (เฟส 5 Lane A/C) + **SEO foundation** (Lane A/B/C)
> เว็บเก่าไม่เคยทำ SEO → ทุกข้อคือ "สร้างใหม่ให้ถูก" ไม่ใช่ "กู้"

## P0 — ต้องแก้ทุกหน้า (block คุณภาพ SEO foundation)

| ปัญหา | ขอบเขต | แก้ที่ |
|---|---|---|
| **ไม่มี meta description** | **45/45 หน้า** | ทุก page/post เขียน meta desc (PRD: 70–160 ตัวอักษร) — Lane A/C |
| **ไม่มี `<h1>`** | **39/45 หน้า** | 1×H1 ต่อหน้า ตรงหัวข้อจริง — Lane A/C |
| **ไม่มี JSON-LD ใดๆ** | ทุกหน้า | Organization/WebSite (global), Article (blog), Breadcrumb — skill `schema`, Lane C |
| **slug Thai-encoded** | ทุก blog post | slug EN + 301 ครบ — Lane C (`redirect-map.csv`) |
| **LCP สูงมาก** (mobile 6.6–26.8s) | ทุกหน้า | แก้ที่ stack (custom Next.js) — เป้า ≤2.5s |

## P1 — ควรแก้ตอน rewrite

| ปัญหา | ขอบเขต | แก้ที่ |
|---|---|---|
| title ยาว >60 ตัว (ตัดใน SERP) | 33/45 | rewrite title ≤60, ใส่ keyword ต้น — Lane A/C |
| title สั้น/บาง <15 ตัว | 7 | ขยายให้สื่อความ + แบรนด์ |
| ไม่มี OG/Twitter meta | ทุกหน้า | OG image+title+desc ต่อหน้า — SEO foundation |
| ไม่มี canonical | ทุกหน้า | self-canonical ทุกหน้า; /about/→/about-supp/ คง 301 |
| รูปไม่มี alt / ไม่ optimize | ทั่วเว็บ | ใส่ alt ไทย + next/image ตอน build |

## P2 — cleanup / ไม่ migrate

| ปัญหา | รายละเอียด |
|---|---|
| Archive pages ไม่ควร index | `/category/uncategorized/`, `/author/admin/`, `/author/suppfuturesolutions/` — **ไม่ migrate** หรือ noindex; ออกแบบ taxonomy ใหม่ (ทุก post อยู่ "uncategorized" = ไม่เคยจัดหมวด → ตั้ง category จริงตอน migrate Lane C) |
| `/sample-page/`, `/home-demo/` | WP junk — ไม่ migrate (ระบุใน PRD แล้ว) |
| font bloat 4 ตระกูล | ลดเหลือ Noto Sans Thai + DM Sans (ดู `brand-extract.md`) |

## โน้ตเชิงเนื้อหา (สำหรับ rewrite)
- โทน: ที่ปรึกษาการเงินส่วนบุคคล — น่าเชื่อถือ อบอุ่น เฉพาะบุคคล (ดู `brand-extract.md`)
- บทความ ~35 ชิ้น ธีมการเงินส่วนบุคคล/วางแผน/เกษียณ/หนี้/Gen-Z — rewrite ให้มี H1, intro มี keyword, โครงหัวข้อชัด, internal link ≥2 (≥1 ไป pillar) ตาม data contract `seo-blog-writer`
- ทุก post ต้องตั้ง **category จริง** ตอน migrate (ปัจจุบัน uncategorized ทั้งหมด)

## สรุปนับ
45 หน้า capture · meta desc 0/45 · h1 6/45 · title ยาวเกิน 33 · ไม่มี cannibalization (title ไม่ซ้ำ) · archive 3 (ตัด)
