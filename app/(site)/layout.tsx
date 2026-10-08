import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { jsonLdScript, organizationJsonLd } from "@/lib/seo";

/** Public marketing chrome: header, footer and the org graph. */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())}
      />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
