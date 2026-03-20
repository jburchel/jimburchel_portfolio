"use client";

import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "./ContactForm";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <Section id="contact" className="bg-surface/50">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind? Let's talk about how I can help."
      />

      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
        {/* Info */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m currently available for freelance work. Whether you need a
            full-stack application built from scratch, help modernizing a legacy
            system, or ongoing development support, I&apos;d love to hear from
            you.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:jburchel@gmail.com"
              className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
            >
              <FiMail size={20} className="text-accent" />
              jburchel@gmail.com
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
            >
              <FiLinkedin size={20} className="text-accent" />
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
            >
              <FiGithub size={20} className="text-accent" />
              GitHub
            </a>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </Section>
  );
}
