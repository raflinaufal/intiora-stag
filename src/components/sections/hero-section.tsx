"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import {
  ShoppingBag,
  Plane,
  Stethoscope,
  GraduationCap,
  Globe,
  Sparkles,
} from "lucide-react";

// Official WhatsApp vector icon
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function HeroSection() {
  const [activeMode, setActiveMode] = useState<"lead" | "service">("lead");
  const [activeLang, setActiveLang] = useState<"indonesia" | "english">("indonesia");
  const [activeIndustry, setActiveIndustry] = useState<number>(0);

  // Map state to corresponding cropped video MP4 (super smooth 60fps & lightweight)
  const videoMap: Record<string, string> = {
    "indonesia-lead": "/intiora_realtime_indonesia_lead.mp4",
    "indonesia-service": "/intiora_realtime_indonesia_customer-service.mp4",
    "english-lead": "/intiora_realtime_english_lead.mp4",
    "english-service": "/intiora_realtime_english_customer-service.mp4",
  };

  const currentVideoKey = `${activeLang}-${activeMode}`;
  const currentVideoSrc = videoMap[currentVideoKey] || "/intiora_realtime_indonesia_lead.mp4";

  const industries = [
    { icon: ShoppingBag, label: "Ritel & E-Commerce" },
    { icon: Plane, label: "Travel & Hospitality" },
    { icon: Stethoscope, label: "Kesehatan & Klinik" },
    { icon: GraduationCap, label: "Pendidikan & Bimbel" },
  ];

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Background Banner with optimized WebP */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-90"
        style={{ backgroundImage: `url('/background-banner.webp')` }}
      />

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/20 via-transparent to-white/50 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: HERO HEADLINE & CTAs */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold text-blue-600 shadow-xs backdrop-blur-xs mb-5">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>#1 AI Agent Customer Service &amp; Sales</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[48px] xl:text-[52px] font-extrabold tracking-tight text-slate-900 leading-[1.14]">
              AI Agent &amp; Omnichannel CRM: Dari Chat Pertama Jadi Pelanggan Seumur Hidup
            </h1>

            {/* Subtitle Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Pakai AI agent, CRM Omnichannel, dan follow-up otomatis untuk mengubah lebih banyak percakapan jadi penjualan, sekaligus tahu persis iklan mana yang berujung closing, dan bikin customer balik lagi.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[10px] bg-blue-600 px-6 text-sm sm:text-base font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>WhatsApp Kami</span>
              </a>

              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-[10px] border border-blue-600 bg-white px-6 text-sm sm:text-base font-semibold text-blue-600 hover:bg-blue-50/80 active:scale-[0.98] transition-all"
              >
                <span>Mulai Coba Gratis</span>
              </a>
            </div>

            {/* Sub-trust text */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Sparkles className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Setup mudah dalam 5 menit &bull; Tanpa keahlian coding &bull; Resmi WhatsApp Business API</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: NATURAL VIDEO PLAYER WITH REALTIME AI DEMO */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative">
            
            {/* Natural Video Container Card without heavy borders or double frames */}
            <div className="w-full max-w-[590px] rounded-2xl sm:rounded-3xl bg-white shadow-2xl shadow-blue-900/10 border border-slate-200/90 overflow-hidden transition-all">
              
              {/* Sleek Top Control Bar */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
                {/* Mode Switch Tabs */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800 border border-slate-700/60">
                  <button
                    type="button"
                    onClick={() => setActiveMode("lead")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeMode === "lead"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Lead Generation
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMode("service")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeMode === "service"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Customer Service
                  </button>
                </div>

                {/* Right: Language Switcher */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveLang(activeLang === "indonesia" ? "english" : "indonesia")
                    }
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/10 hover:bg-white/20 text-blue-200 transition-colors"
                    title="Ganti Bahasa Demo"
                  >
                    <Globe className="h-3 w-3" />
                    <span>{activeLang === "indonesia" ? "ID" : "EN"}</span>
                  </button>
                </div>
              </div>

              {/* Natural Live Video Player (No duplicate backgrounds or inputs) */}
              <div className="relative w-full aspect-[832/550] bg-white flex items-center justify-center overflow-hidden">
                <video
                  key={currentVideoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block select-none pointer-events-none"
                >
                  <source src={currentVideoSrc} type="video/mp4" />
                </video>
              </div>

            </div>

            {/* Vertical Floating Industry Switcher (Right Edge) */}
            <div className="hidden sm:flex flex-col gap-2 absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white/95 p-1.5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 backdrop-blur-sm">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const isActive = activeIndustry === idx;
                return (
                  <button
                    key={ind.label}
                    type="button"
                    onClick={() => setActiveIndustry(idx)}
                    title={ind.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                        : "text-slate-500 hover:text-blue-600 hover:bg-blue-50/60"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </Container>

      {/* Floating Bottom-Right WhatsApp CTA Widget */}
      <a
        href="#demo"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-2xl shadow-blue-600/40 hover:bg-blue-700 active:scale-95 transition-all group"
      >
        <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>WhatsApp Kami</span>
      </a>
    </section>
  );
}
