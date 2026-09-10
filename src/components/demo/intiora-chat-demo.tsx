"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import {
  ChatMessageItem,
  DemoTabMode,
  LEAD_GEN_STEPS,
  CUSTOMER_SERVICE_STEPS,
  ChatAnimationStep,
} from "@/data/chat-demo";
import { ChatMessage } from "./chat-message";

interface IntioraChatDemoProps {
  className?: string;
}

interface ChatConversationAreaProps {
  activeTab: DemoTabMode;
}

function ChatConversationArea({ activeTab }: ChatConversationAreaProps) {
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const conversationRef = useRef<HTMLDivElement>(null);
  const isNearBottomRef = useRef(true);

  // Monitor scroll position to respect user's manual scroll
  const handleScroll = useCallback(() => {
    const el = conversationRef.current;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    // Considered "near bottom" if within 60px
    isNearBottomRef.current = distanceToBottom <= 60;
  }, []);

  // Smooth scroll to bottom if user is near bottom
  const maybeScrollToBottom = useCallback((smooth = true) => {
    const el = conversationRef.current;
    if (!el) return;

    if (isNearBottomRef.current) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  }, []);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    isNearBottomRef.current = true;

    const steps: ChatAnimationStep[] =
      activeTab === "lead" ? LEAD_GEN_STEPS : CUSTOMER_SERVICE_STEPS;

    // Detect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cumulativeDelay = 0;

    steps.forEach((step, index) => {
      const stepDelay = prefersReducedMotion ? Math.min(step.delay, 300) : step.delay;
      cumulativeDelay += stepDelay;

      const timeoutId = setTimeout(() => {
        if (step.action === "show-typing") {
          setMessages((prev) => {
            const filtered = prev.filter((m) => m.type !== "typing");
            return [
              ...filtered,
              { id: `typing-${index}`, type: "typing" },
            ];
          });
        } else if (step.action === "add-message" && step.message) {
          setMessages((prev) => {
            const filtered = prev.filter((m) => m.type !== "typing");
            return [...filtered, step.message!];
          });
        }

        requestAnimationFrame(() => {
          maybeScrollToBottom(true);
        });
      }, cumulativeDelay);

      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [activeTab, maybeScrollToBottom]);

  return (
    <div
      ref={conversationRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto scroll-smooth chat-scrollbar bg-[#f8fafc] p-3 sm:p-3.5 space-y-2 sm:space-y-2.5"
      tabIndex={0}
      role="region"
      aria-label="Area riwayat percakapan demo interaktif"
    >
      {/* Date / Security Badge */}
      <div className="flex justify-center mb-1">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-200/60 px-2.5 py-0.5 rounded-full border border-slate-300/40">
          WhatsApp Business API Aktif
        </span>
      </div>

      {/* Dynamic Messages */}
      {messages.map((item) => (
        <ChatMessage key={item.id} item={item} />
      ))}
    </div>
  );
}

export function IntioraChatDemo({ className = "" }: IntioraChatDemoProps) {
  const [activeTab, setActiveTab] = useState<DemoTabMode>("lead");

  const handleTabChange = (newTab: DemoTabMode) => {
    if (newTab === activeTab) return;
    setActiveTab(newTab);
  };

  return (
    <div className={`w-full flex flex-col items-center select-none ${className}`}>
      {/* =================================================================== */}
      {/* RESPONSIVE DEVICE WIREFRAME                                         */}
      {/* Desktop/Tablet: Laptop frame                                        */}
      {/* Mobile: Smartphone/iPhone frame                                     */}
      {/* =================================================================== */}
      <div className="w-full max-w-[336px] sm:max-w-[540px] lg:max-w-[560px] bg-slate-900 p-2 sm:p-2.5 rounded-[36px] sm:rounded-t-[20px] sm:rounded-b-none border-[3px] sm:border border-slate-800 shadow-2xl relative transition-all">
        
        {/* Mobile-only: Dynamic Island / Camera Notch */}
        <div className="block sm:hidden flex justify-center my-0.5">
          <div className="h-3 w-16 bg-black rounded-full flex items-center justify-end px-1.5 shadow-inner">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
          </div>
        </div>

        {/* Desktop-only: Laptop Webcam Dot */}
        <div className="hidden sm:flex justify-center mb-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-700 block shadow-inner" />
        </div>

        {/* Inner Screen Container */}
        <div className="w-full h-[470px] sm:h-[480px] lg:h-[490px] rounded-[24px] sm:rounded-lg overflow-hidden bg-white flex flex-col border border-slate-800/80 shadow-inner">
          
          {/* 1. Header (Solid Primary Blue, Clean & Professional) */}
          <div className="shrink-0 bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 border-b border-blue-700 z-10 shadow-xs">
            {/* Left: Brand & Status */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-white/15 border border-white/20">
                <Image
                  src="/intiora-icon.png"
                  alt="Intiora Logo"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                    Intiora AI
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-medium text-blue-100">
                    Online 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Mode Tabs */}
            <div
              role="tablist"
              aria-label="Mode percakapan AI"
              className="flex items-center p-0.5 rounded-lg bg-blue-700/60 border border-blue-500/40 shrink-0"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "lead"}
                onClick={() => handleTabChange("lead")}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-bold whitespace-nowrap transition-all ${
                  activeTab === "lead"
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Lead Generation
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "service"}
                onClick={() => handleTabChange("service")}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-bold whitespace-nowrap transition-all ${
                  activeTab === "service"
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Customer Service
              </button>
            </div>
          </div>

          {/* 2. Conversation Area (The Only Scrollable Part) */}
          <ChatConversationArea key={activeTab} activeTab={activeTab} />

          {/* 3. Input Bar (Fixed at bottom) */}
          <div className="shrink-0 bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-2xs">
            <div className="flex-1 flex items-center px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-500">
              <span className="truncate">Ketik pesan Anda...</span>
            </div>

            <button
              type="button"
              aria-label="Kirim pesan simulasi"
              className="h-8 w-8 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center shrink-0 shadow-xs transition-all cursor-default"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Mobile-only: Home Indicator Bar */}
        <div className="block sm:hidden flex justify-center mt-1.5 mb-0.5">
          <div className="w-24 h-1 bg-slate-500/60 rounded-full" />
        </div>

      </div>

      {/* Desktop-only: Laptop Base Keyboard Deck Lip */}
      <div className="hidden sm:flex w-full max-w-[600px] lg:max-w-[620px] h-3 sm:h-3.5 bg-slate-200 border-t border-slate-300 rounded-b-xl shadow-md relative justify-center items-start">
        <div className="w-14 sm:w-16 h-1 bg-slate-400/80 rounded-b-xs" />
      </div>

      {/* Desktop-only: Laptop Desk Shadow */}
      <div className="hidden sm:block w-full max-w-[540px] h-2 bg-slate-900/10 blur-sm rounded-full mx-auto" />
    </div>
  );
}
