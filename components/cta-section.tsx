import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

/** Shared closing CTA — identical on home, about, services and blog. */
export function CtaSection() {
  return (
    <section className="cta">
      <div>
        <p className="eyebrow">
          <span /> YOUR NEXT CHAPTER
        </p>
        <h2>
          ยังไม่ต้องมีคำตอบครบ
          <br />
          ก็เริ่มคุยกันได้
        </h2>
        <p>เล่าให้เราฟังว่าอะไรสำคัญกับคุณ แล้วเราค่อยวางแผนเรื่องเงินไปด้วยกัน</p>
      </div>
      <Link className="button light" href="/contact">
        เริ่มคุยเรื่องแผนของคุณ
        <ArrowUpRight size={20} />
      </Link>
    </section>
  );
}
