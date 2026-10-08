import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  HeartHandshake,
  ListChecks,
  MessageCircle,
} from "@/components/icons";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Join us — Design Your Own Life",
  description:
    "ออกแบบชีวิตและรายได้ของคุณเอง กับอาชีพ Financial Life Partner ที่ SUPP รู้จักบทบาทงาน เส้นทางพัฒนา และเริ่มต้นผ่าน Open House",
  path: "/join-us",
  image: "/images/join-cover.webp",
});

const pains = [
  { number: "01", text: "ทำงานเยอะ แต่รายได้ยังอยู่ที่เดิม" },
  { number: "02", text: "อยากมีส่วนออกแบบเวลาชีวิตของตัวเอง" },
  { number: "03", text: "อยากเติบโต แต่โอกาสยังไม่เปิดให้" },
  { number: "04", text: "อยากใช้ศักยภาพที่มีให้มากขึ้น" },
  { number: "05", text: "มองหางานที่สร้างคุณค่าให้ผู้คน" },
];

const roles = [
  {
    Icon: MessageCircle,
    number: "01",
    title: "รับฟังชีวิตและเป้าหมาย",
    text: "พูดคุยเพื่อเข้าใจสิ่งที่ลูกค้าให้ความสำคัญ เป้าหมาย และปัญหาที่กำลังเผชิญ",
  },
  {
    Icon: ListChecks,
    number: "02",
    title: "จัดระเบียบเรื่องเงิน",
    text: "ช่วยให้เห็นภาพรายรับ รายจ่าย หนี้ ภาระ และความเสี่ยงอย่างเป็นระบบ",
  },
  {
    Icon: Compass,
    number: "03",
    title: "ช่วยให้เห็นทางเลือก",
    text: "ทำเรื่องซับซ้อนให้เข้าใจง่าย เพื่อให้ลูกค้าเลือกแนวทางได้อย่างมั่นใจ",
  },
  {
    Icon: HeartHandshake,
    number: "04",
    title: "ดูแลกันอย่างต่อเนื่อง",
    text: "เป็นเหมือนโค้ชที่ช่วยลูกค้าวางแผนเกมชีวิต และดูแลตลอดเส้นทาง",
  },
];

const fitList = [
  "อยากเติบโตและพร้อมเปิดรับสิ่งใหม่",
  "ชอบคุยกับคน และเปิดใจรับฟัง",
  "อยากพัฒนาตัวเองและทำงานเป็นระบบ",
  "มองหางานที่สร้างคุณค่าให้ผู้อื่น",
  "รับผิดชอบตัวเองได้ และอยากเป็นเจ้าของเส้นทางชีวิต",
];

const beliefs = [
  {
    title: "Plan before product",
    text: "เริ่มจากเข้าใจชีวิตลูกค้า ก่อนเลือกทางออกทางการเงิน",
  },
  {
    title: "Human-first / Trust-first",
    text: "ให้ความสำคัญกับความสัมพันธ์และความน่าเชื่อถือในระยะยาว",
  },
  {
    title: "เติบโตอย่างมีมาตรฐาน",
    text: "สร้างพื้นฐานวิธีคิดและวิธีทำงานที่ถูกต้อง แล้วค่อย ๆ พัฒนาอย่างต่อเนื่อง",
  },
  {
    title: "พัฒนาคนไปพร้อมกับผลงาน",
    text: "ฝึกทั้งความรู้ ทัศนคติ การสื่อสาร และความรับผิดชอบ",
  },
  {
    title: "ความถูกต้องมาก่อน",
    text: "ทำงานโดยรักษาความเชื่อมั่นของลูกค้า และไม่เร่งยอดด้วยวิธีที่ทำลายความสัมพันธ์",
  },
];

