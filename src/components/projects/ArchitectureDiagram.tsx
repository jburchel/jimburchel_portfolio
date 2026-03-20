"use client";

import { useState } from "react";

interface Module {
  name: string;
  description: string;
}

interface ArchitectureDiagramProps {
  modules: Module[];
}

export default function ArchitectureDiagram({ modules }: ArchitectureDiagramProps) {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  // Arrange modules in a grid pattern
  const colors = [
    "bg-blue-500/20 border-blue-500/40 text-blue-400",
    "bg-emerald-500/20 border-emerald-500/40 text-emerald-400",
    "bg-purple-500/20 border-purple-500/40 text-purple-400",
    "bg-amber-500/20 border-amber-500/40 text-amber-400",
    "bg-rose-500/20 border-rose-500/40 text-rose-400",
    "bg-cyan-500/20 border-cyan-500/40 text-cyan-400",
    "bg-indigo-500/20 border-indigo-500/40 text-indigo-400",
    "bg-teal-500/20 border-teal-500/40 text-teal-400",
    "bg-orange-500/20 border-orange-500/40 text-orange-400",
    "bg-pink-500/20 border-pink-500/40 text-pink-400",
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Platform Architecture</h3>

      {/* Central Hub */}
      <div className="flex flex-col items-center gap-6">
        <div className="rounded-xl border-2 border-accent bg-accent/10 px-6 py-3 text-center">
          <p className="font-mono text-sm font-bold text-accent">Unified Platform Core</p>
          <p className="text-xs text-muted">Google OAuth SSO &middot; RBAC &middot; PostgreSQL</p>
        </div>

        {/* Module Grid */}
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {modules.map((module, index) => (
            <div
              key={module.name}
              className={`relative cursor-pointer rounded-lg border p-3 text-center transition-all hover:scale-105 ${
                colors[index % colors.length]
              }`}
              onMouseEnter={() => setHoveredModule(module.name)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              <p className="text-xs font-semibold">{module.name}</p>

              {/* Tooltip */}
              {hoveredModule === module.name && (
                <div className="absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-lg border border-border bg-background p-3 text-left shadow-xl">
                  <p className="text-xs font-semibold text-foreground">{module.name}</p>
                  <p className="mt-1 text-xs text-muted">{module.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
