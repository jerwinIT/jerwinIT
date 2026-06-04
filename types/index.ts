// ─── Navigation ────────────────────────────────────────────────────────────────
export type SectionId =
  | "overview"
  | "skills"
  | "experience"
  | "education"
  | "projects"
  | "certificates";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ─── Skills ────────────────────────────────────────────────────────────────────
export type SkillCategory =
  | "languages"
  | "fullstack"
  | "data"
  | "qa"
  | "deployment";

export type SkillFilterId = "all" | SkillCategory;

export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
  readonly confidence: number;
  readonly exposure: string;
  readonly focus: string;
}

export interface SkillFilter {
  readonly id: SkillFilterId;
  readonly label: string;
}

export interface SkillGroup {
  id: SkillCategory;
  label: string;
  items: readonly Skill[];
}

// ─── Projects ──────────────────────────────────────────────────────────────────
export type ProjectTab = "web" | "design";

export interface Project {
  readonly title: string;
  readonly description: string;
  readonly details: string;
  readonly technologies: readonly string[];
  readonly demoUrl?: string;
  readonly repoUrl?: string | null;
}

// ─── Experience ────────────────────────────────────────────────────────────────

/** Shared base for all timeline entries */
export interface BaseExperienceItem {
  readonly title: string;
  readonly organization: string;
  readonly period: string;
}

/** Certification entry — optionally links to a certificate */
export interface CertificationItem extends BaseExperienceItem {
  readonly certificateUrl?: string;
}

/** Education entry — same shape as base for now */
export type EducationItem = BaseExperienceItem;

/** Rich work experience entry with role detail, bullets, and tech stack */
export interface WorkExperienceItem extends BaseExperienceItem {
  readonly role: string;
  readonly type: string; // e.g. "Internship", "Full-time", "Contract"
  readonly location: string; // e.g. "On-site", "Remote"
  readonly bullets: readonly string[];
  readonly technologies?: readonly string[];
}

/** Union of all experience item shapes */
export type ExperienceItem =
  | BaseExperienceItem
  | CertificationItem
  | EducationItem
  | WorkExperienceItem;

/** Narrowing helpers */
export function isCertificationItem(
  item: ExperienceItem,
): item is CertificationItem {
  return "certificateUrl" in item;
}

export function isWorkExperienceItem(
  item: ExperienceItem,
): item is WorkExperienceItem {
  return "bullets" in item;
}

// ─── Kept for backward-compat (old tab-driven ExperienceTimeline) ──────────────
export type ExperienceTab = "certification" | "experience" | "education";
