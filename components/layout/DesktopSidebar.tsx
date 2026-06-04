import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { navItems, socialLinks } from "@/constants/navigation";
import Image from "next/image";
import type { SectionId } from "@/types";

const OWNER = {
  name: "Jerwin Louise Peria",
  role: "BSIT Service Management",
  resumeUrl: "/Jerwin_Peria_Resume.pdf",
  email: "jerwinperiait@gmail.com",
  copyright: "© 2025 Jerwin Louise Peria",
} as const;

interface DesktopSidebarProps {
  activeSection: SectionId;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onNavigate: (id: SectionId | string) => void;
}

/**
 * Fixed left-hand sidebar visible on lg+ screens.
 * ThemeToggle is intentionally omitted here — it lives in ThemeFab instead.
 */
export function DesktopSidebar({
  activeSection,
  onNavigate,
}: Omit<DesktopSidebarProps, "isDarkMode" | "onToggleTheme">) {
  return (
    <aside className="hidden w-64 shrink-0 xl:w-72 lg:block">
      <div className="sticky top-0 flex h-screen flex-col px-6 py-12">
        {/* Icon + heading — horizontal row */}
        <div className="mb-10 flex flex-col items-left gap-4 w-full">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/jerwin-icon.png"
              alt="My Icon"
              width={48}
              height={48}
              className="shrink-0"
            />
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">
                My Professional
              </h1>
              <h2 className="text-lg font-bold text-foreground leading-tight">
                Portfolio
              </h2>
            </div>
          </div>
          <div className="space-y-2">
            <Button size="sm" className="gap-2 w-full" asChild>
              <a href={`mailto:${OWNER.email}`}>
                <Mail className="h-3.5 w-3.5" />
                Mail Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent w-full"
              asChild
            >
              <a
                href={OWNER.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-3.5 w-3.5" />
                View Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col items-center space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`group relative flex w-40 items-center gap-3 px-3 py-2.5 text-left text-sm transition-all w-full rounded-r-md ${
                  isActive
                    ? "font-bold bg-primary/10"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-primary" />
                )}
                <Icon className={`h-4 w-4 ${isActive ? "text-primary" : ""}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer — no ThemeToggle here */}
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            {OWNER.copyright}
          </p>
        </div>
      </div>
    </aside>
  );
}
