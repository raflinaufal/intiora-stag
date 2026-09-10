import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/landing";
import {
  Star,
  Bot,
  Send,
  CheckCheck,
  PhoneCall,
  Sparkles,
  User,
  Zap,
  Clock,
  ShieldCheck,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32">
      {/* Subtle background ambient gradients */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-3xl opacity-60" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-blue-700 backdrop-blur-xs mb-6">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>{heroData.eyebrow}</span>
            </div>

            {/* Exactly ONE H1 for SEO */}
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.15]">
              <span className="text-blue-600">AI Agent</span> &amp;{" "}
              <span className="text-blue-600">Omnichannel CRM</span>
              <br className="hidden sm:inline" />
              {" "}untuk Customer Service dan Sales{" "}
              <span className="relative inline-block text-blue-600">
                24/7
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-blue-200/60 -z-10" />
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg max-w-xl">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button href={heroData.primaryCta.href} variant="primary" size="lg">
                <Zap className="h-4 w-4 mr-1" />
                {heroData.primaryCta.label}
              </Button>
              <Button href={heroData.secondaryCta.href} variant="secondary" size="lg">
                {heroData.secondaryCta.label}
              </Button>
            </div>

            {/* Trust statement & Rating */}
            <div className="mt-8 flex items-center gap-4 pt-4 border-t border-slate-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[11px] font-bold text-slate-700 overflow-hidden shadow-xs"
                  >
                    <User className="h-4 w-4 text-slate-500" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-slate-800">4.9/5</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {heroData.trustBadge}
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Mockup Column */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              {/* Outer Glow & Card Framing */}
              <div className="relative rounded-3xl border border-slate-200/90 bg-white/90 p-3 sm:p-4 shadow-2xl shadow-blue-900/10 backdrop-blur-sm">
                {/* Floating Status Pill */}
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 shadow-lg">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-800">AI Agent Aktif 24/7</span>
                </div>

                {/* Omnichannel Chat Mockup Screen */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-inner">
                  {/* Top Bar / Channel Header */}
                  <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-4 py-3.5 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold">
                        <Bot className="h-5 w-5" />
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-blue-700" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold tracking-tight">Nexa Assistant Pro</h4>
                          <span className="rounded bg-blue-500/50 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-blue-100">
                            Omnichannel
                          </span>
                        </div>
                        <p className="text-[11px] text-blue-100/90 flex items-center gap-1">
                          <Clock className="h-3 w-3 inline" /> Balas otomatis &lt; 1 detik
                        </p>
                      </div>
                    </div>

                    {/* Channel Indicators */}
                    <div className="flex items-center gap-1.5 bg-black/20 rounded-full px-2.5 py-1 text-[11px] text-blue-100 border border-white/10">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>WA &bull; IG &bull; Web</span>
                    </div>
                  </div>

                  {/* Conversation Area */}
                  <div className="p-4 sm:p-5 space-y-4 max-h-[380px] overflow-y-auto bg-slate-50/70 text-xs sm:text-sm">
                    {/* Timestamp badge */}
                    <div className="text-center">
                      <span className="rounded-md bg-slate-200/80 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                        Hari ini &bull; Saluran WhatsApp Official
                      </span>
                    </div>

                    {/* Customer Message 1 */}
                    <div className="flex items-start gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 text-xs font-semibold shrink-0">
                        B
                      </div>
                      <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white p-3 border border-slate-200/80 shadow-xs text-slate-800">
                        <p>Halo, apakah Nexa AI bisa integrasi langsung dengan katalog produk dan stok kami?</p>
                        <span className="mt-1 block text-[10px] text-slate-400 text-right">09:41</span>
                      </div>
                    </div>

                    {/* AI Agent Message 1 */}
                    <div className="flex items-start justify-end gap-2.5">
                      <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-blue-600 p-3 shadow-xs text-white">
                        <div className="flex items-center gap-1.5 mb-1 text-[11px] text-blue-200">
                          <Sparkles className="h-3 w-3" />
                          <span className="font-semibold">Nexa AI Agent</span>
                        </div>
                        <p>
                          Halo! Tentu bisa. Nexa AI mendukung sinkronisasi real-time ke Google Sheets, WooCommerce, Shopify, dan Custom API internal Anda.
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-blue-500/50 flex items-center justify-between text-[10px] text-blue-200">
                          <span>AI Confidence: 99.4%</span>
                          <span className="flex items-center gap-0.5">
                            09:41 <CheckCheck className="h-3 w-3 text-blue-200" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Customer Message 2 */}
                    <div className="flex items-start gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 text-xs font-semibold shrink-0">
                        B
                      </div>
                      <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white p-3 border border-slate-200/80 shadow-xs text-slate-800">
                        <p>Bisa kirim penawaran paket Business sekarang? Sekalian jadwalkan demo.</p>
                        <span className="mt-1 block text-[10px] text-slate-400 text-right">09:42</span>
                      </div>
                    </div>

                    {/* AI Action Card / Interactive element */}
                    <div className="flex justify-end">
                      <div className="w-[85%] rounded-xl border border-blue-200 bg-blue-50/90 p-3 text-slate-800 shadow-xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide flex items-center gap-1">
                            <ShieldCheck className="h-3.5 w-3.5" /> Lead Terkualifikasi
                          </span>
                          <span className="rounded bg-emerald-100 text-emerald-700 text-[10px] font-semibold px-1.5 py-0.5">
                            High Intent
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mb-2">
                          Proposal Paket Business telah dibuat otomatis dan slot demo dipersiapkan.
                        </p>
                        <div className="flex gap-2">
                          <div className="rounded-lg bg-blue-600 text-white text-[11px] font-semibold px-2.5 py-1 text-center flex-1">
                            Jadwal Demo: Besok 10.00
                          </div>
                          <div className="rounded-lg bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold px-2.5 py-1 text-center">
                            PDF Siap
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input Footer Bar */}
                  <div className="bg-white border-t border-slate-200 px-4 py-2.5 flex items-center gap-2">
                    <div className="flex-1 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-400 border border-slate-200/60">
                      Tulis pesan atau biarkan AI merespons...
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <Send className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Metric Card */}
                <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <PhoneCall className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Auto-Handoff Human Agent</p>
                      <p className="text-[11px] text-slate-500">Transisi halus tanpa kehilangan histori chat</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                    Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
