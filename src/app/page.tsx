import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { PortfolioHighlight } from "@/components/sections/PortfolioHighlight";
import { TeamSection } from "@/components/sections/TeamSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LeoPartnership } from "@/components/sections/LeoPartnership";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <PortfolioHighlight />
      <TeamSection />
      <ServicesSection />
      <LeoPartnership />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
