"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { allFeaturesDetailed } from "@/data/landing";
import {
  Bot,
  CheckCircle2,
  Layers,
  GitBranch,
  Sparkles,
  Cpu,
  Zap,
  Users,
  Kanban,
  LifeBuoy,
  Radio,
  BarChart3,
  ShoppingCart,
  Truck,
  QrCode,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronRight,
  AlertCircle,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mapping icons dynamically based on feature definition
function getFeatureIcon(name: string) {
  switch (name) {
    case "Bot":
      return <Bot className="w-6 h-6 text-emerald-600" />;
    case "CheckCircle2":
      return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    case "Layers":
      return <Layers className="w-6 h-6 text-indigo-600" />;
    case "GitBranch":
      return <GitBranch className="w-6 h-6 text-blue-600" />;
    case "Sparkles":
      return <Sparkles className="w-6 h-6 text-purple-600" />;
    case "Cpu":
      return <Cpu className="w-6 h-6 text-violet-600" />;
    case "Zap":
      return <Zap className="w-6 h-6 text-amber-600" />;
    case "Users":
      return <Users className="w-6 h-6 text-blue-600" />;
    case "Kanban":
      return <Kanban className="w-6 h-6 text-amber-600" />;
    case "LifeBuoy":
      return <LifeBuoy className="w-6 h-6 text-rose-600" />;
    case "Radio":
      return <Radio className="w-6 h-6 text-pink-600" />;
    case "BarChart3":
      return <BarChart3 className="w-6 h-6 text-emerald-600" />;
    case "ShoppingCart":
      return <ShoppingCart className="w-6 h-6 text-blue-600" />;
    case "Truck":
      return <Truck className="w-6 h-6 text-sky-600" />;
    case "QrCode":
      return <QrCode className="w-6 h-6 text-teal-600" />;
    default:
      return <Sparkles className="w-6 h-6 text-blue-600" />;
  }
}

export default function FiturPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Handle hash navigation when landing on page (e.g. /fitur#wa-blast or /fitur#chat-omnichannel)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const rawHash = window.location.hash.replace("#", "");
      // Map potential alias IDs from landing page 4 core features to specific feature IDs if needed
      const aliasMap: Record<string, string> = {
        "chat-omnichannel": "chatbot-wa",
        "ai-agent": "ai-agent-custom",
        "crm-pipeline": "sales-pipeline",
        "wa-blast": "wa-broadcast",
      };
      const targetId = aliasMap[rawHash] || rawHash;
      const el = document.getElementById(targetId) || document.getElementById(rawHash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, []);

  const filteredFeatures =
    selectedCategory === "all"
      ? allFeaturesDetailed.items
      : allFeaturesDetailed.items.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Top Breadcrumb & Hero Header */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white border-b border-slate-200/70">
        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-blue-600 font-bold">Semua Fitur</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{allFeaturesDetailed.header.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {allFeaturesDetailed.header.heading}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {allFeaturesDetailed.header.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-slate-200/80 max-w-4xl">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-blue-600 block leading-none">
                16 Modul
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1 block">
                Saling terhubung otomatis
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 block leading-none">
                &lt; 2 Detik
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1 block">
                Respon balasan AI tercepat
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-purple-600 block leading-none">
                100% Resmi
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1 block">
                WhatsApp Cloud API Meta
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 block leading-none">
                24 Jam
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1 block">
                Melayani tanpa jeda libur
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Sticky Category Filter Tabs */}
      <section className="sticky top-16 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {allFeaturesDetailed.categories.map((category) => {
              const isActive = selectedCategory === category.id;
              const count =
                category.id === "all"
                  ? allFeaturesDetailed.items.length
                  : allFeaturesDetailed.items.filter((i) => i.category === category.id).length;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0",
                    isActive
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                      : "bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                  )}
                >
                  <span>{category.label}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.2 rounded-full text-[10px] font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Main Features Showcase Section */}
      <section className="py-12 sm:py-16 bg-slate-50/40">
        <Container>
          <div className="space-y-8 max-w-5xl mx-auto">
            {filteredFeatures.map((feature, index) => (
              <div
                key={feature.id}
                id={feature.id}
                className="scroll-mt-36 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all space-y-6"
              >
                {/* Header: Icon + Category Badge + Title & Tagline */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          {feature.categoryLabel}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Modul #{index + 1}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {feature.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                        {feature.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Intiora,%20saya%20ingin%20tanya%20tentang%20fitur%20ini"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-bold border border-slate-200 hover:border-emerald-200 transition-all"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Tanya Fitur Ini</span>
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {feature.summary}
                </p>

                {/* Two-Column Problem vs Solution Comparison Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* Problem Card */}
                  <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Tantangan Bisnis Sebelumnya:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {feature.problem}
                    </p>
                  </div>

                  {/* Solution Card */}
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Solusi Cerdas Intiora:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {feature.solution}
                    </p>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Keunggulan &amp; Kemampuan Utama:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {feature.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs text-slate-800"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom Conversion CTA Section */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Semua Modul Siap Digunakan Tanpa Koding</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Siap Mengotomasi Percakapan &amp; Penjualan Bisnis Anda?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Mulai sekarang dan buktikan bagaimana asisten AI Intiora membalas pesan pelanggan dalam 2 detik, menyaring prospek, dan mendongkrak omset toko Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href="/#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all group"
              >
                <span>Coba Gratis 14 Hari</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm sm:text-base border border-slate-700 transition-all"
              >
                <span>Kembali ke Beranda</span>
              </Link>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              ✓ Tanpa kartu kredit &nbsp;•&nbsp; ✓ Setup dalam 5 menit &nbsp;•&nbsp; ✓ WhatsApp API resmi Meta
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
