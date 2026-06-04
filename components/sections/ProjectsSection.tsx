"use client";

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

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  onOpenDemo,
}: {
  project: Project;
  onOpenDemo: (url?: string) => void;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-border transition-colors duration-200 flex flex-col gap-3 break-inside-avoid mb-4">
      {/* Title */}
      <h3 className="text-sm font-semibold leading-snug text-foreground">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      {/* Tech badges */}
      {project.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/30">
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

      {/* Action links */}
      {(project.demoUrl || project.repoUrl) && (
        <div className="flex gap-2 pt-1">
          {project.demoUrl && (
            <button
              onClick={() => onOpenDemo(project.demoUrl)}
              className="flex-1 text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground/10 border border-foreground/20 text-foreground/70 hover:bg-foreground/20 hover:border-foreground/40 hover:text-foreground transition-all duration-150"
            >
              ↗ Demo
            </button>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground/10 border border-foreground/20 text-foreground/70 hover:bg-foreground/20 hover:border-foreground/40 hover:text-foreground transition-all duration-150"
            >
              ⌥ Repo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Masonry columns ──────────────────────────────────────────────────────────

function MasonryGrid({
  projects,
  onOpenDemo,
}: {
  projects: readonly Project[];
  onOpenDemo: (url?: string) => void;
}) {
  // Split projects into 3 columns (Pinterest-style)
  const columns: Project[][] = [[], [], []];
  projects.forEach((p, i) => columns[i % 3].push(p));

  return (
    <>
      {/* Desktop: 3-col masonry */}
      <div className="hidden lg:flex gap-4 items-start">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col">
            {col.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenDemo={onOpenDemo}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Tablet: 2-col masonry */}
      <div className="hidden sm:flex lg:hidden gap-4 items-start">
        {[
          projects.filter((_, i) => i % 2 === 0),
          projects.filter((_, i) => i % 2 === 1),
        ].map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col">
            {col.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenDemo={onOpenDemo}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Mobile: 1-col */}
      <div className="flex sm:hidden flex-col">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpenDemo={onOpenDemo}
          />
        ))}
      </div>
    </>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const SECTION_CLASS = "mb-18   lg:mb-24 scroll-mt-24 ";

export function ProjectsSection({ onOpenDemo }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("web");

  const projects = projectData[activeTab];

  return (
    <section id="projects" className={SECTION_CLASS}>
      {/* Heading */}
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />

      {/* Tab chips */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Pinterest-style masonry grid */}
      <MasonryGrid projects={projects} onOpenDemo={onOpenDemo} />
    </section>
  );
}
