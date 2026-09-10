import { Container } from "@/components/ui/container";
import { trustData } from "@/data/landing";
import { Building2, MessageSquare, Briefcase, Award } from "lucide-react";

export function TrustSection() {
  const metricIcons = [MessageSquare, Building2, Briefcase];

  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-12 md:py-16">
      <Container>
        {/* Centered Headline */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            {trustData.headline}
          </p>
        </div>

        {/* Fictional Company Logos in 2 rows / grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 items-center justify-items-center opacity-70 grayscale transition-all hover:grayscale-0">
          {trustData.logos.map((logo) => (
            <div
              key={logo}
              className="flex h-12 w-full max-w-[160px] items-center justify-center rounded-lg border border-slate-200/60 bg-white px-4 py-2 shadow-2xs hover:border-blue-200 hover:shadow-xs transition-all"
            >
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-700 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-200 text-[10px] text-slate-800 font-extrabold">
                  {logo[0]}
                </span>
                <span>{logo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Key Metrics Banner */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {trustData.metrics.map((metric, i) => {
            const Icon = metricIcons[i] || Award;
            return (
              <div key={metric.label} className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="h-4 w-4 text-blue-600" />
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    {metric.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-500 capitalize">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
