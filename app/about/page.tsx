import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { ArrowUpRight } from "@/components/icons";
import { TeamCard } from "@/components/team-card";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata = pageMetadata({
  title: "About SUPP — เริ่มจากชีวิตคุณ",
  description:
    "รู้จัก SUPP พาร์ทเนอร์ที่ช่วยให้คุณมองเรื่องเงินชัดเจนขึ้น ทีม Financial Life Partner ที่เริ่มต้นจากการรับฟังชีวิตและเป้าหมายของคุณ",
  path: "/about",
  image: "/images/family-beach.webp",
});

const expectations = [
  {
    number: "01 /",
    title: "Clarity",
    lead: "เข้าใจสิ่งที่กำลังตัดสินใจ",
    text: "อธิบายเรื่องซับซ้อนให้เห็นภาพ พร้อมเหตุผล ข้อดี ข้อเสีย และก้าวต่อไปที่เป็นรูปธรรม",
  },
  {
    number: "02 /",
    title: "Confidence",
    lead: "มั่นใจจากความเข้าใจ",
    text: "ช่วยให้คุณมีข้อมูลสำหรับเลือกแนวทางที่เหมาะกับตัวเอง และมีพื้นที่ตัดสินใจโดยไม่รู้สึกกดดัน",
  },
  {
    number: "03 /",
    title: "SUPPort",
    lead: "มีคนรับฟังและดูแลต่อเนื่อง",
    text: "วางแผนโดยคำนึงถึงชีวิตจริง และทบทวนร่วมกันเมื่อเป้าหมายหรือสถานการณ์เปลี่ยนไป",
  },
];

/** Team roster as schema.org Person entries, linked to the organization. */
function teamJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${site.url}/about#page`,
    url: `${site.url}/about`,
    name: "About SUPP",
    about: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      employee: team
        .filter((member) => member.firstName)
        .map((member) => ({
          "@type": "Person",
          name: `${member.firstName} ${member.lastName}`,
          jobTitle: member.role,
          worksFor: { "@id": `${site.url}/#organization` },
          ...(member.summaryExpertise.filter((item) => !item.startsWith("["))
            .length
            ? {
                knowsAbout: member.summaryExpertise.filter(
                  (item) => !item.startsWith("["),
                ),
              }
            : {}),
        })),
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(teamJsonLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([{ name: "About SUPP", path: "/about" }]),
        )}
      />
      <main id="main">
        <section className="page-heading about-heading">
          <p className="eyebrow">
            <span /> ABOUT SUPP
          </p>
          <h1>
            เรื่องเงินเริ่มต้นที่ความเข้าใจ
            <br />
            <span>และคนที่พร้อมรับฟัง</span>
          </h1>
          <p>
            เราคือพาร์ทเนอร์ที่ช่วยให้คุณมองเรื่องเงินชัดเจนขึ้น
            <br />
            และมั่นใจกับทางที่เลือกในทุกช่วงชีวิต
          </p>
        </section>

        <section className="about-photo">
          <Image
            src="/images/family-beach.webp"
            alt="ครอบครัวใช้เวลาร่วมกันริมทะเล"
            width={1600}
            height={863}
            sizes="100vw"
            priority
          />
          <div>
            <span>PARTNERING IN YOUR LIFE GOALS</span>
            <p>
              พื้นที่ให้กับชีวิต
              <br />
              ที่คุณอยากมี
            </p>
          </div>
        </section>

        <section className="section">
          <div className="split-heading">
            <div>
              <p className="eyebrow">
                <span /> OUR BELIEF
              </p>
              <h2>
                เป้าหมายชีวิต
                <br />
                เป็นจุดเริ่มต้นของทุกแผน
              </h2>
            </div>
            <div>
              <p>
                การตัดสินใจเรื่องเงินเกี่ยวข้องกับทั้งความฝัน คนที่คุณดูแล
                และชีวิตที่คุณอยากมี เราจึงให้เวลากับการทำความเข้าใจสิ่งเหล่านี้
                ก่อนเลือกวิธีการและเครื่องมือทางการเงินที่เหมาะสม
              </p>
              <p>
                SUPP ช่วยเชื่อมเป้าหมาย ความรับผิดชอบ และข้อจำกัดที่มี
                เข้ากับแผนที่เหมาะกับคุณ เพื่อให้การจัดการเงินเป็นเรื่องที่ชัดเจน
                เข้าถึงได้ และทำได้จริง
              </p>
            </div>
          </div>
        </section>

        <section className="section white">
          <p className="eyebrow">
            <span /> WHAT YOU CAN EXPECT
          </p>
          <h2>
            ความชัดเจน ความมั่นใจ
            <br />
            และการดูแลที่อยู่ข้างคุณ
          </h2>
          <div className="value-grid">
            {expectations.map((item) => (
              <div className="value" key={item.title}>
                <span>{item.number}</span>
                <h3>
                  {item.title}
                  <ArrowUpRight />
                </h3>
                <h4>{item.lead}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section people-section">
          <div className="people-image">
            <Image
              src="/images/wealth.webp"
              alt="การพูดคุยและรับฟังเป้าหมายร่วมกัน"
              width={964}
              height={1446}
              sizes="(max-width: 700px) 100vw, 46vw"
            />
          </div>
          <div>
            <p className="eyebrow">
              <span /> HUMAN AT HEART
            </p>
            <h2>
              รู้จักคุณ
              <br />
              ก่อนออกแบบแผนให้คุณ
            </h2>
            <p>
              ความสัมพันธ์ที่ดีเริ่มจากการรับฟัง ที่ SUPP
              เราให้ความสำคัญกับความซื่อสัตย์ ความโปร่งใส
              และการสื่อสารที่เป็นกันเอง เพื่อให้คุณคุยเรื่องเงินได้อย่างสบายใจ
            </p>
            <div className="word-list">
              <span>รับฟังอย่างเข้าใจ</span>
              <span>อธิบายอย่างตรงไปตรงมา</span>
              <span>วางแผนจากชีวิตจริง</span>
            </div>
          </div>
        </section>

        <section className="section white our-team" id="our-team">
          <div className="split-heading">
            <div>
              <span className="eyebrow">OUR TEAM</span>
              <h2>
                คนที่พร้อมรับฟัง
                <br />
                และเดินไปกับคุณ
              </h2>
            </div>
            <p>
              รู้จักทีมเบื้องหลัง SUPP ที่เชื่อว่าแผนการเงินที่ดี
              <br />
              เริ่มจากความเข้าใจชีวิตของแต่ละคน
            </p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
}
