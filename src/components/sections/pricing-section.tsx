"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { pricingData } from "@/data/landing";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="harga" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <span>HARGA TRANSPARAN &amp; FLEKSIBEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {pricingData.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {pricingData.description}
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                !isYearly
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Tagihan Bulanan
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isYearly
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Tagihan Tahunan</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isYearly ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"}`}>
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingData.plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-200 ${
                  isPopular
                    ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-600/10 scale-[1.02] z-10"
                    : "bg-white border border-slate-200/80 shadow-xs hover:border-slate-300"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-md shadow-blue-600/30">
                    <Sparkles className="w-3 h-3" />
                    <span>Paling Diminati</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-6 pb-6 border-b border-slate-100">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {price}
                    </span>
                    {plan.period && (
                      <span className="text-xs sm:text-sm font-medium text-slate-500">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <a
                    href="#demo"
                    className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                      isPopular
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/25 active:scale-98"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-98"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Note */}
        <p className="text-center text-xs text-slate-500 mt-10">
          Semua paket berbayar mencakup Free Trial 14 hari tanpa kartu kredit. Garansi pembatalan kapan saja.
        </p>
      </Container>
    </section>
  );
}
