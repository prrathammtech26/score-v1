"use client";

import { Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const rows = [
  {
    feature: "Chapter-wise PYQs",
    score: "Free, unlimited",
    others: "Free",
    scoreHighlight: true,
  },
  {
    feature: "Full papers as timed mocks",
    score: "Included",
    others: "₹1,600+",
    scoreHighlight: true,
  },
  {
    feature: "Build a paper from multiple shifts",
    score: "Included",
    others: "Not available",
    scoreHighlight: true,
    othersNegative: true,
  },
  {
    feature: "Cross-year subject mixing",
    score: "Included",
    others: "Not available",
    scoreHighlight: true,
    othersNegative: true,
  },
  {
    feature: "Detailed analytics and time tracking",
    score: "Included",
    others: "Paid tier",
    scoreHighlight: true,
  },
  {
    feature: "Mistake Notebook",
    score: "Included",
    others: "Varies",
    scoreHighlight: true,
  },
  {
    feature: "NTA-style test interface",
    score: "Included",
    others: "Varies",
    scoreHighlight: true,
  },
  {
    feature: "Price",
    score: "₹499 until your exam",
    others: "₹1,600+",
    scoreHighlight: true,
    isPrice: true,
  },
];

export function ComparisonTable() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.01] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            What ₹499 gets you.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="pb-4 pr-4 text-left text-sm font-medium text-zinc-500" scope="col" />
                  <th
                    className="pb-4 px-4 text-left text-sm font-semibold text-orange-400"
                    scope="col"
                  >
                    Score
                  </th>
                  <th
                    className="pb-4 pl-4 text-left text-sm font-medium text-zinc-500"
                    scope="col"
                  >
                    Other PYQ platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="py-4 pr-4 text-sm text-zinc-300">{row.feature}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-orange-400" />
                        <span
                          className={cn(
                            "text-sm",
                            row.isPrice
                              ? "font-semibold text-white"
                              : "font-medium text-white"
                          )}
                        >
                          {row.score}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-2">
                        {row.othersNegative ? (
                          <X className="h-4 w-4 shrink-0 text-zinc-600" />
                        ) : (
                          <span className="h-4 w-4 shrink-0" />
                        )}
                        <span className="text-sm text-zinc-500">{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
