import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight, Mail, MapPin, Phone } from "@/components/icons";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact — เริ่มคุยเรื่องแผนของคุณ",
  description:
    "ติดต่อ SUPP เพื่อเริ่มวางแผนการเงินที่เชื่อมกับชีวิตคุณ โทร 064-641-9245 หรืออีเมล info@suppth.com สำนักงานอาคาร QUBE ถนนสาทรใต้ กรุงเทพฯ",
  path: "/contact",
});

function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${site.url}/contact#page`,
    url: `${site.url}/contact`,
    name: "ติดต่อ SUPP",
    mainEntity: {
      "@id": `${site.url}/#organization`,
      "@type": "FinancialService",
      name: site.name,
      telephone: site.phoneE164,
      email: site.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phoneE164,
        email: site.email,
        availableLanguage: ["Thai", "English"],
      },
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(contactJsonLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]),
        )}
      />
      <main id="main">
        <section className="page-heading contact-heading">
          <p className="eyebrow">
            <span /> LET&rsquo;S START WITH YOU
          </p>
          <h1>
            ทุกแผนที่ดี
            <br />
            <span>เริ่มจากการคุยกัน</span>
          </h1>
          <p>
            ไม่ว่าจะมีเป้าหมายชัดเจนแล้ว หรือยังอยากจัดระเบียบความคิดเรื่องเงิน
            <br />
            เล่าให้เราฟังได้ เราพร้อมรับฟังและช่วยคุณมองก้าวต่อไป
          </p>
        </section>

        <section className="section contact-section">
          <aside className="contact-info">
            <h2>คุยกับ SUPP</h2>
            <p>
              เลือกช่องทางที่คุณสะดวก
              <br />
              แล้วเริ่มจากเรื่องที่คุณอยากวางแผน
            </p>

            <a className="contact-channel" href={site.phoneHref}>
              <Phone size={21} />
              <div>
                <span>โทรศัพท์</span>
                <strong>{site.phone}</strong>
              </div>
              <ArrowUpRight />
            </a>

            <a className="contact-channel" href={`mailto:${site.email}`}>
              <Mail size={21} />
              <div>
                <span>อีเมล</span>
                <strong>{site.email}</strong>
              </div>
              <ArrowUpRight />
            </a>

            <div className="contact-address">
              <MapPin size={23} />
              <div>
                <h3>{site.legalName}</h3>
                <p>
                  ชั้น 2 อาคาร QUBE
                  <br />
                  83 ถนนสาทรใต้ แขวงยานนาวา
                  <br />
                  เขตสาทร กรุงเทพฯ 10120
                </p>
              </div>
            </div>

            <div className="contact-message">
              <span>YOUR GOALS.</span>
              <strong>
                WE SUPP.
                <ArrowUpRight size={42} />
              </strong>
            </div>
          </aside>

          <Suspense fallback={<div className="contact-form-wrap" />}>
            <ContactForm />
          </Suspense>
        </section>
      </main>
    </>
  );
}
