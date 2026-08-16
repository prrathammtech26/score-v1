"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "problem", label: "Problem" },
  { id: "how-it-works", label: "How it works" },
  { id: "custom-mock", label: "Custom Mock" },
  { id: "analytics", label: "Analytics" },
  { id: "exams", label: "Exams" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export function ScrollSidebar() {
  const activeId = useScrollSpy(sections.map((s) => s.id));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Page sections"
    >
      <div className="relative flex flex-col items-end gap-3">
        {/* Progress line */}
        <div className="absolute right-[5px] top-0 h-full w-px bg-white/[0.08]">
          <div
            className="w-full bg-orange-500/60 transition-all duration-150"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              className="group relative flex items-center gap-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-current={isActive ? "true" : undefined}
              aria-label={`Go to ${section.label}`}
            >
              <span
                className={cn(
                  "pointer-events-none absolute right-6 whitespace-nowrap rounded-md border px-2 py-1 text-xs transition-all duration-200",
                  isActive
                    ? "translate-x-0 opacity-100 border-orange-500/30 bg-orange-500/10 text-orange-300"
                    : "translate-x-2 opacity-0 border-white/[0.08] bg-[#0a0a0a] text-zinc-400 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                )}
              >
                {section.label}
              </span>
              <span
                className={cn(
                  "relative z-10 block h-2.5 w-2.5 rounded-full border transition-all duration-200",
                  isActive
                    ? "scale-125 border-orange-500 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]"
                    : "border-white/20 bg-[#0a0a0a] group-hover:border-white/40"
                )}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