const growth = [
  {
    number: "01 /",
    title: "ความชัดเจนในเส้นทางอาชีพ",
    text: "รู้ว่ากำลังฝึกอะไร เพื่อไปสู่เป้าหมายไหน และเห็นทิศทางการพัฒนาตัวเองชัดขึ้น",
  },
  {
    number: "02 /",
    title: "ทักษะที่ใช้ได้ทั้งงานและชีวิต",
    text: "ฝึกการฟัง การสื่อสารแบบที่ปรึกษา การวิเคราะห์ และการสร้างความน่าเชื่อถือ",
  },
  {
    number: "03 /",
    title: "ความมั่นใจจากการลงมือทำ",
    text: "ค่อย ๆ คุยกับลูกค้าได้ดีขึ้น คิดเป็นระบบ และตัดสินใจในการทำงานได้ดีขึ้น",
  },
  {
    number: "04 /",
    title: "โอกาสเติบโตด้านรายได้",
    text: "พัฒนาจากความสามารถ ผลงาน และคุณค่าที่ส่งมอบ เป็นเส้นทางสำหรับคนที่พร้อมฝึกฝนอย่างจริงจัง",
  },
  {
    number: "05 /",
    title: "งานที่มีความหมาย",
    text: "เห็นว่าคำแนะนำที่ดีมีส่วนช่วยชีวิตลูกค้า และสร้างความภูมิใจจากคุณค่าของงาน",
  },
  {
    number: "06 /",
    title: "ทีมที่ช่วยให้ไม่ต้องโตคนเดียว",
    text: "มีคนช่วยสะท้อน ช่วยคิด และพัฒนาไปด้วยกัน ในสภาพแวดล้อมที่จริงใจ",
  },
];

const openHouseSteps = [
  {
    number: "01",
    title: "ลงทะเบียนแสดงความสนใจ",
    text: "เริ่มทำความรู้จัก SUPP และเส้นทาง Financial Life Partner ผ่านแบบฟอร์มสมัคร",
  },
  {
    number: "02",
    title: "มาฟังภาพรวมและประสบการณ์จริง",
    text: "รู้จักบทบาทงาน วิธีทำงาน เส้นทางพัฒนา และทีมสนับสนุน พร้อมช่วง Q&A",
  },
  {
    number: "03",
    title: "คุยต่อเมื่อคุณสนใจ",
    text: "หลังงานมีการสัมภาษณ์ เพื่อพูดคุยเรื่องเป้าหมายชีวิต สไตล์การทำงาน และความคาดหวังร่วมกัน",
  },
  {
    number: "04",
    title: "เริ่มต้นอย่างมีพื้นฐาน",
    text: "เมื่อความคาดหวังตรงกัน ค่อยเข้าสู่โปรแกรมพื้นฐาน ทั้ง mindset, skill และ tools ก่อนลงสนามจริงแบบมีพี่เลี้ยง",
  },
];

function jobPostingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Financial Life Partner",
    description:
      "ออกแบบชีวิตและรายได้ของคุณเอง กับอาชีพ Financial Life Partner ที่ SUPP รับฟังชีวิตและเป้าหมายของลูกค้า จัดระเบียบเรื่องเงิน ช่วยให้เห็นทางเลือก และดูแลอย่างต่อเนื่อง",
    employmentType: "FULL_TIME",
    industry: "Financial Services",
    occupationalCategory: "Personal Financial Advisors",
    directApply: false,
    url: `${site.url}/join-us`,
    hiringOrganization: { "@id": `${site.url}/#organization` },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.district,
        addressRegion: site.address.city,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    },
    applicantLocationRequirements: { "@type": "Country", name: "Thailand" },
  };
}

