"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Target,
  BookMarked,
  AlertTriangle,
  Bookmark,
  Download,
  BarChart3,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const subjectScores = [
  { name: "Physics", score: 72, color: "bg-blue-500" },
  { name: "Chemistry", score: 58, color: "bg-emerald-500" },
  { name: "Mathematics", score: 81, color: "bg-purple-500" },
];

const chapterScores = [
  { name: "Current Electricity", accuracy: 45, time: "2m 14s" },
  { name: "Thermodynamics", accuracy: 62, time: "1m 48s" },
  { name: "Organic Chemistry", accuracy: 71, time: "1m 22s" },
  { name: "Calculus", accuracy: 88, time: "1m 05s" },
];

const weakChapters = ["Electrostatics", "Coordination Compounds", "3D Geometry"];

function MiniBarChart({ data }: { data: typeof subjectScores }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {data.map((item, i) => (
        <div key={item.name}>
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-zinc-400">{item.name}</span>
            <span className="font-medium text-white">{item.score}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className={`h-full rounded-full ${item.color}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.score}%` }}
              viewport={{ once: true }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TrendChart() {
  const reducedMotion = useReducedMotion();
  const points = [142, 156, 148, 171, 165, 182, 195];
  const max = Math.max(...points);
  const width = 280;
  const height = 80;
  const pathD = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - (p / max) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" aria-hidden>
      <defs>
        <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(249,115,22)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(249,115,22)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${pathD} L ${width} ${height} L 0 ${height} Z`}
        fill="url(#trendGrad)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="rgb(249,115,22)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={reducedMotion ? { duration: 0 } : { duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

export function AnalyticsSection() {
  return (
    <section id="analytics" className="border-y border-white/[0.06] bg-white/[0.01] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            A score is a number. Score tells you what to do with it.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Main score card */}
          <ScrollReveal delay={0.05} className="lg:col-span-1">
            <div className="h-full rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6">
              <p className="text-xs uppercase tracking-wider text-zinc-500">Overall score</p>
              <p className="mt-2 text-5xl font-semibold tracking-tight text-white">
                195<span className="text-2xl text-zinc-500">/300</span>
              </p>
              <div className="mt-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-emerald-400">+23 from last mock</span>
              </div>
              <div className="mt-6 rounded-lg border border-orange-500/20 bg-orange-500/[0.06] p-4">
                <p className="text-xs text-zinc-500">Estimated percentile</p>
                <p className="mt-1 text-2xl font-semibold text-orange-400">94.2</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Subject performance */}
          <ScrollReveal delay={0.1} className="lg:col-span-1">
            <div className="h-full rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6">
              <div className="mb-4 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-zinc-500" />
                <p className="text-sm font-medium text-white">Subject performance</p>
              </div>
              <MiniBarChart data={subjectScores} />
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <Clock className="mb-1 h-3.5 w-3.5 text-zinc-500" />
                  <p className="text-xs text-zinc-500">Avg. time/Q</p>
                  <p className="text-sm font-medium text-white">1m 38s</p>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <Target className="mb-1 h-3.5 w-3.5 text-zinc-500" />
                  <p className="text-xs text-zinc-500">Accuracy</p>
                  <p className="text-sm font-medium text-white">68%</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Score trend */}
          <ScrollReveal delay={0.15} className="lg:col-span-1">
            <div className="h-full rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6">
              <p className="text-sm font-medium text-white">Score trends</p>
              <p className="mt-1 text-xs text-zinc-500">Last 7 mocks</p>
              <div className="mt-4">
                <TrendChart />
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-white/[0.08] py-2 text-xs text-zinc-400 transition-colors hover:border-white/[0.15] hover:text-white">
                <Download className="h-3.5 w-3.5" />
                Download scorecard
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Chapter performance + tools */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6">
              <p className="mb-4 text-sm font-medium text-white">Chapter performance</p>
              <div className="space-y-3">
                {chapterScores.map((chapter) => (
                  <div
                    key={chapter.name}
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-white/[0.02] px-4 py-3"
                  >
                    <span className="text-sm text-zinc-300">{chapter.name}</span>
                    <div className="flex items-center gap-4 text-xs">
                      <span
                        className={
                          chapter.accuracy < 50 ? "text-red-400" : "text-zinc-400"
                        }
                      >
                        {chapter.accuracy}% acc.
                      </span>
                      <span className="text-zinc-500">{chapter.time}/Q</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-5">
                <AlertTriangle className="mb-3 h-4 w-4 text-amber-400" />
                <p className="text-sm font-medium text-white">Weak chapters</p>
                <ul className="mt-3 space-y-2">
                  {weakChapters.map((ch) => (
                    <li key={ch} className="text-sm text-zinc-400">
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-5">
                <BookMarked className="mb-3 h-4 w-4 text-orange-400" />
                <p className="text-sm font-medium text-white">Mistake Notebook</p>
                <p className="mt-2 text-2xl font-semibold text-white">47</p>
                <p className="text-xs text-zinc-500">questions to revisit</p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-5 sm:col-span-2">
                <Bookmark className="mb-3 h-4 w-4 text-zinc-500" />
                <p className="text-sm font-medium text-white">Saved Questions</p>
                <p className="mt-2 text-2xl font-semibold text-white">128</p>
                <p className="text-xs text-zinc-500">bookmarked for later review</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
