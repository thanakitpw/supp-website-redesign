# tasks.md — SUPP Website Redesign

> **อ่านก่อนเริ่มทุก session:** ดู `prd.md` + `workflow.md` + `CLAUDE.md`.
> ทุก task มี `Status`. เริ่ม session ใหม่ → หา task แรกที่ยังไม่ `DONE` ตาม `Depends-on`.

**Status: `TODO` · `WIP` · `DONE` · `BLOCKED` · `GATE` (รออนุมัติลูกค้า)**

Legend owner: 🔒 single agent · 👥 team lane (A/B/C) · 🧑‍⚖️ lead · 🚪 client gate

---

## Progress snapshot
- เฟส 1 PRD — ✅ DONE
- เฟส 2 Init (skills/repo/governance) — ✅ DONE
- เฟส 3 Capture — ✅ DONE (T3.1–T3.5)
- เฟส 4 Design — 🔵 WIP (T4.1 ✅ · **T4.2 = 🚪 รอลูกค้า approve design-system**) · 🔒 single agent
- 📌 Findings (→ T3.5/rewrite & SEO foundation): 39/45 หน้า **ไม่มี `<h1>`**; **ทุกหน้าไม่มี meta description**; `/about/` →301→ `/about-supp/` (canonical = /about-supp/, ต้องคง 301 บนเว็บใหม่)
- เฟส 4 Design — ⬜ TODO
- เฟส 5 Build — ⬜ TODO
- เฟส 6–8 — ⬜ TODO

---

## เฟส 3 — Capture & Baseline · 🔒 single

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| T3.1 | Playwright capture 7 หน้า static + ทุก blog post (HTML + screenshot + assets) ลง `migration/raw/` | DONE | — | ✅ 45/45 ok 0 err; script `migration/capture.mjs`, manifest `raw/manifest.json` |
| T3.2 | `migration/url-inventory.csv` — ทุก URL + title + meta desc + H1 + ประเภท(page/post) | DONE | T3.1 | ✅ 45 rows (35 post/7 page/3 archive); /about/→301→/about-supp/ ยืนยันแล้ว |
| T3.3 | `design/brand-extract.md` — สี/ฟอนต์/โลโก้/spacing/โทน | DONE | T3.1 | ✅ palette #046BD2 + slate, Noto Sans Thai+DM Sans, โลโก้, โทน |
| T3.4 | `migration/tech-baseline.md` — Lighthouse + CWV WP เดิม (mobile+desktop) | DONE | — | ✅ Lighthouse local; mobile perf 66–75, LCP 6.6–26.8s — เทียบเฟส 8 |
| T3.5 | content gap list → ป้อนงาน rewrite | DONE | T3.1 | ✅ `migration/content-gap.md` P0/P1/P2 (meta 0/45, h1 6/45) |

---

