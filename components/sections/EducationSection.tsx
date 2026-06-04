import { EducationTimeline } from "@/components/timeline/EducationTimeline";
import { educationData } from "@/constants/info";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 mb-16">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Education</h2>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />
      <EducationTimeline items={educationData} />
    </section>
  );
}
