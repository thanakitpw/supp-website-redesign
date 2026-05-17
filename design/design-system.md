# Design System — SUPP (v2, รออนุมัติลูกค้า)

> T4.1 · input: `design/brand-extract.md` + feedback ลูกค้า (v2: primary แดง, text เข้ม, พื้นขาว)
> Preview จริง: เปิด `design/design-system.html` / ดู `design/design-system-preview*.png` → 🚪 T4.2 ลูกค้า approve
> นำไปใช้: เฟส 5 แปลงเป็น Tailwind config (T5.0b)

## เปลี่ยนจาก v1 (ตาม feedback)
- Primary: น้ำเงิน #046BD2 → **แดง #AD1918** (ใช้สีเน้นเดิมของแบรนด์เป็นสีหลัก)
- Text: slate → **#1A1A1A**
- พื้นหลัง: ขาวล้วน · neutral เปลี่ยน slate → **grayscale** (เข้ากับแดงดีกว่า)
- ตัดน้ำเงินออกทั้งหมด

## หลักการ
น่าเชื่อถือ มั่นใจ อบอุ่น · พื้นที่ขาวเยอะ · แดงใช้อย่างมีจังหวะ (ไม่ท่วม) · ทันสมัย เรียบ — คงโลโก้ SUPP

## Color tokens

| Token | Hex | ใช้ |
|---|---|---|
| `--brand` | `#AD1918` | สีหลัก ปุ่ม/ลิงก์/highlight |
| `--brand-dark` | `#8A1413` | hover/active |
| `--brand-soft` | `#FBEAEA` | พื้น highlight อ่อน/badge |
| `--ink` | `#1A1A1A` | หัวข้อ + ข้อความหลัก |
| `--body` | `#1A1A1A` | เนื้อความ |
| `--muted` | `#6B6B6B` | caption/secondary |
| `--border` | `#EAEAEA` | เส้นขอบ/divider |
| `--surface` | `#FAFAFA` | section สลับพื้น (เทาอ่อนมาก) |
| `--bg` | `#FFFFFF` | พื้นหลัก (ขาวล้วน) |
| `--success` | `#15803D` · `--warning` `#B45309` | สถานะ (ระบบจองนัด) |

โหมดมืด: ยังไม่ทำเฟสนี้

## Typography
- **Thai:** Noto Sans Thai · **Latin/ตัวเลข:** DM Sans (ตัด Roboto/Roboto Slab legacy)
- Scale (rem, base 16): `xs .8` `sm .9` `base 1` `lg 1.125` `xl 1.25` `2xl 1.5` `3xl 1.95` `4xl 2.5` `5xl 3.25`
- น้ำหนัก: body 400 · medium 500 · heading 600 · display 700
- line-height: heading 1.2 · body 1.7 · ไทย letter-spacing 0

## Spacing scale (px)
`4 8 12 16 24 32 48 64 96 128` — section padding desktop 96 / mobile 48 · container max 1200 · gutter 24/16

## Radius / Shadow / Motion
- radius: `sm 6` `md 10` `lg 16` `pill 999`
- shadow: `sm` card · `md` hover · `lg` modal (เทาอมเทา ไม่ดำสนิท)
- motion: 150ms hover · 250ms panel · respect `prefers-reduced-motion`

## Components
ปุ่ม (primary/secondary/ghost/lg) · ฟอร์ม + state · การ์ด · badge · nav+footer · breadcrumb · alert · **slot picker (จองนัด)** · blog card

## Accessibility (บังคับ)
- คอนทราสต์ข้อความ ≥ 4.5:1 (#1A1A1A บนขาว ผ่านสบาย) · ปุ่มแดง #AD1918 + ตัวขาว ≥ 4.5:1 ผ่าน
- focus ring 2px `--brand` + offset · touch ≥ 44px · keyboard เต็ม · reduced-motion
