import { Container } from "@/components/ui/container";
import {
  MetaLogo,
  WhatsAppBusinessLogo,
  TikTokLogo,
  ShopeeLogo,
  TokopediaLogo,
  InstagramBadgeLogo,
  FacebookBadgeLogo,
  PlnLogo,
  CiputraLogo,
  SiloamLogo,
  SinarmasLogo,
  TelkomLogo,
  EuromedicaLogo,
  KbInsuranceLogo,
  RealfoodLogo,
  BankJagoLogo,
  AiceLogo,
  HealthyGoLogo,
  HachiGroupLogo,
  IndogrosirLogo,
  MncLogo,
  TikiLogo,
} from "@/components/ui/partner-logos";
import { Webhook } from "lucide-react";

export function TrustSection() {
  return (
    <section className="relative py-14 sm:py-18 border-y border-slate-100 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: HEADLINE, METRICS & CHANNEL PARTNERS (~45%)          */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headline */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 tracking-tight leading-tight">
                Dipercaya oleh 3.000+ bisnis di Asia.
              </h2>
            </div>

            {/* Metrics Row - Mobile-first grid to prevent overflow */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-2">
              {/* Metric 1 */}
              <div className="space-y-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight block">
                  10.000.000.000+
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block leading-snug">
                  token diproses setiap hari
                </span>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1 border-l border-slate-200 pl-4 sm:pl-8">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight block">
                  2.000.000+
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block leading-snug">
                  percakapan aktif harian
                </span>
              </div>
            </div>

            {/* Channel Partners Sub-section */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 mb-3.5 tracking-tight">
                Konektivitas channel resmi &amp; integrasi multi-platform
              </p>

              {/* Partner Logos Group */}
              <div className="space-y-3.5">
                {/* Row 1: Primary Enterprise Messaging Giants */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-7 gap-y-3">
                  <div className="hover:opacity-80 transition-opacity">
                    <MetaLogo className="h-5 sm:h-6.5 w-auto" />
                  </div>
                  <div className="hover:opacity-80 transition-opacity">
                    <WhatsAppBusinessLogo className="h-5 sm:h-6.5 w-auto" />
                  </div>
                  <div className="hover:opacity-80 transition-opacity">
                    <TikTokLogo className="h-5 sm:h-6.5 w-auto" />
                  </div>
                </div>

                {/* Row 2: Marketplace, Social & Webhook Integration */}
                <div className="flex flex-wrap items-center gap-x-3.5 sm:gap-x-5 gap-y-2.5 pt-1">
                  <div className="hover:opacity-80 transition-opacity">
                    <ShopeeLogo className="h-4.5 sm:h-5.5 w-auto" />
                  </div>
                  <div className="hover:opacity-80 transition-opacity">
                    <TokopediaLogo className="h-4 sm:h-5 w-auto" />
                  </div>
                  <div className="hover:opacity-80 transition-opacity">
                    <InstagramBadgeLogo className="h-4.5 sm:h-5.5 w-auto" />
                  </div>
                  <div className="hover:opacity-80 transition-opacity">
                    <FacebookBadgeLogo className="h-4.5 sm:h-5.5 w-auto" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors">
                    <Webhook className="h-3.5 w-3.5 text-blue-600" />
                    <span className="text-[10px] sm:text-[11px] font-bold">Custom Webhook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: CORPORATE CUSTOMER LOGOS GRID (~55%)                */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 lg:border-l lg:border-slate-200 lg:pl-10">
            {/* 5-Columns Grid in full authentic colors */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
              {/* Row 1 */}
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <PlnLogo className="h-7 sm:h-8 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <CiputraLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <SiloamLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <SinarmasLogo className="h-6 sm:h-7 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <TelkomLogo className="h-6 sm:h-7 w-auto" />
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <EuromedicaLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <KbInsuranceLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <RealfoodLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <BankJagoLogo className="h-6 sm:h-7 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <AiceLogo className="h-5 sm:h-6 w-auto" />
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <HealthyGoLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <HachiGroupLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <IndogrosirLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <MncLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="flex items-center justify-center h-12 w-full p-1 hover:scale-105 transition-transform">
                <TikiLogo className="h-6 sm:h-7 w-auto" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xs text-slate-400 font-medium text-center mt-6">
              dan ribuan bisnis lainnya
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
