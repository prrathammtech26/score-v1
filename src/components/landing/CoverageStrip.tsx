"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  { value: 0, label: "Papers, 2020–2026", placeholder: "[X]" },
  { value: 0, label: "Questions, tagged by chapter", placeholder: "[X]" },
  { value: 4, label: "Exams supported", suffix: "" },
  { value: 100, label: "From official NTA response sheets", suffix: "%" },
];

export function CoverageStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {stat.placeholder ? (
                    <span className="text-orange-400">{stat.placeholder}</span>
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="mt-2 text-sm text-zinc-500 sm:text-base">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
