"use client";

import Link from "next/link";
import { FiExternalLink, FiGithub, FiLock, FiArrowRight } from "react-icons/fi";
import TechBadge from "@/components/shared/TechBadge";
import type { CaseStudy } from "@/lib/types";

interface ProjectCardProps {
  project: CaseStudy;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {project.isPrivate && (
            <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-500">
              <FiLock size={12} />
              Private
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="View source"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="View live site"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
      <p className="mb-4 text-sm text-muted">{project.subtitle}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3">
        {project.metrics.slice(0, 4).map((metric) => (
          <div key={metric.label} className="rounded-lg bg-background p-3 text-center">
            <p className="text-lg font-bold text-accent">{metric.value}</p>
            <p className="text-xs text-muted">{metric.label}</p>
          </div>
        ))}
      </div>

      <Link
        href={`/case-studies/${project.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        View Case Study
        <FiArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
