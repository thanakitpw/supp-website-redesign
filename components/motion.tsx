"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Grids whose children arrive one after another. The container itself is left
 * alone so the stagger reads as a sequence instead of a block fading in twice.
 */
const GROUPS = [
  ".value-grid > *",
  ".service-grid > *",
  ".service-details > *",
  ".audience-list > *",
  ".pricing-grid > *",
  ".process-grid > li",
  ".article-grid > *",
  ".team-grid > *",
  ".contact-info > *",
  ".join-pain-list > p",
  ".join-role-grid > *",
  ".join-fit-grid > *",
  ".join-belief-list > *",
  ".join-growth-grid > *",
  ".join-steps > li",
  ".word-list > span",
  ".footer-top > div",
].join(",");

/** Everything else moves as one block per section child. */
const BLOCKS = ["main > section > *", ".footer-wordmark"].join(",");

/** Enough stagger to read as a sequence, never enough to feel like waiting. */
const MAX_STEP = 5;

/**
 * Reveals below-the-fold content as it scrolls into view.
 *
 * Only elements that are off screen when the page settles are touched — what
 * the visitor can already see is left exactly as the server rendered it, so
 * there is no flash and no LCP cost. Above-the-fold entrances live in
 * app/motion.css.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    // The hero (or page heading) animates on first paint instead.
    const opening = document.querySelector("main > section");
    const fold = window.innerHeight * 0.85;

    const prepare = (selector: string) => {
      for (const element of document.querySelectorAll<HTMLElement>(selector)) {
        // The footer outlives a client-side navigation, so anything already
        // marked but not yet revealed needs picking back up.
        if (element.dataset.reveal !== undefined) {
          if (!element.classList.contains("is-in")) observer.observe(element);
          continue;
        }
        if (opening?.contains(element)) continue;
        // A grid whose children already stagger stays where it is.
        if (element.querySelector("[data-reveal]")) continue;
        if (element.getBoundingClientRect().top < fold) continue;

        const siblings = element.parentElement?.children;
        const step = siblings ? Array.prototype.indexOf.call(siblings, element) : 0;

        element.dataset.reveal = "";
        element.style.setProperty("--reveal-i", String(Math.min(step, MAX_STEP)));
        observer.observe(element);
      }
    };

    prepare(GROUPS);
    prepare(BLOCKS);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
