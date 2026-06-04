import { cn } from "@/lib/utils";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

/**
 * A borderless tab button with an animated underline indicator.
 * Used inside the Projects and Experience section tab bars.
 */
export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
      )}
    </button>
  );
}
