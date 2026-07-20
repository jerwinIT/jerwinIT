"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PROJECT_TABS } from "@/constants/portfolio";
import { webProjects, designProjects } from "@/constants/info";
import type { ProjectTab, Project } from "@/types";

// ─── Props ────────────────────────────────────────────────────────────────────

interface ProjectsSectionProps {
  onOpenDemo: (url?: string) => void;
}

// ─── Data map ─────────────────────────────────────────────────────────────────

const projectData: Record<ProjectTab, readonly Project[]> = {
  web: webProjects,
  design: designProjects,
};

// ─── Project Row ──────────────────────────────────────────────────────────────
// Each project is a static "log entry": line number, thumbnail, title, and
// description always visible — no expand/collapse. The first entry in the
// list is rendered larger, as the featured / most-recent build.

function ProjectRow({
  project,
  featured,
  onOpenDemo,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  onOpenDemo: (url?: string) => void;
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
        <div className="flex items-center gap-2">
      
          <h3
            className={cn(
              "font-semibold leading-snug tracking-tight text-foreground",
              featured ? "text-xl" : "text-base",
            )}
          >
            {project.title}
          </h3>
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
            onClick={() => onOpenDemo(project.demoUrl ?? project.repoUrl)}
            className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground/10 border border-foreground/20 text-foreground/70 hover:bg-foreground/20 hover:border-foreground/40 hover:text-foreground transition-all duration-150"
          >
            ↗ View Details
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const SECTION_CLASS = "mb-18 lg:mb-24 scroll-mt-24";

export function ProjectsSection({ onOpenDemo }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("web");

  const projects = projectData[activeTab];

  return (
    <section id="projects" className={SECTION_CLASS}>
      {/* Heading */}
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      
      </div>
      <div className="h-px w-full bg-linear-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />

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
            onOpenDemo={onOpenDemo}
          />
        ))}
      </div>
    </section>
  );
}