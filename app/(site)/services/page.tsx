import Image from "next/image";
import Link from "next/link";
import { Check, Plus, SuppMark } from "@/components/icons";
import { ServiceLanding } from "@/components/service-landing";
import { plans, services } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import "./landing.css";

export const metadata = pageMetadata({
  title: "Services | บริการและแพ็กเกจ",
  description:
    "วางแผนเรื่องเงินให้ตอบโจทย์ชีวิตคุณ ครอบคลุม Planning, Protection, Wealth Building และ Ongoing Support พร้อมแพ็กเกจเริ่มต้น 5,900 บาท",
  path: "/services",
  image: "/images/planning.webp",
});

/*
 * Page copy is the approved "life-plan" landing prototype, word for word.
 * Chapter ids reuse `services[].id` so the home page's /services#planning
 * links still land on the right chapter.
 */

const chapters = [
  {
    id: "planning",
    en: "Planning",
    image: "/images/planning.webp",
    size: [1024, 1536],
    caption: "เริ่มจากสิ่งที่มีความหมายกับคุณ",
    title: ["ชีวิตที่อยากมี", "เริ่มที่แผนของคุณ"],
    text: "เกษียณแบบไหน อยากดูแลใคร หรือมีฝันอะไรที่ยังรออยู่ เราเริ่มจากการฟัง แล้วเชื่อมเป้าหมายเหล่านั้นกับสถานะการเงินของคุณ",
    points: ["แผนเกษียณ", "การศึกษาบุตร", "เป้าหมายส่วนบุคคลและครอบครัว"],
  },
  {
    id: "protection",
    en: "Protection",
    image: "/images/protection.webp",
    size: [1068, 1600],
    caption: "เตรียมพร้อมเพื่อคนและสิ่งที่สำคัญ",
    title: ["ดูแลวันนี้", "เผื่อวันที่ไม่เป็นไปตามแผน"],
    text: "ทบทวนความคุ้มครองและความเสี่ยงที่มี วางแนวทางรับมือเหตุไม่คาดคิดให้เหมาะกับชีวิต ภาระ และงบประมาณของคุณ",
    points: ["สุขภาพและโรคร้ายแรง", "ความคุ้มครองชีวิต", "ความเสี่ยงของธุรกิจ"],
  },
  {
    id: "wealth",
    en: "Wealth Building",
    image: "/images/wealth.webp",
    size: [964, 1446],
    caption: "เห็นเหตุผลของทุกก้าวที่เลือก",
    title: ["ให้เงินมีทิศทาง", "เดียวกับเป้าหมายชีวิต"],
    text: "วางระบบการออมและแนวทางจัดพอร์ตลงทุนให้สัมพันธ์กับเป้าหมาย ระยะเวลา และความเสี่ยงที่คุณรับได้ พร้อมเข้าใจเหตุผลของแต่ละทางเลือก",
    points: ["ระบบการออม", "การจัดพอร์ตตามเป้าหมาย", "ความเสี่ยงที่เหมาะกับคุณ"],
  },
  {
    id: "support",
    en: "Ongoing Support",
    image: "/images/support.webp",
    size: [1000, 1500],
    caption: "มีคนช่วยมองภาพไปด้วยกัน",
    title: ["ชีวิตเปลี่ยนได้", "แผนก็ปรับไปด้วยกัน"],
    text: "เมื่อรายได้ ภาระ หรือเป้าหมายเปลี่ยน เราช่วยทบทวนความคืบหน้าและปรับแนวทาง เพื่อให้แผนยังเหมาะกับชีวิตจริงของคุณ",
    points: ["ติดตามความคืบหน้า", "ทบทวนสถานการณ์", "ปรับแผนร่วมกัน"],
  },
] as const;

const journey = [
  { title: "ฟังชีวิตคุณ", text: "คุยถึงสิ่งสำคัญ เป้าหมาย และเวลาที่คุณมี" },
  { title: "เห็นภาพร่วมกัน", text: "สำรวจสถานะการเงิน ความเสี่ยง และทางเลือก" },
  { title: "วางแผนให้เชื่อมกัน", text: "จัดลำดับเป้าหมายและออกแบบแนวทางลงมือทำ" },
  { title: "เดินต่อไปด้วยกัน", text: "ติดตาม ทบทวน และปรับตามขอบเขตบริการ" },
];

