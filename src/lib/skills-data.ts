import type { SkillCategory } from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "React", icon: "SiReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Framer Motion", icon: "SiFramer" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Python", icon: "SiPython" },
      { name: "Drizzle ORM", icon: "SiDrizzle" },
      { name: "REST APIs", icon: "SiOpenapiinitiative" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Railway", icon: "SiRailway" },
      { name: "Git", icon: "SiGit" },
    ],
  },
  {
    title: "Auth & Security",
    skills: [
      { name: "Google OAuth", icon: "SiGoogle" },
      { name: "SSO", icon: "SiAuth0" },
      { name: "PCI DSS", icon: "SiShieldsdotio" },
      { name: "RBAC", icon: "SiGnuprivacyguard" },
    ],
  },
];
