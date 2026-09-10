import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { ProductCardMessage } from "@/data/chat-demo";

interface ChatProductCardProps {
  card: ProductCardMessage;
}

export function ChatProductCard({ card }: ChatProductCardProps) {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden text-left animate-chat-fade-up">
      {/* Top Banner / AI recommendation tag */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50/70 px-3.5 py-1.5 border-b border-blue-100/70 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          {card.badge}
        </span>
        <span className="text-[10px] font-medium text-slate-400">Tersedia</span>
      </div>

      {/* Main Card Content */}
      <div className="p-3.5 sm:p-4">
        <div className="flex items-start gap-3">
          {/* Thumbnail visual */}
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-inner">
            <ShoppingBag className="h-6 w-6" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-slate-900 leading-snug truncate">
              {card.title}
            </h4>
            <p className="mt-0.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="block text-[10px] text-slate-400 font-medium">Harga Promo</span>
            <span className="text-sm sm:text-base font-extrabold text-blue-600">
              {card.price}
            </span>
          </div>

          <button
            type="button"
            aria-label={`Pilih produk ${card.title}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <span>{card.ctaText}</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
