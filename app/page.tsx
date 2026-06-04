"use client";

import { useState } from "react";

// Layout
import { DesktopSidebar } from "@/components/layout/DesktopSidebar";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { ThemeFab } from "@/components/layout/ThemeFab";

// Sections
import { OverviewSection } from "@/components/sections/OverviewSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

// Shared UI
import { NoUrlDialog } from "@/components/ui/NoUrlDialog";

// Hooks
import { useActiveSection } from "@/hooks/useActiveSection";
import { useDarkMode } from "@/hooks/useDarkMode";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { EducationSection } from "@/components/sections/EducationSection";

// ─── Status Line ──────────────────────────────────────────────────────────────

function PulsingDot({ className }: { className: string }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${className}`}
      />
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${className}`}
      />
    </span>
  );
}

function ProfileStatus() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
      <span className="flex items-center gap-2">
        <PulsingDot className="bg-emerald-500" />
        Open to work | Actively seeking new opportunities
      </span>
      <span className="flex items-center gap-2">
        <PulsingDot className="bg-sky-500" />
        Freelancing at Synvanta Digital Solutions
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  const { activeSection, scrollToSection } = useActiveSection();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isNoUrlDialogOpen, setIsNoUrlDialogOpen] = useState(false);

  const openDemoLink = (demoUrl?: string) => {
    if (!demoUrl) {
      setIsNoUrlDialogOpen(true);
      return;
    }
    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileDrawer
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <div className="mx-auto flex w-full max-w-6xl">
        <DesktopSidebar
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full px-4 py-12 sm:px-6 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
            <div className="mb-6">
              <ProfileStatus />
            </div>

            <OverviewSection isDarkMode={isDarkMode} />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection onOpenDemo={openDemoLink} />
            <CertificationSection />
          </div>
        </main>
      </div>

      <ThemeFab isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      <NoUrlDialog
        open={isNoUrlDialogOpen}
        onOpenChange={setIsNoUrlDialogOpen}
      />
    </div>
  );
}
