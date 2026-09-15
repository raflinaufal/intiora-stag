"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { productsData } from "@/data/landing";
import {
  ChevronDown,
  ChevronUp,
  Check,
  CheckCheck,
  ArrowRight,
  MessageSquare,
  Bot,
  Users,
  Send,
  Sparkles,
  CheckCircle2,
  QrCode,
  Zap,
  RotateCcw,
  UserCheck,
  Smile,
  Paperclip,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// 1. VISUAL MOCKUP 1: AUTHENTIC WHATSAPP WEB DEMO INTERFACE
// ============================================================================
function ChatOmnichannelVisual() {
  const [chatStep, setChatStep] = useState<"initial" | "buy" | "paid" | "doctor">("initial");

  return (
    <div className="w-full flex flex-col bg-white select-none rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm">
      {/* WhatsApp Web Top Bar */}
      <div className="bg-[#F0F2F5] px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
              SR
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-900">Siti Rahma</span>
              <span className="text-[10px] text-slate-400">(0812-3456-xxxx)</span>
            </div>
            <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
              online
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
            <Check className="w-3 h-3 text-emerald-600" />
            Meta Verified API
          </span>
          {chatStep !== "initial" && (
            <button
              onClick={() => setChatStep("initial")}
              className="text-[10px] font-bold text-slate-500 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 px-2 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* WhatsApp Chat Area with Authentic Wallpaper Background */}
      <div className="p-3 sm:p-4 bg-[#EFEAE2] min-h-[350px] flex flex-col justify-between gap-3">
        {/* Messages container */}
        <div className="space-y-3 text-xs">
          {/* Incoming Customer Message */}
          <div className="flex flex-col items-start animate-in fade-in duration-200">
            <div className="bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl rounded-tl-xs max-w-[85%] shadow-xs space-y-1 relative">
              <p className="leading-relaxed text-[11px] sm:text-xs text-slate-800">
                Halo min, mau tanya paket Brightening Serum ready gak ya? Harganya berapa dan bisa kirim hari ini ke Jakarta Barat?
              </p>
              <div className="text-[9px] text-slate-400 text-right">11:14</div>
            </div>
          </div>

          {/* Outgoing AI Response Message (WhatsApp Green) */}
          <div className="flex flex-col items-end animate-in fade-in duration-200">
            <div className="bg-[#D9FDD3] text-slate-900 p-3 rounded-2xl rounded-tr-xs max-w-[90%] shadow-xs space-y-2 border border-emerald-200/50">
              <p className="leading-relaxed text-[11px] sm:text-xs text-slate-800">
                Halo Kak Siti! Paket <strong>Brightening Serum</strong> ready stock ya kak. Harganya <strong>Rp 165.000</strong> (lagi promo hemat 15%).
              </p>
              <p className="leading-relaxed text-[11px] sm:text-xs text-slate-800">
                Pesanan sebelum jam 15.00 langsung kami kirim hari ini via JNE. Mau sekalian kami buatkan pesanannya kak?
              </p>

              <div className="flex items-center justify-end gap-1 text-[9px] text-slate-500 pt-0.5">
                <span>11:14</span>
                <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
              </div>

              {/* Native WhatsApp Quick Reply Action Chips */}
              {chatStep === "initial" && (
                <div className="pt-1.5 border-t border-emerald-300/40 space-y-1.5">
                  <div className="text-[9px] font-semibold text-emerald-800 flex items-center gap-1">
                    <span>Pilihan Respons Cepat:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setChatStep("buy")}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-[10px] border border-emerald-300/80 shadow-2xs cursor-pointer hover:scale-105 active:scale-95 transition-all flex items-center gap-1"
                    >
                      <span>🛍️ Beli Sekarang (Rp 165.000)</span>
                    </button>
                    <button
                      onClick={() => setChatStep("doctor")}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 font-semibold text-[10px] border border-slate-300/80 shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>👩‍⚕️ Tanya Dokter / Admin</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* FLOW: BUY NOW & QRIS */}
          {chatStep === "buy" && (
            <>
              {/* Customer confirmation */}
              <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="bg-white text-slate-900 px-3.5 py-2 rounded-2xl rounded-tl-xs max-w-[85%] shadow-xs space-y-1">
                  <p className="text-[11px] sm:text-xs text-slate-800">
                    Boleh min, saya pesan 1 paket. Mau bayar pakai QRIS ya kak.
                  </p>
                  <div className="text-[9px] text-slate-400 text-right">11:15</div>
                </div>
              </div>

              {/* AI QRIS Invoice */}
              <div className="flex flex-col items-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="bg-[#D9FDD3] text-slate-900 p-3 rounded-2xl rounded-tr-xs max-w-[90%] shadow-xs space-y-2 border border-emerald-200/50">
                  <p className="text-[11px] text-slate-800 leading-snug">
                    Pesanan <strong>#ORD-889</strong> siap!
                    <br />• 1x Brightening Serum (Rp 165.000)
                    <br />• Ongkir: Rp 0 (Free Ongkir Jakbar)
                    <br /><strong>Total Tagihan: Rp 165.000</strong>
                  </p>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-slate-800 flex items-center gap-1">
                        <QrCode className="w-3.5 h-3.5 text-blue-600" />
                        QRIS Dinamis Otomatis
                      </span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                        Rp 165.000
                      </span>
                    </div>
                    <button
                      onClick={() => setChatStep("paid")}
                      className="w-full py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] transition-all cursor-pointer flex items-center justify-center gap-1 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Simulasi Klik Bayar QRIS (Lunas)</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-end gap-1 text-[9px] text-slate-500 pt-0.5">
                    <span>11:15</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* FLOW: PAID SUCCESS */}
          {chatStep === "paid" && (
            <>
              {/* Payment Verified Stamp */}
              <div className="flex justify-center animate-in zoom-in-95 duration-200">
                <span className="px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] font-bold border border-emerald-300/80 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Pembayaran QRIS Rp 165.000 Lunas Otomatis
                </span>
              </div>

              {/* AI Receipt & Tracking */}
              <div className="flex flex-col items-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="bg-[#D9FDD3] text-slate-900 p-3 rounded-2xl rounded-tr-xs max-w-[90%] shadow-xs space-y-1.5 border border-emerald-200/50">
                  <p className="text-[11px] text-slate-800 leading-relaxed">
                    Terima kasih Kak Siti! Pembayaran telah kami verifikasi. Pesanan sedang dipacking tim gudang, resi JNE: <strong>#JNE-8829103</strong>.
                  </p>
                  <div className="flex items-center justify-between pt-1 border-t border-emerald-300/40">
                    <button
                      onClick={() => setChatStep("initial")}
                      className="text-[10px] font-bold text-blue-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Ulangi Simulasi</span>
                    </button>
                    <div className="flex items-center gap-1 text-[9px] text-slate-500">
                      <span>11:16</span>
                      <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* FLOW: SMART HANDOFF TO DOCTOR */}
          {chatStep === "doctor" && (
            <>
              {/* Customer question */}
              <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="bg-white text-slate-900 px-3.5 py-2 rounded-2xl rounded-tl-xs max-w-[85%] shadow-xs space-y-1">
                  <p className="text-[11px] sm:text-xs text-slate-800">
                    Min, kulit saya agak sensitif dan berjerawat ringan, apakah serum ini aman? Mau konsultasi dulu ya.
                  </p>
                  <div className="text-[9px] text-slate-400 text-right">11:15</div>
                </div>
              </div>

              {/* Handoff Notice */}
              <div className="flex justify-center animate-in zoom-in-95 duration-200">
                <span className="px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-[10px] font-bold border border-blue-300/80 flex items-center gap-1.5 shadow-2xs">
                  <UserCheck className="w-3 h-3 text-blue-600" />
                  Chat dialihkan ke dr. Nadia (Konsultan Medis)
                </span>
              </div>

              {/* Doctor Reply */}
              <div className="flex flex-col items-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tr-xs max-w-[90%] shadow-xs space-y-1.5 border border-slate-200">
                  <div className="flex items-center gap-1.5 pb-1 border-b border-slate-100">
                    <div className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                      N
                    </div>
                    <span className="text-[10px] font-bold text-slate-900">dr. Nadia · Konsultan Kulit</span>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    Halo Kak Siti, saya dr. Nadia. Serum ini hypoallergenic dan bebas alkohol sehingga aman untuk kulit sensitif berjerawat. Boleh saya tahu skincare apa yang kakak pakai saat ini?
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setChatStep("initial")}
                      className="text-[10px] font-bold text-blue-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Ulangi Simulasi</span>
                    </button>
                    <div className="flex items-center gap-1 text-[9px] text-slate-500">
                      <span>11:16</span>
                      <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* WhatsApp Bottom Input Simulation Bar */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-300/50 text-slate-500">
          <Smile className="w-4 h-4 text-slate-400 shrink-0" />
          <Paperclip className="w-4 h-4 text-slate-400 shrink-0" />
          <div className="flex-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300/80 text-[11px] text-slate-400">
            Ketik pesan...
          </div>
          <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
            <Send className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. VISUAL MOCKUP 2: AI AGENT KNOWLEDGE BASE INTERFACE
// ============================================================================
function AiAgentVisual() {
  const [activeQuery, setActiveQuery] = useState<"reseller" | "retur">("reseller");

  return (
    <div className="w-full flex flex-col bg-white select-none rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">
              Knowledge Base Dokumen Bisnis
            </span>
            <span className="text-[10px] text-slate-500">
              AI otomatis memahami katalog dan SOP toko Anda
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
          <Check className="w-3 h-3 text-emerald-600" />
          100% Tersinkron
        </span>
      </div>

      {/* Uploaded Document Card */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-[10px]">
            PDF
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">Katalog_Produk_Harga_2026.pdf</span>
            <span className="text-[10px] text-slate-500">1.8 MB · 420 Produk &amp; SOP toko terindeks</span>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
          Status: Aktif
        </span>
      </div>

      {/* Interactive Testing Console */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            Simulasi Pertanyaan Pelanggan:
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveQuery("reseller")}
              className={cn(
                "text-[10px] px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors",
                activeQuery === "reseller" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              Harga Grosir
            </button>
            <button
              onClick={() => setActiveQuery("retur")}
              className={cn(
                "text-[10px] px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors",
                activeQuery === "retur" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              Kebijakan Retur
            </button>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2 text-xs">
          <div className="flex items-center gap-1.5 text-blue-900 font-bold text-[11px]">
            <Bot className="w-3.5 h-3.5 text-blue-600" />
            <span>Jawaban AI (Sesuai Isi Dokumen):</span>
          </div>
          {activeQuery === "reseller" ? (
            <p className="text-[11px] text-slate-700 leading-relaxed">
              &ldquo;Berdasarkan Katalog hal. 4, minimal order reseller adalah 12 paket dengan potongan harga 20% dan gratis materi promosi. Mau kami sambungkan ke tim Sales B2B untuk formulir pendaftaran?&rdquo;
            </p>
          ) : (
            <p className="text-[11px] text-slate-700 leading-relaxed">
              &ldquo;Berdasarkan SOP Retur hal. 2, barang rusak saat pengiriman bisa ditukar baru dalam 2x24 jam sejak paket diterima, cukup lampirkan video unboxing tanpa biaya tambahan.&rdquo;
            </p>
          )}
          <div className="flex items-center justify-between pt-1 border-t border-blue-200/60 text-[10px] text-slate-500">
            <span>Akurasi: Sesuai Dokumen</span>
            <span className="text-emerald-700 font-bold">✓ Tanpa Halusinasi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. VISUAL MOCKUP 3: APLIKASI CRM & SALES PIPELINE KANBAN
// ============================================================================
function CrmPipelineVisual() {
  return (
    <div className="w-full flex flex-col bg-white select-none rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">
              Papan Pipeline Penjualan (Kanban)
            </span>
            <span className="text-[10px] text-slate-500">
              Pantau proses closing tim sales dari kontak baru hingga lunas
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          45 Closing Bulan Ini
        </span>
      </div>

      {/* Kanban Board Columns */}
      <div className="grid grid-cols-3 gap-2.5 text-xs">
        {/* Col 1 */}
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-slate-200/80">
            <span className="text-[10px] font-bold text-slate-700">Chat Masuk</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 font-bold text-slate-700">18</span>
          </div>
          <div className="p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs space-y-1">
            <span className="text-xs font-bold text-slate-900 block">Budi Pratama</span>
            <span className="text-[10px] text-slate-500 block">Tanya paket grosir</span>
            <span className="text-[10px] font-bold text-blue-600">Rp 4.500.000</span>
          </div>
        </div>

        {/* Col 2 */}
        <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-blue-200/80">
            <span className="text-[10px] font-bold text-blue-800">Menunggu Transfer</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-200 font-bold text-blue-800">8</span>
          </div>
          <div className="p-2 rounded-lg bg-white border border-blue-200/80 shadow-2xs space-y-1">
            <span className="text-xs font-bold text-slate-900 block">Siti Rahma</span>
            <span className="text-[10px] text-slate-500 block">Menunggu QRIS</span>
            <span className="text-[10px] font-bold text-amber-600">Rp 165.000</span>
          </div>
        </div>

        {/* Col 3 */}
        <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-emerald-200/80">
            <span className="text-[10px] font-bold text-emerald-800">Closing Lunas</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-200 font-bold text-emerald-800">45</span>
          </div>
          <div className="p-2 rounded-lg bg-white border border-emerald-200/80 shadow-2xs space-y-1">
            <span className="text-xs font-bold text-slate-900 block">PT Surya Medika</span>
            <span className="text-[10px] text-slate-500 block">Lunas via Bank Transfer</span>
            <span className="text-[10px] font-bold text-emerald-700">Rp 18.200.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. VISUAL MOCKUP 4: WA BLAST & BROADCAST RESMI
// ============================================================================
function WaBlastVisual() {
  return (
    <div className="w-full flex flex-col bg-white select-none rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
            <Send className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">
              WhatsApp Broadcast Resmi Meta
            </span>
            <span className="text-[10px] text-slate-500">
              Pengiriman massal resmi anti-blokir nomor
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          100% Terkirim
        </span>
      </div>

      {/* Broadcast Message Preview */}
      <div className="p-3.5 rounded-xl bg-[#EFEAE2] border border-slate-200 space-y-2 text-xs">
        <div className="bg-[#D9FDD3] p-3 rounded-2xl rounded-tr-xs max-w-[90%] ml-auto shadow-xs space-y-1.5">
          <p className="text-[11px] text-slate-800 leading-relaxed">
            &ldquo;Halo Kak Budi! Khusus pelanggan setia, nikmati <strong>Diskon 25%</strong> untuk semua produk favoritmu sampai besok malam. Kode promo: <strong>GAJIANHEMAT</strong>.&rdquo;
          </p>
          <div className="pt-1">
            <span className="inline-block px-3 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-800 font-bold text-[10px]">
              🛒 Beli Langsung via WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* Real Stats Grid */}
      <div className="grid grid-cols-4 gap-2 text-center text-xs pt-1">
        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
          <span className="text-[10px] text-slate-500 block">Terkirim</span>
          <span className="text-xs sm:text-sm font-extrabold text-slate-900">1.250</span>
        </div>
        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
          <span className="text-[10px] text-slate-500 block">Dibaca</span>
          <span className="text-xs sm:text-sm font-extrabold text-emerald-600">95%</span>
        </div>
        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
          <span className="text-[10px] text-slate-500 block">Transaksi</span>
          <span className="text-xs sm:text-sm font-extrabold text-blue-600">342</span>
        </div>
        <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-900">
          <span className="text-[10px] text-blue-600 block font-semibold">Omset Masuk</span>
          <span className="text-xs sm:text-sm font-black text-blue-700">Rp 38,5 Jt</span>
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

                    {/* Feature Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-semibold"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span>{badge}</span>
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <Link
                        href={item.ctaHref}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 group transition-all"
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

            {/* Direct arrow link matching user screenshot: Lihat semua fitur → */}
            <div className="pt-3 px-1">
              <Link
                href="/fitur"
                className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-blue-600 hover:text-blue-700 group transition-all"
              >
                <span>Lihat semua fitur</span>
                <span className="text-lg font-bold group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </div>
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
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
