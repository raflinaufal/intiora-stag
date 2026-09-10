import { ReceiptText, MapPin, Package } from "lucide-react";
import { OrderCardMessage } from "@/data/chat-demo";

interface ChatOrderCardProps {
  card: OrderCardMessage;
}

export function ChatOrderCard({ card }: ChatOrderCardProps) {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden text-left animate-chat-fade-up">
      {/* Header */}
      <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
          <ReceiptText className="h-4 w-4 text-blue-600" />
          <span>Ringkasan Pesanan</span>
        </div>
        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
          Draft CRM
        </span>
      </div>

      {/* Body Details */}
      <div className="p-3.5 sm:p-4 space-y-2.5 text-xs">
        {/* Item line */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Package className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="font-semibold text-slate-900 truncate">{card.item}</span>
          </div>
          <span className="text-slate-500 font-medium shrink-0">x{card.qty}</span>
        </div>

        {/* Delivery line */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>Tujuan Pengiriman</span>
          </div>
          <span className="font-semibold text-slate-800">{card.delivery}</span>
        </div>

        {/* Total line */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-dashed border-slate-200">
          <span className="text-xs font-bold text-slate-700">Total Pembayaran</span>
          <span className="text-sm font-extrabold text-blue-600">{card.total}</span>
        </div>
      </div>
    </div>
  );
}
