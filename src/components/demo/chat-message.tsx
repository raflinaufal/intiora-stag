import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { ChatMessageItem } from "@/data/chat-demo";
import { ChatInvoiceCard } from "./chat-invoice-card";
import { ChatBookingCard } from "./chat-booking-card";
import { ChatCourseCard } from "./chat-course-card";
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-[10px] sm:text-[11px] font-medium border border-slate-300/60 shadow-2xs max-w-[90%] text-center leading-tight">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
          <span>{item.text}</span>
        </div>
      </div>
    );
  }

  // 2. TYPING INDICATOR (AI Typing)
  if (item.type === "typing") {
    return (
      <div className="flex items-end gap-2 my-1 animate-chat-fade-up">
        {/* Intiora Avatar */}
        <div className="h-6 w-6 rounded-full bg-blue-600 p-1 flex items-center justify-center text-white shrink-0 shadow-2xs overflow-hidden">
          <Image
            src="/intiora-icon.png"
            alt="Intiora"
            width={14}
            height={14}
            className="object-contain brightness-0 invert"
            unoptimized
          />
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
        <div className="max-w-[84%] sm:max-w-[320px] rounded-2xl rounded-tr-xs bg-[#d9fdd3] border border-[#b8e8b0]/70 px-3.5 py-2 text-[#111b21] text-xs sm:text-[13px] leading-relaxed shadow-2xs text-left">
          {item.text}
        </div>
        <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-400 font-medium mr-1">
          <span>{item.timestamp}</span>
          <CheckCheck className="h-3.5 w-3.5 text-[#34b7f1]" />
        </div>
      </div>
    );
  }

  // 4. INVOICE CARD (WITH QRIS)
  if (item.type === "invoice-card") {
    return (
      <div className="flex items-start my-1.5 pl-7">
        <ChatInvoiceCard card={item} />
      </div>
    );
  }

  // 5. BOOKING CARD (CLINIC)
  if (item.type === "booking-card") {
    return (
      <div className="flex items-start my-1.5 pl-7">
        <ChatBookingCard card={item} />
      </div>
    );
  }

  // 6. COURSE CARD (EDUCATION)
  if (item.type === "course-card") {
    return (
      <div className="flex items-start my-1.5 pl-7">
        <ChatCourseCard card={item} />
      </div>
    );
  }

  // 7. PRODUCT CARD
  if (item.type === "product-card") {
    return (
      <div className="flex items-start my-1.5 pl-7">
        <ChatProductCard card={item} />
      </div>
    );
  }

  // 8. ORDER SUMMARY CARD
  if (item.type === "order-card") {
    return (
      <div className="flex items-start my-1.5 pl-7">
        <ChatOrderCard card={item} />
      </div>
    );
  }

  // 9. SHIPPING STATUS CARD
  if (item.type === "shipping-card") {
    return (
      <div className="flex items-start my-1.5 pl-7">
        <ChatShippingCard card={item} />
      </div>
    );
  }

  // 10. ORDER SUCCESS CARD
  if (item.type === "success-card") {
    return (
      <div className="flex items-start my-1.5 pl-7">
        <ChatSuccessCard card={item} />
      </div>
    );
  }

  // 11. AI / STORE MESSAGE
  if (item.type === "ai") {
    return (
      <div className="flex items-end gap-2 my-1 animate-chat-fade-up">
        {/* Avatar */}
        <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-2xs overflow-hidden p-1">
          <Image
            src="/intiora-icon.png"
            alt="Intiora"
            width={14}
            height={14}
            className="object-contain brightness-0 invert"
            unoptimized
          />
        </div>

        {/* Message bubble */}
        <div className="max-w-[85%] sm:max-w-[330px] text-left">
          <div className="rounded-2xl rounded-tl-xs bg-white border border-slate-200/90 px-3.5 py-2 text-[#111b21] text-xs sm:text-[13px] leading-relaxed shadow-2xs">
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
