import { Container } from "@/components/ui/container";
import { agentBuilderData } from "@/data/landing";
import { UploadCloud, Sliders, Share2, Sparkles, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const stepIcons = [
    <UploadCloud key="1" className="w-6 h-6 text-blue-600" />,
    <Sliders key="2" className="w-6 h-6 text-blue-600" />,
    <Share2 key="3" className="w-6 h-6 text-blue-600" />,
    <Sparkles key="4" className="w-6 h-6 text-blue-600" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <span>SETUP CEPAT &amp; MUDAH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {agentBuilderData.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {agentBuilderData.description}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {agentBuilderData.steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-2xl font-black text-slate-300">0{step.number}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Value Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-6 px-8 rounded-2xl bg-slate-50 border border-slate-200/60 max-w-4xl mx-auto">
          {agentBuilderData.benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{b.title}</span>
                <span className="text-xs text-slate-500 block">{b.description}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
