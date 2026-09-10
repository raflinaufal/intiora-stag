"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { productsData } from "@/data/landing";
import {
  Bot,
  Inbox,
  Users,
  Megaphone,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Filter,
  Search,
} from "lucide-react";

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState(productsData.tabs[0].id);

  const tabIcons = {
    "ai-agent": Bot,
    omnichannel: Inbox,
    crm: Users,
    broadcast: Megaphone,
  };

  return (
    <section id="produk" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="FITUR UNGGULAN"
          title={productsData.heading}
          description={productsData.description}
          centered={true}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Vertical Accordion / Tab System */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {productsData.tabs.map((tab) => {
              const Icon = tabIcons[tab.id as keyof typeof tabIcons] || Bot;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-200 border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? "bg-white/20 text-white" : "bg-white text-blue-600 shadow-2xs"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3
                          className={`text-base font-bold tracking-tight ${
                            isActive ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {tab.title}
                        </h3>
                        <p
                          className={`text-xs line-clamp-1 ${
                            isActive ? "text-blue-100" : "text-slate-500"
                          }`}
                        >
                          {tab.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${
                        isActive ? "text-white rotate-90" : "text-slate-400"
                      }`}
                    />
                  </div>

                  {/* Expanded features for active item */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-white/20 animate-in fade-in duration-200">
                      <p className="text-xs text-blue-50 leading-relaxed mb-3">
                        {tab.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white">
                        {tab.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-200 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic UI Mockup Screen */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 sm:p-5 shadow-xl shadow-slate-200/60 min-h-[440px] flex flex-col justify-between">
              {/* Top Mockup Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-4 py-3 rounded-xl shadow-2xs mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-semibold text-slate-600">
                    app.nexa-ai.id/dashboard/{activeTab}
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 border border-emerald-200">
                  Status: Sinkronisasi Aktif
                </span>
              </div>

              {/* Dynamic View based on Active Tab */}
              {activeTab === "ai-agent" && (
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">AI Knowledge &amp; Persona</h4>
                        <p className="text-xs text-slate-500">Agent pintar yang siap merespons sesuai SOP bisnis</p>
                      </div>
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                        Model: Nexa-LLM v3.2
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                        <span className="font-semibold block text-slate-900 mb-1">Knowledge Source:</span>
                        Katalog-Produk-2026.pdf (142 item), FAQ-Garansi.docx, Promo-Bulanan.xlsx
                      </div>

                      <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-slate-700">
                        <span className="font-semibold block text-blue-900 mb-1">Testing Live Sandbox:</span>
                        <div className="bg-white p-2.5 rounded-lg border border-blue-200/60 shadow-2xs text-xs mb-2">
                          <p className="font-medium text-slate-500">User: &ldquo;Apakah ada diskon pembelian di atas 5 unit?&rdquo;</p>
                          <p className="font-medium text-blue-700 mt-1 flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            AI: &ldquo;Tersedia diskon wholesale 15% untuk pemesanan &gt;5 unit! Mau saya bantu checkout?&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Akurasi Respons: 99.1%</span>
                    <span className="font-semibold text-blue-600">Simpan &amp; Terapkan ke WhatsApp &rarr;</span>
                  </div>
                </div>
              )}

              {activeTab === "omnichannel" && (
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex-1 grid grid-cols-1 md:grid-cols-12 gap-3">
                  {/* Left mini inbox list */}
                  <div className="md:col-span-5 border-r border-slate-100 pr-2 space-y-2">
                    <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1.5 rounded-lg text-xs text-slate-500">
                      <Search className="h-3.5 w-3.5" />
                      <span>Cari kontak...</span>
                    </div>
                    {[
                      { name: "Doni Prakoso", channel: "WhatsApp", time: "Baru saja", badge: "AI Active" },
                      { name: "Siti Rahma", channel: "Instagram", time: "3m lalu", badge: "Human CS" },
                      { name: "PT Surya Mandiri", channel: "Web Chat", time: "12m lalu", badge: "AI Active" },
                    ].map((chat, idx) => (
                      <div
                        key={chat.name}
                        className={`p-2 rounded-lg text-xs cursor-pointer ${
                          idx === 0 ? "bg-blue-50 border border-blue-200" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>{chat.name}</span>
                          <span className="text-[10px] text-slate-400">{chat.time}</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-500 mt-0.5">
                          <span>{chat.channel}</span>
                          <span className="text-blue-600 font-semibold">{chat.badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right chat preview */}
                  <div className="md:col-span-7 flex flex-col justify-between pl-1">
                    <div className="space-y-2 text-xs">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                        Mau tanya katalog wedding organizer dan paket catering
                      </div>
                      <div className="p-2 bg-blue-600 text-white rounded-lg self-end">
                        Katalog telah terkirim via PDF! Estimasi harga mulai Rp25.000.000.
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1 pt-2 border-t border-slate-100">
                      <span className="text-[11px] text-slate-400">Diproses oleh Nexa Bot #4</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "crm" && (
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-900">Pipeline Sales Terintegrasi</h4>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="flex items-center gap-1 text-slate-600">
                        <Filter className="h-3 w-3" /> Filter: Semua Saluran
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 block mb-2">Lead Baru (18)</span>
                      <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs mb-2">
                        <p className="font-bold text-slate-800">PT Abadi Jaya</p>
                        <p className="text-[10px] text-slate-500">Estimasi: Rp15.000.000</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                        <p className="font-bold text-slate-800">Klinik Sehat</p>
                        <p className="text-[10px] text-slate-500">Estimasi: Rp8.500.000</p>
                      </div>
                    </div>

                    <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-200">
                      <span className="font-bold text-blue-900 block mb-2">Follow-up AI (9)</span>
                      <div className="bg-white p-2 rounded-lg border border-blue-200 shadow-2xs">
                        <p className="font-bold text-slate-800">CV Mega Prima</p>
                        <p className="text-[10px] text-blue-600 font-semibold">Demo dijadwalkan</p>
                      </div>
                    </div>

                    <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
                      <span className="font-bold text-emerald-900 block mb-2">Closing Won (12)</span>
                      <div className="bg-white p-2 rounded-lg border border-emerald-200 shadow-2xs">
                        <p className="font-bold text-slate-800">PT Sumber Makmur</p>
                        <p className="text-[10px] text-emerald-600 font-bold">Deal Rp32.000.000</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Total Prospek: Rp142.500.000</span>
                    <span className="text-blue-600 font-semibold">Sinkron Otomatis dari Chat &rarr;</span>
                  </div>
                </div>
              )}

              {activeTab === "broadcast" && (
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Broadcast WhatsApp Resmi</h4>
                        <p className="text-xs text-slate-500">Kirim ribuan pesan personalisasi dengan WhatsApp Business API resmi</p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md">
                        Centang Hijau Resmi
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center mb-4">
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <span className="text-xs text-slate-500">Terkirim</span>
                        <p className="text-sm font-bold text-slate-900">12.450</p>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <span className="text-xs text-slate-500">Diterima</span>
                        <p className="text-sm font-bold text-slate-900">12.390</p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                        <span className="text-xs text-blue-600 font-semibold">Dibaca</span>
                        <p className="text-sm font-bold text-blue-700">94.2%</p>
                      </div>
                      <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                        <span className="text-xs text-emerald-600 font-semibold">Respons</span>
                        <p className="text-sm font-bold text-emerald-700">38.5%</p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                      <span className="font-semibold text-slate-800 block mb-1">Preview Template:</span>
                      &ldquo;Halo &#123;&#123;nama&#125;&#125;, terima kasih telah mempercayai kami. Dapatkan penawaran khusus diskon 20% bulan ini...&rdquo;
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Status: Campaign Aktif</span>
                    <span className="font-semibold text-blue-600">Jadwalkan Siaran Baru &rarr;</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
