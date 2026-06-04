import { CertificationTimeline } from "@/components/timeline/CertificationTimeline";
import { certificationData } from "@/constants/info";

export function CertificationSection() {
  return (
    <section id="certificates" className="scroll-mt-24 mb-60">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Certifications & Seminars
        </h2>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />
      <CertificationTimeline items={certificationData} />
    </section>
  );
}
