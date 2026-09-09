import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import { plans, processSteps, services } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services — บริการและแพ็กเกจ",
  description:
    "วางแผนเรื่องเงินให้ตอบโจทย์ชีวิตคุณ ครอบคลุม Planning, Protection, Wealth Building และ Ongoing Support พร้อมแพ็กเกจเริ่มต้น 4,900 บาท",
  path: "/services",
  image: "/images/planning.webp",
});

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
    url: `${site.url}/services#pricing`,
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
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([{ name: "Services", path: "/services" }]),
        )}
      />
      <main id="main">
        <section className="page-heading service-heading">
          <div>
            <p className="eyebrow">
              <span /> OUR SERVICES
            </p>
            <h1>
              วางแผนเรื่องเงิน
              <br />
              <span>ให้ตอบโจทย์ชีวิตคุณ</span>
            </h1>
            <p>
              ทุกเป้าหมายมีรายละเอียดต่างกัน เราช่วยคุณมองภาพรวม
              <br />
              เข้าใจทางเลือก และเลือกจุดเริ่มต้นที่เหมาะกับคุณ
            </p>
            <a className="button" href="#pricing">
              ดูแพ็กเกจบริการ
              <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="service-hero-aside">
            <span className="big-arrow" aria-hidden="true">
              ↗
            </span>
            <p>
              ONE LIFE.
              <br />
              MANY GOALS.
              <br />
              <strong>LET&rsquo;S PLAN.</strong>
            </p>
            <span>PLANNING / PROTECTION / WEALTH / SUPPORT</span>
          </div>
        </section>

        <section className="section white">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> CORE SERVICES
              </p>
              <h2>
                ดูแลเรื่องเงิน
                <br />
                ให้เชื่อมกันทุกมิติ
              </h2>
            </div>
            <p>
              ไม่ว่าคุณจะอยู่จุดไหนของชีวิต
              <br />
              เราพร้อมช่วยให้ทุกการตัดสินใจชัดเจนขึ้น
            </p>
          </div>
          <div className="service-details">
            {services.map((service) => (
              <article className="service-detail" id={service.id} key={service.id}>
                <div className="detail-image">
                  <Image
                    src={service.image}
                    alt=""
                    width={440}
                    height={420}
                    sizes="(max-width: 700px) 90px, (max-width: 1050px) 160px, 220px"
                  />
                </div>
                <div>
                  <span className="detail-number">{service.kicker}</span>
                  <h3>{service.detailTitle}</h3>
                  <p>{service.detail}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="detail-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="center-heading">
            <p className="eyebrow">
              <span /> PRICING &amp; PLANS
            </p>
            <h2>เลือกการวางแผนที่เหมาะกับคุณ</h2>
            <p>
              เริ่มจากโจทย์เฉพาะเรื่อง วางแผนภาพรวม
              <br />
              หรือเลือกการดูแลต่อเนื่องตามสิ่งที่คุณต้องการในวันนี้
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`price-card ${plan.featured ? "featured" : ""}`}
                key={plan.slug}
              >
                {"badge" in plan && plan.badge ? (
                  <span className="plan-badge">{plan.badge}</span>
                ) : null}
                <p className="plan-tag">{plan.tag}</p>
                <h3>{plan.name}</h3>
                <div className="price">
                  <strong>{plan.price}</strong>
                  <span>{plan.unit}</span>
                </div>
                <h4>{plan.headline}</h4>
                <p className="plan-description">{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  className={`button ${plan.featured ? "light" : ""}`}
                  href={`/contact?plan=${plan.slug}`}
                >
                  สนใจแพ็กเกจนี้
                  <ArrowUpRight size={19} />
                </Link>
                {plan.note ? <p className="plan-note">{plan.note}</p> : null}
              </article>
            ))}
          </div>
          <p className="pricing-note">
            ติดต่อทีมเพื่อยืนยันขอบเขตบริการ จำนวนครั้งที่นัดหมาย
            และรายละเอียดภาษีก่อนเริ่มใช้บริการ
          </p>
          <div className="plan-help">
            <div>
              <h3>ยังไม่แน่ใจว่าควรเริ่มแบบไหน?</h3>
              <p>เล่าโจทย์ของคุณให้เราฟัง แล้วเราช่วยอธิบายแพ็กเกจที่เกี่ยวข้อง</p>
            </div>
            <Link href="/contact" className="text-link">
              ให้ SUPP ช่วยเลือกจุดเริ่มต้น <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> HOW WE WORK
              </p>
              <h2>
                จากเป้าหมายของคุณ
                <br />
                สู่ก้าวต่อไปที่ชัดเจน
              </h2>
            </div>
            <p>
              รับฟัง วางแผน ลงมือทำ
              <br />
              และทบทวนไปด้วยกัน
            </p>
          </div>
          <ol className="process-grid">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>
                  {step.number}
                  <ArrowRight size={20} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <CtaSection />
      </main>
    </>
  );
}
