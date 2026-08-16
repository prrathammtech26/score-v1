"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes. Chapter-wise PYQs are free forever with no limits. You also get three full timed mocks free — no credit card required. Premium unlocks unlimited mocks, Custom Mock Builder, and detailed analytics.",
  },
  {
    question: 'What does "until your exam" mean?',
    answer:
      "You pay once and get full access until your exam date. Class 12 students appearing in 2027 get access until 31 May 2027. Class 11 students appearing in 2028 get access until 31 May 2028. No subscriptions, no renewals.",
  },
  {
    question: "Where do the questions come from?",
    answer:
      "All questions are sourced from officially released NTA response sheets and exam papers from 2020 to 2026. Every question is tagged by exam, year, shift, subject, and chapter.",
  },
  {
    question: "Are there video solutions?",
    answer:
      "Score focuses on the test-taking experience and analytics. Detailed text solutions are provided. Video solutions are not currently included.",
  },
  {
    question: "Is there an app?",
    answer:
      "Score is a web app optimised for desktop and mobile browsers. A native app is on the roadmap but not available yet.",
  },
  {
    question: "Can I build a Custom Mock with any number of questions?",
    answer:
      "Custom Mocks follow the official exam pattern for the selected exam type. For JEE Main, that's 90 questions (30 per subject). You choose which shifts to pull from, not the question count.",
  },
  {
    question: "Will you add more years or exams?",
    answer:
      "We add new papers as they're officially released. If NTA publishes 2027 papers, they'll be on Score. Additional exams may be added based on demand.",
  },
  {
    question: "How is this different from the free apps?",
    answer:
      "Free apps give you questions. Score gives you the full exam experience — timed mocks, NTA-style interface, Custom Mock Builder, and analytics that tell you exactly where you lost marks and time.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes. If you're not satisfied within 7 days of purchase and haven't used more than 5 full mocks, we'll refund you in full. See our Refund & Cancellation Policy for details.",
  },
  {
    question: "Do you need my phone number?",
    answer:
      "No. Sign up with email or Google. We don't require a phone number.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