const fintech = [
  {
    title: "เข้าใจภาพรวมการเงินวันนี้",
    text: "วิเคราะห์ภาพรวมทางการเงินอย่างครอบคลุม เพื่อทำความเข้าใจและประเมินสถานการณ์ปัจจุบัน",
  },
  {
    title: "จำลองสถานการณ์ในอนาคต",
    text: "ช่วยให้มองเห็นเป้าหมายระยะสั้นและระยะยาว รวมถึงผลของทางเลือกต่าง ๆ ต่อแผนการเงิน",
  },
  {
    title: "เลือกแนวทางให้เหมาะกับคุณ",
    text: "พิจารณาทางเลือกและผลิตภัณฑ์ทางการเงินให้สอดคล้องกับเป้าหมาย ความต้องการ และความเสี่ยงที่คุณรับได้",
  },
];

const packages = [
  {
    slug: "single",
    label: "เริ่มจากหนึ่งเป้าหมาย",
    name: "Single Plan",
    price: "5,900",
    unit: "บาท",
    text: "มีโจทย์เฉพาะเรื่อง และอยากเห็นทางเลือกที่ชัดขึ้น",
    points: [
      "วิเคราะห์โจทย์และสถานะเฉพาะด้าน",
      "อธิบายทางเลือกและข้อพิจารณา",
      "สรุปคำแนะนำและสิ่งที่ควรทำต่อ",
    ],
    note: "สำหรับการวางแผนเฉพาะเรื่อง",
  },
  {
    slug: "comprehensive",
    badge: "รวมดูแลต่อเนื่อง 1 ปี",
    label: "เชื่อมทุกเป้าหมายเข้าด้วยกัน",
    name: "Comprehensive",
    price: "19,900",
    unit: "บาท",
    text: "เห็นภาพรวมทั้งเกษียณ ภาษี ประกัน และการลงทุน พร้อมดูแลต่อเนื่องปีแรก",
    points: [
      "วางแผนภาพรวมและจัดลำดับความสำคัญ",
      "สรุปแผนและแนวทางลงมือทำ",
      "รวม Ongoing Support 1 ปีจากวันส่งมอบแผน",
      "ทบทวน 2 ครั้ง ในเดือนที่ 6 และเดือนที่ 12",
    ],
    note: "ปีถัดไปเลือกต่อบริการได้ 9,900 บาท/ปี",
  },
  {
    slug: "ongoing",
    label: "เดินต่ออย่างมีคนเคียงข้าง",
    name: "Ongoing Support",
    price: "9,900",
    unit: "บาท / ปี",
    text: "สำหรับลูกค้าที่มีแผนแล้ว และต้องการการดูแลต่อเนื่อง",
    points: [
      "ติดตามความคืบหน้าและเป้าหมาย",
      "ทบทวนและปรับแผนตามสถานการณ์",
      "คำปรึกษาตามขอบเขตบริการรายปี",
    ],
    note: "Comprehensive รวมบริการนี้ในปีแรกแล้ว",
  },
];

const timeline = [
  { when: "เริ่มต้น", title: "วันส่งมอบแผน", text: "เริ่มนับการดูแล 1 ปี" },
  { when: "เดือนที่ 6", title: "ทบทวนครั้งที่ 1", text: "ดูความคืบหน้าและปรับตามสถานการณ์" },
  { when: "เดือนที่ 12", title: "ทบทวนครั้งที่ 2", text: "ทบทวนแผนและมองก้าวต่อไป" },
];

