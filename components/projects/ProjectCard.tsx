import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpenDemo: (url?: string) => void;
}

/**
 * Renders a single project card with demo / repo links.
 */
export function ProjectCard({ project, onOpenDemo }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="lg:p-6">
        <CardTitle className="group-hover:text-primary transition-colors lg:text-xl">
          {project.title}
        </CardTitle>
        <CardDescription className="lg:text-base">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="lg:px-6 lg:pb-6">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          {project.details}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            className="flex-1 lg:text-sm"
            onClick={() => onOpenDemo(project.demoUrl)}
          >
            <span className="inline-flex items-center gap-2">
              <ExternalLink className="h-3.5 w-3.5" />
              Open
            </span>
          </Button>

          {project.repoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent lg:text-sm"
              asChild
            >
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-3.5 w-3.5" />
                View Repository
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
