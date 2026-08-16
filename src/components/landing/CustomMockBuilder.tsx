"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Clock, FileText, Layers, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlowButton } from "@/components/ui/glow-button";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const subjects = [
  {
    name: "Physics",
    paper: "JEE Main 2025 · 22 Jan · Shift 1",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
  },
  {
    name: "Chemistry",
    paper: "JEE Main 2024 · 30 Jan · Shift 2",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },
  {
    name: "Mathematics",
    paper: "JEE Main 2025 · 04 Apr · Shift 1",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
  },
];

const useCases = [
  {
    title: "Build the worst paper you can find.",
    description: "Combine the hardest shifts from each subject into one brutal mock.",
  },
  {
    title: "Attack one subject.",
    description: "Pull the toughest Chemistry shifts from three different years.",
  },
  {
    title: "Isolate a variable.",
    description: "Same year, same exam — only the shift changes. See if it matters.",
  },
  {
    title: "Test across years, not just shifts.",
    description: "Mix 2023 Physics with 2025 Chemistry. Pattern stays, difficulty varies.",
  },
];

interface CustomMockBuilderProps {
  compact?: boolean;
}

export function CustomMockBuilder({ compact = false }: CustomMockBuilderProps) {
  const [assembled, setAssembled] = useState(false);
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!compact && inView) {
      const timer = setTimeout(() => setAssembled(true), reducedMotion ? 0 : 600);
      return () => clearTimeout(timer);
    }
  }, [compact, inView, reducedMotion]);

  const handleAssemble = () => {
    if (reducedMotion) {
      setAssembled(true);
      return;
    }
    setAssembled(false);
    setTimeout(() => setAssembled(true), 100);
  };

  const content = (
    <div ref={sectionRef}>
      {/* Subject cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {subjects.map((subject, i) => (
          <motion.div
            key={subject.name}
            layout
            className={cn(
              "rounded-lg border bg-gradient-to-br p-4 transition-shadow",
              subject.border,
              subject.color,
              assembled && "sm:scale-[0.97] sm:opacity-60"
            )}
            animate={
              assembled && !reducedMotion
                ? {
                    x: i === 0 ? 80 : i === 2 ? -80 : 0,
                    y: i === 1 ? -20 : 20,
                    scale: 0.85,
                    opacity: 0.4,
                  }
                : { x: 0, y: 0, scale: 1, opacity: 1 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 25, delay: i * 0.05 }}
          >
            <p className="text-xs uppercase tracking-wider text-zinc-500">{subject.name}</p>
            <p className="mt-2 text-sm font-medium text-white">{subject.paper}</p>
          </motion.div>
        ))}
      </div>

      {/* Assembly arrow */}
      {compact && (
        <div className="relative my-6 flex justify-center">
          <AnimatePresence>
            {!assembled && (
              <motion.button
                type="button"
                onClick={handleAssemble}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-xs text-zinc-400 transition-colors hover:border-orange-500/30 hover:text-orange-400"
              >
                <Layers className="h-3.5 w-3.5" />
                Assemble mock
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Assembled mock */}
      <AnimatePresence>
        {assembled && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="overflow-hidden rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/[0.08] to-transparent shadow-[0_0_60px_rgba(249,115,22,0.12)]"
          >
            <div className="border-b border-orange-500/20 bg-orange-500/[0.06] px-5 py-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Your Mock</span>
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-white/[0.08] bg-black/30 p-4">
                <FileText className="mb-2 h-4 w-4 text-zinc-500" />
                <p className="text-xs text-zinc-500">Exam pattern</p>
                <p className="mt-1 text-sm font-medium text-white">JEE Main (NTA)</p>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-black/30 p-4">
                <Layers className="mb-2 h-4 w-4 text-zinc-500" />
                <p className="text-xs text-zinc-500">Questions</p>
                <p className="mt-1 text-sm font-medium text-white">90 (30 × 3)</p>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-black/30 p-4">
                <p className="mb-2 text-xs text-zinc-500">Marking</p>
                <p className="text-sm font-medium text-white">+4 / −1</p>
                <p className="mt-0.5 text-xs text-zinc-500">MCQ &amp; Numerical</p>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-black/30 p-4">
                <Clock className="mb-2 h-4 w-4 text-zinc-500" />
                <p className="text-xs text-zinc-500">Timer</p>
                <p className="mt-1 text-sm font-medium text-white">3 hours</p>
              </div>
            </div>
            <div className="border-t border-orange-500/10 px-5 py-3">
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400">
                <span>Physics → 2025 Shift 1</span>
                <span className="text-zinc-600">·</span>
                <span>Chemistry → 2024 Shift 2</span>
                <span className="text-zinc-600">·</span>
                <span>Math → 2025 Shift 1</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Use cases */}
      {!compact && (
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {useCases.map((useCase, i) => (
            <ScrollReveal key={useCase.title} delay={i * 0.08}>
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]">
                <h4 className="text-sm font-medium text-white">{useCase.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {useCase.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );

  if (compact) {
    return <div className="rounded-xl bg-[#0a0a0a] p-5">{content}</div>;
  }

  return (
    <section id="custom-mock" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-400">
              Custom Mock Builder
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              The paper you need has never been set. Build it anyway.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12">{content}</div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <GlowButton asChild size="lg">
              <Link href="/signup">Build your first mock</Link>
            </GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
