export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  challenges: { title: string; description: string }[];
  modules?: { name: string; description: string }[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}
