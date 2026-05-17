# Architecture — SUPP Website (เฟส 5)

> T5.0a · single-agent (5.pre) · อ้าง `prd.md` `workflow.md` `migration/*` `design/prototype/`
> เป้า: custom Next.js เร็ว/SEO ดี/ดูแลง่ายกว่า WP เดิม

## 1. Stack
- **Next.js (App Router) + TypeScript** · React Server Components เป็นหลัก
- **Tailwind CSS** — token จาก `design/design-system.md` v3/v4 (แดง #B5302A, IBM Plex Sans + Noto Sans Thai)
- **Supabase** (Postgres) — blog `articles` + ระบบจองนัด ; `@supabase/supabase-js`
- **Vercel** deploy + preview ; Cloudflare หน้า DNS (เฟส 6-7)
- Email: Resend (transactional ยืนยันนัด) — P0 ; LINE notify = P1 (interface เผื่อ)

## 2. Routing & URL parity
หน้า static **คง path เดิม** (rule CLAUDE.md):

| path | หน้า | render |
|---|---|---|
| `/` | Home | SSG/ISR |
| `/about-supp/` | เกี่ยวกับเรา | SSG |
| `/services/` | บริการ | SSG |
| `/blog/` | บทความ list | ISR |
| `/blog/[slug]/` | บทความ detail | ISR (จาก Supabase) |
| `/book-a-free-consult/` | ขอคำปรึกษาเบื้องต้น | dynamic (booking) |
| `/join-supp/` | ร่วมงาน Open House | SSG + form |
| `/contact/` | ติดต่อ (สำรอง) | SSG |

- เมนูป้ายไทย แต่ **path เดิมเพื่อ parity** (เช่น "เกี่ยวกับเรา" → `/about-supp/`)
- **redirect** (`next.config` / middleware) → `migration/redirect-map.csv` (Lane C สร้าง):
  - blog Thai-encoded slug เดิม → `/blog/<en-slug>/` **301 ครบทุกตัว**
  - `/about/` → `/about-supp/` **301** (ของเดิมมี — ต้องคงไว้)
  - `/sample-page/`,`/home-demo/` → `/` 301 (junk)
- ทุกหน้ามี canonical self ; sitemap.xml + robots.txt (Lane C)

## 3. Data model (Supabase)

### 3.1 blog — `articles` (ตาม contract `seo-blog-publisher`)
```
articles(
  id uuid pk default gen_random_uuid(),
  slug text unique not null,            -- EN, ใช้ใน /blog/[slug]
  title text not null,
  seo_title text,        seo_description text,
  excerpt text,          content_md text not null,   -- markdown/MDX
  cover_url text,         category text,              -- ตั้ง category จริง (ไม่ uncategorized)
  status text default 'draft',          -- draft|published
  published_at timestamptz, created_at timestamptz default now(),
  updated_at timestamptz default now()
)
```
- index: `slug`, `(status, published_at desc)`, `category`
- เก่า migrate: เซ็ต category จริง (เดิม uncategorized ทั้งหมด — ดู `content-gap.md`)

### 3.2 ระบบจองนัด (custom — แทน Calendly)
```
availability(
  id uuid pk, weekday int,         -- 0-6
  start_time time, end_time time,  slot_minutes int default 30,
  active bool default true
)
booking_slots(                      -- generated/blocked overrides
  id uuid pk, date date, start_at timestamptz,
  status text default 'open'        -- open|booked|blocked
)
bookings(
  id uuid pk, slot_id uuid fk booking_slots,
  name text, email text, phone text, topic text,
  status text default 'confirmed',  -- confirmed|cancelled|rescheduled
  manage_token uuid default gen_random_uuid(),  -- ลิงก์เลื่อน/ยกเลิกในอีเมล
  created_at timestamptz default now()
)
```
- กันชนซ้ำ: unique partial บน `booking_slots.id where status='booked'` + transaction ตอนจอง
- RLS (skill `supabase-postgres-best-practices`):
  - anon: read `availability`/`booking_slots(open)` ; insert `bookings` (validated) เท่านั้น
  - service-role (server): จัดการ availability + อ่าน bookings ทั้งหมด (admin)
- **service role key = server-only `.env.local`** ห้าม client (rule)

### 3.3 admin (เฟสนี้แบบเบา)
- หน้า `/admin` (gated) ดูคิว/ตั้ง availability ; auth = Supabase Auth (email) อย่างง่าย — full CMS = เฟสอนาคต (PRD out-of-scope)

## 4. โครงโปรเจค
```
app/(site)/ ... หน้า static + /blog
app/(site)/blog/[slug]/page.tsx       -- ISR generateStaticParams จาก Supabase
app/book-a-free-consult/ ...          -- booking UI + server actions
app/admin/ ...                         -- gated
app/sitemap.ts  app/robots.ts          -- SEO foundation
lib/supabase/{server,client}.ts        -- service vs anon split
lib/seo.ts                             -- metadata/canonical/OG/JSON-LD helper
components/  styles (tailwind จาก design tokens)
emails/  (Resend templates)
middleware.ts → redirect-map
```

## 5. SEO foundation (ทุกหน้า — เว็บเก่าไม่มี)
- `generateMetadata` ต่อหน้า: title ≤60, meta desc 70–160 (จาก `content-spec.md` / `content-gap.md`)
- canonical self ; OG + Twitter ; JSON-LD: Organization+WebSite (root), Article (blog), BreadcrumbList
- sitemap.xml dynamic (static + published articles) ; robots.txt ; 1×H1/หน้า

## 6. แบ่งงาน Lane (เฟส 5 — agent team หลัง T5.0c)
- **A — Marketing FE**: หน้า static จาก prototype v4 + content-spec + SEO/หน้า + **design polish** (follow-up)
- **B — Booking**: schema 3.2 + UI + server action + Resend + admin view
- **C — Blog+SEO infra**: `articles` schema + migrate WP→Supabase (slug EN) + `redirect-map.csv` 301 + sitemap/robots/JSON-LD
- ขึ้นกับ **T5.0b foundation** (scaffold+tokens+layout+supabase client) เสร็จก่อน

## 7. Verify
- `next build` ผ่าน, ทุก path parity ตอบ 200/301 (เทียบ `url-inventory.csv`)
- Lighthouse mobile ≥90 (เทียบ `tech-baseline.md`), CWV ผ่าน
- จองนัด end-to-end (จอง→อีเมล→เลื่อน/ยกเลิก) ; ไม่มี key รั่ว client (grep bundle)
