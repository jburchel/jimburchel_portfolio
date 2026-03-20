"use client";

import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "./ProjectCard";
import { CASE_STUDIES } from "@/lib/case-studies";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Enterprise platforms and web applications I've built"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {CASE_STUDIES.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
