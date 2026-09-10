import { ReceiptText, MapPin, Package } from "lucide-react";
import { OrderCardMessage } from "@/data/chat-demo";

interface ChatOrderCardProps {
  card: OrderCardMessage;
}

export function ChatOrderCard({ card }: ChatOrderCardProps) {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-xl bg-white border border-slate-200 shadow-2xs overflow-hidden text-left animate-chat-fade-up">
      {/* Header */}
      <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
          <ReceiptText className="h-3.5 w-3.5 text-blue-600" />
          <span>Ringkasan Pesanan</span>
        </div>
        <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200/60">
          Draft CRM
        </span>
      </div>

      {/* Body Details */}
      <div className="p-3 space-y-2 text-xs">
        {/* Item line */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <Package className="h-3 w-3 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-800 text-[11px] truncate">{card.item}</span>
          </div>
          <span className="text-slate-500 text-[11px] font-medium shrink-0">x{card.qty}</span>
        </div>

        {/* Delivery line */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100 text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
            <span>Tujuan</span>
          </div>
          <span className="font-medium text-slate-800">{card.delivery}</span>
        </div>

        {/* Total line */}
        <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-dashed border-slate-200">
          <span className="text-[11px] font-bold text-slate-700">Total</span>
          <span className="text-xs font-extrabold text-blue-600">{card.total}</span>
        </div>
      </div>
    </div>
  );
}
