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
    title: "Systems & Technology Director",
    company: "Crossover Global",
    description:
      "Architect and develop CG-One, a 380K+ line enterprise platform with Google OAuth SSO, 10+ modules, and role-based access. Oversee all technology infrastructure for a multinational nonprofit.",
  },
  {
    year: "2023–Present",
    title: "Freelance Full-Stack Developer",
    company: "Independent",
    description:
      "Design and build custom web applications for clients using Next.js, Supabase, and Vercel. Deliver production-ready projects with clean, maintainable codebases.",
  },
  {
    year: "2002–2023",
    title: "Web Development (Self-Directed)",
    company: "",
    description:
      "Built and deployed websites for organizations starting in 2002, steadily expanding from static sites to dynamic web applications. Laid the foundation for the full-stack engineering work I do today.",
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
