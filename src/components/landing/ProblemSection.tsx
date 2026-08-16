"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const problems = [
  {
    number: "01",
    title: "Solving questions, not papers.",
    description:
      "Chapter-wise PYQs are everywhere. But solving isolated questions isn't the same as sitting through a 3-hour paper under pressure.",
  },
  {
    number: "02",
    title: "Checking answers, not learning from them.",
    description:
      "Most platforms stop at right or wrong. You see the answer, move on, and make the same mistake again next week.",
  },
  {
    number: "03",
    title: "Scoring blind.",
    description:
      "You know your total. You don't know which chapters cost you marks, which questions ate your time, or whether you'd have done better on a different shift.",
  },
];

export function ProblemSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Every question you need is already free. That&apos;s exactly the problem.
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 sm:mt-20">
          {/* Journey line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-orange-500/50 via-white/10 to-transparent sm:left-8 lg:block"
          />

          <div className="space-y-12 sm:space-y-16">
            {problems.map((problem, i) => (
              <ScrollReveal key={problem.number} delay={i * 0.12}>
                <motion.div
                  className="relative grid gap-6 lg:grid-cols-[80px_1fr] lg:gap-12"
                  whileHover={reducedMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4 lg:block">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] font-mono text-xs text-orange-400 lg:mx-auto">
                      {problem.number}
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]">
                    <h3 className="text-xl font-medium text-white sm:text-2xl">
                      {problem.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="mt-16 max-w-3xl text-lg font-medium leading-relaxed text-zinc-300 sm:mt-20 sm:text-xl">
            Score fixes the third problem the way nobody else does — by letting you take the shift
            out of the equation entirely.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
