import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ProductsSection } from "@/components/sections/products-section";
import { AgentBuilderSection } from "@/components/sections/agent-builder-section";
import { ChatFlowSection } from "@/components/sections/chat-flow-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <AgentBuilderSection />
      <ChatFlowSection />
      <SolutionsSection />
      <IntegrationsSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
