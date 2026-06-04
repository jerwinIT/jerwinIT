"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

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
      "Designed and developed a RESTful API using Node.js, structuring clean and scalable endpoints to support core application functionality.",
      "Implemented middleware layers to handle request processing, validation, and error management across API routes.",
      "Integrated security measures into the API layer to protect sensitive data and enforce access controls.",
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

        return (
          <div
            key={index}
            className={cn(
              "rounded-xl border transition-colors duration-200",
              isOpen
                ? "border-border bg-card/60 backdrop-blur-sm"
                : "border-border/50 bg-card/30 hover:border-border/80",
            )}
          >
            {/* Header — always visible, clickable */}
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left p-5 flex items-start justify-between gap-4"
            >
              <div className="flex gap-4 items-start min-w-0">
                {/* Index number */}
                <span className="shrink-0 mt-0.5 text-[10px] font-mono tracking-[0.2em] text-muted-foreground/50 w-5 text-right">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  {/* Role */}
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {entry.role}
                  </p>
                  {/* Company */}
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {entry.title}
                  </p>
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-[10px] font-mono tracking-wide text-muted-foreground/70">
                      {entry.period}
                    </span>
                    <span className="w-px h-3 bg-border/60" />
                    <span className="text-[10px] font-mono tracking-wide text-muted-foreground/70">
                      {entry.organization}
                    </span>
                    <span className="w-px h-3 bg-border/60" />
                    <span className="inline-flex items-center text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground/70">
                      {entry.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chevron */}
              <span
                className={cn(
                  "shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-md border transition-all duration-200 text-xs font-mono",
                  isOpen
                    ? "bg-foreground/15 border-foreground/30 text-foreground rotate-180"
                    : "bg-foreground/[0.06] border-border/60 text-muted-foreground hover:bg-foreground/10 hover:border-foreground/25 hover:text-foreground",
                )}
              >
                ▾
              </span>
            </button>

            {/* Expanded body */}
            {isOpen && (
              <div className="px-5 pb-5 space-y-5 border-t border-border/40">
                {/* Bullet points */}
                <ul className="space-y-2.5 pt-4">
                  {entry.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-3 text-xs text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/30 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                {entry.technologies && entry.technologies.length > 0 && (
                  <div className="pt-3 border-t border-border/30 space-y-2">
                    <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground/60">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-normal px-2 py-0.5 rounded-md bg-muted/60 text-foreground/80 border border-border/40 hover:bg-muted hover:text-foreground transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
