import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "ไม่พบหน้าที่คุณกำลังมองหา",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  // The root not-found sits outside the (site) group, so it brings its own chrome.
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-heading">
          <p className="eyebrow">
            <span /> 404 / PAGE NOT FOUND
          </p>
          <h1>
            ไม่พบหน้าที่คุณกำลังมองหา
            <br />
            <span>แต่เรายังอยู่ตรงนี้</span>
          </h1>
          <p>
            หน้านี้อาจถูกย้ายหรือเปลี่ยนลิงก์ไปแล้ว
            <br />
            กลับไปหน้าแรก หรือเริ่มคุยกับเราได้เลย
          </p>
          <Link className="button" href="/">
            กลับไปหน้าแรก
            <ArrowUpRight size={20} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
