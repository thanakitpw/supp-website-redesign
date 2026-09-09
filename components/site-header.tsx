"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="header">
      <a className="skip-link" href="#main">
        ข้ามไปเนื้อหา
      </a>
      <Link href="/" aria-label="SUPP หน้าหลัก">
        <Image
          className="logo"
          src="/images/logo-red.png"
          alt="SUPP Money Life Goals"
          width={160}
          height={51}
          priority
        />
      </Link>
      <nav aria-label="เมนูหลัก">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="button nav-cta" href="/contact">
        เริ่มคุยกับเรา <ArrowUpRight size={18} />
      </Link>
    </header>
  );
}
