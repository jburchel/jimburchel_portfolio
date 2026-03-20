"use client";

import Image from "next/image";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Timeline from "./Timeline";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="Full-stack developer with a passion for building enterprise-grade systems"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Bio */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl border-2 border-border">
              <Image
                src="/images/headshot.jpg"
                alt="Jim Burchel"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted">
                I&apos;m a full-stack developer with hands-on experience building
                production-grade web applications, complex SSO/OAuth-integrated
                platforms, and mission-critical internal tools. I also serve as
                Systems &amp; Technology Director at Crossover Global, where I
                architect and develop enterprise tooling for a multinational
                nonprofit.
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-muted">
            I specialize in Next.js, Python, Supabase, Vercel, Railway, and
            Tailwind CSS. I bring a rare combination of technical depth, project
            management experience, and the communication skills to translate
            complex technical concepts for any audience. I&apos;ve been building
            websites since 2003 and have been doing serious production
            development work over the last three years.
          </p>

          <p className="leading-relaxed text-muted">
            When I&apos;m not coding, I&apos;m spending time with my wife Dana, our
            three grown kids, and our four granddaughters. Family keeps me
            grounded and reminds me why building reliable, impactful software
            matters.
          </p>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="mb-6 text-lg font-semibold">Career Journey</h3>
          <Timeline />
        </div>
      </div>
    </Section>
  );
}
