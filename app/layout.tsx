import type { Metadata, Viewport } from "next";
import { DM_Sans, Noto_Sans_Thai } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { jsonLdScript, organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
  variable: "--font-dm",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: "variable",
  display: "swap",
  variable: "--font-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SUPP — เคียงข้างทุกเป้าหมายชีวิต",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "วางแผนการเงิน",
    "ที่ปรึกษาการเงิน",
    "วางแผนเกษียณ",
    "วางแผนภาษี",
    "ประกันชีวิต",
    "ประกันสุขภาพ",
    "การออมและลงทุน",
    "financial planning",
    "financial life partner",
    "SUPP",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: "SUPP — เคียงข้างทุกเป้าหมายชีวิต",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: site.indexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, nocache: true },
  icons: {
    icon: "/images/logo-red.png",
    apple: "/images/logo-red.png",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ad1919",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${dmSans.variable} ${notoSansThai.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