const faqs = [
  {
    question: "ยังไม่รู้ว่าควรเลือกแพ็กเกจไหน เริ่มได้ไหม?",
    answer:
      "เริ่มจากเล่าโจทย์หรือสิ่งที่คุณกำลังกังวลให้ทีมฟัง เราจะช่วยอธิบายขอบเขตของแต่ละแพ็กเกจ เพื่อให้คุณเลือกจุดเริ่มต้นที่เหมาะกับตัวเอง",
  },
  {
    question: "Single Plan ต่างจาก Comprehensive อย่างไร?",
    answer:
      "Single Plan โฟกัสโจทย์เฉพาะเรื่อง เช่น เกษียณ ภาษี หรือความคุ้มครอง ส่วน Comprehensive เชื่อมหลายเป้าหมายเป็นภาพรวมเดียว พร้อมรวมการดูแลต่อเนื่องในปีแรก",
  },
  {
    question: "การดูแล 1 ปีของ Comprehensive เริ่มนับเมื่อไร?",
    answer:
      "เริ่มนับจากวันส่งมอบแผน รวมการทบทวนแผน 2 ครั้ง ในเดือนที่ 6 และเดือนที่ 12 ปีถัดไปคุณเลือกต่อบริการ Ongoing Support ได้ในราคา 9,900 บาท/ปี",
  },
  {
    question: "ก่อนเริ่มใช้บริการควรทราบอะไรบ้าง?",
    answer:
      "ทีมจะยืนยันขอบเขตบริการ จำนวนครั้งที่นัดหมาย และรายละเอียดภาษีก่อนเริ่มใช้บริการ เพื่อให้คุณเข้าใจสิ่งที่จะได้รับและค่าใช้จ่ายอย่างชัดเจน",
  },
];

