"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check, ChevronDown, Copy, Mail } from "@/components/icons";
import { site } from "@/lib/site";

const PLAN_LABELS = {
  undecided: "ยังไม่แน่ใจ อยากคุยกับทีมก่อน",
  single: "Single Plan — 4,900 บาท",
  comprehensive: "Comprehensive Planning — 14,900 บาท",
  ongoing: "Ongoing Support — 8,900 บาท/ปี",
} as const;

type PlanKey = keyof typeof PLAN_LABELS;

const MAIL_SUBJECT = "สนใจวางแผนการเงินกับ SUPP";

/**
 * Composes the enquiry as text the visitor reviews, then sends themselves via
 * their own mail app — nothing leaves the browser on submit.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("plan") ?? "";
  const initialPlan: PlanKey =
    requested in PLAN_LABELS ? (requested as PlanKey) : "undecided";

  const [plan, setPlan] = useState<PlanKey>(initialPlan);
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setCopied(false);
    setCopyFailed(false);
    setDraft(
      `สวัสดีทีม SUPP\n\n` +
        `ชื่อ: ${String(data.get("name")).trim()}\n` +
        `ช่องทางติดต่อกลับ: ${String(data.get("contact")).trim()}\n` +
        `สนใจ: ${PLAN_LABELS[plan]}\n\n` +
        `เรื่องที่อยากปรึกษา:\n` +
        `${String(data.get("message")).trim() || "ขอพูดคุยกับทีมเบื้องต้น"}\n\n` +
        `ขอบคุณครับ/ค่ะ`,
    );
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopyFailed(true);
    }
  }

  return (
    <div className="contact-form-wrap">
      <h2>เล่าเรื่องที่คุณอยากวางแผน</h2>
      <p className="form-intro">
        กรอกข้อมูลเพื่อเตรียมข้อความ แล้วเลือกส่งผ่านแอปอีเมลของคุณ
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="field">
          <label htmlFor="name">ชื่อของคุณ *</label>
          <input
            id="name"
            name="name"
            required
            minLength={1}
            maxLength={100}
            autoComplete="name"
            placeholder="ชื่อที่อยากให้เราเรียก"
          />
        </div>

        <div className="field">
          <label htmlFor="contact">อีเมลหรือเบอร์โทรสำหรับติดต่อกลับ *</label>
          <input
            id="contact"
            name="contact"
            required
            maxLength={150}
            placeholder="อีเมล หรือ เบอร์โทรศัพท์"
          />
        </div>

        <div className="field">
          <label htmlFor="plan">เรื่องหรือแพ็กเกจที่สนใจ</label>
          <div
            className="native-select-wrapper"
            data-slot="native-select-wrapper"
          >
            <select
              id="plan"
              name="plan"
              value={plan}
              onChange={(event) => setPlan(event.target.value as PlanKey)}
            >
              {Object.entries(PLAN_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">
            มีเรื่องไหนอยากให้เราช่วยดูเป็นพิเศษ?{" "}
            <span className="optional">ไม่บังคับ</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1500}
            placeholder="เช่น มีหลายเป้าหมายพร้อมกัน อยากรู้ว่าควรเริ่มจากเรื่องไหนก่อน"
          />
        </div>

        <button type="submit" className="button form-button">
          เตรียมข้อความติดต่อ <ArrowUpRight size={19} />
        </button>
        <p className="form-note">
          ข้อมูลจะยังไม่ถูกส่งจนกว่าคุณจะกดส่งในแอปอีเมล
        </p>
      </form>

      {draft ? (
        <section className="draft-result" aria-live="polite">
          <div className="draft-heading">
            <Check size={20} />
            <h3>ข้อความพร้อมให้คุณตรวจสอบ</h3>
          </div>
          <p>
            ตรวจข้อมูลด้านล่าง แล้วเปิดแอปอีเมลหรือคัดลอกข้อความเพื่อส่งถึง{" "}
            {site.email}
          </p>
          <pre>{draft}</pre>
          <div className="draft-actions">
            <a
              className="button"
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                MAIL_SUBJECT,
              )}&body=${encodeURIComponent(draft)}`}
            >
              <Mail size={18} />
              เปิดแอปอีเมลเพื่อส่ง
            </a>
            <button
              type="button"
              className="copy-button"
              onClick={handleCopy}
            >
              <Copy size={17} />
              {copied ? "คัดลอกแล้ว" : "คัดลอกข้อความ"}
            </button>
          </div>
          {copyFailed ? (
            <p role="status">
              คัดลอกอัตโนมัติไม่ได้ คุณสามารถเลือกข้อความด้านบนแล้วคัดลอกได้โดยตรง
            </p>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
