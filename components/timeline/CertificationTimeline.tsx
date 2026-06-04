"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { CertificationItem } from "@/types";

// ─── Component ────────────────────────────────────────────────────────────────

interface CertificationTimelineProps {
  items: readonly CertificationItem[];
}

export function CertificationTimeline({ items }: CertificationTimelineProps) {
  // Group by year parsed from period (e.g. "July 2025" → "2025")
  const grouped = items.reduce<Record<string, CertificationItem[]>>(
    (acc, cert) => {
      const year = cert.period.split(" ").pop()!;
      if (!acc[year]) acc[year] = [];
      acc[year].push(cert);
      return acc;
    },
    {},
  );

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  // Entries without a period year (seminars/attendee) that have no year
  const attendeeEntries = [
    {
      title: "Build with AI Manila 2026: Beyond the Prompt",
      organization: "Google Developer Groups",
      period: "April 2026",
    },
    {
      title: "Building a Connected Tomorrow: IOT Innovations and Beyond",
      organization: "BITCON",
      period: "April 2025",
    },
  ];

  // Merge attendees into grouped by year
  attendeeEntries.forEach((a) => {
    const year = a.period.split(" ").pop()!;
    if (!grouped[year]) grouped[year] = [];
    // Avoid duplicates
    const already = grouped[year].some((c) => c.title === a.title);
    if (!already) grouped[year].push({ ...a } as CertificationItem);
  });

  // Re-sort years after merging
  const allYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="space-y-8">
      {allYears.map((year) => (
        <div key={year}>
          {/* Year divider */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground/60">
              {year}
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {grouped[year].map((cert, i) => {
              const isCert = "certificateUrl" in cert && !!cert.certificateUrl;
              const isAttendee =
                !("certificateUrl" in cert) ||
                !(cert as CertificationItem).certificateUrl === undefined;
              const hasUrl =
                "certificateUrl" in cert &&
                !!(cert as CertificationItem).certificateUrl;
              const certUrl = hasUrl
                ? (cert as CertificationItem).certificateUrl
                : undefined;
              const month = cert.period.split(" ")[0];
              // Determine if this is an attendee-only entry (no certificateUrl field at all)
              const attendeeOnly = !("certificateUrl" in cert);

              return (
                <div
                  key={i}
                  className="group rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-4 hover:border-border transition-colors duration-200 flex flex-col gap-3"
                >
                  {/* Type badge + month */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "text-[9px] font-mono tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border",
                        attendeeOnly
                          ? "border-border/50 bg-muted/40 text-muted-foreground/70"
                          : "border-foreground/25 bg-foreground/10 text-foreground/60",
                      )}
                    >
                      {attendeeOnly ? "◎ Attendee" : "✦ Certificate"}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground/50">
                      {month}
                    </span>
                  </div>

                  {/* Title */}
                  <p className="text-xs font-semibold text-foreground leading-snug flex-1">
                    {cert.title}
                  </p>

                  {/* Issuer + View Certificate */}
                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/30">
                    <span className="text-[10px] text-muted-foreground/70 truncate">
                      {cert.organization}
                    </span>
                    {!attendeeOnly &&
                      (certUrl ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="shrink-0"
                        >
                          <a
                            href={certUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ↗ View Certificate
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className="shrink-0"
                        >
                          ↗ View Certificate
                        </Button>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
