"use client";

import { TIMELINE } from "@/lib/constants";

export default function Timeline() {
  return (
    <div className="relative ml-4 border-l border-border pl-8">
      {TIMELINE.map((item, index) => (
        <div key={index} className="relative mb-10 last:mb-0">
          {/* Dot */}
          <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />

          <span className="mb-1 inline-block font-mono text-sm text-accent">
            {item.year}
          </span>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-muted">{item.company}</p>
          <p className="mt-2 text-muted">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
