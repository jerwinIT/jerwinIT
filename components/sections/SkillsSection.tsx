"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Lightbulb,
  Users,
  Code2,
  Cloud,
  Globe,
  Sparkles,
} from "lucide-react";
import { TECH_ICONS, TechName } from "@/lib/tech-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ─── Simple SVG icon map (inline, no extra deps) ─────────────────────────────
// Using Simple Icons' SVG paths (MIT-compatible usage for display).
// Each entry: { path, color } — color is the brand hex used subtly.

// ─── Category icon map (lucide-react) ────────────────────────────────────────
const GROUP_ICONS: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-3.5 h-3.5" />,
  Frontend: <Layout className="w-3.5 h-3.5" />,
  "Backend Frameworks & Runtime": <Server className="w-3.5 h-3.5" />,
  Databases: <Database className="w-3.5 h-3.5" />,
  "Cloud & Deployment": <Cloud className="w-3.5 h-3.5" />,
  "Testing & Security": <ShieldCheck className="w-3.5 h-3.5" />,
  CMS: <Globe className="w-3.5 h-3.5" />,
  "Tools & Collaboration": <Wrench className="w-3.5 h-3.5" />,
  "AI Tools": <Sparkles className="w-3.5 h-3.5" />,
};

const COMPETENCY_ICONS: Record<string, React.ReactNode> = {
  Engineering: <Cpu className="w-3.5 h-3.5" />,
  "AI & Innovation": <Lightbulb className="w-3.5 h-3.5" />,
  Professional: <Users className="w-3.5 h-3.5" />,
};

// ─── Inline SVG icon component ───────────────────────────────────────────────
function TechIcon({
  name,
  className = "w-3.5 h-3.5 shrink-0",
}: {
  name: TechName;
  className?: string;
}) {
  const icon = TECH_ICONS[name];
  if (!icon) return null;
  return (
    <span
      className={className}
      style={{
        color: icon.color,
        display: "inline-flex",
        alignItems: "center",
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      aria-hidden="true"
    />
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TECH_GROUPS: { label: string; emoji: string; items: TechName[] }[] = [
  {
    label: "Languages",
    emoji: "{}",
    items: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    emoji: "◈",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn/UI",
    ],
  },
  {
    label: "Backend Frameworks & Runtime",
    emoji: "⬡",
    items: ["Node.js", "Express.js", "Laravel", "FastAPI"],
  },
  {
    label: "Databases",
    emoji: "⬙",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    label: "Cloud & Deployment",
    emoji: "☁",
    items: ["Firebase", "Docker", "Vercel", "AWS", "Hostinger"],
  },
  {
    label: "Testing & Security",
    emoji: "◎",
    items: ["Playwright", "Pytest", "OWASP ZAP", "Postman"],
  },
  {
    label: "CMS",
    emoji: "▣",
    items: ["WordPress", "Shopify"],
  },
  {
    label: "Tools & Collaboration",
    emoji: "✦",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jira",
      "Trello",
      "VS Code",
      "Figma",
    ],
  },
  {
    label: "AI Tools",
    emoji: "✧",
    items: ["ChatGPT", "GitHub Copilot", "Claude", "Cursor AI"],
  },
];

const COMPETENCY_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Engineering",
    items: [
      "Web Development",
      "System Architecture",
      "Responsive Design",
      "API Design",
      "Documentation",
    ],
  },
  {
    label: "AI & Innovation",
    items: [
      "AI-Assisted Development",
      "Prompt Engineering",
      "AI Workflow Integration",
    ],
  },
  {
    label: "Professional",
    items: [
      "Critical Thinking",
      "Collaboration",
      "Communication",
      "Adaptability",
      "Problem-Solving",
      "Attention-to-Detail",
      "Time Management",
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const SECTION_CLASS = "mb-18 lg:mb-24 scroll-mt-24";

export function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const visibleGroups =
    activeGroup === null
      ? TECH_GROUPS
      : TECH_GROUPS.filter((g) => g.label === activeGroup);

  return (
    <section id="skills" className={SECTION_CLASS}>
      {/* ── Technology I Use ─────────────────────────────────────────── */}
      <div className="mb-20">
        <div className="flex items-baseline mb-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Technology I Use
          </h2>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveGroup(null)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200",
              activeGroup === null
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground",
            )}
          >
            All
          </button>
          {TECH_GROUPS.map((g) => (
            <button
              key={g.label}
              onClick={() =>
                setActiveGroup(activeGroup === g.label ? null : g.label)
              }
              className={cn(
                "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200",
                activeGroup === g.label
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "transition-colors",
                  activeGroup === g.label
                    ? "text-background"
                    : "text-muted-foreground",
                )}
              >
                {GROUP_ICONS[g.label]}
              </span>
              {g.label}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleGroups.map((group) => (
            <Card
              key={group.label}
              className="gap-0 border-border/60 bg-card/60 py-0 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="px-5 pt-5 pb-0">
                <CardTitle className="flex items-center gap-2">
                  <span className="inline-flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {GROUP_ICONS[group.label] ?? (
                      <span className="font-mono text-base leading-none">
                        {group.emoji}
                      </span>
                    )}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {group.label}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="px-5 pt-4 pb-5">
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="flex cursor-default items-center gap-1 rounded-md border border-border/50 bg-secondary/70 px-2 py-0.5 text-xs font-normal text-secondary-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                    >
                      <TechIcon name={item} />
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ── Core Competencies ────────────────────────────────────────── */}
      <div>
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Core Competencies
          </h2>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {COMPETENCY_GROUPS.map((group) => (
            <div key={group.label} className="space-y-3">
              {/* Group label with icon */}
              <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">
                  {COMPETENCY_ICONS[group.label]}
                </span>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  {group.label}
                </p>
              </div>
              {/* Competency list */}
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1 h-1 rounded-full bg-foreground/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
