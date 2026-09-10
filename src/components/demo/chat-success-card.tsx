import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { SuccessCardMessage } from "@/data/chat-demo";

interface ChatSuccessCardProps {
  card: SuccessCardMessage;
}

export function ChatSuccessCard({ card }: ChatSuccessCardProps) {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-xl bg-white border border-emerald-200 shadow-2xs overflow-hidden text-left animate-chat-fade-up">
      {/* Top Banner */}
      <div className="bg-emerald-50 px-3 py-1.5 border-b border-emerald-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>{card.title}</span>
        </div>
        <span className="text-[9px] font-bold text-emerald-700 bg-white/90 px-1.5 py-0.2 rounded-full border border-emerald-200">
          {card.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-3 space-y-2 text-xs">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-500 font-medium">Invoice</span>
          <span className="font-mono font-bold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
            {card.invoice}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 bg-emerald-50/60 p-1.5 rounded-md">
          <ShieldCheck className="h-3 w-3 text-emerald-600 shrink-0" />
          <span>Notifikasi terkirim via WhatsApp</span>
        </div>

        <button
          type="button"
          aria-label={`Lihat pesanan invoice ${card.invoice}`}
          className="w-full inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-colors"
        >
          <span>{card.buttonText}</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
