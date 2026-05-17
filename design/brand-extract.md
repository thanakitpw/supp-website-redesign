# Brand Extract — SUPP (จากเว็บ WP เดิม)

> T3.3 · ที่มา: Astra theme `global.css` + Elementor `post-7.css` + capture `migration/raw/`
> เป้าหมาย: ใช้เป็น input ของ `design/design-system.md` (เฟส 4) — **modernize บนของเดิม ไม่ rebrand**

## Stack เดิม
WordPress + **Astra theme** + **Elementor / Elementor Pro**. สีจริงของแบรนด์อยู่ใน Astra global palette (Elementor primary/accent `#6EC1E4`/`#61CE70` = ค่า default ของ Elementor kit — **ไม่ใช่สีแบรนด์ ละทิ้ง**).

## Color palette (Astra global = สีจริงที่ใช้)

| Token | Hex | บทบาท |
|---|---|---|
| Primary | `#046BD2` | สีหลักแบรนด์ (น้ำเงิน) — ปุ่ม/ลิงก์/highlight |
| Primary-dark | `#045CB4` | hover/active ของ primary |
| Heading | `#1E293B` | หัวข้อ / ตัวหนา (slate เข้ม) |
| Body | `#334155` | เนื้อความ |
| Surface | `#F0F5FA` | พื้นอ่อน / section สลับ |
| White | `#FFFFFF` | พื้นหลักการ์ด/หน้า |
| Border | `#D1D5DB` | เส้นขอบ/divider |
| Ink | `#111111` | ข้อความเข้มสุด |
| Accent (red) | `#AD1919` | สีเน้นรอง (ใช้น้อย — badge/เน้น) |

แนวคิด: **น้ำเงิน = ความน่าเชื่อถือ/การเงิน** (เหมาะธุรกิจที่ปรึกษาการเงิน) + neutral slate scale ทันสมัยอยู่แล้ว → เก็บ identity นี้

## Typography

| ใช้กับ | Font เดิม | weight |
|---|---|---|
| Thai (เนื้อหาหลัก) | **Noto Sans Thai** | 400 / 500 |
| Latin (เนื้อหา) | **DM Sans** | 500 |
| (legacy) | Roboto / Roboto Slab | 600 / 400 |

ข้อสังเกต: เว็บเดิมปนหลาย font (Roboto, Roboto Slab, DM Sans, Noto Sans Thai). **Noto Sans Thai เป็นตัวเลือกที่ดีอยู่แล้ว** สำหรับ Thai. modernize: คง Noto Sans Thai + จับคู่ DM Sans (Latin/ตัวเลข) เป็นคู่หลัก, ตัด Roboto Slab/Roboto legacy ออกเพื่อความสะอาด/โหลดเร็ว (ตรงคำขาย "เร็วกว่า").

## Logo assets (capture แล้วใน raw/)

| ไฟล์ | ใช้ |
|---|---|
| `SUPP-Logo.png` | โลโก้หลัก (พื้นสว่าง) |
| `SUPP-Logo-White.png` / `logowhite.png` | โลโก้ขาว (พื้นเข้ม/footer) — ratio ~2.9:1 (522×~180, มี 300×101) |
| `Logo-png.png` | variant สำรอง |

→ เฟส 4: ขอไฟล์ logo ความละเอียดสูง/เวกเตอร์จากลูกค้าถ้ามี (PNG เดิมอาจไม่คมบนจอ retina)

## โทนแบรนด์ (จาก content)

Tagline: *"Empowering Your Financial Journey"* / "เพราะเราเชื่อว่าเป้าหมายของแต่ละคนไม่เหมือนกัน"
โทน: **น่าเชื่อถือ อบอุ่น เข้าถึงง่าย เฉพาะบุคคล** (ไม่ใช่สถาบันการเงินแข็งทื่อ) — design ใหม่ควรคุมโทนนี้: น้ำเงินมั่นใจ + พื้นที่ขาวเยอะ + typography อ่านสบาย ไม่หวือหวาเกิน (เลี่ยง bold/brutalist ของ frontend-design — เอนไป ui-ux-pro-max เป็นหลัก)

## ส่งต่อเฟส 4 (design-system)
- ใช้ palette + type ข้างบนเป็น token ตั้งต้น
- modernize: ลด font ให้เหลือ Noto Sans Thai + DM Sans, spacing scale ใหม่, component ทันสมัย แต่ **คงน้ำเงิน #046BD2 + โลโก้ SUPP**
- ⚠️ เว็บเดิม **ไม่มี meta description ทุกหน้า + 39/45 ไม่มี h1** (ดู `migration/url-inventory.csv`) → SEO foundation เฟส 5 ต้องแก้ทั้งหมด
