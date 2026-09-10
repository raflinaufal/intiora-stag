import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { SuccessCardMessage } from "@/data/chat-demo";

interface ChatSuccessCardProps {
  card: SuccessCardMessage;
}

export function ChatSuccessCard({ card }: ChatSuccessCardProps) {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-white border border-emerald-200/90 shadow-sm overflow-hidden text-left animate-chat-fade-up">
      {/* Top Banner */}
      <div className="bg-emerald-50 px-3.5 py-2 border-b border-emerald-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <span>{card.title}</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-700 bg-white/90 px-2 py-0.5 rounded-full border border-emerald-200">
          {card.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-3.5 sm:p-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">Nomor Invoice</span>
          <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
            {card.invoice}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-emerald-700 bg-emerald-50/70 p-2 rounded-lg">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>Notifikasi otomatis telah dikirim ke WhatsApp pelanggan</span>
        </div>

        <button
          type="button"
          aria-label={`Lihat pesanan invoice ${card.invoice}`}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
        >
          <span>{card.buttonText}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
