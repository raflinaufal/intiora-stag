import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ProductsSection } from "@/components/sections/products-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <SolutionsSection />
      <IntegrationsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