## เฟส 4 — Design · 🔒 SINGLE AGENT (ห้ามแตก team)

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| T4.1 | `design/design-system.md` (tokens) + **export เป็น HTML style guide** | DONE | T3.3 | ✅ `design/design-system.md` + `design/design-system.html` (palette/type/spacing/ปุ่ม/ฟอร์ม/การ์ด/slot picker) |
| T4.2 | 🚪 ลูกค้า approve **design-system HTML** | GATE — รอลูกค้า | T4.1 | ⏸ **v2** (primary #AD1918 / text #1A1A1A / พื้นขาว ตาม feedback — ตรง CI เว็บเก่า). preview: `design/design-system-preview.png` + `design-system.html` → รอ approve |
| T4.3 | `design.md` + HTML prototype ทุกหน้า (skill `frontend-design`, ยึด design-system ที่ approve) | TODO | T4.2 | prototype ครบ 7 หน้า + blog list/detail + flow จองนัด |
| T4.4 | 🚪 ลูกค้า approve **prototype หน้าเต็ม** | GATE | T4.3 | ลูกค้า approve — **gate เข้าเฟส 5** |

---

## เฟส 5 — Build

### 5.pre — ต้องเสร็จก่อนแตก team · 🔒 single

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| T5.0a | เขียน architecture.md — DB schema (`articles` + booking/availability), redirect strategy, env layout | TODO | T4.4 | schema ครบ, ระบุตาราง/คอลัมน์, แผน 301 |
| T5.0b | **Foundation scaffold (single):** Next.js (App Router) + Tailwind จาก design tokens + layout/nav/footer + Supabase client (anon client / service server-only แยก) + `.env.local` + `.env.example` + deploy Vercel preview เปล่า | TODO | T5.0a | preview build ผ่าน, nav/footer ตรง design-system, ไม่มี key รั่ว client |
| T5.0c | เปิด `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` → lead สร้าง team + เท Lane A/B/C ลง shared task list | TODO | T5.0b | team ขึ้น, 3 teammate เห็น task ของตัวเอง |

### Lane A — Marketing pages FE · 👥 teammate-A · depends-on T5.0c

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| A5.1 | Home — จาก prototype + content rewrite | TODO | T5.0c | ตรง prototype, responsive, Lighthouse mobile ≥90 |
| A5.2 | About (ตัวจริงจาก T3.2) + Services | TODO | T5.0c | เนื้อหา rewrite, CTA จองนัดเชื่อม Lane B |
| A5.3 | Contact + Join SUPP | TODO | T5.0c | ฟอร์ม/CTA ทำงาน |
| A5.4 | SEO foundation ต่อหน้า marketing: metadata/canonical/OG/JSON-LD | TODO | A5.1–A5.3 | ทุกหน้ามีครบ, validate ผ่าน |

### Lane B — ระบบจองนัด (custom Calendly) · 👥 teammate-B · depends-on T5.0c

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| B5.1 | DB schema booking: availability, booking, (admin) — `supabase` + `supabase-postgres-best-practices` (RLS) | TODO | T5.0c | ตารางสร้างจริง, RLS เปิด, service key server-only |
| B5.2 | เลือก slot UI (ตาม availability) + กรอกฟอร์มจอง | TODO | B5.1 | จองได้, กันชน slot ซ้ำ |
| B5.3 | ยืนยัน + **แจ้งเตือนอีเมล (P0)** — interface เผื่อ LINE (P1 เฟสหลัง) | TODO | B5.2 | อีเมลส่งถึงผู้จอง+แอดมิน; LINE = stub |
| B5.4 | Admin view — ดู/จัดการนัด + ตั้ง availability | TODO | B5.1 | แอดมิน login เห็นคิว, แก้ availability ได้ |
| B5.5 | SEO foundation หน้า /book-a-free-consult/ | TODO | B5.2 | metadata/canonical/OG/JSON-LD ครบ |

### Lane C — Blog migration + SEO infra · 👥 teammate-C · depends-on T5.0c

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| C5.1 | schema `articles` ใน Supabase (ตรง data contract `seo-blog-publisher`) | TODO | T5.0c | ตารางตรง contract หรือ migration ปรับแล้ว |
| C5.2 | migrate WP posts → Supabase + **slug EN ใหม่** (`seo-blog-publisher`) | TODO | C5.1, T3.2 | ทุก post เข้า DB, slug อังกฤษ, content rewrite |
| C5.3 | **`migration/redirect-map.csv` — 301 slug เก่า(Thai-encoded)→ใหม่ ครบทุกตัว** + ใส่ middleware/next.config | TODO | C5.2 | ทุก slug เก่า redirect 301 ไม่ตกแม้แต่ตัวเดียว (เทียบ T3.2) |
| C5.4 | Blog list + detail page (ดึงจาก Supabase) + JSON-LD Article (`schema`) | TODO | C5.2 | render จาก DB, มี Article schema |
| C5.5 | sitemap.xml + robots.txt (รวม static+blog) | TODO | C5.4, A5.* | sitemap ครบทุก URL, robots ถูกต้อง |

### 5.merge · 🧑‍⚖️ lead

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| T5.M1 | รวม 3 lane, integration test, fix conflict | TODO | A5.*, B5.*, C5.* | ทุก lane รวมแล้ว build ผ่าน |
| T5.M2 | CWV + a11y รอบเต็ม (skill `webapp-testing`) | TODO | T5.M1 | mobile ≥90, a11y ไม่มี critical |
| T5.M3 | Deploy Vercel preview สมบูรณ์ | TODO | T5.M2 | preview URL ใช้งานครบ flow |

---

## เฟส 6 — Pre-cutover gate · 👥 parallel-review team

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| T6.1 | review-team แยก lens: **URL-parity** (ทุก URL T3.2 → 200/301), **CWV**, **a11y**, **SEO foundation** | TODO | T5.M3 | แต่ละ lens รายงาน, lead รวม, ไม่มี P0 ค้าง |
| T6.2 | 🚪 ลูกค้า approve preview | GATE | T6.1 | ลูกค้า approve |
| T6.3 | เชื่อม Cloudflare + setup GSC/GA property ใหม่ | TODO | T6.2 | property verified, sitemap submit พร้อม |

---

## เฟส 7 — Cutover · 🔒 single

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| T7.1 | เปลี่ยน DNS โดเมน + rollback plan เขียนไว้ | TODO | T6.3 | เว็บใหม่ live, มีขั้นตอน rollback ชัด |

---

## เฟส 8 — Post-launch · 🔒 single

| ID | Task | Status | Depends-on | Acceptance |
|---|---|---|---|---|
| T8.1 | Day 0: submit sitemap, เฝ้า GSC index/coverage + 404 | TODO | T7.1 | sitemap submitted, ไม่มี 404 จาก slug เก่า |
| T8.2 | Day 28: เทียบ crawl + GSC coverage, fix slug หลุด | TODO | T8.1 | coverage ปกติ, redirect ครบ |
| T8.3 | `migration/post-launch-report.md` — CWV ใหม่ vs `tech-baseline.md` + SEO foundation = report ลูกค้า | TODO | T8.2 | report ส่งลูกค้า แสดง improvement |
| T8.4 | อัปเดต `changelog.md` + memory การตัดสินใจ | TODO | T8.3 | log ครบ |

---

## หมายเหตุการใช้ team
- เฟส 4 = **single agent เท่านั้น** (design coherent)
- team เริ่มได้หลัง T5.0c เท่านั้น (ต้องมี foundation นิ่ง + flag เปิด)
- Lane A/B/C อิสระต่อกัน — ทับเฉพาะตอน T5.M*
- เฟส 6 ใช้ review-team (คนละ lens) ไม่ใช่ build-team
