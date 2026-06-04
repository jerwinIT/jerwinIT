"use client";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface EducationEntry {
  degree: string;
  major: string;
  institution: string;
  campus: string;
  period: string;
  achievements: string[];
}

const EDUCATION: EducationEntry[] = [
  {
    degree: "Bachelor of Science",
    major: "Information Technology — Major in Service Management",
    institution: "Batangas State University",
    campus: "TNEU Lipa Campus",
    period: "August 2022 – 2026",
    achievements: ["Dean's Lister for academic excellence", "Latin Honor"],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface EducationTimelineProps {
  items?: unknown[];
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <div className="space-y-4">
      {EDUCATION.map((entry, index) => (
        <div
          key={index}
          className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-px w-full bg-gradient-to-r from-foreground/30 via-foreground/10 to-transparent" />

          <div className="p-5 flex flex-col gap-4">
            {/* Degree + period row */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground/60 mb-1">
                  {entry.degree}
                </p>
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {entry.major}
                </h3>
              </div>
              <span className="shrink-0 text-[10px] font-mono tracking-wide text-muted-foreground/60 text-right">
                {entry.period}
              </span>
            </div>

            {/* Institution */}
            <div className="flex flex-col gap-0.5 border-l-2 border-border/50 pl-3">
              <p className="text-xs font-medium text-foreground/80">
                {entry.institution}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {entry.campus}
              </p>
            </div>

            {/* Achievements */}
            {entry.achievements.length > 0 && (
              <div className="pt-3 border-t border-border/30 space-y-2">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground/60">
                  ✦ Achievements
                </p>
                <ul className="space-y-1.5">
                  {entry.achievements.map((ach, ai) => (
                    <li
                      key={ai}
                      className="flex items-center gap-2 text-xs text-foreground/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
