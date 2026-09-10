"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingData } from "@/data/landing";
import { Check, Sparkles, Zap, Shield } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="harga" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60">
      <Container>
        <SectionHeading
          eyebrow="TRANSPARAN &amp; FLEKSIBEL"
          title={pricingData.heading}
          description={pricingData.description}
          centered={true}
        />

        {/* Monthly / Yearly Billing Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-semibold cursor-pointer ${
              billingCycle === "monthly" ? "text-slate-900" : "text-slate-500"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Bulanan
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={billingCycle === "yearly"}
            aria-label="Pilih tagihan tahunan untuk diskon 20%"
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
            className="relative h-7 w-14 rounded-full bg-blue-600 p-1 transition-colors focus:outline-hidden"
          >
            <div
              className={`h-5 w-5 rounded-full bg-white shadow-xs transition-transform ${
                billingCycle === "yearly" ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`flex items-center gap-1.5 text-sm font-semibold cursor-pointer ${
              billingCycle === "yearly" ? "text-slate-900" : "text-slate-500"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            <span>Tahunan</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              Hemat 20%
            </span>
          </span>
        </div>

        {/* 4 Pricing Cards Grid: 1 col (mobile) -> 2 col (tablet) -> 4 col (desktop) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingData.plans.map((plan) => {
            const isPopular = plan.popular;
            const price =
              billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 border ${
                  isPopular
                    ? "bg-white border-blue-600 shadow-xl shadow-blue-500/10 lg:-translate-y-2 ring-2 ring-blue-600/20"
                    : "bg-white border-slate-200 shadow-xs hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-[11px] font-extrabold text-white shadow-md flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span>PALING POPULER</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="mt-1 text-xs text-slate-500 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        {price}
                      </span>
                      {plan.period && (
                        <span className="text-xs font-semibold text-slate-500">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {billingCycle === "yearly" && plan.monthlyPrice !== "Custom" && (
                      <span className="text-[11px] text-emerald-600 font-semibold block mt-1">
                        Ditagih tahunan (lebih hemat)
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Fitur Utama:
                    </span>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                        <div
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            isPopular ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div>
                  <a
                    href="#demo"
                    className={`flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                      isPopular
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 active:scale-[0.98]"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee / Trust Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-blue-600" /> Free trial 14 hari tanpa kartu kredit
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-blue-600" /> Batal kapan saja tanpa penalti
          </span>
          <span>Harga belum termasuk PPN 11%</span>
        </div>
      </Container>
    </section>
  );
}
