"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowUp, Sparkles } from "lucide-react";
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
    // Considered "near bottom" if within 75px
    isNearBottomRef.current = distanceToBottom <= 75;
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
      className="flex-1 overflow-y-auto scroll-smooth chat-scrollbar bg-[#f8fafc] p-4 sm:p-5 space-y-3 sm:space-y-3.5"
      tabIndex={0}
      role="region"
      aria-label="Area riwayat percakapan demo interaktif"
    >
      {/* Date / Security Badge */}
      <div className="flex justify-center mb-2">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-600 bg-slate-200/50 px-3 py-0.5 rounded-full border border-slate-300/30">
          Enkripsi WhatsApp Business API Aktif
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
    <div
      className={`w-full max-w-[760px] h-[520px] sm:h-[580px] lg:h-[600px] rounded-[28px] sm:rounded-[32px] bg-white shadow-2xl shadow-blue-950/12 border border-slate-200/90 overflow-hidden flex flex-col text-slate-900 select-none ${className}`}
    >
      {/* =================================================================== */}
      {/* 1. HEADER (Fixed inside component, shrink-0)                        */}
      {/* =================================================================== */}
      <div className="shrink-0 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-4 sm:px-5 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 shadow-sm z-10">
        {/* Left: Brand & Status */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center h-8 w-8 rounded-xl bg-white/15 backdrop-blur-xs border border-white/25 shadow-inner">
            <Image
              src="/intiora-icon.png"
              alt="Intiora Logo"
              width={22}
              height={22}
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-tight text-white">
                Intiora AI
              </span>
              <Sparkles className="h-3.5 w-3.5 text-blue-200" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[10px] font-medium text-blue-100/90">
                Online &bull; Siap Merespons 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Right: Mode Tabs */}
        <div
          role="tablist"
          aria-label="Mode percakapan AI"
          className="flex items-center p-1 rounded-xl bg-black/20 backdrop-blur-xs border border-white/15"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "lead"}
            onClick={() => handleTabChange("lead")}
            className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "lead"
                ? "bg-white text-blue-700 shadow-sm shadow-black/10"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            Lead Generation
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "service"}
            onClick={() => handleTabChange("service")}
            className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "service"
                ? "bg-white text-blue-700 shadow-sm shadow-black/10"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            Customer Service
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. CONVERSATION AREA (THE ONLY SCROLLABLE PART)                     */}
      {/* Re-mounts on tab switch via key={activeTab} for clean reset         */}
      {/* =================================================================== */}
      <ChatConversationArea key={activeTab} activeTab={activeTab} />

      {/* =================================================================== */}
      {/* 3. INPUT BAR (Fixed at bottom of component, shrink-0, visual only)   */}
      {/* =================================================================== */}
      <div className="shrink-0 bg-white border-t border-slate-200/90 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 shadow-2xs">
        <div className="flex-1 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm text-slate-600">
          <span className="truncate">Ketik pesan Anda...</span>
        </div>

        <button
          type="button"
          aria-label="Kirim pesan simulasi"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/30 transition-all cursor-default"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}
