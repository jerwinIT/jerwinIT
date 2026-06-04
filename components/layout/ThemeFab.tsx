"use client";

import { Moon, Sun } from "lucide-react";

interface ThemeFabProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

/**
 * Floating action button fixed to the bottom-left corner.
 * The single global entry point for toggling dark / light mode,
 * replacing the inline ThemeToggle in both the desktop sidebar and mobile header.
 */
export function ThemeFab({ isDarkMode, onToggle }: ThemeFabProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="
        fixed bottom-6 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full border border-border
        bg-background shadow-lg
        transition-all duration-200
        hover:scale-110 hover:shadow-xl hover:border-primary/50
        active:scale-95
      "
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-muted-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-muted-foreground" />
      )}
    </button>
  );
}
