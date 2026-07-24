import type { Project, CertificationItem, BaseExperienceItem } from "@/types";

// ─── Project tabs ───────────────────────────────────────────────────────────────
export const PROJECT_TABS = [
  { id: "client", label: "Client Projects" },
  { id: "side", label: "Side Projects" },
] as const;

// ─── Project status options ─────────────────────────────────────────────────────
export const PROJECT_STATUSES = [
  "Live",
  "Ongoing",
  "Under Maintenance",
  "Archived",
] as const;

// ─── Experience tabs ────────────────────────────────────────────────────────────
export const EXPERIENCE_TABS = [
  { id: "certification", label: "Certification" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
] as const;

// ─── Section ids used by the scroll spy ────────────────────────────────────────
// Must match: (1) the id="..." on each <section>, (2) navItems ids in navigation.ts,
// (3) SectionId union in types/index.ts — and must be in top-to-bottom DOM order.
export const SECTION_IDS = [
  "overview",
  "skills",
  "experience",
  "education",
  "projects",
  "certificates",
] as const;

// ─── Re-export data from existing constants (kept for backward-compat) ──────────
// These originate in @/constant/info (your existing file) and are just
// re-exported here so feature modules only import from one place.
export type { Project, CertificationItem, BaseExperienceItem };
