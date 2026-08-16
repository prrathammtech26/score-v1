"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ChevronLeft, ChevronRight, Flag, Grid3X3 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlowButton } from "@/components/ui/glow-button";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

function ExamPreview() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-2xl"
      animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-4 rounded-2xl bg-orange-500/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#0c0c0c] shadow-2xl shadow-black/50">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-xs font-medium text-zinc-400">JEE Main 2025 · Shift 1</span>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
            <Clock className="h-3.5 w-3.5 text-orange-400" />
            <span className="font-mono text-sm font-medium text-orange-300">02:47:18</span>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_140px] gap-0">
          {/* Question area */}
          <div className="border-r border-white/[0.08] p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-zinc-400">
                Physics
              </span>
              <span className="text-xs text-zinc-500">Q. 23 / 30</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-zinc-300">
              A particle of mass <span className="font-mono text-orange-400/90">m</span> moves in a
              circle of radius <span className="font-mono text-orange-400/90">R</span> with constant
              speed <span className="font-mono text-orange-400/90">v</span>. The magnitude of the
              average force during half a revolution is:
            </p>
            <div className="space-y-2">
              {["mv²/πR", "2mv²/πR", "mv²/R", "2mv²/R"].map((opt, i) => (
                <div
                  key={opt}
                  className={`flex items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors ${
                    i === 1
                      ? "border-orange-500/40 bg-orange-500/10 text-white"
                      : "border-white/[0.06] text-zinc-400"
                  }`}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded text-xs font-medium">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-mono text-xs">{opt}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300">
                <Flag className="h-3 w-3" /> Mark for review
              </button>
              <div className="flex gap-2">
                <button className="flex h-8 items-center gap-1 rounded border border-white/[0.08] px-3 text-xs text-zinc-400">
                  <ChevronLeft className="h-3 w-3" /> Previous
                </button>
                <button className="flex h-8 items-center gap-1 rounded bg-orange-500 px-3 text-xs font-medium text-black">
                  Save & Next <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Palette */}
          <div className="p-3">
            <div className="mb-2 flex items-center gap-1.5 text-xs text-zinc-500">
              <Grid3X3 className="h-3 w-3" /> Palette
            </div>
            <div className="mb-3 grid grid-cols-5 gap-1">
              {Array.from({ length: 30 }, (_, i) => {
                const status =
                  i < 8 ? "answered" : i === 8 ? "current" : i < 12 ? "review" : "unvisited";
                const colors = {
                  answered: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
                  current: "bg-orange-500/30 border-orange-500/50 text-orange-300",
                  review: "bg-amber-500/20 border-amber-500/30 text-amber-400",
                  unvisited: "bg-white/[0.03] border-white/[0.06] text-zinc-600",
                };
                return (
                  <div
                    key={i}
                    className={`flex h-6 items-center justify-center rounded border text-[10px] font-medium ${colors[status]}`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
            <div className="space-y-1 text-[10px] text-zinc-500">
              <div className="flex justify-between">
                <span>Answered</span>
                <span className="text-emerald-400">8</span>
              </div>
              <div className="flex justify-between">
                <span>Marked</span>
                <span className="text-amber-400">4</span>
              </div>
              <div className="flex justify-between">
                <span>Not visited</span>
                <span>18</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="border-t border-white/[0.08] px-4 py-2">
          <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[27%] rounded-full bg-gradient-to-r from-orange-600 to-orange-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                Stop letting the shift decide your score.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                Some JEE shifts have easy Physics and brutal Chemistry. Some are the other way
                round. You can&apos;t choose what you get on exam day — but you can choose what you
                practise on.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
                Score gives you every JEE Main, JEE Advanced, NEET and MHT-CET paper from 2020 to
                2026 as a real timed mock. And when no existing paper tests what you need, you build
                your own from any shifts you want.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <GlowButton asChild size="lg">
                  <Link href="/signup">Start free</Link>
                </GlowButton>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#how-it-works">See how it works</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-5 text-sm text-zinc-500">
                Chapter-wise PYQs free forever. Three full mocks free. No card.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15} direction="left">
            <ExamPreview />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
