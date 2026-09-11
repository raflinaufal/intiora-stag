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
  GitBranch,
  FolderGit2,
  BarChart3,
  Receipt,
  UserCheck,
  Code2,
  Sparkles,
  CheckCircle2,
  QrCode,
  Warehouse,
  Terminal,
} from "lucide-react";

// ============================================================================
// 1. VISUAL MOCKUP 1: OMNICHANNEL & AI CUSTOMER SUPPORT (100% INTIORA)
// ============================================================================
function OmnichannelAiSupportVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-3 sm:p-6 select-none">
      {/* Top Channel Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-800">Unified Live Inbox</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
            WhatsApp API
          </span>
          <span className="px-2 py-0.5 rounded-md bg-pink-50 text-pink-700 border border-pink-200">
            Instagram DM
          </span>
          <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
            Live Webchat
          </span>
        </div>
      </div>

      {/* Main Interactive Chat & AI Co-pilot Window */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-3 sm:p-4">
        {/* Left: Chat Thread (7 cols) */}
        <div className="sm:col-span-7 space-y-2.5 border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-3">
          {/* Customer Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                BP
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block leading-tight">Budi Pratama</span>
                <span className="text-[10px] text-slate-400">WhatsApp Business · 0812-9842-xxxx</span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
              New Inquiry
            </span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-2 text-xs">
            {/* Customer bubble */}
            <div className="bg-slate-100 text-slate-800 p-2.5 rounded-xl rounded-tl-xs max-w-[90%] leading-relaxed">
              Halo Intiora, apakah paket langganan enterprise bisa integrasi ke custom webhook sistem kami?
              <span className="text-[9px] text-slate-400 block text-right mt-1">10:42</span>
            </div>

            {/* AI Agent bubble */}
            <div className="bg-blue-50/80 border border-blue-100 text-slate-900 p-2.5 rounded-xl rounded-tr-xs ml-auto max-w-[95%] space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-bold text-blue-700 flex items-center gap-1">
                  <Bot className="w-3 h-3 text-blue-600" />
                  Intiora AI Assistant
                </span>
                <span className="text-emerald-600 font-semibold text-[9px]">99.4% Match</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-700">
                Halo Kak Budi! Tentu bisa. Paket Enterprise kami mendukung <strong>Custom Webhook Events</strong> dan REST API lengkap untuk menghubungkan chat secara real-time ke sistem internal Anda.
              </p>
              <div className="flex items-center gap-2 pt-1 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-white text-blue-700 font-semibold border border-blue-200 cursor-pointer">
                  Kirim Dokumentasi API
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-semibold cursor-pointer">
                  Hubungkan ke Sales
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI Assistant Insights (5 cols) */}
        <div className="sm:col-span-5 space-y-2.5 text-xs">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              AI Smart Ticket Routing
            </span>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-600">Assignee:</span>
              <span className="font-bold text-slate-900">Rian (Sales Tech)</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-600">Priority:</span>
              <span className="font-bold text-rose-600">High / Enterprise</span>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Knowledge Base Sync
            </span>
            <p className="text-[10px] text-slate-600 leading-snug">
              Tersambung ke <strong>Dokumentasi Webhook v2.4</strong> &amp; SLA Respon &lt; 1 detik.
            </p>
          </div>

          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-0.5">
            <div className="flex items-center gap-1 font-bold text-[10px]">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Auto Follow-Up Active</span>
            </div>
            <p className="text-[9px] text-emerald-700">
              Follow-up otomatis terjadwal dalam 2 jam jika chat belum ditutup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. VISUAL MOCKUP 2: CRM 360 & MARKETING AUTOMATION (100% INTIORA)
