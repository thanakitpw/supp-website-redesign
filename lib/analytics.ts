import { site } from "@/lib/site";

/**
 * GA4 behind a cookie-consent gate (Consent Mode v2, "basic" mode): gtag.js
 * is not even downloaded until the visitor accepts, so nothing is sent and no
 * cookie is set before consent (PDPA). Only runs on the production host, so
 * preview deployments never pollute the property.
 */

export const GA_ID = site.gaMeasurementId;

const CONSENT_KEY = "supp-consent";
/** Bump when the banner's wording or purposes change, to ask everyone again. */
const CONSENT_VERSION = 1;
/** Re-ask after a year, in line with common PDPA practice. */
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

/** Dispatched on `window` by the footer's "ตั้งค่าคุกกี้" link. */
export const OPEN_CONSENT_EVENT = "supp:open-consent";

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** True only in the browser, on the canonical host, with an ID configured. */
export function analyticsEnabled(): boolean {
  return (
    Boolean(GA_ID) &&
    typeof window !== "undefined" &&
    window.location.hostname === new URL(site.url).hostname
  );
}

export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as {
      choice?: unknown;
      version?: unknown;
      date?: unknown;
    };
    if (saved.version !== CONSENT_VERSION) return null;
    const age = Date.now() - Date.parse(String(saved.date));
    if (!(age >= 0 && age < CONSENT_MAX_AGE_MS)) return null;
    return saved.choice === "granted" || saved.choice === "denied"
      ? saved.choice
      : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({
        choice,
        version: CONSENT_VERSION,
        date: new Date().toISOString(),
      }),
    );
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
}

/** Injects gtag.js once. Call only after the visitor has accepted. */
export function loadGoogleAnalytics() {
  if (window.gtag || !GA_ID) return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() {
    // gtag.js reads the Arguments object itself, not an array copy.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

/** Withdraws consent: stop storage and clear the `_ga*` cookies already set. */
export function revokeGoogleAnalytics() {
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  const host = window.location.hostname;
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const domain of ["", `; domain=${host}`, `; domain=.${host}`]) {
      document.cookie = `${name}=; max-age=0; path=/${domain}`;
    }
  }
}

/** Sends a GA4 event; a no-op until consent has loaded gtag. */
export function track(
  name: string,
  params?: Record<string, string | number>,
) {
  window.gtag?.("event", name, params);
}
