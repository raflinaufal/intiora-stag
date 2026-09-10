import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { ProductCardMessage } from "@/data/chat-demo";

interface ChatProductCardProps {
  card: ProductCardMessage;
}

export function ChatProductCard({ card }: ChatProductCardProps) {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-xl bg-white border border-slate-200 shadow-2xs overflow-hidden text-left animate-chat-fade-up">
      {/* Top Banner */}
      <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600">
          <Sparkles className="h-3 w-3 text-blue-600" />
          {card.badge}
        </span>
        <span className="text-[9px] font-medium text-slate-400">Tersedia</span>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-start gap-2.5">
          {/* Thumbnail (Solid Primary Blue Icon) */}
          <div className="h-11 w-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <ShoppingBag className="h-5 w-5" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-slate-900 leading-snug truncate">
              {card.title}
            </h4>
            <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="block text-[9px] text-slate-400 font-medium">Harga</span>
            <span className="text-xs sm:text-sm font-extrabold text-blue-600">
              {card.price}
            </span>
          </div>

          <button
            type="button"
            aria-label={`Pilih produk ${card.title}`}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold transition-colors"
          >
            <span>{card.ctaText}</span>
            <ArrowRight className="h-2.5 w-2.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
