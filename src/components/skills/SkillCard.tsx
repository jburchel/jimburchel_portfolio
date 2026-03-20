"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiGit,
  SiGoogle,
} from "react-icons/si";
import { FiShield, FiLock, FiServer, FiDatabase, FiCode } from "react-icons/fi";
import type { Skill } from "@/lib/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  SiNextdotjs: <SiNextdotjs size={24} />,
  SiReact: <SiReact size={24} />,
  SiTypescript: <SiTypescript size={24} />,
  SiTailwindcss: <SiTailwindcss size={24} />,
  SiFramer: <SiFramer size={24} />,
  SiNodedotjs: <SiNodedotjs size={24} />,
  SiPython: <SiPython size={24} />,
  SiDrizzle: <FiDatabase size={24} />,
  SiOpenapiinitiative: <FiCode size={24} />,
  SiPostgresql: <SiPostgresql size={24} />,
  SiSupabase: <SiSupabase size={24} />,
  SiVercel: <SiVercel size={24} />,
  SiRailway: <FiServer size={24} />,
  SiGit: <SiGit size={24} />,
  SiGoogle: <SiGoogle size={24} />,
  SiAuth0: <FiLock size={24} />,
  SiShieldsdotio: <FiShield size={24} />,
  SiGnuprivacyguard: <FiLock size={24} />,
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3 transition-colors hover:bg-surface-hover">
      <span className="text-accent">{ICON_MAP[skill.icon] || <FiCode size={24} />}</span>
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}
