"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const exams = [
  {
    name: "JEE Main",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    years: "2020 – 2026",
    papers: "Multiple shifts per session",
    questions: "90 per paper · 3 hours",
  },
  {
    name: "JEE Advanced",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    years: "2020 – 2026",
    papers: "Paper 1 & Paper 2",
    questions: "Varies by year · 3 hours each",
  },
  {
    name: "NEET",
    subjects: ["Physics", "Chemistry", "Biology"],
    years: "2020 – 2026",
    papers: "Single paper per year",
    questions: "200 · 3 hours 20 min",
  },
  {
    name: "MHT-CET",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    years: "2020 – 2026",
    papers: "PCM combined",
    questions: "150 · 3 hours",
  },
];

export function ExamsSection() {
  return (
    <section id="exams" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Four exams. Every paper since 2020.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {exams.map((exam, i) => (
            <ScrollReveal key={exam.name} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.02]">
                <h3 className="text-xl font-semibold text-white">{exam.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exam.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-zinc-500">Years</dt>
                    <dd className="text-zinc-300">{exam.years}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-zinc-500">Papers</dt>
                    <dd className="text-zinc-300">{exam.papers}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-zinc-500">Format</dt>
                    <dd className="text-zinc-300">{exam.questions}</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
