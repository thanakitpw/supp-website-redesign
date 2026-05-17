# Design System — SUPP (v1, รออนุมัติลูกค้า)

> T4.1 · input: `design/brand-extract.md` · **modernize CI เดิม ไม่ rebrand**
> Preview จริง: เปิด `design/design-system.html` ในเบราว์เซอร์ → 🚪 T4.2 ลูกค้า approve ก่อนทำ prototype
> นำไปใช้: เฟส 5 แปลงเป็น Tailwind config (T5.0b)

## หลักการ
น่าเชื่อถือ (การเงิน) · อบอุ่น เข้าถึงง่าย · พื้นที่ขาวเยอะ · ทันสมัย เรียบ ไม่หวือหวา — คงน้ำเงินแบรนด์ `#046BD2` + โลโก้ SUPP

## Color tokens

| Token | Hex | ใช้ |
|---|---|---|
| `--brand` | `#046BD2` | สีหลัก ปุ่ม/ลิงก์/highlight |
| `--brand-dark` | `#045CB4` | hover/active |
| `--brand-soft` | `#E8F1FB` | พื้น highlight อ่อน/badge |
| `--accent` | `#AD1919` | เน้นรอง (ใช้น้อย — error/badge สำคัญ) |
| `--ink` | `#0F172A` | หัวข้อเข้มสุด |
| `--heading` | `#1E293B` | หัวข้อ |
| `--body` | `#334155` | เนื้อความ |
| `--muted` | `#64748B` | caption/secondary |
| `--border` | `#E2E8F0` | เส้นขอบ/divider |
| `--surface` | `#F0F5FA` | section สลับพื้น |
| `--bg` | `#FFFFFF` | พื้นหลัก |
| `--success` | `#15803D` · `--warning` `#B45309` | สถานะ (ระบบจองนัด) |

โหมดมืด: เฟสนี้ยังไม่ทำ (เว็บ marketing สว่างพอ) — token เผื่อภายหลัง

## Typography

- **Thai:** Noto Sans Thai · **Latin/ตัวเลข:** DM Sans (คงจากของเดิม, ตัด Roboto/Roboto Slab legacy)
- Scale (rem, base 16px): `xs .8` `sm .9` `base 1` `lg 1.125` `xl 1.25` `2xl 1.5` `3xl 1.95` `4xl 2.5` `5xl 3.25`
- น้ำหนัก: body 400, medium 500, heading 600, display 700
- line-height: heading 1.2 · body 1.7 (ไทยอ่านสบาย) · ตัวอักษรไทย letter-spacing 0

## Spacing scale (px)
`4 8 12 16 24 32 48 64 96 128` — section padding desktop 96, mobile 48; container max 1200px, gutter 24/16

## Radius / Shadow / Motion
- radius: `sm 6` `md 10` `lg 16` `pill 999` · การ์ด/ปุ่มใช้ md–lg
- shadow: `sm` subtle card · `md` hover lift · `lg` modal/popover (slate-tinted ไม่ดำสนิท)
- motion: 150ms ease (hover) · 250ms (panel) · ลด motion ตาม `prefers-reduced-motion`

## Components (ดูตัวอย่างใน HTML)
ปุ่ม (primary/secondary/ghost/lg) · ฟอร์ม input/select/textarea + state · การ์ด (เนื้อหา/บทความ/ราคา) · badge · nav bar + footer · breadcrumb · alert · **slot picker (ระบบจองนัด)** · blog card

## Accessibility (บังคับ — ui-ux-pro-max rules)
- คอนทราสต์ข้อความ ≥ 4.5:1 (`--body` บน `--bg` ผ่าน), ปุ่ม ≥ 3:1
- focus ring มองเห็นชัดทุก interactive (2px `--brand` + offset)
- touch target ≥ 44px · รองรับ keyboard เต็ม · respect reduced-motion
