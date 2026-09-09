import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Image
            src="/images/logo-white.png"
            alt="SUPP"
            className="footer-logo"
            width={160}
            height={45}
          />
          <p>
            Partnering in your life goals
            <br />
            and financial peace of mind.
          </p>
        </div>
        <div>
          <p className="footer-label">EXPLORE</p>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="footer-label">LET&rsquo;S TALK</p>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>
            ชั้น 2 อาคาร QUBE
            <br />
            83 ถนนสาทรใต้ กรุงเทพฯ 10120
          </p>
        </div>
      </div>
      <div className="footer-wordmark">
        YOUR GOALS. WE SUPP.
        <ArrowUpRight />
      </div>
      <div className="footer-bottom">
        <span>© 2026 SUPP FUTURE SOLUTIONS CO., LTD.</span>
        <span>MONEY ↗ LIFE ↗ GOALS</span>
      </div>
    </footer>
  );
}
