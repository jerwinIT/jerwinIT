"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PROJECT_TABS } from "@/constants/portfolio";
import { clientProjects, sideProjects } from "@/constants/info";
import type { ProjectTab, Project } from "@/types";

// ─── Status badge ─────────────────────────────────────────────────────────────
// Small pill indicating the current state of a project. Colors are chosen to
// read clearly in both light and dark mode without needing extra config.

const STATUS_STYLES: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  Ongoing: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  "Under Maintenance":
    "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  Archived: "bg-muted text-muted-foreground border-border/60",
};

function ProjectStatusBadge({ status }: { status?: string }) {
  if (!status) return null;

  const styles = STATUS_STYLES[status] ?? STATUS_STYLES.Archived;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[10px] font-mono font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border",
        styles,
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          status === "Live" && "bg-emerald-500",
          status === "Ongoing" && "bg-blue-500",
          status === "Under Maintenance" && "bg-amber-500",
          status === "Archived" && "bg-muted-foreground/60",
        )}
      />
      {status}
    </span>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface ProjectsSectionProps {
  onOpenDemo: (url?: string) => void;
}

// ─── Data map ─────────────────────────────────────────────────────────────────

const projectData: Record<ProjectTab, readonly Project[]> = {
  client: clientProjects,
  side: sideProjects,
};

// ─── Project Row ──────────────────────────────────────────────────────────────
// Each project is a static "log entry": line number, thumbnail, title, and
// description always visible — no expand/collapse. The first entry in the
// list is rendered larger, as the featured / most-recent build.

function ProjectRow({
  project,
  featured,
  onExpand,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  onExpand: (project: Project) => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 py-6 border-b border-border/50 last:border-b-0",
        featured && "border-b border-border",
      )}
    >
      {/* Thumbnail — stacks on top on mobile, sits left from sm breakpoint up */}
      {project.previewImage && (
        <div
          className={cn(
            "relative shrink-0 w-56 h-40",
            featured
              ? "sm:w-64 sm:h-44 md:w-80 md:h-56"
              : "sm:w-60 sm:h-44 md:w-72 md:h-52",
          )}
        >
          <Image
            src={project.previewImage}
            alt={`${project.title} preview across devices`}
            fill
            sizes="(min-width: 768px) 320px, (min-width: 640px) 256px, 224px"
            className="object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <h3
            className={cn(
              "font-semibold leading-snug tracking-tight text-foreground",
              featured ? "text-xl" : "text-base",
            )}
          >
            {project.title}
          </h3>
          <ProjectStatusBadge status={project.status} />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {project.description}
        </p>

        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-normal px-2 py-0.5 rounded-md bg-muted/60 text-foreground/80 border border-border/40 hover:bg-muted hover:text-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <div className="pt-1.5">
          <button
            onClick={() => onExpand(project)}
            className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground/10 border border-foreground/20 text-foreground/70 hover:bg-foreground/20 hover:border-foreground/40 hover:text-foreground transition-all duration-150"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Project Detail ───────────────────────────────────────────────────────────
// Full expanded view for a single project — replaces the tab/list display when
// a user clicks "View Details". Shows the problem being addressed, the key
// features, tech stack, and links out to the live demo / repo. The back
// button returns the user to the tabbed project list ("project displays").

function ProjectDetail({
  project,
  onBack,
  onOpenDemo,
}: {
  project: Project;
  onBack: () => void;
  onOpenDemo: (url?: string) => void;
}) {
  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        ← Back to Projects
      </button>

      <div className="flex flex-col gap-6">
        {/* Preview image */}
        {project.previewImage && (
          <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden bg-muted/30 border border-border/50">
            <Image
              src={project.previewImage}
              alt={`${project.title} preview across devices`}
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="object-contain"
            />
          </div>
        )}

        {/* Title + status */}
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <ProjectStatusBadge status={project.status} />
        </div>

        {/* Overview */}
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* What I Learned (side projects) OR Problem Addressed (client projects) */}
        {project.learnings ? (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1.5">
              What I Learned
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              {project.learnings}
            </p>
          </div>
        ) : (
          (project.problem || project.details) && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1.5">
                Problem Addressed
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {project.problem ?? project.details}
              </p>
            </div>
          )
        )}

        {/* Key features */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Key Features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed max-w-3xl"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-foreground/50 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        {project.technologies?.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-normal px-2 py-0.5 rounded-md bg-muted/60 text-foreground/80 border border-border/40"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.demoUrl && (
            <button
              onClick={() => onOpenDemo(project.demoUrl)}
              className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors duration-150"
            >
              ↗ Visit
            </button>
          )}
          {project.repoUrl && !project.repoPrivate && (
            <button
              onClick={() => onOpenDemo(project.repoUrl)}
              className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground/10 border border-foreground/20 text-foreground/70 hover:bg-foreground/20 hover:border-foreground/40 hover:text-foreground transition-all duration-150"
            >
              ↗ Source Code
            </button>
          )}
          {project.repoPrivate && (
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-muted text-muted-foreground border border-border/60 cursor-default"
              title="Source code is private"
            >
              🔒 Source Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const SECTION_CLASS = "mb-18 lg:mb-24 scroll-mt-24";

export function ProjectsSection({ onOpenDemo }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("client");
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  const projects = projectData[activeTab];

  return (
    <section id="projects" className={SECTION_CLASS}>
      {/* Heading */}
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      <div className="h-px w-full bg-linear-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />

      {expandedProject ? (
        // Detail view — replaces tabs/list until the user clicks "Back"
        <ProjectDetail
          project={expandedProject}
          onBack={() => setExpandedProject(null)}
          onOpenDemo={onOpenDemo}
        />
      ) : (
        <>
          {/* Tab chips */}
          <div className="flex flex-wrap gap-2 mb-2">
            {PROJECT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProjectTab)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Static log-style project list */}
          <div className="mt-6">
            {projects.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                featured={i === 0}
                onExpand={setExpandedProject}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
