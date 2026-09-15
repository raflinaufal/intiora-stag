import { Container } from "@/components/ui/container";
import { finalCtaData } from "@/data/landing";
import { Check } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zM17.52 14.33c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.14 3.27 5.19 4.58.73.31 1.29.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.27-.2-.57-.35z" />
    </svg>
  );
}

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <Container>
        {/* Card Container matching screenshot */}
        <div className="relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden">
          {/* Subtle faint corner ambient pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 max-w-3xl">
            {/* Bold Blue Paraphrased Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0055D4] tracking-tight leading-[1.18] mb-4">
              {finalCtaData.heading}
            </h2>

            {/* Paraphrased Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 max-w-2xl font-normal">
              {finalCtaData.description}
            </p>

            {/* Checklist with soft blue circular checkmarks */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-7 mb-8">
              {finalCtaData.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Solid Blue + Outline WhatsApp */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={finalCtaData.primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 shadow-sm shadow-blue-600/20 active:scale-98 transition-all"
              >
                {finalCtaData.primaryCta.label}
              </a>
              <a
                href={finalCtaData.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-xs sm:text-sm border border-blue-600 hover:bg-blue-50/50 active:scale-98 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>{finalCtaData.secondaryCta.label}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
