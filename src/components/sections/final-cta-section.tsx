import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { finalCtaData } from "@/data/landing";
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-white">
      <Container>
        <div className="relative rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Subtle Ambient Background circles */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-2xs mb-6">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>MULAI TRANSFORMASI BISNIS ANDA</span>
            </div>

            {/* Main CTA Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.2]">
              {finalCtaData.heading}
            </h2>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {finalCtaData.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href={finalCtaData.primaryCta.href} variant="primary" size="lg">
                <Zap className="h-4 w-4 mr-1" />
                {finalCtaData.primaryCta.label}
              </Button>
              <Button href={finalCtaData.secondaryCta.href} variant="secondary" size="lg">
                {finalCtaData.secondaryCta.label}
              </Button>
            </div>

            {/* Trust Note */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Setup dalam 5 menit
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-blue-600" /> Tanpa kartu kredit
              </span>
              <span>&bull;</span>
              <span>14 hari garansi kepuasan</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
