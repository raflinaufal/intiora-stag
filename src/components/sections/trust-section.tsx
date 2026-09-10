import { Container } from "@/components/ui/container";
import { trustData } from "@/data/landing";
import { MessageSquare, Building2, Layers, ShieldCheck } from "lucide-react";

export function TrustSection() {
  const metricIcons = [
    <MessageSquare key="msg" className="w-5 h-5 text-blue-600" />,
    <Building2 key="bld" className="w-5 h-5 text-blue-600" />,
    <Layers key="lyr" className="w-5 h-5 text-blue-600" />,
  ];

  return (
    <section className="relative py-16 sm:py-20 border-y border-slate-100 bg-slate-50/60 overflow-hidden">
      <Container>
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase">
            {trustData.headline}
          </p>
        </div>

        {/* Brand Logos Cloud / Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto mb-14">
          {trustData.logos.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-12 px-4 rounded-xl border border-slate-200/80 bg-white shadow-xs text-slate-600 font-bold text-sm tracking-tight hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
            >
              <span>{brand}</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                {metricIcons[idx] || <ShieldCheck className="w-5 h-5 text-blue-600" />}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium capitalize mt-1">
                {metric.label} diproses otomatis
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
