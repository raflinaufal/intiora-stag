import { Truck, ExternalLink, Clock } from "lucide-react";
import { ShippingCardMessage } from "@/data/chat-demo";

interface ChatShippingCardProps {
  card: ShippingCardMessage;
}

export function ChatShippingCard({ card }: ChatShippingCardProps) {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-xl bg-white border border-slate-200 shadow-2xs overflow-hidden text-left animate-chat-fade-up">
      {/* Header */}
      <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
          <Truck className="h-3.5 w-3.5 text-blue-600" />
          <span>{card.title}</span>
        </div>
        <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {card.status}
        </span>
      </div>

      {/* Details */}
      <div className="p-3 space-y-2 text-xs">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-500 font-medium">No. Resi ({card.courier})</span>
          <span className="font-mono font-bold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
            {card.tracking}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
          <Clock className="h-3 w-3 text-blue-600 shrink-0" />
          <span>{card.estimate}</span>
        </div>

        <button
          type="button"
          aria-label={`Lihat detail resi ${card.tracking}`}
          className="w-full mt-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-[11px] font-semibold transition-colors"
        >
          <span>{card.buttonText}</span>
          <ExternalLink className="h-2.5 w-2.5 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
