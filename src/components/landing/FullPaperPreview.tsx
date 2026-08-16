"use client";

import { Clock, ChevronLeft, ChevronRight, Flag, Grid3X3, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface FullPaperPreviewProps {
  compact?: boolean;
}

export function FullPaperPreview({ compact = false }: FullPaperPreviewProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]",
        compact && "shadow-xl"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <Layers className="h-4 w-4 text-zinc-500" />
          <div>
            <p className="text-sm font-medium text-white">JEE Main 2025 · 22 Jan · Shift 1</p>
            <p className="text-xs text-zinc-500">Full paper · 90 questions · 3 hours</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
          <Clock className="h-3.5 w-3.5 text-orange-400" />
          <span className="font-mono text-sm font-medium text-orange-300">02:58:42</span>
        </div>
      </div>

      {/* Section tabs */}
      <div className="flex border-b border-white/[0.08]">
        {["Physics", "Chemistry", "Mathematics"].map((section, i) => (
          <button
            key={section}
            type="button"
            className={cn(
              "flex-1 border-b-2 px-4 py-2.5 text-xs font-medium transition-colors sm:text-sm",
              i === 0
                ? "border-orange-500 text-orange-400"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            )}
          >
            {section}
          </button>
        ))}
      </div>

      <div className={cn("grid", compact ? "grid-cols-1 lg:grid-cols-[1fr_160px]" : "grid-cols-1 lg:grid-cols-[1fr_180px]")}>
        {/* Question */}
        <div className="border-b border-white/[0.08] p-4 sm:border-b-0 sm:border-r sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Question 12 of 30</span>
            <button className="flex items-center gap-1 text-xs text-zinc-500 hover:text-amber-400">
              <Flag className="h-3 w-3" /> Mark for review
            </button>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">
            Two blocks of masses 2 kg and 4 kg are connected by a light string passing over a
            frictionless pulley. The 4 kg block is on a smooth horizontal surface. The acceleration
            of the system is:
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {["g/3", "g/2", "2g/3", "g"].map((opt, i) => (
              <div
                key={opt}
                className={cn(
                  "flex items-center gap-2 rounded-md border px-3 py-2 text-sm",
                  i === 0
                    ? "border-orange-500/40 bg-orange-500/10 text-white"
                    : "border-white/[0.06] text-zinc-400"
                )}
              >
                <span className="text-xs font-medium">{String.fromCharCode(65 + i)}.</span>
                <span className="font-mono text-xs">{opt}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-2">
            <button className="flex h-9 items-center gap-1 rounded border border-white/[0.08] px-3 text-xs text-zinc-400 hover:border-white/[0.15]">
              <ChevronLeft className="h-3.5 w-3.5" /> Previous
            </button>
            <button className="flex h-9 items-center gap-1 rounded bg-orange-500 px-4 text-xs font-medium text-black hover:bg-orange-400">
              Save & Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Palette */}
        <div className="p-4 sm:p-3">
          <div className="mb-2 flex items-center gap-1.5 text-xs text-zinc-500">
            <Grid3X3 className="h-3 w-3" /> Question palette
          </div>
          <div className="grid grid-cols-6 gap-1 sm:grid-cols-5">
            {Array.from({ length: 30 }, (_, i) => {
              const status =
                i < 5 ? "answered" : i === 5 ? "current" : i < 8 ? "review" : "unvisited";
              const colors = {
                answered: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
                current: "bg-orange-500/30 border-orange-500/50 text-orange-300",
                review: "bg-amber-500/20 border-amber-500/30 text-amber-400",
                unvisited: "bg-white/[0.03] border-white/[0.06] text-zinc-600",
              };
              return (
                <div
                  key={i}
                  className={cn(
                    "flex h-6 items-center justify-center rounded border text-[10px] font-medium",
                    colors[status]
                  )}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
          <div className="mt-3 space-y-1 border-t border-white/[0.06] pt-3 text-[10px] text-zinc-500">
            <div className="flex justify-between">
              <span>Answered</span>
              <span className="text-emerald-400">5</span>
            </div>
            <div className="flex justify-between">
              <span>Marked for review</span>
              <span className="text-amber-400">3</span>
            </div>
            <div className="flex justify-between">
              <span>Not visited</span>
              <span>22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
