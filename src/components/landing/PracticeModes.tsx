"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, Layers, Filter } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FullPaperPreview } from "./FullPaperPreview";
import { CustomMockBuilder } from "./CustomMockBuilder";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "chapter",
    label: "Chapter practice",
    tagline: "Free, always",
    icon: BookOpen,
  },
  {
    id: "full-paper",
    label: "Full papers",
    tagline: "The real thing, under the real clock",
    icon: FileText,
  },
  {
    id: "custom-mock",
    label: "Custom Mock",
    tagline: "Build your own paper",
    icon: Layers,
  },
];

function ChapterPracticePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]">
      <div className="border-b border-white/[0.08] px-5 py-4">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Filter className="h-4 w-4" />
          Filters
        </div>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-zinc-500">
            Subject
          </label>
          <div className="rounded-md border border-orange-500/30 bg-orange-500/10 px-4 py-2.5 text-sm text-white">
            Physics
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-zinc-500">
            Chapter
          </label>
          <div className="rounded-md border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white">
            Current Electricity
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-zinc-500">
            Exam
          </label>
          <div className="rounded-md border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-400">
            JEE Main
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-zinc-500">
            Status
          </label>
          <div className="flex gap-2">
            <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-zinc-400">
              All
            </span>
            <span className="rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs text-orange-300">
              Unsolved
            </span>
            <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-zinc-400">
              Solved
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.08] px-5 py-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-500">847 questions available</span>
          <span className="text-orange-400">Free forever</span>
        </div>
      </div>
    </div>
  );
}

export function PracticeModes() {
  const [activeTab, setActiveTab] = useState("chapter");

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Three ways to practise. One question bank behind all of them.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const isCustomMock = tab.id === "custom-mock";

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex flex-1 flex-col items-start rounded-lg border px-4 py-4 text-left transition-all sm:px-5",
                    isActive
                      ? isCustomMock
                        ? "border-orange-500/40 bg-orange-500/[0.08]"
                        : "border-white/[0.12] bg-white/[0.04]"
                      : "border-white/[0.06] bg-transparent hover:border-white/[0.1] hover:bg-white/[0.02]"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      className={cn(
                        "h-4 w-4",
                        isActive && isCustomMock ? "text-orange-400" : "text-zinc-500"
                      )}
                    />
                    <span className="text-sm font-medium text-white">{tab.label}</span>
                  </div>
                  <span className="mt-1 text-xs text-zinc-500">{tab.tagline}</span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className={cn(
                        "absolute bottom-0 left-4 right-4 h-0.5 rounded-full sm:left-5 sm:right-5",
                        isCustomMock ? "bg-orange-500" : "bg-white/30"
                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "chapter" && <ChapterPracticePreview />}
              {activeTab === "full-paper" && <FullPaperPreview compact />}
              {activeTab === "custom-mock" && (
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.03] p-1">
                  <CustomMockBuilder compact />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
