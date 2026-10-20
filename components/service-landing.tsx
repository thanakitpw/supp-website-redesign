"use client";

import { useEffect, useRef } from "react";

/**
 * Behaviour layer for the services landing page (`.lp`), ported from the
 * approved "life-plan" prototype:
 *
 * - `[data-lp-reveal]` blocks fade up once as they scroll into view;
 * - the sticky photo beside the four chapters follows whichever chapter sits
 *   nearest a third of the way down the viewport;
 * - the hero collage drifts slightly slower than the page (`--hero-shift`).
 *
 * The markup is server rendered and stays fully visible without JS. Classes
 * are toggled on the DOM directly so this wrapper never re-renders the page.
 */
export function ServiceLanding({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // The sticky scene sits under the site header, whose height changes when
    // the mobile nav wraps.
    const header = document.querySelector<HTMLElement>(".header");
    const syncHeader = () => {
      if (header) root.style.setProperty("--lp-nav", `${header.offsetHeight}px`);
    };
    const headerObserver = header ? new ResizeObserver(syncHeader) : null;
    if (header) headerObserver?.observe(header);
    syncHeader();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    for (const element of root.querySelectorAll("[data-lp-reveal]")) {
      element.classList.add("will-reveal");
      revealObserver.observe(element);
    }

    const chapters = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"));
    const scenes = Array.from(root.querySelectorAll<HTMLElement>(".lp-scene"));
    const steps = Array.from(root.querySelectorAll<HTMLElement>(".lp-scene-index a"));
    const hero = root.querySelector<HTMLElement>(".lp-hero");
    let active = -1;
    let frame = 0;

    const update = () => {
      frame = 0;

      let nearest = 0;
      let best = Infinity;
      chapters.forEach((chapter, index) => {
        const distance = Math.abs(
          chapter.getBoundingClientRect().top - window.innerHeight * 0.34,
        );
        if (distance < best) {
          best = distance;
          nearest = index;
        }
      });
      if (nearest !== active) {
        active = nearest;
        scenes.forEach((scene, index) => {
          scene.classList.toggle("is-active", index === active);
          scene.setAttribute("aria-hidden", String(index !== active));
        });
        steps.forEach((step, index) => {
          if (index === active) step.setAttribute("aria-current", "step");
          else step.removeAttribute("aria-current");
        });
      }

      if (hero) {
        const scrolled = Math.min(Math.max(-hero.getBoundingClientRect().top, 0), 700);
        root.style.setProperty(
          "--hero-shift",
          reduced.matches ? "0px" : `${scrolled * 0.12}px`,
        );
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      revealObserver.disconnect();
      headerObserver?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="lp" ref={ref}>
      {children}
    </div>
  );
}
