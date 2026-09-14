"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { productsData } from "@/data/landing";
import {
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
  MessageSquare,
  Bot,
  Users,
  ShoppingBag,
  Package,
  Send,
  BellRing,
  BarChart3,
  Receipt,
  UserCheck,
  Globe2,
  Sparkles,
  CheckCircle2,
  QrCode,
  Store,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// 1. VISUAL MOCKUP 1: SEMUA CHAT & ASISTEN 24 JAM
// ============================================================================
function ChatAssistantVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Top Status & Channel Indicator */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-800">Inbox Chat Pelanggan (Aktif)</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            WhatsApp
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
            Instagram
          </span>
        </div>
      </div>

      {/* Main Chat Simulation Window */}
      <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3 sm:p-4 space-y-3">
        {/* Customer Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
              SR
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">Siti Rahma</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-800 font-medium">
                  Calon Pembeli
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block">WhatsApp · 0812-3456-xxxx</span>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
            Online
          </span>
        </div>

        {/* Chat Thread */}
        <div className="space-y-2.5 text-xs">
          {/* Customer Question Bubble */}
          <div className="flex flex-col items-start">
            <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-2xl rounded-tl-xs max-w-[88%] shadow-2xs leading-relaxed">
              Halo min, mau tanya paket Brightening Serum ready gak ya? Harganya berapa dan bisa kirim hari ini?
              <span className="text-[9px] text-slate-400 block text-right mt-1">11:14</span>
            </div>
          </div>

          {/* AI Instant Reply Bubble */}
          <div className="flex flex-col items-end">
            <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-xs max-w-[92%] shadow-md space-y-2">
              <div className="flex items-center justify-between text-[10px] border-b border-blue-400/40 pb-1 text-blue-100">
                <span className="font-semibold flex items-center gap-1">
                  <Bot className="w-3 h-3 text-blue-200" />
                  Dijawab Asisten Intiora
                </span>
                <span className="text-emerald-300 font-bold">Respon: 2 detik</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-50">
                Halo Kak Siti! Paket <strong>Brightening Serum</strong> ready stok ya kak. Harganya <strong>Rp 165.000</strong> (lagi promo hemat 15%).
              </p>
              <p className="text-[11px] leading-relaxed text-blue-50">
                Pesanan sebelum jam 15.00 langsung kami kirim hari ini via JNE / SiCepat. Mau sekalian dibikinkan pesanannya kak?
              </p>
              {/* Action Buttons in Chat */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-lg bg-white text-blue-700 font-bold text-[10px] shadow-xs cursor-pointer hover:bg-blue-50 transition-colors">
                  Beli Sekarang (Rp 165.000)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-700 text-white font-medium text-[10px] hover:bg-blue-800 transition-colors cursor-pointer">
                  Tanya Dokter / Admin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Result Pill */}
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-800 block leading-tight">
              Pelanggan Tak Perlu Nunggu
            </span>
            <span className="text-[10px] text-slate-500">
              Admin tidur nyenyak, pesanan tetap masuk 24 jam.
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
          98% Pelanggan Puas
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. VISUAL MOCKUP 2: DATABASE KONTAK & PROMO WHATSAPP
// ============================================================================
function CustomerPromoVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Broadcast Campaign Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Send className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                Broadcast WhatsApp: Promo Gajian 25%
              </span>
              <span className="text-[10px] text-slate-500">
                Target: 1.250 Pelanggan Setia yang Pernah Belanja
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Terkirim 100%
          </span>
        </div>

        {/* Message Preview in WhatsApp Style */}
        <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/80 text-xs space-y-1.5">
          <div className="text-[10px] font-bold text-emerald-800 flex items-center gap-1">
            <span>Isi Pesan WhatsApp yang Diterima Pelanggan:</span>
          </div>
          <p className="text-[11px] text-slate-700 leading-relaxed">
            &ldquo;Halo Kak Budi! Khusus pelanggan setia, nikmati <strong>Diskon 25%</strong> untuk semua produk favoritmu sampai besok malam. Pakai kode: <strong>GAJIANHEMAT</strong>.&rdquo;
          </p>
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-emerald-300 text-emerald-700 font-bold text-[10px]">
            [Klik untuk Ambil Diskon via Chat]
          </div>
        </div>

        {/* Real Business Results Grid */}
        <div className="grid grid-cols-4 gap-2 pt-1 text-center">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Pesan Terkirim</span>
            <span className="text-sm font-extrabold text-slate-900">1.250</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Dibaca</span>
            <span className="text-sm font-extrabold text-emerald-600">95%</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Langsung Beli</span>
            <span className="text-sm font-extrabold text-blue-600">342 orang</span>
          </div>
          <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-900">
            <span className="text-[10px] text-blue-600 block font-semibold">Omset Masuk</span>
            <span className="text-xs sm:text-sm font-black text-blue-700">Rp 38,5 Jt</span>
          </div>
        </div>
      </div>

      {/* Safety & Compliance Badge */}
      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span className="text-[11px] text-slate-600">
          Menggunakan <strong>WhatsApp Business Resmi</strong>: Aman dari blokir, pesan pasti sampai langsung ke kantong pembeli.
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// 3. VISUAL MOCKUP 3: KATALOG, PESANAN & CEK STOK
// ============================================================================
function CatalogInventoryVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Live Order Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Pesanan Baru #INV-2026-089</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Lunas via QRIS
          </span>
        </div>

        {/* Ordered Item Details */}
        <div className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <div>
            <span className="font-bold text-slate-900 block">Kopi Arabika Gayo Premium (1 Kg)</span>
            <span className="text-[10px] text-slate-500">Jumlah: 2 Bungkus · Diskon Promo: -10%</span>
          </div>
          <span className="text-sm font-extrabold text-slate-900">Rp 270.000</span>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-1 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <QrCode className="w-3.5 h-3.5 text-blue-600" />
            <span>Pembeli bayar via QRIS seketika</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-[10px]">
            <Receipt className="w-3 h-3" />
            Nota PDF Terkirim
          </span>
        </div>
      </div>

      {/* Real-time Stock Sync Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-900">Cek Sisa Stok Otomatis</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
            Stok Pas &amp; Sinkron
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-600">Toko / Gudang Utama</span>
              <span className="font-extrabold text-slate-900">Sisa 148 pack</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-3/4 rounded-full" />
            </div>
            <span className="text-[9px] text-slate-400 block pt-0.5">Berkurang 2 unit dari order ini</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-600">Status Kurir</span>
              <span className="font-bold text-blue-600">Siap Dikirim</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-full rounded-full" />
            </div>
            <span className="text-[9px] text-slate-400 block pt-0.5">Resi pengiriman otomatis siap</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. VISUAL MOCKUP 4: OTOMASI KERJA & LAPORAN BISNIS
// ============================================================================
function WorkflowReportsVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Routine Automation Preview */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <BellRing className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold text-slate-900">Otomasi: Follow-Up &amp; Pengingat Bayar</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            Berjalan Otomatis
          </span>
        </div>

        {/* 2 Step Plain Flow */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="w-6 h-6 rounded-md bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">
              1
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-[11px] leading-tight">
                Pembeli minta nomor rekening tapi belum transfer dalam 2 jam
              </span>
              <span className="text-[10px] text-slate-500">Sistem mendeteksi otomatis tanpa admin perlu mantau</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
              2
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-[11px] leading-tight">
                Kirim pengingat ramah ke WhatsApp pembeli
              </span>
              <span className="text-[10px] text-emerald-700 font-medium">
                Hasil: 35% pembeli langsung transfer setelah diingatkan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Performance & Boss Dashboard */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Ringkasan Tim &amp; Chat Hari Ini</span>
          </div>
          <span className="text-[10px] font-bold text-slate-500">Update Real-Time</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Total Chat Masuk</span>
            <span className="text-sm font-black text-slate-900">458 chat</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Dibereskan AI</span>
            <span className="text-sm font-black text-emerald-600">78% (357 chat)</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Kepuasan Pelanggan</span>
            <span className="text-sm font-black text-amber-500">⭐ 4.9 / 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT: PRODUCTS SECTION
// ============================================================================
export function ProductsSection() {
  const [activeItemId, setActiveItemId] = useState<string>(productsData.items[0].id);

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case "omnichannel":
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
      case "ai-support":
        return <Bot className="w-5 h-5 text-indigo-600" />;
      case "crm-360":
        return <Users className="w-5 h-5 text-purple-600" />;
      case "commerce":
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case "inventory":
        return <Package className="w-5 h-5 text-amber-600" />;
      case "marketing":
        return <Send className="w-5 h-5 text-pink-600" />;
      case "workflow":
        return <BellRing className="w-5 h-5 text-violet-600" />;
      case "collaboration":
        return <Users className="w-5 h-5 text-cyan-600" />;
      case "reports":
        return <BarChart3 className="w-5 h-5 text-teal-600" />;
      case "finance":
        return <Receipt className="w-5 h-5 text-emerald-600" />;
      case "hr":
        return <UserCheck className="w-5 h-5 text-orange-600" />;
      case "developer":
        return <Globe2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const getItemIcon = (id: string) => {
    switch (id) {
      case "ai-support":
        return <Bot className="w-4 h-4 text-blue-600" />;
      case "crm-marketing":
        return <Send className="w-4 h-4 text-purple-600" />;
      case "commerce-inventory":
        return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      case "workflow-developer":
        return <BarChart3 className="w-4 h-4 text-amber-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="produk" className="py-20 sm:py-28 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>SEMUA KEBUTUHAN JUALAN ANDA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              {productsData.heading}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {productsData.description}
            </p>
          </div>
        </div>

        {/* Interactive Layout: Accordion (Left) + App Window Visual Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-20">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: 4 PRODUCT SECTIONS (~45%)                            */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {productsData.items.map((item) => {
              const isActive = item.id === activeItemId;

              if (isActive) {
                // Expanded Active Card: Clean, modern, highly readable
                return (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-blue-600 shadow-xl shadow-blue-600/10 transition-all duration-300 space-y-4 relative"
                  >
                    {/* Header line with chevron up */}
                    <div
                      onClick={() => setActiveItemId(item.id)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                          {getItemIcon(item.id)}
                        </div>
                        <span className="text-sm font-bold tracking-tight text-blue-700">
                          {item.name}
                        </span>
                      </div>
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    </div>

                    {/* Headline */}
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                      {item.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Feature Badges (Pills with checkmarks) */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.badges.map((badge, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-800 text-[11px] font-semibold"
                        >
                          <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sub-features list */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {item.subFeatures.map((sub, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-slate-700 font-medium flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <a
                        href={item.ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline group"
                      >
                        <span>{item.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              }

              // Collapsed Item Card
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItemId(item.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-left hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {getItemIcon(item.id)}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </button>
              );
            })}
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: REFINED APP WINDOW VISUAL SHOWCASE (~55%)          */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xl flex flex-col overflow-hidden">
              {/* macOS style browser window top bar */}
              <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-semibold text-slate-500 ml-2">
                    Intiora Workspace · Tampilan Aplikasi Langsung
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Aktif 24 Jam
                </div>
              </div>

              {/* Dynamic Content Panel */}
              <div className="flex-1 bg-slate-50/40 p-1 sm:p-2 flex items-center justify-center">
                {activeItemId === "ai-support" && <ChatAssistantVisual />}
                {activeItemId === "crm-marketing" && <CustomerPromoVisual />}
                {activeItemId === "commerce-inventory" && <CatalogInventoryVisual />}
                {activeItemId === "workflow-developer" && <WorkflowReportsVisual />}
              </div>
            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* 12 FITUR LENGKAP BISNIS (GRID DETAIL)                              */}
        {/* =================================================================== */}
        <div className="pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              12 Kemampuan Lengkap Intiora untuk Toko &amp; Bisnis Anda
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Semua fitur saling terhubung otomatis, sehingga Anda dan tim tidak perlu lagi repot catat manual atau pakai banyak aplikasi terpisah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productsData.ecosystemFeatures.map((feature) => (
              <div
                key={feature.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all space-y-2.5 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    {getFeatureIcon(feature.id)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    {feature.category}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
