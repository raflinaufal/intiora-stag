"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { productsData } from "@/data/landing";
import { Bot, Inbox, Users, Send, CheckCircle2, ArrowRight } from "lucide-react";

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState(productsData.tabs[0].id);

  const currentTab = productsData.tabs.find((t) => t.id === activeTab) || productsData.tabs[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case "ai-agent":
        return <Bot className="w-5 h-5" />;
      case "omnichannel":
        return <Inbox className="w-5 h-5" />;
      case "crm":
        return <Users className="w-5 h-5" />;
      case "broadcast":
        return <Send className="w-5 h-5" />;
      default:
        return <Bot className="w-5 h-5" />;
    }
  };

  return (
    <section id="produk" className="py-20 sm:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <span>FITUR LENGKAP INTIORA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {productsData.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {productsData.description}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {productsData.tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {getTabIcon(tab.id)}
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12">
          {/* Left: Copywriting & Feature List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 rounded-lg bg-blue-100/70 text-blue-800 text-xs font-bold tracking-wide">
              {currentTab.title}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              {currentTab.subtitle}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {currentTab.description}
            </p>

            <ul className="space-y-3 pt-2">
              {currentTab.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                <span>Eksplor {currentTab.title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Modern Visual Mockup Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6">
              {activeTab === "ai-agent" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-slate-800">AI Agent Runtime · 24/7 Active</span>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      Model: Intiora-v2.4
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Input Pelanggan (WhatsApp)
                      </span>
                      <p className="text-slate-700 font-medium">
                        &quot;Siang min, kalau mau pesan untuk kantor 25 pax bisa dapat diskon dan invoice resmi?&quot;
                      </p>
                    </div>
                    <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                          Respon AI Agent (0.6 detik)
                        </span>
                        <span className="text-[10px] text-emerald-600 font-semibold">Tersinkron ke CRM</span>
                      </div>
                      <p className="text-slate-800">
                        &quot;Tentu bisa Kak! Untuk pemesanan kantor &gt;20 pax kami berikan diskon 15% plus invoice PPN resmi. Boleh minta nama PT dan alamat emailnya untuk saya terbitkan penawarannya?&quot;
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-center">
                      <span className="text-[10px] text-slate-400 block">Akurasi Knowledge Base</span>
                      <span className="text-sm font-bold text-slate-800">99.4%</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-center">
                      <span className="text-[10px] text-slate-400 block">Lead Qualification Rate</span>
                      <span className="text-sm font-bold text-emerald-600">88.2%</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "omnichannel" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Unified Omnichannel Inbox</span>
                    <span className="text-[10px] font-semibold text-blue-600">5 Saluran Terhubung</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { channel: "WhatsApp", sender: "Budi Santoso", msg: "Kak, paket honeymoon-nya masih available?", time: "1 mnt lalu", unread: true },
                      { channel: "Instagram DM", sender: "@anitaputri", msg: "Halo, harga serumnya berapa ya min?", time: "4 mnt lalu", unread: false },
                      { channel: "Web Chat", sender: "Visitor #409", msg: "Bisa integrasi ke database internal via API?", time: "12 mnt lalu", unread: false },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between p-3 rounded-xl border text-xs ${item.unread ? "bg-blue-50/40 border-blue-200" : "bg-white border-slate-100"}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-xs">
                            {item.sender[0]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-slate-900">{item.sender}</span>
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">
                                {item.channel}
                              </span>
                            </div>
                            <p className="text-slate-500 truncate max-w-[200px] sm:max-w-xs">{item.msg}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium shrink-0">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "crm" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Sales Pipeline &amp; Customer Card</span>
                    <span className="text-[10px] font-semibold text-emerald-600">Pipeline: Rp 124.500.000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { stage: "Lead Masuk", count: "48 Lead", color: "border-blue-200 bg-blue-50/30" },
                      { stage: "Follow Up", count: "21 Prospek", color: "border-amber-200 bg-amber-50/30" },
                      { stage: "Closing / Won", count: "34 Deal", color: "border-emerald-200 bg-emerald-50/30" },
                    ].map((st, i) => (
                      <div key={i} className={`p-3 rounded-xl border ${st.color} text-center`}>
                        <span className="text-[10px] font-semibold text-slate-500 block">{st.stage}</span>
                        <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">{st.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">PT Maju Makmur Bersama</span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">High Intent</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-slate-500">
                      <span>Value: Rp 18.500.000</span>
                      <span>PIC: Rina (Sales)</span>
                      <span>Tags: Corporate, B2B</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "broadcast" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">WhatsApp Broadcast &amp; Campaign</span>
                    <span className="text-[10px] font-semibold text-emerald-600">Official Meta Verified</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">Campaign: Promo Gajian Ramadhan</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Terkirim 100%
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className="p-2 bg-white rounded-lg border border-slate-100">
                        <span className="text-[10px] text-slate-400 block">Terkirim</span>
                        <span className="text-xs font-bold text-slate-800">5.240 Kontak</span>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-100">
                        <span className="text-[10px] text-slate-400 block">Read Rate</span>
                        <span className="text-xs font-bold text-blue-600">94.8%</span>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-100">
                        <span className="text-[10px] text-slate-400 block">Reply / Order</span>
                        <span className="text-xs font-bold text-emerald-600">18.4%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    * Broadcast resmi via WhatsApp Business API dengan perlindungan anti-blokir dan analitik klik real-time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
