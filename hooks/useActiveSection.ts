"use client";

import { useState, useEffect, useCallback } from "react";
import { SECTION_IDS } from "@/constants/portfolio";
import type { SectionId } from "@/types";

/**
 * Height of the fixed mobile header (matches the `pt-16` / `h-16` in the layout).
 * On lg+ screens the sidebar is static, so no offset is needed — but adding a small
 * buffer (e.g. 80 px) still feels natural for the desktop spy too.
 */
const MOBILE_HEADER_HEIGHT = 64; // px  ↔  Tailwind pt-16 / h-16

/**
 * How far past the top of the viewport a section must be before we consider the
 * *next* section active.  Tune this value if the highlight feels too eager or lazy.
 * Rule of thumb: roughly 30-40 % of the viewport works well for tall sections.
 */
const ACTIVATION_OFFSET_RATIO = 0.35;

/** Returns true when the viewport is below the lg breakpoint (sidebar is fixed/overlaid). */
const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 1024;

/**
 * Tracks which section is currently in view as the user scrolls.
 * Uses getBoundingClientRect() so it works correctly regardless of how deeply
 * sections are nested in the DOM.
 *
 * Returns:
 *  - activeSection  – the SectionId currently in view
 *  - scrollToSection – imperatively scroll to any section, compensating for the
 *                       fixed mobile header so the section isn't hidden behind it
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");

  const getActivationThreshold = useCallback(() => {
    // On mobile the fixed header eats 64 px, so we push the threshold down a bit
    // further so the highlight changes only when the section is truly visible.
    const headerOffset = isMobile() ? MOBILE_HEADER_HEIGHT : 0;
    return headerOffset + window.innerHeight * ACTIVATION_OFFSET_RATIO;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = getActivationThreshold();

      // Walk sections top-to-bottom.
      // A section is "active" when its top edge has crossed the activation threshold
      // (i.e. scrolled up past it).  We keep updating `current` so the last one
      // that qualifies wins — that's the section the user is currently reading.
      let current: SectionId | null = null;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { top } = el.getBoundingClientRect();

        if (top <= threshold) {
          current = id as SectionId;
        }
      }

      // Edge-case: if we haven't scrolled past any threshold yet, keep the first
      // section active instead of resetting to null.
      if (current !== null) {
        setActiveSection(current);
      }
    };

    // Sync on mount so the initial highlight is correct even if the page loads
    // mid-scroll (e.g. browser restoring scroll position).
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Re-evaluate on resize because the threshold changes with viewport height.
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [getActivationThreshold]);

  /**
   * Scroll to a section, compensating for the fixed mobile header so the section
   * heading isn't hidden behind it.  On desktop (lg+) no compensation is needed.
   */
  const scrollToSection = useCallback((sectionId: SectionId | string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    if (isMobile()) {
      // getBoundingClientRect().top is relative to the viewport, so add current
      // scrollY to get the absolute document position, then subtract the header.
      const absoluteTop = el.getBoundingClientRect().top + window.scrollY;
      const offset = absoluteTop - MOBILE_HEADER_HEIGHT - 8; // 8 px breathing room

      window.scrollTo({ top: offset, behavior: "smooth" });
    } else {
      // Desktop: the sidebar is static, so scrollIntoView is fine.
      // A small negative scroll-margin-top on each section (set in CSS) is the
      // cleanest approach; falling back to scrollIntoView("start") works too.
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return { activeSection, scrollToSection };
}
