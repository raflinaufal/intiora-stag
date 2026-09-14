"use client";

import { useState } from "react";
import Link from "next/link";
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
  Send,
  BarChart3,
  Receipt,
  Sparkles,
  CheckCircle2,
  QrCode,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  CheckSquare,
  Kanban,
  LifeBuoy,
  Radio,
  Truck,
  ShoppingCart,
  GitBranch,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// 1. VISUAL MOCKUP 1: CHATBOT AI & WHATSAPP OMNICHANNEL
// ============================================================================
function ChatOmnichannelVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Top Status & Channel Indicator */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-800">Inbox Resmi WhatsApp Business API</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-600" />
            Official Meta
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Respon &lt; 2 Detik
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
                  Pelanggan Baru
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block">WhatsApp · 0812-3456-xxxx</span>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
            Online 24/7
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
                  Chatbot AI WhatsApp
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

      {/* Respon Cepat 24 Jam Banner */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-900">Respon Otomatis 24 Jam Nonstop</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                Online Terus
              </span>
            </div>
            <span className="text-[10px] text-slate-600 block mt-0.5">
              Pesan pelanggan langsung terbalas seketika, tidak ada chat yang terlewat atau terlambat dilayani.
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
          98% Pelanggan Puas
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. VISUAL MOCKUP 2: AI AGENT CERDAS & MANDIRI (KNOWLEDGE BASE & HANDOFF)
// ============================================================================
function AiAgentVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Knowledge Base Sync Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                Knowledge Base &amp; Data Bisnis Anda
              </span>
              <span className="text-[10px] text-slate-500">
                AI otomatis belajar dari dokumen katalog &amp; SOP toko Anda
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            100% Tersinkron
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 block">Dokumen Terhubung</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-800 truncate">Katalog_Harga_2026.pdf</span>
            </div>
            <span className="text-[10px] text-emerald-600 font-semibold block">✓ 420 Produk Dipahami</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 block">Kualifikasi Prospek (Leads)</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-blue-600">Hot Lead (B2B Bulk)</span>
            </div>
            <span className="text-[10px] text-slate-500 block">Budget: Rp 15 Juta · Mau Order</span>
          </div>
        </div>
      </div>

      {/* Smart Human Handoff Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Smart Human Handoff ke Tim Sales</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
            Oper Otomatis
          </span>
        </div>

        <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-blue-900">Rangkuman AI untuk Admin:</span>
            <span className="text-slate-500">Ditugaskan ke: Rian (Sales B2B)</span>
          </div>
          <p className="text-[11px] text-slate-700 leading-snug">
            &ldquo;Calon pembeli mencari 100 karton untuk cabang baru di Surabaya. Pertanyaan dasar sudah dijawab AI, tinggal kirim penawaran harga resmi (P/O).&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. VISUAL MOCKUP 3: APLIKASI CRM & PIPELINE PENJUALAN
// ============================================================================
function CrmPipelineVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Customer 360 Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
              BP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">Budi Pratama</span>
                <span className="px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[9px]">
                  VIP Customer
                </span>
              </div>
              <span className="text-[11px] text-slate-500">0812-9842-xxxx · PT Surya Nusantara</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block">Total Belanja (CLV)</span>
            <span className="text-xs sm:text-sm font-black text-slate-900">Rp 48.500.000</span>
          </div>
        </div>

        {/* Visual Sales Pipeline Mini Board */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Pipeline Penjualan Tim Sales:
          </span>
          <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[9px] text-slate-500 block">Chat Baru</span>
              <span className="font-extrabold text-slate-900 text-xs">18 Leads</span>
            </div>
            <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800">
              <span className="text-[9px] text-blue-600 block">Kualifikasi</span>
              <span className="font-extrabold text-blue-700 text-xs">12 Leads</span>
            </div>
            <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
              <span className="text-[9px] text-amber-600 block">Menunggu Bayar</span>
              <span className="font-extrabold text-amber-700 text-xs">8 Pesanan</span>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
              <span className="text-[9px] text-emerald-600 block">Closing / Lunas</span>
              <span className="font-extrabold text-emerald-700 text-xs">45 Closing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Complaint Ticket Badge */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <LifeBuoy className="w-4 h-4 text-purple-600" />
          <span className="text-[11px] font-bold text-slate-800">
            Manajemen Komplain Terorganisir:
          </span>
          <span className="text-[10px] text-slate-500">Tiket tidak tercecer, SLA respon 100% terjaga.</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
          SLA 100%
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. VISUAL MOCKUP 4: WA BLAST & BROADCAST RESMI
// ============================================================================
function WaBlastVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Broadcast Campaign Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                Broadcast WhatsApp Resmi: Promo Gajian 25%
              </span>
              <span className="text-[10px] text-slate-500">
                Segmentasi: 1.250 Pelanggan yang Pernah Belanja Lebih dari 1x
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
            [Klik untuk Pesan Langsung via WhatsApp]
          </div>
        </div>

        {/* Real Business Results Grid */}
        <div className="grid grid-cols-4 gap-2 pt-1 text-center">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Pesan Terkirim</span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-900">1.250</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Dibaca</span>
            <span className="text-xs sm:text-sm font-extrabold text-emerald-600">95%</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 block">Langsung Beli</span>
            <span className="text-xs sm:text-sm font-extrabold text-blue-600">342 orang</span>
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
          Menggunakan <strong>WhatsApp Cloud API Resmi Meta</strong>: Aman anti-banned nomor, pengiriman kilat terpercaya.
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// 5. VISUAL MOCKUP 5: OTOMATISASI ORDER & KASIR CHAT (QRIS & ONGKIR)
// ============================================================================
function OrderAutomationVisual() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 sm:p-5 select-none">
      {/* Live Order Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Pesanan Baru di Chat #ORD-2026-089</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Lunas via QRIS
          </span>
        </div>

        {/* Ordered Item Details */}
        <div className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <div>
            <span className="font-bold text-slate-900 text-xs block">Kopi Arabika Gayo Premium (1 Kg)</span>
            <span className="text-[10px] text-slate-500">Jumlah: 2 Bungkus · Diskon Promo: -10%</span>
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-slate-900">Rp 270.000</span>
        </div>

        {/* Cek Ongkir Kurir Row */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-600" />
            <div>
              <span className="text-[11px] font-bold text-slate-900 block">Cek Ongkir Otomatis (JNE Regular)</span>
              <span className="text-[10px] text-slate-500">Jakarta ➔ Surabaya (Estimasi 2 hari)</span>
            </div>
          </div>
          <span className="text-xs font-bold text-blue-700">Rp 18.000</span>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-1 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <QrCode className="w-3.5 h-3.5 text-blue-600" />
            <span>Pembeli bayar QRIS langsung terverifikasi</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-[10px]">
            <Receipt className="w-3 h-3" />
            Nota PDF Otomatis
          </span>
        </div>
      </div>

      {/* Auto Stock Deduction Info */}
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span className="text-[11px] text-slate-700">
            Stok toko berkurang otomatis <strong>(-2 unit)</strong>, resi pengiriman siap dicetak.
          </span>
        </div>
        <span className="text-[10px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
          Sisa: 148 pack
        </span>
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
      case "chatbot-wa":
        return <Bot className="w-5 h-5 text-emerald-600" />;
      case "routing-chat":
        return <GitBranch className="w-5 h-5 text-blue-600" />;
      case "omnichannel":
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case "wa-api":
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case "ai-agent":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "crm":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "pipeline":
        return <Kanban className="w-5 h-5 text-amber-600" />;
      case "komplain":
        return <LifeBuoy className="w-5 h-5 text-rose-600" />;
      case "blast":
        return <Radio className="w-5 h-5 text-pink-600" />;
      case "segmentasi":
        return <Users className="w-5 h-5 text-purple-600" />;
      case "order":
        return <ShoppingCart className="w-5 h-5 text-emerald-600" />;
      case "ongkir-qr":
        return <QrCode className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const getItemIcon = (id: string) => {
    switch (id) {
      case "chat-omnichannel":
        return <MessageSquare className="w-4 h-4 text-emerald-600" />;
      case "ai-agent":
        return <Sparkles className="w-4 h-4 text-purple-600" />;
      case "crm-pipeline":
        return <Users className="w-4 h-4 text-blue-600" />;
      case "wa-blast":
        return <Send className="w-4 h-4 text-pink-600" />;
      case "order-automation":
        return <ShoppingCart className="w-4 h-4 text-amber-600" />;
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
              <span>PLATFORM LENGKAP INTIORA</span>
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
          {/* LEFT COLUMN: 5 CORE FEATURES ACCORDION (~45%)                     */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
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
                      <Link
                        href={item.ctaHref}
                        className="inline-flex items-center gap-2 text-base font-bold text-blue-600 hover:text-blue-700 group transition-all"
                      >
                        <span>{item.ctaLabel}</span>
                        <span className="text-base font-bold group-hover:translate-x-1.5 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                );
              }

              // Collapsed Item Card
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItemId(item.id)}
                  className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 text-left hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {getItemIcon(item.id)}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
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
                {activeItemId === "chat-omnichannel" && <ChatOmnichannelVisual />}
                {activeItemId === "ai-agent" && <AiAgentVisual />}
                {activeItemId === "crm-pipeline" && <CrmPipelineVisual />}
                {activeItemId === "wa-blast" && <WaBlastVisual />}
                {activeItemId === "order-automation" && <OrderAutomationVisual />}
              </div>
            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* JELAJAHI SEMUA FITUR BANNER (CALLOUT TO /fitur)                    */}
        {/* =================================================================== */}
        <div className="pt-4 border-t border-slate-200/80">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl border border-blue-900/50 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>12+ MODUL LENGKAP TERINTEGRASI</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Ingin melihat rincian seluruh modul &amp; fitur Intiora?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Dari auto routing chat, kualifikasi prospek otomatis, tiket komplain, hingga kalkulator ongkir kurir dan kasir QRIS — semua kami jelaskan secara rinci, jelas, singkat, dan padat.
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <Link
                  href="/fitur"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all group"
                >
                  <span>Lihat Seluruh Fitur Selengkapnya</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
