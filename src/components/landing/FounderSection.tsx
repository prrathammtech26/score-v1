"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const founders = ["[FOUNDER NAME]", "[FOUNDER NAME]"];

export function FounderSection() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.01] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            We needed this and it didn&apos;t exist.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-400">
            <p>
              We sat JEE and MHT-CET. We know what it&apos;s like to hunt through PDF folders,
              Telegram channels, and Google Drive links just to find one paper from a specific
              shift.
            </p>
            <p>
              We solved thousands of chapter-wise questions but never felt ready for the real
              thing — because solving questions and sitting a 3-hour paper under a timer are
              completely different skills.
            </p>
            <p>
              We wanted a proper real-exam experience: the timer, the palette, the section
              switching, the marking scheme. And when we needed to practise the hardest possible
              combination of shifts, nothing let us build that paper.
            </p>
            <p className="text-zinc-300">
              So we built Score.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-6">
            {founders.map((name) => (
              <div key={name} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-xs text-zinc-500">
                  {name.charAt(1)}
                </div>
                <span className="text-sm font-medium text-zinc-300">{name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
