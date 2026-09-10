import Image from "next/image";
import { CheckCheck, Bot, Sparkles } from "lucide-react";
import { ChatMessageItem } from "@/data/chat-demo";
import { ChatProductCard } from "./chat-product-card";
import { ChatOrderCard } from "./chat-order-card";
import { ChatShippingCard } from "./chat-shipping-card";
import { ChatSuccessCard } from "./chat-success-card";

interface ChatMessageProps {
  item: ChatMessageItem;
}

export function ChatMessage({ item }: ChatMessageProps) {
  // 1. SYSTEM MESSAGE
  if (item.type === "system") {
    return (
      <div className="flex justify-center my-1.5 animate-chat-fade-up">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200/80 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <span>{item.text}</span>
        </div>
      </div>
    );
  }

  // 2. TYPING INDICATOR (AI Typing)
  if (item.type === "typing") {
    return (
      <div className="flex items-end gap-2 my-1 animate-chat-fade-up">
        {/* Intiora Avatar (Solid Primary Blue) */}
        <div className="h-6 w-6 rounded-lg bg-blue-600 p-1 flex items-center justify-center text-white shrink-0 shadow-2xs">
          <Bot className="h-3.5 w-3.5" />
        </div>

        {/* Typing bubble */}
        <div className="rounded-2xl rounded-bl-xs bg-white px-3 py-2 border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-typing-1" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-typing-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-typing-3" />
          </div>
        </div>
      </div>
    );
  }

  // 3. CUSTOMER MESSAGE
  if (item.type === "customer") {
    return (
      <div className="flex flex-col items-end my-1 animate-chat-fade-up">
        <div className="max-w-[80%] sm:max-w-[310px] rounded-2xl rounded-tr-xs bg-blue-50/95 border border-blue-200/90 px-3.5 py-2 text-slate-800 text-xs sm:text-[13px] leading-relaxed shadow-2xs text-left">
          {item.text}
        </div>
        <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-400 font-medium mr-1">
          <span>{item.timestamp}</span>
          <CheckCheck className="h-3 w-3 text-blue-600" />
        </div>
      </div>
    );
  }

  // 4. PRODUCT CARD
  if (item.type === "product-card") {
    return (
      <div className="flex items-start my-1.5 pl-8">
        <ChatProductCard card={item} />
      </div>
    );
  }

  // 5. ORDER SUMMARY CARD
  if (item.type === "order-card") {
    return (
      <div className="flex items-start my-1.5 pl-8">
        <ChatOrderCard card={item} />
      </div>
    );
  }

  // 6. SHIPPING STATUS CARD
  if (item.type === "shipping-card") {
    return (
      <div className="flex items-start my-1.5 pl-8">
        <ChatShippingCard card={item} />
      </div>
    );
  }

  // 7. ORDER SUCCESS CARD
  if (item.type === "success-card") {
    return (
      <div className="flex items-start my-1.5 pl-8">
        <ChatSuccessCard card={item} />
      </div>
    );
  }

  // 8. AI MESSAGE
  if (item.type === "ai") {
    return (
      <div className="flex items-end gap-2 my-1 animate-chat-fade-up">
        {/* Avatar (Solid Primary Blue, No AI slop gradient) */}
        <div className="h-6 w-6 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-2xs overflow-hidden p-0.5">
          <Image
            src="/intiora-icon.png"
            alt="Intiora AI"
            width={18}
            height={18}
            className="object-contain"
          />
        </div>

        {/* Message bubble */}
        <div className="max-w-[84%] sm:max-w-[330px] text-left">
          {item.showAvatar && (
            <div className="flex items-center gap-1.5 mb-1 ml-0.5">
              <span className="text-[11px] font-bold text-slate-800">Intiora AI</span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[9px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Sparkles className="h-2.5 w-2.5 text-emerald-600" />
                AI Active
              </span>
            </div>
          )}

          <div className="rounded-2xl rounded-tl-xs bg-white border border-slate-200/90 px-3.5 py-2 text-slate-800 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
            {item.text}
          </div>

          <div className="mt-0.5 ml-1 text-[10px] text-slate-400 font-medium">
            {item.timestamp}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
