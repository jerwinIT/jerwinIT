"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, socialLinks } from "@/constants/navigation";
import Image from "next/image";
import type { SectionId } from "@/types";

const OWNER = {
  name: "Jerwin Louise Peria",
  role: "BSIT Service Management",
  resumeUrl: "/Jerwin_Peria_Resume.pdf",
  copyright: "© 2025 Jerwin Louise Peria",
} as const;

interface MobileDrawerProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId | string) => void;
}

/**
 * Mobile-only header with a hamburger button that opens a full-height
 * sidebar drawer. ThemeToggle is intentionally absent — it lives in ThemeFab.
 * Hidden on lg+ screens.
 */
export function MobileDrawer({ activeSection, onNavigate }: MobileDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = useCallback(
    (id: SectionId | string) => {
      onNavigate(id);
      setIsOpen(false);
    },
    [onNavigate],
  );

  return (
    <>
      {/* ── Top header bar ─────────────────────────────────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80 lg:hidden">
        {/* Hamburger only — no ThemeToggle */}
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          className="rounded-lg p-2 transition-colors hover:bg-accent"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <h1>JLP</h1>
      </header>

      {/* ── Backdrop ───────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* ── Drawer panel ───────────────────────────────────────────────── */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-background shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header — close button */}
        <div className="flex h-16 shrink-0 items-center justify-end border-b border-border px-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-2 transition-colors hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
          {/* Icon + heading — horizontal, matching DesktopSidebar */}
          <div className="mb-8 flex flex-col items-center gap-4 w-full">
            <div className="flex items-center gap-3 w-full">
              <Image
                src="/jerwin-icon.png"
                alt="My Icon"
                width={48}
                height={48}
                className="shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">
                  My Professional
                </p>
                <p className="text-sm font-semibold text-foreground leading-tight">
                  Portfolio
                </p>
              </div>
            </div>

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

          {/* Nav links */}
          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`group relative flex w-full items-center gap-3 rounded-r-md px-4 py-3 text-left text-sm font-medium transition-all ${
                    isActive
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 h-full w-0.5 -translate-y-1/2 rounded-full bg-primary" />
                  )}
                  <Icon
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : ""}`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-8 space-y-4">
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
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
    </>
  );
}