function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "บริการวางแผนการเงินของ SUPP",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        alternateName: service.detailTitle,
        description: service.detail,
        url: `${site.url}/services#${service.id}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: "Thailand" },
      },
    })),
  };
}

function offersJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "แพ็กเกจวางแผนการเงิน",
    url: `${site.url}/services#plans`,
    provider: { "@id": `${site.url}/#organization` },
    itemListElement: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      price: plan.priceValue,
      priceCurrency: "THB",
      url: `${site.url}/contact?plan=${plan.slug}`,
      availability: "https://schema.org/InStock",
      category: plan.tag,
    })),
  };
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** The SUPP mark that closes every CTA; colour follows the CTA's text. */
function BrandMark() {
  return (
    <span className="lp-brand-mark" aria-hidden="true">
      <SuppMark viewBox="-2 2 878 870" />
    </span>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(servicesJsonLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(offersJsonLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([{ name: "Services", path: "/services" }]),
        )}
      />
      <ServiceLanding>
        <main id="main">
          <section className="lp-hero">
            <div className="lp-hero-top">
              <span className="lp-kicker">YOUR LIFE. YOUR GOALS. OUR SUPPort.</span>
              <span className="lp-edition">FINANCIAL LIFE PLANNING</span>
            </div>
            <div className="lp-hero-copy">
              <h1>
                <span>ชีวิตในแบบคุณ</span>
                <span>
                  เริ่มจากแผน<span className="lp-red">ที่ใช่</span>
                </span>
              </h1>
              <div className="lp-hero-bottom">
                <p>
                  ไม่ใช่แค่จัดการเรื่องเงิน
                  <br />
                  แต่คือการวางแผนให้สิ่งสำคัญในชีวิตเป็นไปได้
                </p>
                <a href="#plans" className="lp-button">
                  ค้นหาแผนที่เหมาะกับคุณ <BrandMark />
                </a>
              </div>
            </div>
            <div className="lp-hero-collage">
              <div className="lp-photo-main">
                <Image
                  src="/images/family-beach.webp"
                  alt="ช่วงเวลาของครอบครัวริมทะเล"
                  width={1600}
                  height={863}
                  priority
                />
                <span>MAKE ROOM FOR WHAT MATTERS.</span>
              </div>
              <div className="lp-goal-note">
                <span>YOUR NEXT CHAPTER</span>
                <h2>
                  เป้าหมายของคุณ
                  <br />
                  คือจุดเริ่มต้น
                  <br />
                  ของเรา
                </h2>
              </div>
              <div className="lp-photo-side">
                <Image
                  src="/images/life.webp"
                  alt="พื้นที่สำหรับใช้ชีวิตในแบบที่ต้องการ"
                  width={1600}
                  height={1067}
                />
                <span>Money. Life. Goals.</span>
              </div>
            </div>
            <a className="lp-scroll" href="#approach">
              เลื่อนเพื่อรู้จักการวางแผนแบบ SUPP
            </a>
          </section>

          <section id="approach" className="lp-intro lp-wrap" data-lp-reveal>
            <span className="lp-kicker">ONE LIFE. MANY GOALS.</span>
            <h2>
              เรื่องเงินอาจมีหลายส่วน
              <br />
              <span>แต่ชีวิตคุณคือภาพเดียวกัน</span>
            </h2>
            <p>
              เราเชื่อว่าแผนที่ดีเริ่มจากการเข้าใจชีวิตคุณ
              <br />
              แล้วเชื่อมการวางแผน ความคุ้มครอง และการลงทุนเข้าด้วยกัน
            </p>
          </section>

          <section className="lp-story" aria-label="บริการ 4 ด้านของ SUPP">
            <div className="lp-story-visual">
              <div className="lp-sticky-scene">
                {chapters.map((chapter, index) => (
                  <div
                    key={chapter.id}
                    className={index === 0 ? "lp-scene is-active" : "lp-scene"}
                    aria-hidden={index !== 0}
                  >
                    <Image
                      src={chapter.image}
                      alt=""
                      width={chapter.size[0]}
                      height={chapter.size[1]}
                    />
                    <div className="lp-scene-caption">
                      <span>0{index + 1} / 04</span>
                      <p>{chapter.caption}</p>
                    </div>
                  </div>
                ))}
                <div className="lp-scene-index" aria-label="เลือกบริการ">
                  {chapters.map((chapter, index) => (
                    <a
                      key={chapter.id}
                      href={`#${chapter.id}`}
                      aria-label={chapter.en}
                      aria-current={index === 0 ? "step" : undefined}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lp-chapters">
              {chapters.map((chapter, index) => (
                <article
                  key={chapter.id}
                  className="lp-chapter"
                  data-chapter
                  id={chapter.id}
                >
                  <div data-lp-reveal>
                    <span className="lp-kicker">
                      0{index + 1} {chapter.en.toUpperCase()}
                    </span>
                    <h2>
                      <span>{chapter.title[0]}</span>
                      <span>{chapter.title[1]}</span>
                    </h2>
                    <p>{chapter.text}</p>
                    <ul>
                      {chapter.points.map((point) => (
                        <li key={point}>
                          <Check size={16} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a className="lp-text-link" href="#plans">
                      เลือกจุดเริ่มต้นของคุณ <BrandMark />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="lp-journey lp-wrap">
            <div data-lp-reveal>
              <span className="lp-kicker">CLARITY COMES FIRST.</span>
              <h2>
                จากเรื่องที่ยังไม่ชัด
                <br />
                สู่ก้าวต่อไปที่คุณเข้าใจ
              </h2>
            </div>
            <ol>
              {journey.map((step, index) => (
                <li key={step.title} data-lp-reveal>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="lp-fintech" id="fintech" aria-labelledby="fintech-title">
            <div className="lp-fintech-copy" data-lp-reveal>
              <span className="lp-kicker">TECHNOLOGY FOR CLARITY.</span>
              <h2 id="fintech-title">
                ที่ SUPP เราใช้เทคโนโลยี Fintech
                <br />
                ให้อนาคตทางการเงินเห็นภาพชัดขึ้น
              </h2>
              <p className="lp-fintech-intro">
                ผสานการให้คำปรึกษากับเครื่องมือวางแผนการเงิน
                เพื่อช่วยให้คุณเข้าใจวันนี้ และมองเห็นทางเลือกสำหรับวันข้างหน้า
              </p>
              <ul>
                {fintech.map((item, index) => (
                  <li key={item.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link className="lp-button" href="/contact">
                เริ่มวางแผนอนาคตของคุณ <BrandMark />
              </Link>
            </div>
            <figure className="lp-fintech-visual" data-lp-reveal>
              <div className="lp-fintech-screen">
                <Image
                  src="/images/fintech-reference.webp"
                  width={2940}
                  height={1396}
                  alt="ตัวอย่างหน้าจอ GoalsMapper แสดงภาพจำลองรายรับ รายจ่าย และเป้าหมายทางการเงินตามช่วงอายุ"
                />
              </div>
              <figcaption>ตัวอย่างภาพจำลองจาก GoalsMapper</figcaption>
            </figure>
          </section>

          <section className="lp-plans lp-wrap" id="plans">
            <div className="lp-plans-heading" data-lp-reveal>
              <div>
                <span className="lp-kicker">A PLAN FOR YOUR NEXT CHAPTER.</span>
                <h2>
                  เลือกจุดเริ่มต้น
                  <br />
                  ที่เหมาะกับคุณ
                </h2>
              </div>
              <p>
                หนึ่งเรื่อง หลายเป้าหมาย หรือการดูแลต่อเนื่อง
                <br />
                เลือกตามสิ่งที่คุณต้องการในวันนี้
              </p>
            </div>
            <div className="lp-price-grid">
              {packages.map((plan) => (
                <article
                  key={plan.slug}
                  className={plan.badge ? "lp-price-card lp-featured" : "lp-price-card"}
                  data-lp-reveal
                >
                  {plan.badge ? <div className="lp-price-badge">{plan.badge}</div> : null}
                  <span className="lp-price-label">{plan.label}</span>
                  <h3>{plan.name}</h3>
                  <div className="lp-price">
                    <strong>{plan.price}</strong>
                    <span>{plan.unit}</span>
                  </div>
                  <p>{plan.text}</p>
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>
                        <Check size={16} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link className="lp-button" href={`/contact?plan=${plan.slug}`}>
                    สนใจแพ็กเกจนี้ <BrandMark />
                  </Link>
                  <small>{plan.note}</small>
                </article>
              ))}
            </div>
            <p className="lp-pricing-note">
              ทีมจะยืนยันขอบเขตบริการ จำนวนครั้งที่นัดหมาย และรายละเอียดภาษีก่อนเริ่มใช้บริการ
            </p>
          </section>

          <section className="lp-support lp-wrap">
            <div data-lp-reveal>
              <span className="lp-kicker">A YEAR OF SUPPort.</span>
              <h2>
                ส่งมอบแผน
                <br />
                คือจุดเริ่มต้นของการดูแล
              </h2>
              <p>
                Comprehensive รวม Ongoing Support ปีแรก
                <br />
                พร้อมการทบทวน 2 ครั้ง ทุก 6 เดือน
              </p>
            </div>
            <ol className="lp-timeline">
              {timeline.map((step) => (
                <li key={step.title} data-lp-reveal>
                  <span>{step.when}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="lp-faq lp-wrap">
            <div data-lp-reveal>
              <span className="lp-kicker">GOOD QUESTIONS. CLEAR ANSWERS.</span>
              <h2>
                ก่อนเริ่ม
                <br />
                คุณอาจอยากรู้
              </h2>
            </div>
            <div>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <Plus size={19} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="lp-final lp-wrap" data-lp-reveal>
            <span className="lp-kicker">LET&rsquo;S START WITH YOU.</span>
            <h2>
              ยังไม่ต้องมีคำตอบครบ
              <br />
              ก็เริ่มคุยกันได้
            </h2>
            <p>
              เล่าให้เราฟังว่าอะไรสำคัญกับคุณ
              <br />
              แล้วเราค่อยวางแผนเรื่องเงินไปด้วยกัน
            </p>
            <Link href="/contact" className="lp-button">
              เริ่มคุยเรื่องแผนของคุณ <BrandMark />
            </Link>
            <Link className="lp-final-about" href="/about#our-team">
              รู้จักทีม SUPP
            </Link>
          </section>
        </main>
      </ServiceLanding>
    </>
  );
}
