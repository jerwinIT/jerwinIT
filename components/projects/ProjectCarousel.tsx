"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { useProjectCarousel } from "@/hooks/useProjectCarousel";
import type { Project } from "@/types";

interface ProjectCarouselProps {
  projects: readonly Project[];
  onOpenDemo: (url?: string) => void;
}

/**
 * Horizontally sliding carousel of project cards with prev/next controls
 * and dot-indicator pagination.
 */
export function ProjectCarousel({
  projects,
  onOpenDemo,
}: ProjectCarouselProps) {
  const { slide, goToPrevious, goToNext, goToSlide } = useProjectCarousel(
    projects.length,
  );

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="bg-transparent"
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="bg-transparent"
          onClick={goToNext}
          aria-label="Next project"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full shrink-0">
              <ProjectCard project={project} onOpenDemo={onOpenDemo} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              slide === index
                ? "w-6 bg-primary"
                : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
