import { Container } from "@/components/ui/container";
import { finalCtaData } from "@/data/landing";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-blue-600 px-6 py-14 sm:px-12 sm:py-20 text-center text-white shadow-2xl shadow-blue-600/30 overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-white text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MULAI PERJALANAN OTOMASI BISNIS ANDA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {finalCtaData.heading}
            </h2>

            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
              {finalCtaData.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg active:scale-95"
              >
                <span>{finalCtaData.primaryCta.label} 14 Hari</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-blue-700/80 hover:bg-blue-700 text-white font-semibold text-sm border border-blue-400/30 transition-all"
              >
                <span>{finalCtaData.secondaryCta.label}</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>{finalCtaData.trustNote}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
