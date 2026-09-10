import { QrCode } from "lucide-react";
import { InvoiceCardMessage } from "@/data/chat-demo";

interface ChatInvoiceCardProps {
  card: InvoiceCardMessage;
}

export function ChatInvoiceCard({ card }: ChatInvoiceCardProps) {
  return (
    <div className="w-full max-w-[290px] sm:max-w-[320px] rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden text-left animate-chat-fade-up">
      {/* Top Header */}
      <div className="px-3.5 py-2.5 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-900 truncate">
            Invoice · {card.storeName}
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            QRIS
          </span>
        </div>
        <p className="text-[10px] text-slate-500 font-mono mt-0.5">
          {card.invoiceNo} · {card.customerName}
        </p>
      </div>

      {/* Itemized Table */}
      <div className="p-3.5 space-y-2 text-xs">
        {card.items.map((it, idx) => (
          <div key={idx} className="flex items-center justify-between text-slate-700">
            <span className="text-[11px] truncate">{it.name}</span>
            <span className="text-[11px] font-semibold text-slate-900 shrink-0">
              {it.price}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-between text-slate-500 text-[11px] pt-1 border-t border-slate-100">
          <span>Ongkir JNE</span>
          <span className="font-medium text-slate-700">{card.shippingFee}</span>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-1.5 border-t border-dashed border-slate-200 text-xs">
          <span className="font-bold text-slate-900">Total</span>
          <span className="font-extrabold text-blue-600 text-sm">{card.total}</span>
        </div>

        {/* QRIS Code Mockup */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-col items-center justify-center">
          <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col items-center">
            {/* SVG QR Code */}
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 text-slate-900"
              fill="currentColor"
              aria-label="Kode QRIS Pembayaran"
            >
              {/* Outer markers */}
              <rect x="10" y="10" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="5" />
              <rect x="18" y="18" width="10" height="10" rx="1" fill="currentColor" />
              
              <rect x="64" y="10" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="5" />
              <rect x="72" y="18" width="10" height="10" rx="1" fill="currentColor" />
              
              <rect x="10" y="64" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="5" />
              <rect x="18" y="72" width="10" height="10" rx="1" fill="currentColor" />

              {/* Data modules pattern */}
              <rect x="42" y="12" width="6" height="6" fill="currentColor" />
              <rect x="52" y="12" width="6" height="6" fill="currentColor" />
              <rect x="42" y="24" width="6" height="6" fill="currentColor" />
              <rect x="50" y="32" width="6" height="6" fill="currentColor" />
              
              <rect x="12" y="44" width="6" height="6" fill="currentColor" />
              <rect x="24" y="44" width="6" height="6" fill="currentColor" />
              <rect x="36" y="44" width="8" height="8" fill="currentColor" />
              <rect x="50" y="46" width="6" height="6" fill="currentColor" />
              <rect x="64" y="44" width="8" height="8" fill="currentColor" />
              <rect x="78" y="44" width="6" height="6" fill="currentColor" />

              <rect x="44" y="60" width="6" height="6" fill="currentColor" />
              <rect x="56" y="64" width="8" height="8" fill="currentColor" />
              <rect x="70" y="64" width="6" height="6" fill="currentColor" />
              <rect x="80" y="72" width="6" height="6" fill="currentColor" />
              <rect x="64" y="80" width="6" height="6" fill="currentColor" />
              <rect x="76" y="80" width="8" height="8" fill="currentColor" />
            </svg>
            <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
              <QrCode className="h-2.5 w-2.5" />
              <span>QRIS Pembayaran</span>
            </div>
          </div>

          {/* Status Pill */}
          <div className="mt-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              Menunggu Pembayaran
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
