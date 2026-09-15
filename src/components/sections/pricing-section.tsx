"use client";

import { Container } from "@/components/ui/container";
import { pricingData } from "@/data/landing";
import { Check } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zM17.52 14.33c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.14 3.27 5.19 4.58.73.31 1.29.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.27-.2-.57-.35z" />
    </svg>
  );
}

export function PricingSection() {
  const getWhatsAppLink = (planName: string) => {
    const text = encodeURIComponent(
      `Halo Intiora, saya tertarik untuk konsultasi paket ${planName} untuk bisnis saya.`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section id="harga" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header: Left Heading, Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.16]">
              {pricingData.heading}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {pricingData.description}
            </p>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {pricingData.plans.map((plan) => {
            const isPopular = plan.popular;
            const isSolid = plan.buttonStyle === "solid";

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-200 bg-white ${
                  isPopular
                    ? "border-2 border-blue-600 shadow-xl shadow-blue-600/10 scale-[1.01] z-10"
                    : "border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-sm">
                    {plan.popularBadge || "PALING DIPILIH"}
                  </div>
                )}

                <div>
                  {/* Plan Name & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[34px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* WhatsApp CTA Button Right Below Header */}
                  <a
                    href={getWhatsAppLink(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-[13px] font-semibold transition-all mb-6 ${
                      isSolid
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20 active:scale-98"
                        : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50/50 active:scale-98"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Chat via WhatsApp</span>
                  </a>

                  {/* Feature Checkmarks List */}
                  <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-700">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-blue-100/90 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className="leading-snug">
                          {feat.label}:{" "}
                          <strong className="text-slate-900 font-semibold">{feat.value}</strong>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar: Button, Link, and PPN note */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Intiora,%20saya%20ingin%20tanya%20detail%20paket%20harga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 shadow-sm transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>{pricingData.cta.whatsappLabel}</span>
          </a>

          <a
            href={pricingData.cta.detailHref}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>{pricingData.cta.detailLabel}</span>
            <span>→</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 mt-4">
          {pricingData.footerNote}
        </p>
      </Container>
    </section>
  );
}
