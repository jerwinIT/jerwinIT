import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
  /** Pass `"sm"` for the mobile header variant */
  size?: "default" | "sm";
}

/**
 * A simple icon button that toggles dark / light mode.
 */
export function ThemeToggle({
  isDarkMode,
  onToggle,
  size = "default",
}: ThemeToggleProps) {
  const iconClass = size === "sm" ? "h-4 w-4" : "h-5 w-5 text-muted-foreground";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className={iconClass} />
      ) : (
        <Moon className={iconClass} />
      )}
    </button>
  );
}
