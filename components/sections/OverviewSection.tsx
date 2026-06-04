"use client";

import { useState } from "react";
import Image from "next/image";
import { ProfileAvatar } from "@/components/layout/ProfileAvatar";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Globe,
  Linkedin,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const SECTION_CLASS = "mb-18 lg:mb-24 scroll-mt-24 ";

interface OverviewSectionProps {
  isDarkMode: boolean;
}

const CONTACTS = [
  {
    icon: MapPin,
    label: "Batangas, Philippines",
    href: undefined,
    mobileHidden: false,
  },
  {
    icon: Mail,
    label: "jerwinperiait@gmail.com",
    href: "mailto:jerwinperiait@gmail.com",
    mobileHidden: false,
  },
  {
    icon: Phone,
    label: "+63 9930614298",
    href: "tel:+639930614298",
    mobileHidden: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    mobileHidden: true,
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: "#",
    mobileHidden: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    mobileHidden: true,
  },
];

const chipClass =
  "inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary";
const staticClass =
  "inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground";

export function OverviewSection({ isDarkMode }: OverviewSectionProps) {
  return (
    <section id="overview" className={SECTION_CLASS}>
      {/* ── Banner + Overlaid Profile ──────────────────────────────── */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-border/50">
        <Image
          src="/jerwin-banner.png"
          alt="Jerwin Louise G. Peria — Web Developer"
          width={1200}
          height={300}
          className="w-full object-cover"
          priority
        />

        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />

        {/* Overlaid: avatar + name + role + location */}
        <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex items-end gap-3 lg:gap-4">
          <div className="shrink-0 ring-2 ring-white/20 rounded-full">
            <ProfileAvatar
              isDarkMode={isDarkMode}
              name="Jerwin Louise G. Peria"
            />
          </div>
          <div className="space-y-0.5 lg:space-y-1 pb-0.5">
            <h2 className="text-base font-bold leading-tight text-white lg:text-xl xl:text-2xl drop-shadow">
              Jerwin Louise G. Peria
            </h2>
            <p className="text-xs text-white/80 lg:text-sm drop-shadow">
              Full Stack Developer | ITSM Major
            </p>
            <p className="flex items-center gap-1 text-xs text-white/60 drop-shadow">
              <MapPin className="h-3 w-3 shrink-0" />
              Batangas, Philippines
            </p>
          </div>
        </div>
      </div>

      {/* ── Contact chips (below banner) ────────────────────────────── */}
      {/* <div className="mt-4 lg:mt-5">
      
        <div className="flex flex-wrap gap-2">
          {CONTACTS.map(({ icon: Icon, label, href, mobileHidden }) => {
            const visibilityClass = mobileHidden
              ? "hidden sm:inline-flex"
              : "inline-flex";

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`${visibilityClass} ${chipClass}`}
              >
                <Icon className="h-3 w-3 shrink-0" />
                {label}
              </a>
            ) : (
              <span key={label} className={`${visibilityClass} ${staticClass}`}>
                <Icon className="h-3 w-3 shrink-0" />
                {label}
              </span>
            );
          })}
        </div>
      </div> */}

      {/* ── About Me ───────────────────────────────────────────────── */}
      <div className="mt-8 space-y-3">
        {/* Heading */}
        <div className="flex items-baseline mb-2">
          <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />
        <p className="text-sm leading-relaxed text-foreground/80 lg:text-base text-justify">
          I&apos;m a full-stack developer with a strong foundation in{" "}
          <span className="font-bold text-foreground">
            web development, system architecture, and API design
          </span>
          , working across the entire stack with technologies like React.js,
          Next.js, Node.js, FastAPI, and PostgreSQL. I integrate AI-assisted
          workflows and prompt engineering into my development process, and
          apply practices like automated testing, responsive design, and
          security awareness to ship reliable, well-documented software. Beyond
          the technical side, I bring{" "}
          <span className="font-bold text-foreground">
            strong communication, collaboration, and problem-solving skills
          </span>{" "}
          — staying adaptable and detail-oriented while managing time
          effectively to deliver quality work across teams and projects.
        </p>
      </div>
    </section>
  );
}
