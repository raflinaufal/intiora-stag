"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { conversationData } from "@/data/landing";
import {
  Bell,
  MessageSquare,
  User,
  Plus,
  Clock,
  Sun,
  Moon,
  Bot,
  FileText,
  ShoppingBag,
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowDown,
  Layers,
} from "lucide-react";

export function ChatFlowSection() {
  const [activeTab, setActiveTab] = useState<"spesialis" | "visual-flow" | "jam-kerja">("visual-flow");

  return (
    <section id="alur-chat" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {conversationData.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {conversationData.description}
          </p>
        </div>

        {/* 2-Column Interactive Layout: Left Canvas + Right Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Scenic Canvas */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-100 aspect-square sm:aspect-4/3 lg:aspect-square flex items-center justify-center p-4 sm:p-7">
              {/* Misty Mountain Nature Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/misty-mountains-bg.jpg"
                  alt="Misty Mountains Background"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />
              </div>

              {/* Dynamic Design Content Based on Active Tab */}
              <div className="relative z-10 w-full max-w-md mx-auto transition-all duration-300">
                {/* DESIGN 1: AI Agent Spesialis */}
                {activeTab === "spesialis" && (
                  <div className="flex flex-col gap-3 sm:gap-3.5 animate-in fade-in zoom-in-95 duration-300">
                    {/* Incoming Router Node */}
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/90 shadow-lg text-center mx-auto max-w-xs w-full">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold mb-1">
                        <Layers className="w-3 h-3" />
                        <span>Smart Multi-Agent Router</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">
                        Otomatis mendeteksi kebutuhan pelanggan &amp; membagikan ke AI yang ahli:
                      </p>
                    </div>

                    {/* Dotted Branch Lines */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-3 bg-blue-400/60" />
                    </div>

                    {/* 3 Specialized Agents Stack */}
                    <div className="flex flex-col gap-2.5">
                      {/* Agent 1: Sales & Closing */}
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 border border-emerald-200/80 shadow-md flex items-center gap-3 hover:scale-[1.02] transition-transform">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                          <ShoppingBag className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900">AI Sales Specialist</h4>
                            <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              Katalog &amp; Closing
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            Knowledge: <strong>Katalog_2026.xlsx</strong> · Rekomendasi &amp; Order
                          </p>
                        </div>
                      </div>

                      {/* Agent 2: Customer Support & SOP */}
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 border border-blue-200/80 shadow-md flex items-center gap-3 hover:scale-[1.02] transition-transform">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                          <Headphones className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900">AI Support Specialist</h4>
                            <span className="text-[9px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                              Komplain &amp; FAQ
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            Knowledge: <strong>SOP_Pelayanan.pdf</strong> · Solusi cepat &amp; garansi
                          </p>
                        </div>
                      </div>

                      {/* Agent 3: Billing & Logistic */}
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 border border-purple-200/80 shadow-md flex items-center gap-3 hover:scale-[1.02] transition-transform">
                        <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900">AI Billing &amp; Tracking</h4>
                            <span className="text-[9px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                              Resi &amp; QRIS
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            Knowledge: <strong>API Kurir &amp; POS</strong> · Lacak status seketika
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* DESIGN 2: Designer Alur Visual (Matches user screenshot 1:1) */}
                {activeTab === "visual-flow" && (
                  <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                    {/* Top Customer Message Card */}
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/90 shadow-xl max-w-[270px] sm:max-w-[290px] w-full flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                        <Image
                          src="/images/creator-avatar.jpg"
                          alt="Laura"
                          width={36}
                          height={36}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900">Laura</h4>
                          <span className="text-[10px] text-slate-400">Just Now</span>
                        </div>
                        <p className="text-[11px] text-slate-600 truncate mt-0.5">
                          I want buy the products
                        </p>
                      </div>
                    </div>

                    {/* Connector line with AI and Human micro-nodes */}
                    <div className="relative my-1.5 flex flex-col items-center">
                      <div className="w-0.5 h-7 bg-slate-300" />
                      <div className="flex items-center gap-2 -my-2.5">
                        <div className="w-6 h-6 rounded-full bg-white border border-blue-200 shadow-xs flex items-center justify-center text-blue-600">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="w-0.5 h-7 bg-slate-300" />
                    </div>

                    {/* Middle Decision Trigger Node */}
                    <div className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2 select-none hover:scale-105 transition-transform">
                      <Bell className="w-4 h-4" />
                      <span>Automation Trigger</span>
                    </div>

                    {/* Branching Lines */}
                    <div className="w-48 sm:w-60 h-4 border-b-2 border-l-2 border-r-2 border-slate-300 rounded-b-lg -mt-0.5 mb-1" />

                    {/* 2 Destination Branch Cards */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 w-full max-w-sm mt-1">
                      {/* Left Branch: AI Agent */}
                      <div className="p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25 flex flex-col justify-between hover:scale-[1.03] transition-transform">
                        <div className="flex items-center gap-1.5 mb-1">
                          <MessageSquare className="w-3.5 h-3.5 fill-white" />
                          <span className="text-[11px] font-bold">AI Agent</span>
                        </div>
                        <span className="text-[10px] text-blue-100 font-mono leading-tight">
                          05.00 PM - 09.00 AM
                        </span>
                      </div>

                      {/* Right Branch: Human Agent */}
                      <div className="p-3 rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/25 flex flex-col justify-between hover:scale-[1.03] transition-transform">
                        <div className="flex items-center gap-1.5 mb-1">
                          <User className="w-3.5 h-3.5 fill-white" />
                          <span className="text-[11px] font-bold">Human Agent</span>
                        </div>
                        <span className="text-[10px] text-blue-100 font-mono leading-tight">
                          09.00 AM - 05.00 PM
                        </span>
                      </div>
                    </div>

                    {/* Bottom Plus Add Node */}
                    <div className="mt-4 flex flex-col items-center">
                      <div className="w-0.5 h-4 bg-slate-300" />
                      <button
                        type="button"
                        aria-label="Tambah Aksi Alur"
                        className="w-7 h-7 rounded-full bg-white border border-blue-300 text-blue-600 shadow-sm flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* DESIGN 3: Jam Kerja AI */}
                {activeTab === "jam-kerja" && (
                  <div className="flex flex-col gap-3 sm:gap-3.5 animate-in fade-in zoom-in-95 duration-300">
                    {/* Header Schedule Pill */}
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-white/90 shadow-md flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-slate-800">Auto Time Routing</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        AI Aktif Sekarang
                      </span>
                    </div>

                    {/* Day Schedule (Human CS) */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl p-3.5 border border-slate-200/90 shadow-sm">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Sun className="w-4 h-4 text-amber-500" />
                          <h4 className="text-xs font-bold text-slate-900">Jam Kerja Kantor</h4>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          09.00 - 17.00
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Chat masuk langsung diteruskan ke <strong>Staf CS Kantor</strong>. AI memberikan saran balasan kilat (*AI Copilot*).
                      </p>
                    </div>

                    {/* Night & Weekend Schedule (AI 24/7) */}
                    <div className="bg-blue-600 text-white rounded-xl p-3.5 shadow-lg shadow-blue-600/25">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4 text-amber-300" />
                          <h4 className="text-xs font-bold">Luar Jam Kerja &amp; Libur</h4>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-blue-100 bg-blue-700/80 px-2 py-0.5 rounded-md">
                          17.00 - 09.00
                        </span>
                      </div>
                      <p className="text-[11px] text-blue-100 leading-relaxed">
                        <strong>AI Agent 24/7 mengambil alih otomatis.</strong> Menjawab pertanyaan dalam 2 detik, cek ongkir, dan proses pemesanan tanpa staf lembur.
                      </p>
                    </div>

                    {/* Bottom Status Metric */}
                    <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/90 shadow-sm flex items-center justify-between text-[11px]">
                      <span className="text-slate-600 font-medium">Tingkat Pesan Terjawab:</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        100% Zero Missed Leads
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Interactive Clickable Feature Tabs */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-slate-100">
            {conversationData.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`py-6 first:pt-0 last:pb-0 transition-all cursor-pointer group ${
                    isActive
                      ? "border-l-4 border-blue-600 pl-5 -ml-1 bg-blue-50/30 rounded-r-2xl"
                      : "border-l-4 border-transparent pl-4 hover:pl-5 hover:bg-slate-50/50 rounded-r-2xl"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-lg sm:text-xl font-bold transition-colors ${
                        isActive
                          ? "text-slate-900 font-extrabold"
                          : "text-slate-700 group-hover:text-blue-600"
                      }`}
                    >
                      {tab.title}
                    </h3>
                    {isActive && (
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        Aktif
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                      isActive ? "text-slate-700 font-medium" : "text-slate-500"
                    }`}
                  >
                    {tab.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
