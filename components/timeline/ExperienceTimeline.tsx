"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ExperienceItem, WorkExperienceItem } from "@/types";

// ─── Extended type for rich experience entries ────────────────────────────────

// ─── Static data (passed in or defined here) ─────────────────────────────────

export const workExperiences: WorkExperienceItem[] = [
  {
    title: "Center for Artificial Intelligence and Smart Technologies (CAIST)",
    organization: "Batangas State University",
    period: "February 2026 – May 2026",
    role: "Full Stack Developer / Frontend Development Lead",
    type: "Internship",
    location: "On-site",
    bullets: [
      "Contributed across all phases of the SDLC as part of a multi-team project delivering four enterprise-grade modules, serving as Frontend Development Lead for the designated student-facing portal.",
      "Designed and documented system architecture diagrams and produced comprehensive user manuals to support development alignment and end-user onboarding.",
      "Improved the portal's UI responsiveness and design consistency, refining layouts and visual elements to enhance usability across multiple screen sizes.",
      "Developed 40+ manual test cases covering functional and edge-case scenarios, ensuring thorough validation of core application flows.",
      "Authored 40+ automated end-to-end test scripts using Playwright and 5 backend API test scripts using pytest, reducing manual regression effort and improving test reliability.",
      "Conducted penetration testing using OWASP ZAP, identifying and manually verifying a high-severity security vulnerability, contributing to a more secure production-ready system.",
      "Proposed and successfully pitched an AI chatbot integration as an enhancement feature — selected from competitive proposals — involving model training and seamless embedding into the student portal.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Playwright",
      "Pytest",
      "OWASP ZAP",
      "PostgreSQL",
      "Figma",
      "GitHub Actions",
    ],
  },
  {
    title: "Tech Executive Labs I.T. Solutions",
    organization: "Remote",
    period: "February 2025 – April 2025",
    role: "Backend Developer",
    type: "Internship",
    location: "Remote",
    bullets: [
      "Established the backend foundation for a planned landing page using Node.js and Express.js, including the initial server configuration and reusable boilerplate.",
      "Organized a scalable file architecture and configured environment variables to support maintainability and future frontend integration.",
      "Implemented protective middleware, including rate limiting and request guards, to strengthen the security of future API endpoints.",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Postman"],
  },
];

// ─── Props ────────────────────────────────────────────────────────────────────

interface ExperienceTimelineProps {
  items?: readonly ExperienceItem[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Use rich workExperiences data; fall back to basic items prop
  const entries = workExperiences;

  return (
    <div className="space-y-4">
      {entries.map((entry, index) => {
        const isOpen = openIndex === index;
        const contentId = `experience-content-${index}`;

        return (
          <Card
            key={`${entry.title}-${entry.period}`}
            className={cn(
              "gap-0 overflow-hidden py-0 transition-all duration-200",
              isOpen
                ? "border-primary/40 bg-card/70 shadow-lg shadow-primary/5"
                : "border-border/60 bg-card/40 hover:border-primary/30 hover:bg-card/60",
            )}
          >
            {/* Clickable card header */}
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left"
            >
              <CardHeader className="flex-row items-start justify-between gap-4 p-5">
                <div className="flex min-w-0 items-start gap-4">
                  {/* Timeline/index indicator */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <span
                      className={cn(
                        "flex size-8 items-center justify-center rounded-full border font-mono text-[10px] transition-colors",
                        isOpen
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-border bg-secondary text-muted-foreground",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span aria-hidden="true" className="h-5 w-px bg-border" />
                  </div>

                  <div className="min-w-0">
                    {/* Role */}
                    <p
                      className={cn(
                        "text-sm font-semibold leading-snug transition-colors",
                        isOpen ? "text-primary" : "text-foreground",
                      )}
                    >
                      {entry.role}
                    </p>

                    {/* Company */}
                    <p className="mt-1 text-xs text-muted-foreground">
                      {entry.title}
                    </p>

                    {/* Metadata */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
                        {entry.period}
                      </span>

                      <span className="h-3 w-px bg-border" aria-hidden="true" />

                      <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
                        {entry.organization}
                      </span>

                      <Badge
                        variant="outline"
                        className="rounded-full border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary"
                      >
                        {entry.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-md border transition-all duration-200",
                    isOpen
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-border bg-secondary text-muted-foreground",
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </span>
              </CardHeader>
            </button>

            {/* Expandable card content */}
            {isOpen && (
              <CardContent
                id={contentId}
                className="border-t border-border/50 px-5 py-5"
              >
                <ul className="space-y-3">
                  {entry.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-3 text-xs leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {entry.technologies && entry.technologies.length > 0 && (
                  <div className="mt-5 space-y-3 border-t border-border/40 pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {entry.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="cursor-default rounded-md border border-border/50 bg-secondary/70 px-2 py-0.5 text-xs font-normal text-secondary-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        );
      })}
    </div>
  );
}
