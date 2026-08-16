"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlowButton } from "@/components/ui/glow-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Class 12 · Appearing in 2027",
    originalPrice: "₹999",
    price: "₹499",
    discount: "50% off",
    access: "Full access until 31 May 2027",
    featured: true,
  },
  {
    title: "Class 11 · Appearing in 2028",
    originalPrice: "₹1,999",
    price: "₹999",
    discount: "50% off",
    access: "Full access until 31 May 2028",
    featured: false,
  },
];

const features = [
  "Unlimited full papers as timed mocks",
  "Custom Mock Builder",
  "Detailed analytics & time tracking",
  "Mistake Notebook & Saved Questions",
  "All exams: JEE Main, Advanced, NEET, MHT-CET",
  "Chapter-wise PYQs (free forever, even without premium)",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            One payment. Everything included. Until your exam.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.title} delay={i * 0.1}>
              <div
                className={cn(
                  "relative h-full rounded-xl border p-6 sm:p-8 transition-all hover:-translate-y-1",
                  plan.featured
                    ? "border-orange-500/30 bg-gradient-to-br from-orange-500/[0.08] to-transparent shadow-[0_0_40px_rgba(249,115,22,0.08)]"
                    : "border-white/[0.08] bg-[#0a0a0a] hover:border-white/[0.12]"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6 rounded-full bg-orange-500 px-3 py-0.5 text-xs font-medium text-black">
                    Most popular
                  </div>
                )}
                <h3 className="text-lg font-medium text-white">{plan.title}</h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-lg text-zinc-500 line-through">{plan.originalPrice}</span>
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-400">
                    {plan.discount}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{plan.access}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8">
            <p className="mb-4 text-sm font-medium text-zinc-400">Everything included</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GlowButton asChild size="lg">
              <Link href="/signup">Start free</Link>
            </GlowButton>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">Get Premium</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
