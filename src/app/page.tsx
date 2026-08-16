import { AnimatedBackground } from "@/components/landing/AnimatedBackground";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CoverageStrip } from "@/components/landing/CoverageStrip";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PracticeModes } from "@/components/landing/PracticeModes";
import { CustomMockBuilder } from "@/components/landing/CustomMockBuilder";
import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { ExamsSection } from "@/components/landing/ExamsSection";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Pricing } from "@/components/landing/Pricing";
import { FounderSection } from "@/components/landing/FounderSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { ScrollSidebar } from "@/components/landing/ScrollSidebar";
import { PullToRefresh } from "@/components/landing/PullToRefresh";

export default function Home() {
  return (
    <PullToRefresh>
      <AnimatedBackground />
      <Navbar />
      <ScrollSidebar />

      <main>
        <Hero />
        <CoverageStrip />
        <ProblemSection />
        <PracticeModes />
        <CustomMockBuilder />
        <AnalyticsSection />
        <ExamsSection />
        <ComparisonTable />
        <Pricing />
        <FounderSection />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </PullToRefresh>
  );
}
