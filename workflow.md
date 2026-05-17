# Workflow — SUPP Website Redesign (Migration)

## Context

Redesign เว็บ **SUPP — Financial Consultant** (yourgoalswesupp.com) ให้ทันสมัย:
- คง **CI/Brand เดิม** (สี/ฟอนต์/โลโก้/โทน) — modernize ไม่ใช่ rebrand
- **Rewrite content**, คง URL หน้า static, blog slug → English + 301
- Stack: **Next.js + Vercel**, blog เก็บ **Supabase DB**

ข้อเท็จจริงที่กำหนดกรอบ workflow:
1. **เว็บเก่าไม่เคยทำ SEO** → ไม่มีอันดับให้เสีย → เป็น **SEO-foundation build** (ไม่ใช่ SEO-rescue)
2. **หน้า static คง URL** / **blog เปลี่ยน slug + 301** → ความเสี่ยงหลัก = **URL parity** หลุดตอน rewrite

อ้างอิง: `prd.md` (เฟส 1, สร้างแล้ว)

---

## 8 เฟส

### 1. วางแผน ✅
- `prd.md` — redesign + content rewrite, SEO-foundation build, stack Next.js+Vercel

### 2. Initial
- ✅ ติดตั้ง skill จาก skills.sh **project-level** (`.claude/skills/`) — 9 ตัว: `ui-ux-pro-max`, `frontend-design`, `extract-design-system`, `next-best-practices`, `vercel-react-best-practices`, `supabase`, `supabase-postgres-best-practices`, `schema`, `webapp-testing`. local ใช้เฉพาะ `bsc-seo-site-audit`/`seo-blog-publisher`/`seo-blog-writer`
- ✅ Governance = **`CLAUDE.md` single source** (rules + context + convention). **ข้าม `rules.md` + `agents.md` แยก** (ซ้ำ). `AGENTS.md` ทำตอนส่งมอบแบบ symlink (optional)
- ✅ GitHub repo เชื่อม + push แล้ว: `https://github.com/thanakitpw/supp-website-redesign` (PUBLIC, main) — committed: prd/workflow/CLAUDE/.gitignore/skills-lock
- Hard rules อยู่ใน `CLAUDE.md`: URL parity / blog 301 / SEO foundation / Supabase secret server-only / CI-brand / content

### 3. เก็บข้อมูลเว็บเก่า + Asset/CI extraction
- Playwright capture + ดึง content/blog/assets ทุกหน้า
- `migration/url-inventory.csv` — ทุก URL + title/meta/H1 = source of truth ของ URL parity
- `design/brand-extract.md` — extract CI จากเว็บเก่า (สี/ฟอนต์/โลโก้/spacing/โทน) → feed design-system
- `migration/tech-baseline.md` — CWV/Lighthouse เว็บเก่า เก็บเทียบ improvement ตอนส่งมอบ
- ใช้ skill `bsc-seo-site-audit` หา content gap / on-page ที่ rewrite ควรแก้

### 4. ดีไซน์ใหม่ — 🔒 SINGLE AGENT (ห้ามแตก team)
- `design/design-system.md` (tokens สี/type/spacing) — input จาก `brand-extract.md` (CI เดิม + modernize)
- `design.md` → HTML prototype → ลูกค้าตรวจ
- **กฎ:** เฟสนี้ session/agent เดียวคุมทั้งหมด เพื่อ design coherent ไม่ปนกันมั่ว

### 5. ออกแบบระบบ + Production — 👥 AGENT TEAM
- `architecture.md` — DB schema (Supabase `articles` + ระบบจองนัด); redirect strategy
- `tasks.md` — แตกงานตาม module ที่ไม่ทับกัน → แบ่งให้ teammates
- Team 3 สาย (อิสระต่อกัน): **A** marketing pages FE · **B** ระบบจองนัด FE+BE+DB · **C** blog migration→Supabase + SEO foundation
- `migration/redirect-map.csv` — 301 blog slug เดิม→ใหม่ ทุกตัว → middleware/next.config
- SEO foundation: metadata, canonical, OG, JSON-LD, sitemap.xml, robots.txt
- Test (CWV / a11y) → Deploy Vercel preview
- ต้องเปิด `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` ก่อนเริ่มเฟสนี้

### 6. Pre-cutover gate — 👥 PARALLEL-REVIEW TEAM
- review team แยก lens: URL parity / CWV / a11y / SEO foundation → lead รวมผล
- ลูกค้า approve preview
- **URL parity audit**: ทุก URL ใน `url-inventory.csv` → เว็บใหม่ตอบ 200 หรือ 301 ตามตั้งใจ (gate หลัก)
- ตรวจ robots/sitemap/CWV
- เชื่อม Cloudflare → setup GSC/GA property ใหม่ (เว็บเก่าไม่มี — ตั้งใหม่ = deliverable)

### 7. Cutover
- เปลี่ยนโดเมน (+ rollback DNS plan)

### 8. Post-launch
- ตั้ง baseline แรกของลูกค้า: submit sitemap, เฝ้า GSC indexing/coverage (day 0 + day 28)
- URL parity post-check: เฝ้า GSC 404 — slug เดิมหลุดต้อง fix/redirect ทันที
- `migration/post-launch-report.md` — CWV/Lighthouse ใหม่ เทียบ `tech-baseline.md` + SEO foundation = report ส่งลูกค้า
- `memory.md` + `changelog.md` — log การตัดสินใจ/เปลี่ยนแปลง

---

## Artifact list

`prd.md` · `workflow.md` · `CLAUDE.md` (single governance source; `AGENTS.md` symlink optional ตอนส่งมอบ) · `architecture.md` · `tasks.md` · `memory.md`/`changelog.md` · `design/design-system.md`+`design.md`+`design/brand-extract.md` · `migration/url-inventory.csv`+`redirect-map.csv`+`tech-baseline.md`+`post-launch-report.md`

~~`rules.md`~~ ~~`agents.md`~~ ~~`skills.md`~~ — ตัด (รวมใน CLAUDE.md / ไม่ใช้)
