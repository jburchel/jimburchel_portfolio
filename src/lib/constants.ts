import type { NavLink, TimelineItem } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023–Present",
    title: "Systems & Technology Director / Full-Stack Developer",
    company: "Crossover Global & Freelance",
    description:
      "Architect and develop CG-One, a 380K+ line enterprise platform with SSO, 10+ modules, and role-based access. Oversee all technology infrastructure for a multinational nonprofit. Simultaneously building freelance web applications with Next.js and Vercel.",
  },
  {
    year: "2011–2022",
    title: "Trainer",
    company: "NC School Health Training Center (ECU)",
    description:
      "Delivered professional training to youth-serving professionals across North Carolina. Trained professionals nationally in evidence-based curricula.",
  },
  {
    year: "2006–2017",
    title: "Pregnancy Prevention Director",
    company: "Thomasville City Schools / Communities In Schools",
    description:
      "Managed award-winning adolescent pregnancy prevention program with national recognition. Received multiple APPCNC awards. Certificate in Non-Profit Management from Duke University (2009).",
  },
  {
    year: "2003–Present",
    title: "Web Development",
    company: "Self-Taught & Ongoing",
    description:
      "Building websites since 2003. Progressed from basic web development to full-stack engineering with modern frameworks. Serious production development work over the last 3 years.",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/jburchel",
  linkedin: "https://linkedin.com/in/jimburchel",
};

export const HERO_ROLES = [
  "Full-Stack Developer",
  "Systems Architect",
  "Technology Director",
];