export default function JoinUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jobPostingJsonLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([{ name: "Join us", path: "/join-us" }]),
        )}
      />
      <main id="main">
        <section className="join-hero page-heading">
          <div className="join-hero-copy">
            <p className="eyebrow">
              <span /> JOIN US / FINANCIAL LIFE PARTNER
            </p>
            <h1>
              Design your
              <br />
              <span>own life.</span>
            </h1>
            <h2>
              ออกแบบชีวิตและรายได้ของคุณเอง
              <br />
              กับอาชีพ Financial Life Partner ที่ SUPP
            </h2>
            <p>
              สำหรับคนวัย 25–40 ปี ที่อยากเรียนรู้ เติบโต พัฒนาศักยภาพตัวเอง
              และทำงานที่มีความหมายกับชีวิตคนจริง ๆ
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={site.joinFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                สนใจร่วมงานกับ SUPP
                <ArrowUpRight size={20} />
                <span className="sr-only"> (เปิดแบบฟอร์มในแท็บใหม่)</span>
              </a>
              <a className="text-link" href="#open-house">
                รู้จัก Open House <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="join-hero-photo">
            <Image
              src="/images/join-cover.webp"
              alt="บรรยากาศพื้นที่ SUPP พร้อมโลโก้แบรนด์"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
              priority
            />
            <div className="join-photo-caption">
              <span>YOUR NEXT CHAPTER</span>
              <p>
                เริ่มต้นเส้นทางใหม่
                <br />
                ไปด้วยกัน
              </p>
              <ArrowUpRight />
            </div>
          </div>
        </section>

        <section className="principles-strip">
          <span>A CAREER WITH PURPOSE</span>
          <p>
            เข้าใจผู้คน <b>↗</b> พัฒนาตัวเอง <b>↗</b> เติบโตไปด้วยกัน
          </p>
        </section>

        <section className="section join-question">
          <div>
            <p className="eyebrow">
              <span /> IS THIS YOU?
            </p>
            <h2>
              ทำงานหนัก…
              <br />
              แต่ยังอยากให้ชีวิต
              <br />
              <span className="muted">มีทางเลือกมากกว่านี้?</span>
            </h2>
            <p>
              บางครั้งสิ่งที่เรามองหา คือโอกาสได้ใช้ศักยภาพเต็มที่ มีพื้นที่เติบโต
              และทำงานที่รู้สึกว่ามีคุณค่า
            </p>
          </div>
          <div className="join-pain-list">
            {pains.map((pain) => (
              <p key={pain.number}>
                <span>{pain.number}</span>
                {pain.text}
                <ArrowUpRight size={20} />
              </p>
            ))}
          </div>
        </section>

        <section className="section white">
          <div className="split-heading">
            <div>
              <p className="eyebrow">
                <span /> THE ROLE
              </p>
              <h2>
                เป็นพาร์ทเนอร์
                <br />
                ที่ช่วยลูกค้าเห็นภาพชีวิต
              </h2>
            </div>
            <p>
              ที่ SUPP เราคุยแบบเพื่อนที่หวังดี และคิดแบบที่ปรึกษา
              เริ่มจากการรับฟัง ทำความเข้าใจ
              แล้วช่วยให้ลูกค้าเห็นภาพเรื่องเงินและทางเลือกของตัวเอง
            </p>
          </div>
          <div className="join-role-grid">
            {roles.map(({ Icon, number, title, text }) => (
              <article key={number}>
                <div>
                  <Icon size={29} />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section join-fit">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> FIND YOUR FIT
              </p>
              <h2>เส้นทางนี้เหมาะกับคุณไหม?</h2>
            </div>
            <p>
              เริ่มจากรู้จักตัวเอง
              <br />
              แล้วมารู้จักการทำงานจริงไปด้วยกัน
            </p>
          </div>
          <div className="join-fit-grid">
            <article>
              <h3>คุณอาจชอบงานนี้ ถ้าคุณ…</h3>
              <ul>
                {fitList.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="join-fit-consider">
              <h3>สิ่งที่ควรเข้าใจก่อนเริ่ม</h3>
              <p>
                อาชีพนี้ต้องอาศัยเวลาในการฝึกทักษะ การทำงานกับผู้คน
                และความพร้อมรับฟังข้อเสนอแนะ
              </p>
              <p>
                หากคุณกำลังมองหารายได้เร็ว
                หรืออยากทำงานในกรอบเดิมโดยไม่ต้องพัฒนาต่อเนื่อง
                เส้นทางนี้อาจยังไม่ตรงกับสิ่งที่คุณต้องการ
              </p>
            </article>
          </div>
          <div className="join-learning-note">
            <ArrowUpRight size={30} />
            <p>
              <strong>ไม่จำเป็นต้องเก่งการเงินมาก่อน</strong>
              <br />
              ถ้าคุณพร้อมเรียนรู้ SUPP มีระบบสอนให้ค่อย ๆ เริ่ม ค่อย ๆ เก่ง และค่อย
              ๆ มั่นใจขึ้น
            </p>
          </div>
        </section>

        <section className="section white join-beliefs">
          <div className="join-team-photo">
            <Image
              src="/images/join-team.webp"
              alt="บรรยากาศการเรียนรู้และแลกเปลี่ยนกับทีม SUPP"
              width={1800}
              height={1197}
              sizes="(max-width: 700px) 100vw, 46vw"
            />
            <span>LEARN. PRACTICE. GROW TOGETHER.</span>
          </div>
          <div>
            <p className="eyebrow">
              <span /> WHY SUPP
            </p>
            <h2>
              เติบโตจากวิธีคิดที่ดี
              <br />
              และการทำงานที่ถูกต้อง
            </h2>
            <div className="join-belief-list">
              {beliefs.map((belief) => (
                <article key={belief.title}>
                  <h3>{belief.title}</h3>
                  <p>{belief.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> GROW WITH SUPP
              </p>
              <h2>
                สิ่งที่คุณจะค่อย ๆ ได้
                <br />
                จากการเติบโตกับเรา
              </h2>
            </div>
            <p>
              ฝึกทักษะ ลงมือทำ และพัฒนา
              <br />
              ไปพร้อมกับทีมที่ช่วยสนับสนุนคุณ
            </p>
          </div>
          <div className="join-growth-grid">
            {growth.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section join-open-house" id="open-house">
          <div className="split-heading">
            <div>
              <p className="eyebrow">
                <span /> SUPP OPEN HOUSE
              </p>
              <h2>
                เห็นภาพงานจริง
                <br />
                ก่อนตัดสินใจ
              </h2>
              <p>
                กังวลเรื่องภาพลักษณ์ การขายให้คนรู้จัก ความมั่นคงของรายได้
                หรือกลัวว่าตัวเองยังไม่เก่งพอ? มาคุยและถามกันตรง ๆ ได้ใน Open
                House
              </p>
              <span className="join-free">ไม่มีค่าใช้จ่าย · ไม่มีข้อผูกมัด</span>
            </div>
            <ol className="join-steps">
              {openHouseSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cta join-cta">
          <div>
            <p className="eyebrow">
              <span /> YOUR LIFE CAN HAVE MORE POSSIBILITIES
            </p>
            <h2>
              เปิดโอกาสให้ตัวเอง
              <br />
              ได้รู้จักอีกหนึ่งเส้นทาง
            </h2>
            <p>
              เริ่มจากแบบฟอร์มทำความรู้จัก ใช้เวลาประมาณ 5–7 นาที
              <br />
              ทีม SUPP จะติดต่อกลับเพื่อพูดคุยขั้นตอนถัดไป
            </p>
          </div>
          <div className="join-cta-actions">
            <a
              className="button light"
              href={site.joinFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ลงทะเบียนแสดงความสนใจ
              <ArrowUpRight size={20} />
              <span className="sr-only"> (เปิดแบบฟอร์มในแท็บใหม่)</span>
            </a>
            <a
              className="join-source"
              href={site.storyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              อ่านเรื่องราว Design Your Own Life <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
