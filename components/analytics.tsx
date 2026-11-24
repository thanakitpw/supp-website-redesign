"use client";

import { useEffect, useState } from "react";
import {
  OPEN_CONSENT_EVENT,
  analyticsEnabled,
  loadGoogleAnalytics,
  readConsent,
  revokeGoogleAnalytics,
  saveConsent,
  track,
  type ConsentChoice,
} from "@/lib/analytics";
import { site } from "@/lib/site";

const socialByHref = new Map<string, string>(
  site.social.map(({ name, href }) => [href, name]),
);

function linkLocation(link: Element) {
  const explicit = link.closest("[data-track-location]");
  if (explicit) return explicit.getAttribute("data-track-location") ?? "content";
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  return "content";
}

/**
 * One delegated listener turns contact clicks into GA4 events, so links stay
 * plain markup. Page views, scrolls and outbound clicks come from GA4's own
 * enhanced measurement.
 */
function trackContactClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest?.("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") ?? "";
  const location = linkLocation(link);

  if (href.startsWith("tel:")) {
    track("click_phone", { link_location: location });
  } else if (href.startsWith("mailto:")) {
    track("click_email", { link_location: location });
  } else if (href === site.joinFormUrl) {
    track("click_join_form", { link_location: location });
  } else if (socialByHref.has(href)) {
    track("click_social", {
      platform: socialByHref.get(href)!,
      link_location: location,
    });
  }
}

/** Cookie banner + consent-gated GA4. Renders nothing off production. */
export function Analytics() {
  const [enabled, setEnabled] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    const saved = readConsent();
    setEnabled(true);
    setChoice(saved);
    setOpen(saved === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (choice !== "granted") return;
    loadGoogleAnalytics();
    document.addEventListener("click", trackContactClick, { capture: true });
    return () =>
      document.removeEventListener("click", trackContactClick, {
        capture: true,
      });
  }, [choice]);

  function decide(next: ConsentChoice) {
    saveConsent(next);
    setOpen(false);
    if (next === "denied" && window.gtag) {
      // gtag is already running on this page: clear its cookies and reload so
      // nothing more is sent.
      revokeGoogleAnalytics();
      window.location.reload();
      return;
    }
    setChoice(next);
  }

  if (!enabled || !open) return null;

  return (
    <section
      className="consent-banner"
      aria-labelledby="consent-title"
      aria-describedby="consent-text"
    >
      <p id="consent-title" className="consent-title">
        เว็บไซต์นี้ใช้คุกกี้
      </p>
      <p id="consent-text" className="consent-text">
        เราใช้คุกกี้ของ Google Analytics เพื่อนับจำนวนผู้เข้าชม
        และดูว่าเนื้อหาส่วนไหนมีประโยชน์ เป็นสถิติภาพรวม ไม่ใช้เพื่อการโฆษณา
        หากเลือกไม่ยอมรับ เว็บไซต์ยังใช้งานได้ตามปกติ
        และเปลี่ยนใจได้ทุกเมื่อที่ &ldquo;ตั้งค่าคุกกี้&rdquo; ท้ายเว็บ
      </p>
      <div className="consent-actions">
        <button
          type="button"
          className="consent-button"
          onClick={() => decide("denied")}
        >
          ไม่ยอมรับ
        </button>
        <button
          type="button"
          className="consent-button is-primary"
          onClick={() => decide("granted")}
        >
          ยอมรับ
        </button>
      </div>
    </section>
  );
}

/** Footer link that reopens the banner; hidden where analytics is off. */
export function CookieSettingsButton() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => setEnabled(analyticsEnabled()), []);
  if (!enabled) return null;
  return (
    <button
      type="button"
      className="cookie-settings-button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
    >
      ตั้งค่าคุกกี้
    </button>
  );
}
