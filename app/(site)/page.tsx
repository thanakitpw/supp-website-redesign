import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "SUPP — เคียงข้างทุกเป้าหมายชีวิต",
    description:
      "เริ่มจากชีวิตคุณ แล้วค่อยออกแบบเรื่องเงิน วางแผนการเงิน ความคุ้มครอง การออมและลงทุน พร้อมการดูแลต่อเนื่องจาก SUPP",
    path: "/",
  }),
  // Home keeps the bare brand title rather than the "%s | SUPP" template.
  title: { absolute: "SUPP — เคียงข้างทุกเป้าหมายชีวิต" },
};

const values = [
  {
    number: "01 /",
    title: "Clarity",
    lead: "เห็นภาพชัด",
    text: "เข้าใจสถานะ ทางเลือก และสิ่งที่ควรทำต่อ",
  },
  {
    number: "02 /",
    title: "Protection",
    lead: "ดูแลสิ่งสำคัญ",
    text: "เตรียมพร้อมรับความเสี่ยงที่อาจทำให้แผนสะดุด",
  },
  {
    number: "03 /",
    title: "Progress",
    lead: "ก้าวไปตามแผน",
    text: "เปลี่ยนเป้าหมายให้เป็นขั้นตอนที่ติดตามได้",
  },
];

const audiences = [
  {
    title: "กำลังสร้างอนาคตของตัวเอง",
    text: "จัดระบบเงินวันนี้ให้เชื่อมกับเป้าหมายในอีกไม่กี่ปีข้างหน้า",
  },
  {
    title: "มีความรับผิดชอบมากขึ้น",
    text: "มองเรื่องเงินของตัวเองและครอบครัวให้ครบ แม้เวลาจะจำกัด",
  },
  {
    title: "ดูแลทั้งธุรกิจและคนที่รัก",
    text: "วางแผนให้การเติบโตของธุรกิจเดินไปพร้อมกับความมั่นคงของครอบครัว",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> LIFE-FIRST FINANCIAL PLANNING
          </p>
          <h1>
            เคียงข้างทุก
            <br />
            เป้าหมายชีวิต
            <span>
              ให้เรื่องเงิน
              <br />
              ชัดเจนขึ้น
            </span>
          </h1>
          <p>
            เริ่มจากชีวิตที่คุณอยากมี แล้วเปลี่ยนเป้าหมายนั้น
            <br className="desktop-break" />
            ให้เป็นแผนการเงินที่เข้าใจง่าย และลงมือทำได้จริง
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact">
              เริ่มคุยเรื่องแผนของคุณ
              <ArrowUpRight size={20} />
            </Link>
            <Link className="text-link" href="/services">
              รู้จักบริการของเรา <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-note">
            <span className="tiny-arrow">↗</span>
            <span>YOUR LIFE. YOUR GOALS. OUR SUPPort.</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            className="hero-photo"
            src="/images/life.webp"
            alt="ช่วงเวลาสบาย ๆ ที่บ้านกับการวางแผนชีวิต"
            fill
            sizes="(max-width: 700px) 100vw, 48vw"
            priority
          />
          <div className="hero-caption">
            <span>ROOM FOR WHAT MATTERS</span>
            <p>
              เพราะแผนที่ดี
              <br />
              เริ่มที่ชีวิตคุณ
            </p>
          </div>
          <div className="hero-red">
            <span>
              Clarity.
              <br />
              Confidence.
              <br />
              SUPPort.
            </span>
            <ArrowUpRight strokeWidth={1} />
          </div>
        </div>
      </section>

      <section className="principles-strip">
        <span>YOUR GOALS, OUR STARTING POINT</span>
        <p>
          เข้าใจชีวิต <b>↗</b> เห็นทางเลือก <b>↗</b> ก้าวไปด้วยกัน
        </p>
      </section>

      <section className="section intro">
        <p className="eyebrow">
          <span /> THE SUPP APPROACH
        </p>
        <div className="split-heading">
          <h2>
            เริ่มจากชีวิตคุณ
            <br />
            <span className="muted">แล้วค่อยออกแบบเรื่องเงิน</span>
          </h2>
          <div>
            <p>
              เป้าหมายของคุณมีมากกว่าตัวเลข เรารับฟังสิ่งที่คุณให้ความสำคัญ
              ทำความเข้าใจสถานะปัจจุบัน และช่วยมองทางเลือกพร้อมเหตุผล
              เพื่อให้ทุกก้าวตอบโจทย์ชีวิตจริง
            </p>
            <Link href="/about" className="text-link">
              รู้จัก SUPP ให้มากขึ้น <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <div className="value" key={value.title}>
              <span>{value.number}</span>
              <h3>
                {value.title}
                <ArrowUpRight />
              </h3>
              <h4>{value.lead}</h4>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section white">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> OUR SERVICES
            </p>
            <h2>
              ดูแลเรื่องเงิน
              <br />
              ให้เชื่อมกันทั้งภาพ
            </h2>
          </div>
          <Link href="/services" className="text-link">
            บริการและแพ็กเกจทั้งหมด <ArrowUpRight size={20} />
          </Link>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="service-card"
            >
              <div className="service-image">
                <Image
                  src={service.image}
                  alt=""
                  width={480}
                  height={528}
                  sizes="(max-width: 700px) 50vw, (max-width: 1050px) 45vw, 22vw"
                />
                <span className="image-number">{service.number}</span>
              </div>
              <div className="service-title">
                <h3>{service.title}</h3>
                <ArrowUpRight />
              </div>
              <h4>{service.lead}</h4>
              <p>{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section audience-section">
        <div>
          <p className="eyebrow">
            <span /> MADE FOR YOUR LIFE
          </p>
          <h2>
            มีหลายเรื่องให้วางแผน
            <br />
            <span className="muted">เริ่มจากเรื่องไหนดี?</span>
          </h2>
          <p>
            ไม่ว่าคุณจะอยู่ช่วงไหนของชีวิต
            <br />
            เราช่วยให้คุณมองภาพรวมและจัดลำดับได้ชัดขึ้น
          </p>
        </div>
        <div className="audience-list">
          {audiences.map((audience) => (
            <article key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section white">
        <div className="split-heading">
          <div>
            <p className="eyebrow">
              <span /> HOW WE WORK
            </p>
            <h2>
              จากเรื่องที่ยังไม่ชัด
              <br />
              สู่ก้าวต่อไปที่คุณเข้าใจ
            </h2>
          </div>
          <div>
            <p>
              คุยเรื่องชีวิตและเป้าหมาย → สำรวจสถานะการเงิน → วางแผนความเสี่ยง →
              ออกแบบการออมและลงทุน → ลงมือทำและทบทวนร่วมกัน
            </p>
            <Link className="text-link" href="/services">
              รู้จักขั้นตอนการวางแผน <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
