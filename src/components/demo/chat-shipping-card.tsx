import { Truck, ExternalLink, Clock } from "lucide-react";
import { ShippingCardMessage } from "@/data/chat-demo";

interface ChatShippingCardProps {
  card: ShippingCardMessage;
}

export function ChatShippingCard({ card }: ChatShippingCardProps) {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden text-left animate-chat-fade-up">
      {/* Header */}
      <div className="bg-slate-50 px-3.5 py-2.5 border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
          <div className="h-6 w-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
            <Truck className="h-3.5 w-3.5" />
          </div>
          <span>{card.title}</span>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {card.status}
        </span>
      </div>

      {/* Details */}
      <div className="p-3.5 sm:p-4 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">No. Resi ({card.courier})</span>
          <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
            {card.tracking}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600 bg-blue-50/60 p-2.5 rounded-xl border border-blue-100/60">
          <Clock className="h-3.5 w-3.5 text-blue-600 shrink-0" />
          <span>{card.estimate}</span>
        </div>

        <button
          type="button"
          aria-label={`Lihat detail resi ${card.tracking}`}
          className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
        >
          <span>{card.buttonText}</span>
          <ExternalLink className="h-3 w-3 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
