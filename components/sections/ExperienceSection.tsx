import { ExperienceTimeline } from "@/components/timeline/ExperienceTimeline";
import { experienceData } from "@/constants/info";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 mb-16">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />
      <ExperienceTimeline items={experienceData} />
    </section>
  );
}
