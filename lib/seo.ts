import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Absolute-from-root path of the social share image for this page. */
  image?: string;
};

/**
 * Builds per-page metadata with a canonical URL and matching OG/Twitter cards.
 * `title` is the raw page title — the layout's template appends the brand.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/images/life.webp",
}: PageSeo): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url,
      title: path === "/" ? title : `${title} | ${site.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? title : `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}

/** Organization + site-search graph, emitted once from the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        alternateName: site.legalNameTh,
        url: site.url,
        logo: `${site.url}/images/logo-red.png`,
        image: `${site.url}/images/logo-red.png`,
        description: site.description,
        slogan: "Your goals. We SUPP.",
        telephone: site.phoneE164,
        email: site.email,
        areaServed: { "@type": "Country", name: "Thailand" },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.district,
          addressRegion: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        knowsLanguage: ["th", "en"],
        serviceType: [
          "Financial Planning",
          "Protection Solutions",
          "Wealth Building",
          "Ongoing Financial Support",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "th-TH",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

/** Breadcrumb trail for a sub-page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path === "/" ? site.url : `${site.url}${item.path}`,
      }),
    ),
  };
}

/** Serialises JSON-LD for embedding in a <script> tag. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
