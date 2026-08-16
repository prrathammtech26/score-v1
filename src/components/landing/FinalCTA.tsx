"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlowButton } from "@/components/ui/glow-button";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.06] via-[#0a0a0a] to-[#0a0a0a] px-6 py-16 sm:px-12 sm:py-20">
            {/* Animated border glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)",
                backgroundSize: "200% 100%",
                animation: "shimmer 4s ease-in-out infinite",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-50 blur-sm"
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                The paper is already written. Go find out how you&apos;d have done.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                Every JEE Main, JEE Advanced, NEET and MHT-CET paper since 2020. Free chapter
                practice, three free mocks, and no card until you decide it&apos;s worth ₹499.
              </p>
              <div className="mt-8 flex justify-center">
                <GlowButton asChild size="lg">
                  <Link href="/signup">Start free</Link>
                </GlowButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
