"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { agentBuilderData } from "@/data/landing";
import {
  Bot,
  ArrowLeft,
  BarChart3,
  BookOpen,
  MessageSquare,
  Sliders,
  Users,
  Undo2,
  LayoutGrid,
  Check,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";

export function AgentBuilderSection() {
  const [stopAiHandoff, setStopAiHandoff] = useState(true);
  const [activeTab, setActiveTab] = useState<"behaviour" | "welcome" | "handoff">("behaviour");

  const pillarIcons = [
    <Sparkles key="1" className="w-5 h-5 text-blue-600 shrink-0" />,
    <BookOpen key="2" className="w-5 h-5 text-blue-600 shrink-0" />,
    <Workflow key="3" className="w-5 h-5 text-blue-600 shrink-0" />,
  ];

  return (
    <section id="builder" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {agentBuilderData.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {agentBuilderData.description}
          </p>
        </div>

        {/* Scenic Showcase Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-slate-900 min-h-[580px] lg:min-h-[660px] flex items-center justify-center p-4 sm:p-8 lg:p-12 mb-16">
          {/* Scenic Nature Illustration Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/agent-builder-scenic-bg.jpg"
              alt="Intiora AI Agent Builder Canvas"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Soft subtle overlay to ensure maximum UI contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-white/15 pointer-events-none" />
          </div>

          {/* Left Floating Elements (Desktop only) */}
          <div className="hidden xl:flex flex-col items-start gap-12 absolute left-8 lg:left-14 top-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            {/* Create New Agent Pill */}
            <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-xl shadow-blue-600/35 hover:bg-blue-700 hover:scale-105 transition-all duration-200 select-none">
              <Bot className="w-4 h-4" />
              <span>Create New Agent</span>
            </div>

            {/* User Creator Avatar with Ripple Rings */}
            <div className="relative ml-6">
              <div className="absolute -inset-4 rounded-full bg-white/40 blur-sm animate-pulse" />
              <div className="relative w-22 h-22 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-8 ring-white/40 ring-offset-2 ring-offset-blue-500/20">
                <Image
                  src="/images/creator-avatar.jpg"
                  alt="AI Agent Creator"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Center: Builder UI Modal Card */}
          <div className="relative z-20 w-full max-w-lg lg:max-w-xl bg-white/95 backdrop-blur-md rounded-2xl border border-white/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-4 sm:p-6 text-slate-800">
            <div className="flex gap-4 sm:gap-6">
              {/* Mini Left Navigation Strip */}
              <div className="hidden sm:flex flex-col items-center justify-between py-1 border-r border-slate-200/80 pr-3 shrink-0 text-slate-400">
                <div className="flex flex-col items-center gap-3.5">
                  <button type="button" aria-label="Analitik" className="p-1.5 hover:text-blue-600 transition-colors">
                    <BarChart3 className="w-4 h-4" />
                  </button>
                  <button type="button" aria-label="Knowledge Base" className="p-1.5 hover:text-blue-600 transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </button>
                  <button type="button" aria-label="Percakapan" className="p-1.5 text-blue-600 bg-blue-50 rounded-lg">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button type="button" aria-label="Aturan Persona" className="p-1.5 hover:text-blue-600 transition-colors">
                    <Sliders className="w-4 h-4" />
                  </button>
                  <button type="button" aria-label="Handoff Staf" className="p-1.5 hover:text-blue-600 transition-colors">
                    <Users className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <button type="button" aria-label="Undo" className="p-1.5 hover:text-blue-600 transition-colors">
                    <Undo2 className="w-4 h-4" />
                  </button>
                  <button type="button" aria-label="Menu Modul" className="p-1.5 hover:text-blue-600 transition-colors">
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Form Content */}
              <div className="flex-1 min-w-0">
                {/* Header Modal Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      aria-label="Kembali"
                      className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-none">
                        {agentBuilderData.mockup.agentName}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                        {agentBuilderData.mockup.agentRole}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live Ready
                  </span>
                </div>

                {/* Field 1: AI Agent Behaviour */}
                <div className="mb-3.5">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold text-slate-700 tracking-tight">
                      AI Agent Behaviour
                    </label>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-200/90 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                    {agentBuilderData.mockup.behaviour}
                    <div className="text-right text-[10px] text-slate-400 mt-1 font-mono">
                      450/15000
                    </div>
                  </div>
                </div>

                {/* Field 2: Welcome Message */}
                <div className="mb-3.5">
                  <label className="block text-[11px] font-bold text-slate-700 tracking-tight mb-1">
                    Welcome Message
                  </label>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-200/90 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                    {agentBuilderData.mockup.welcomeMessage}
                    <div className="text-right text-[10px] text-slate-400 mt-1 font-mono">
                      120/5000
                    </div>
                  </div>
                </div>

                {/* Field 3: Agent Transfer Condition (Smart Handoff) */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold text-slate-700 tracking-tight mb-1">
                    Agent Transfer Condition
                  </label>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50/40 border border-blue-200/90 text-[11px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                    <p className="whitespace-pre-line">
                      {agentBuilderData.mockup.transferCondition}
                    </p>
                    <div className="text-right text-[10px] text-blue-500 mt-1 font-mono">
                      105/1000
                    </div>
                  </div>
                </div>

                {/* Toggle: Stop AI After Handoff */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-700">
                    Stop AI After Handoff
                  </span>
                  <button
                    type="button"
                    onClick={() => setStopAiHandoff(!stopAiHandoff)}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                      stopAiHandoff ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        stopAiHandoff ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Preview Speech Bubble (Desktop & Tablet) */}
          <div className="hidden lg:block absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 z-30 max-w-[290px] xl:max-w-xs pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/90 shadow-[0_20px_45px_rgba(0,0,0,0.14)] relative">
              {/* AI Greeting Message */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-800 leading-relaxed mb-3">
                <span className="font-semibold text-slate-900 block mb-1">
                  Lumière Beauty Lounge
                </span>
                {agentBuilderData.mockup.previewAiGreeting}
              </div>

              {/* User Reply Bubble */}
              <div className="flex justify-end">
                <div className="px-3.5 py-2 rounded-2xl rounded-tr-xs bg-[#DCFCE7] text-emerald-950 font-medium text-xs shadow-2xs">
                  {agentBuilderData.mockup.previewUserReply}
                </div>
              </div>

              {/* Floating Blue Livechat Icon Connector */}
              <div className="mt-4 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/40">
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-4">
          {agentBuilderData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t-2 border-slate-100 pt-6 hover:border-blue-500 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5 mb-2">
                {pillarIcons[idx]}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