// ============================================================================
function CrmMarketingVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-3 sm:p-6 select-none gap-3">
      {/* Top Customer 360 Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 space-y-3">
        <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
              BP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">Budi Pratama</span>
                <span className="px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[9px]">
                  VIP Customer
                </span>
              </div>
              <span className="text-[11px] text-slate-500">PT Surya Nusantara Mandiri · Jakarta</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block font-medium">Customer Lifetime Value</span>
            <span className="text-sm font-black text-slate-900">Rp 48.500.000</span>
          </div>
        </div>

        {/* 360 Data Grid */}
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[9px]">Segmentasi</span>
            <span className="font-bold text-slate-800">B2B Wholesale</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[9px]">Kanal Utama</span>
            <span className="font-bold text-blue-600">WhatsApp API</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[9px]">Status Consent</span>
            <span className="font-bold text-emerald-600">Opt-in Broadcast</span>
          </div>
        </div>
      </div>

      {/* Bottom: Broadcast Campaign Analytics Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800">Broadcast Campaign: Promo Pelanggan VIP</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
            Delivered 98.6%
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2 rounded-xl bg-slate-50">
            <span className="text-[10px] text-slate-400 block">Terkirim</span>
            <span className="font-extrabold text-slate-900 text-sm">12.500</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-50/70 text-emerald-800">
            <span className="text-[10px] text-emerald-600 block">Dibaca</span>
            <span className="font-extrabold text-emerald-700 text-sm">94.2%</span>
          </div>
          <div className="p-2 rounded-xl bg-blue-50/70 text-blue-800">
            <span className="text-[10px] text-blue-600 block">Closing Chat</span>
            <span className="font-extrabold text-blue-700 text-sm">3.120</span>
          </div>
          <div className="p-2 rounded-xl bg-purple-50/70 text-purple-800">
            <span className="text-[10px] text-purple-600 block">ROAS</span>
            <span className="font-extrabold text-purple-700 text-sm">8.4x</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. VISUAL MOCKUP 3: COMMERCE, INVENTORY & FINANCE (100% INTIORA)
// ============================================================================
function CommerceInventoryVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-3 sm:p-6 select-none gap-3">
      {/* Order & Checkout Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Order #INT-2026-089</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Payment Paid (QRIS)
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div>
            <span className="font-bold text-slate-800 block">Espresso Blend Premium 1Kg</span>
            <span className="text-[10px] text-slate-400">Qty: 5 Pack · Diskon Kupon: -10%</span>
          </div>
          <span className="text-sm font-extrabold text-slate-900">Rp 1.125.000</span>
        </div>

        {/* Payment & Invoice Action */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <QrCode className="w-3.5 h-3.5 text-blue-600" />
            <span>QRIS Settlement Real-Time</span>
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-[10px] hover:bg-blue-100 transition-colors">
            <Receipt className="w-3 h-3" />
            <span>Unduh Invoice PDF</span>
          </button>
        </div>
      </div>

      {/* Multi-Warehouse Inventory Status */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Warehouse className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-bold text-slate-800">Inventory &amp; Multi-Gudang Control</span>
          </div>
          <span className="text-[10px] font-bold text-slate-500">Stok On-Hand: 420 Unit</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-700">Gudang Utama Jakarta</span>
              <span className="text-[10px] font-extrabold text-emerald-600">310 unit</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-3/4 rounded-full" />
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-700">Gudang Cabang Surabaya</span>
              <span className="text-[10px] font-extrabold text-amber-600">110 unit</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full w-2/5 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. VISUAL MOCKUP 4: WORKFLOW AUTOMATION & DEVELOPER API (100% INTIORA)
// ============================================================================
function WorkflowDeveloperVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-3 sm:p-6 select-none gap-3">
      {/* Visual Workflow Canvas */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 space-y-2.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold text-slate-900">Workflow: Instant Order &amp; Stock Sync</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
            Active · 0 Errors
          </span>
        </div>

        {/* Workflow Node Step Stream */}
        <div className="space-y-2 text-xs">
          {/* Step 1: Trigger */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-purple-50/70 border border-purple-100">
            <div className="w-6 h-6 rounded-md bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">
              1
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-[11px] leading-tight">
                Trigger: Pesanan Baru Diterima dari WhatsApp / Web
              </span>
              <span className="text-[10px] text-slate-500">Payload event: order.created</span>
            </div>
          </div>

          {/* Step 2: Action */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50/70 border border-blue-100">
            <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
              2
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-[11px] leading-tight">
                Action: Cek Stok Gudang Terdekat &amp; Generate Invoice PDF
              </span>
              <span className="text-[10px] text-slate-500">Mutasi inventori otomatis &amp; settlement link</span>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Webhook Execution Log Terminal */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-3.5 text-slate-200 font-mono text-[11px] space-y-1.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold text-slate-300">Live Webhook Log</span>
          </div>
          <span className="text-emerald-400 font-bold">200 OK · 48ms</span>
        </div>
        <div className="space-y-0.5 text-[10px] leading-relaxed">
          <div className="text-slate-400">
            [18:42:01] <span className="text-blue-400 font-bold">POST</span> https://api.intiora.com/v1/webhooks/order
          </div>
          <div className="text-emerald-400">
            ✓ Event: <span className="text-white">order.paid</span> | Invoice ID: <span className="text-amber-300">INV-2026-089</span>
          </div>
          <div className="text-slate-400">
            ✓ Stock deducted in warehouse: <span className="text-white">Jakarta Utama (-5 units)</span>
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
        return <GitBranch className="w-5 h-5 text-violet-600" />;
      case "collaboration":
        return <FolderGit2 className="w-5 h-5 text-cyan-600" />;
      case "reports":
        return <BarChart3 className="w-5 h-5 text-teal-600" />;
      case "finance":
        return <Receipt className="w-5 h-5 text-emerald-600" />;
      case "hr":
        return <UserCheck className="w-5 h-5 text-orange-600" />;
      case "developer":
        return <Code2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="produk" className="py-20 sm:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>PLATFORM LENGKAP INTIORA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {productsData.heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {productsData.description}
            </p>
          </div>
        </div>

        {/* Interactive Layout: Accordion (Left) + High-Resolution Visual Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: 4-ITEM ACCORDION (~45%)                             */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 space-y-3.5">
            {productsData.items.map((item) => {
              const isActive = item.id === activeItemId;

              if (isActive) {
                // Expanded Active Card (Primary Blue State)
                return (
                  <div
                    key={item.id}
                    className="p-6 sm:p-7 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/15 transition-all duration-300 space-y-4"
                  >
                    {/* Header line with chevron up */}
                    <div
                      onClick={() => setActiveItemId(item.id)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-sm font-bold tracking-tight text-white">
                        {item.name}
                      </span>
                      <ChevronUp className="w-5 h-5 text-white/90" />
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                      {item.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Feature Badges (Pills with checkmarks) */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.badges.map((badge, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-xs"
                        >
                          <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sub-features list */}
                    <div className="pt-2 border-t border-blue-500/60 space-y-2">
                      {item.subFeatures.map((sub, idx) => (
                        <div
                          key={idx}
                          className="text-xs sm:text-sm text-blue-100 font-medium hover:text-white transition-colors cursor-pointer"
                        >
                          {sub}
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <a
                        href={item.ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:underline group"
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
                  className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-left hover:border-slate-300 hover:bg-slate-50/50 transition-all cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </button>
              );
            })}
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: 100% INTIORA AUTHENTIC VISUAL SHOWCASE (~55%)       */}
          {/* ================================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/60 p-2 sm:p-4 flex items-center justify-center min-h-[480px] sm:min-h-[540px] relative overflow-hidden shadow-xs">
              {activeItemId === "ai-support" && <OmnichannelAiSupportVisual />}
              {activeItemId === "crm-marketing" && <CrmMarketingVisual />}
              {activeItemId === "commerce-inventory" && <CommerceInventoryVisual />}
              {activeItemId === "workflow-developer" && <WorkflowDeveloperVisual />}
            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* 12 FITUR LENGKAP EKOSISTEM INTIORA (GRID DETAIL)                   */}
        {/* =================================================================== */}
        <div className="pt-12 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              12 Modul Terintegrasi dalam Ekosistem Intiora
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Semua kapabilitas bisnis Anda bekerja saling terhubung secara otomatis tanpa perlu berpindah-pindah aplikasi.
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
