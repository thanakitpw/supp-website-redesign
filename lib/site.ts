export const site = {
  name: "SUPP",
  legalName: "SUPP FUTURE SOLUTIONS CO., LTD.",
  legalNameTh: "บริษัท ซัพพ์ ฟิวเจอร์ โซลูชั่นส์ จำกัด",
  /**
   * Canonical origin. Currently the Vercel deployment domain while the site is
   * in review. Switch to the client domain at cutover — canonicals, sitemap,
   * OG URLs and every JSON-LD @id derive from this one value.
   */
  url: "https://supp-website-redesign-bank-thanakits-projects.vercel.app",
  /**
   * Search-engine indexing. Keep false while the site lives on the Vercel
   * domain so it cannot compete with the client's live site; flip to true at
   * cutover, together with `url` above.
   */
  indexable: false,
  locale: "th_TH",
  tagline: "Partnering in your life goals and financial peace of mind.",
  description:
    "เริ่มจากชีวิตคุณ แล้วค่อยออกแบบเรื่องเงิน วางแผนการเงิน ความคุ้มครอง การออมและลงทุน พร้อมการดูแลต่อเนื่องจาก SUPP",
  phone: "064-641-9245",
  phoneHref: "tel:0646419245",
  phoneE164: "+66646419245",
  email: "info@suppth.com",
  address: {
    street: "ชั้น 2 อาคาร QUBE 83 ถนนสาทรใต้",
    district: "แขวงยานนาวา เขตสาทร",
    city: "กรุงเทพฯ",
    postalCode: "10120",
    country: "TH",
  },
  joinFormUrl: "https://forms.gle/4xboXcdkonZzR3Fk8",
  storyUrl:
    "https://best-bat-385.notion.site/Design-Your-Own-Life-30c047d9d06e80fa8970e8c30aa70749",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About SUPP" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/join-us", label: "Join us" },
] as const;
