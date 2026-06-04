import { ChevronDown } from "lucide-react";
import { SkillCard } from "./SkillCard";
import type { SkillGroup, SkillCategory } from "@/types";

interface SkillGroupAccordionProps {
  section: SkillGroup;
  isOpen: boolean;
  onToggle: (id: SkillCategory) => void;
}

function averageOf(values: readonly number[]) {
  return Math.round(values.reduce((sum, v) => sum + v, 0) / values.length);
}

/**
 * An accordion row that collapses/expands a skill category.
 */
export function SkillGroupAccordion({
  section,
  isOpen,
  onToggle,
}: SkillGroupAccordionProps) {
  const avgConfidence = averageOf(section.items.map((s) => s.confidence));

  return (
    <div className="rounded-xl border border-border/70 bg-background/30 p-3">
      <button
        type="button"
        onClick={() => onToggle(section.id)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <p className="text-sm font-semibold lg:text-base">{section.label}</p>
          <p className="text-xs text-muted-foreground">
            {section.items.length} technologies | avg {avgConfidence}%
            confidence
          </p>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-3 space-y-3">
          {section.items.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              className="bg-background/50"
            />
          ))}
        </div>
      )}
    </div>
  );
}
