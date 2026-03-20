"use client";

import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import SkillCard from "./SkillCard";
import { SKILL_CATEGORIES } from "@/lib/skills-data";

export default function Skills() {
  return (
    <Section id="skills" className="bg-surface/50">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I use to build modern, scalable applications"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {category.title}
            </h3>
            <div className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
