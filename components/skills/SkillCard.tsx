import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

/**
 * Renders a single skill entry with a confidence progress bar.
 */
export function SkillCard({ skill, className }: SkillCardProps) {
  return (
    <div
      className={`rounded-xl border border-border/70 bg-background/40 p-3 transition-colors hover:border-primary/40 ${className ?? ""}`}
    >
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold lg:text-base">{skill.name}</p>
          <p className="text-xs text-muted-foreground">{skill.focus}</p>
        </div>
        <Badge variant="outline" className="text-[10px] uppercase">
          {skill.category}
        </Badge>
      </div>

      {/* Confidence bar */}
      <div className="mb-2 h-1.5 w-full rounded-full bg-muted">
        <div
          className="h-1.5 rounded-full bg-primary transition-all duration-500"
          style={{ width: `${skill.confidence}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{skill.exposure}</span>
        <span>{skill.confidence}% confidence</span>
      </div>
    </div>
  );
}
