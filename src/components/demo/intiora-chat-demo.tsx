"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ShoppingBag,
  Plane,
  Stethoscope,
  GraduationCap,
  ArrowUp,
  CheckCircle2,
  Phone,
  MoreVertical,
  Paperclip,
  Smile,
  Wifi,
  Battery,
  Search,
} from "lucide-react";
import {
  ChatMessageItem,
  DemoTabMode,
  IndustryType,
  INDUSTRIES,
  getScenarioSteps,
  ChatAnimationStep,
} from "@/data/chat-demo";
import { ChatMessage } from "./chat-message";

interface IntioraChatDemoProps {
  className?: string;
}

interface ChatConversationAreaProps {
  industry: IndustryType;
  activeTab: DemoTabMode;
}

function ChatConversationArea({ industry, activeTab }: ChatConversationAreaProps) {
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const conversationRef = useRef<HTMLDivElement>(null);
  const isNearBottomRef = useRef(true);

  const handleScroll = useCallback(() => {
    const el = conversationRef.current;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    isNearBottomRef.current = distanceToBottom <= 60;
  }, []);

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

    const steps: ChatAnimationStep[] = getScenarioSteps(industry, activeTab);

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
  }, [industry, activeTab, maybeScrollToBottom]);

  return (
    <div
      ref={conversationRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto scroll-smooth chat-scrollbar bg-[#efeae2]/60 p-3 sm:p-4 space-y-2.5 min-h-0"
      tabIndex={0}
      role="region"
      aria-label="Riwayat percakapan WhatsApp Business AI"
    >
      {/* End-to-End Encryption Security Pill */}
      <div className="flex justify-center my-1">
        <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 bg-[#f0f2f5] px-3 py-1 rounded-lg border border-slate-200/60 shadow-2xs text-center max-w-[92%] leading-tight">
          🔒 Pesan terenkripsi secara otomatis melalui WhatsApp Business API Resmi
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
  const [activeIndustry, setActiveIndustry] = useState<IndustryType>("retail");
  const [activeTab, setActiveTab] = useState<DemoTabMode>("lead");

  const currentMeta =
    INDUSTRIES.find((ind) => ind.id === activeIndustry) || INDUSTRIES[0];

  const industryIcons: Record<IndustryType, typeof ShoppingBag> = {
    retail: ShoppingBag,
    travel: Plane,
    clinic: Stethoscope,
    education: GraduationCap,
  };

  const StoreIcon = industryIcons[activeIndustry];

  return (
    <div className={`w-full flex flex-col items-center select-none relative ${className}`}>
      
      {/* =================================================================== */}
      {/* TOP PILL SELECTOR: SWITCH 4 INDUSTRY SCENARIOS                      */}
      {/* 4-column equal grid: NEVER OVERFLOWS, NEVER CLIPPED                */}
      {/* =================================================================== */}
      <div className="w-full max-w-[324px] sm:max-w-[560px] lg:max-w-[580px] mb-3 sm:mb-4">
        <div className="grid grid-cols-4 gap-1 p-1 sm:p-1.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs backdrop-blur-md">
          {INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.id];
            const isActive = activeIndustry === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveIndustry(ind.id)}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-1 rounded-xl text-xs font-bold transition-all cursor-pointer truncate ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{ind.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =================================================================== */}
      {/* 1. DESKTOP VIEW: REALISTIC LAPTOP FRAME (Hidden on mobile < md)     */}
      {/* =================================================================== */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[560px] lg:max-w-[580px]">
        {/* Laptop Display Lid */}
        <div className="w-full bg-[#18181b] p-2.5 rounded-t-2xl border border-zinc-800 shadow-2xl relative">
          
          {/* Top Webcam Lens */}
          <div className="flex justify-center items-center mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 ring-1 ring-zinc-800 shadow-inner block" />
          </div>

          {/* Screen Content: Authentic WhatsApp Web & Omnichannel Interface */}
          <div className="w-full h-[470px] rounded-lg overflow-hidden bg-white flex flex-col border border-zinc-800/90 shadow-inner">
            
            {/* WhatsApp Web Header */}
            <div className="h-14 bg-[#f0f2f5] border-b border-[#e9edef] px-4 flex items-center justify-between gap-3 shrink-0">
              {/* Profile Info */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <StoreIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900 truncate">
                      {currentMeta.storeName}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-600/20 shrink-0" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-medium text-slate-500">
                      Online · Akun Bisnis Resmi
                    </span>
                  </div>
                </div>
              </div>

              {/* Mode Toggle & Icons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Mode Segmented Pills */}
                <div className="flex items-center p-0.5 rounded-lg bg-slate-200/80 border border-slate-300/60">
                  <button
                    type="button"
                    onClick={() => setActiveTab("lead")}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "lead"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Lead Gen
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("service")}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "service"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Customer Service
                  </button>
                </div>

                {/* WhatsApp Search & Menu */}
                <div className="flex items-center gap-1 text-slate-500">
                  <Search className="h-4 w-4" />
                  <MoreVertical className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Conversation Stream */}
            <ChatConversationArea
              key={`desktop-${activeIndustry}-${activeTab}`}
              industry={activeIndustry}
              activeTab={activeTab}
            />

            {/* WhatsApp Web Bottom Input Bar */}
            <div className="h-14 bg-[#f0f2f5] border-t border-[#e9edef] px-4 flex items-center gap-3 shrink-0">
              <Smile className="h-5 w-5 text-slate-500 shrink-0 cursor-default" />
              <Paperclip className="h-5 w-5 text-slate-500 shrink-0 cursor-default" />
              <div className="flex-1 flex items-center px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 shadow-2xs">
                <span>Ketik pesan ke {currentMeta.storeName}...</span>
              </div>
              <button
                type="button"
                aria-label="Kirim pesan simulasi"
                className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center shrink-0 shadow-xs transition-all cursor-default"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Laptop Aluminum Base Chassis */}
        <div className="w-full h-3.5 bg-[#27272a] rounded-b-xl border-t border-zinc-700 relative flex justify-center items-start shadow-xl">
          <div className="w-16 h-1 bg-zinc-950/80 rounded-b-md mx-auto" />
        </div>
        {/* Soft Contact Shadow */}
        <div className="w-[90%] h-2.5 mx-auto bg-black/15 blur-md rounded-full mt-0.5" />
      </div>

      {/* =================================================================== */}
      {/* 2. MOBILE VIEW: REALISTIC SMARTPHONE FRAME (Visible on mobile < md) */}
      {/* =================================================================== */}
      <div className="flex md:hidden flex-col items-center w-full max-w-[324px]">
        {/* Phone Outer Shell */}
        <div className="w-full bg-[#18181b] p-2 rounded-[42px] border-[3px] border-[#27272a] shadow-2xl relative">
          
          {/* Dynamic Island Notch */}
          <div className="h-4 w-24 bg-black rounded-full mx-auto flex items-center justify-between px-2.5 mb-1.5 shadow-inner">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            <span className="h-1 w-1 rounded-full bg-zinc-800" />
          </div>

          {/* Phone Screen */}
          <div className="w-full h-[470px] rounded-[30px] overflow-hidden bg-white flex flex-col border border-zinc-900 shadow-inner">
            
            {/* iOS Status Bar */}
            <div className="bg-[#f0f2f5] px-4 pt-1.5 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-800 select-none">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold">5G</span>
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* WhatsApp Mobile Header */}
            <div className="bg-[#f0f2f5] border-b border-[#e9edef] px-3 py-2 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <StoreIcon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900 truncate max-w-[95px]">
                      {currentMeta.storeName}
                    </span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600/20 shrink-0" />
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold block leading-none">
                    online
                  </span>
                </div>
              </div>

              {/* Mobile Mode Switcher */}
              <div className="flex items-center p-0.5 rounded-lg bg-slate-200/80 border border-slate-300/60 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab("lead")}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                    activeTab === "lead"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600"
                  }`}
                >
                  Lead Gen
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("service")}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                    activeTab === "service"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600"
                  }`}
                >
                  CS
                </button>
              </div>

              <div className="flex items-center text-slate-600">
                <Phone className="h-3.5 w-3.5" />
                <MoreVertical className="h-3.5 w-3.5 ml-1" />
              </div>
            </div>

            {/* Conversation Stream */}
            <ChatConversationArea
              key={`mobile-${activeIndustry}-${activeTab}`}
              industry={activeIndustry}
              activeTab={activeTab}
            />

            {/* Mobile Bottom Input Bar */}
            <div className="bg-[#f0f2f5] border-t border-[#e9edef] px-3 py-2 flex items-center gap-2 shrink-0">
              <div className="flex-1 flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-500">
                <span className="truncate">Ketik pesan...</span>
              </div>
              <button
                type="button"
                aria-label="Kirim simulasi"
                className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* iOS Home Indicator */}
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-zinc-400/80 rounded-full" />
          </div>

        </div>
      </div>

    </div>
  );
}
