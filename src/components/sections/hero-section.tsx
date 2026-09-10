"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import {
  ShoppingBag,
  Plane,
  Stethoscope,
  GraduationCap,
  Globe,
  Sparkles,
  Send,
  Paperclip,
  CheckCheck,
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
  const [activeLang, setActiveLang] = useState<"id" | "en">("id");
  const [activeIndustry, setActiveIndustry] = useState<number>(0);

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
          {/* RIGHT COLUMN: CLEAN INTERACTIVE CHAT SHOWCASE (STANDALONE / NO VIDEO FILE) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative">
            
            {/* Clean Floating Card Container */}
            <div className="w-full max-w-[580px] rounded-2xl sm:rounded-3xl bg-white shadow-2xl shadow-blue-900/10 border border-slate-200/90 overflow-hidden transition-all flex flex-col">
              
              {/* Top Control Bar */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                {/* Mode Switch Tabs */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-800 border border-slate-700/60">
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

                {/* Language Switcher */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveLang(activeLang === "id" ? "en" : "id")}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/10 hover:bg-white/20 text-blue-200 transition-colors"
                  >
                    <Globe className="h-3 w-3" />
                    <span>{activeLang === "id" ? "ID" : "EN"}</span>
                  </button>
                </div>
              </div>

              {/* Chat Header inside card */}
              <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/logo-intiora.webp"
                    alt="Intiora AI"
                    width={96}
                    height={24}
                    className="h-5 w-auto object-contain"
                  />
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Online 24/7</span>
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  Resmi WhatsApp API
                </span>
              </div>

              {/* Live Interactive Chat Messages Area */}
              <div className="p-5 space-y-4 bg-gradient-to-b from-white via-slate-50/30 to-slate-50/60 min-h-[300px] flex flex-col justify-center">
                {activeMode === "lead" ? (
                  <>
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-2.5 text-white shadow-xs text-sm">
                        <p className="leading-relaxed">
                          {activeLang === "id"
                            ? "Halo, saya tertarik dengan layanan Intiora untuk otomatisasi penjualan toko saya. Bisa dibantu?"
                            : "Hi, I'm interested in Intiora for automating sales in my store. Can you help?"}
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-blue-200">
                          <span>09.41</span>
                          <CheckCheck className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Bot Message */}
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 shrink-0 p-1">
                        <Image
                          src="/intiora-icon.png"
                          alt="Intiora Icon"
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-slate-200/80 px-4 py-3 shadow-xs text-sm text-slate-800">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-xs font-bold text-blue-600">Intiora AI</span>
                          <span className="text-[10px] font-medium text-slate-400">• AI Agent Active</span>
                        </div>
                        <p className="leading-relaxed">
                          {activeLang === "id"
                            ? "Halo! Tentu saja. Intiora AI dapat langsung membalas pelanggan 24/7 di WhatsApp, memandu katalog produk, hingga kirim invoice pembayaran otomatis. Closing rate rata-rata meningkat hingga 40%."
                            : "Hello! Absolutely. Intiora AI instantly engages customers 24/7 on WhatsApp, shares product catalogs, and generates automated payment invoices. Closing rates increase by up to 40%."}
                        </p>
                        
                        {/* Interactive Quick Actions */}
                        <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                            {activeLang === "id" ? "✨ Coba Demo Interaktif" : "✨ Try Interactive Demo"}
                          </span>
                          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                            {activeLang === "id" ? "Kalkulasi ROAS" : "ROAS Calculator"}
                          </span>
                        </div>

                        <div className="mt-1.5 text-right text-[10px] text-slate-400">
                          09.41
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-2.5 text-white shadow-xs text-sm">
                        <p className="leading-relaxed">
                          {activeLang === "id"
                            ? "Halo, saya mau cek status pengiriman pesanan INV-20250910-00124."
                            : "Hi, I'd like to check the shipping status for order INV-20250910-00124."}
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-blue-200">
                          <span>10.05</span>
                          <CheckCheck className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Bot Message */}
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 shrink-0 p-1">
                        <Image
                          src="/intiora-icon.png"
                          alt="Intiora Icon"
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-slate-200/80 px-4 py-3 shadow-xs text-sm text-slate-800">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-xs font-bold text-blue-600">Intiora AI</span>
                          <span className="text-[10px] font-medium text-slate-400">• Customer Support AI</span>
                        </div>
                        <p className="leading-relaxed">
                          {activeLang === "id"
                            ? "Pesanan Anda sedang dalam perjalanan via JNE Reguler dengan nomor resi JNE8829103829. Estimasi tiba besok siang. Ada hal lain yang bisa kami bantu?"
                            : "Your order is in transit via JNE Regular with tracking number JNE8829103829. Estimated arrival is tomorrow afternoon. Anything else I can help with?"}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                            📦 {activeLang === "id" ? "Lacak Ekspedisi" : "Track Delivery"}
                          </span>
                          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                            💬 {activeLang === "id" ? "Bicara ke CS Manusia" : "Talk to Human Agent"}
                          </span>
                        </div>

                        <div className="mt-1.5 text-right text-[10px] text-slate-400">
                          10.05
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="p-3.5 bg-white border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Lampirkan file"
                  className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <Paperclip className="h-4 w-4" />
                </button>
                <div className="flex-1 rounded-full bg-slate-100/90 px-4 py-2 text-xs sm:text-sm text-slate-400 select-none">
                  {activeLang === "id" ? "Ketik pesan Anda..." : "Type your message..."}
                </div>
                <button
                  type="button"
                  aria-label="Kirim pesan"
                  className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 hover:bg-blue-700 active:scale-95 transition-all shadow-xs"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

            {/* Vertical Floating Industry Switcher */}
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
