import { Container } from "@/components/ui/container";
import { conversationData } from "@/data/landing";
import { MockPhone } from "@/components/ui/mock-phone";
import {
  MessageSquare,
  BookOpen,
  ShoppingBag,
  UserCheck,
  UserX,
  CheckCheck,
  Sparkles,
  Bot,
  Send,
} from "lucide-react";

export function ConversationSection() {
  const capabilityIcons = [
    MessageSquare,
    BookOpen,
    ShoppingBag,
    UserCheck,
    UserX,
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Phone / Chat visual with realistic blue bubbles */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[340px]">
              {/* Outer decorative halo */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-blue-100 to-indigo-50 blur-xl opacity-70 -z-10" />

              <MockPhone>
                {/* Chat App Header */}
                <div className="bg-blue-600 px-4 py-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white font-bold">
                      <Bot className="h-4 w-4" />
                      <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 border border-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold leading-tight">Nexa Sales Bot</h4>
                      <p className="text-[10px] text-blue-100">Online 24/7 &bull; WhatsApp</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold">
                    Live
                  </span>
                </div>

                {/* Chat Messages */}
                <div className="p-3.5 space-y-3 bg-slate-50 min-h-[380px] max-h-[420px] overflow-y-auto text-xs">
                  {conversationData.chatMessages.map((msg, i) => {
                    const isAi = msg.sender === "ai";

                    return (
                      <div
                        key={i}
                        className={`flex ${isAi ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-3 shadow-2xs ${
                            isAi
                              ? "rounded-tr-xs bg-blue-600 text-white"
                              : "rounded-tl-xs bg-white text-slate-800 border border-slate-200"
                          }`}
                        >
                          {isAi && (
                            <div className="flex items-center gap-1 text-[10px] text-blue-200 mb-1">
                              <Sparkles className="h-3 w-3" />
                              <span>Nexa AI</span>
                            </div>
                          )}
                          <p className="leading-relaxed">{msg.text}</p>
                          <div
                            className={`mt-1 flex items-center justify-end gap-1 text-[9px] ${
                              isAi ? "text-blue-200" : "text-slate-400"
                            }`}
                          >
                            <span>10:{30 + i}</span>
                            {isAi && <CheckCheck className="h-3 w-3 text-blue-200" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Chat Footer Input */}
                <div className="bg-white border-t border-slate-200 p-2.5 flex items-center gap-2">
                  <div className="flex-1 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] text-slate-400">
                    Ketik pesan...
                  </div>
                  <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Send className="h-3.5 w-3.5" />
                  </div>
                </div>
              </MockPhone>
            </div>
          </div>

          {/* Right Column: Capabilities Clean Vertical List */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              KECERDASAN PERCAKAPAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              {conversationData.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {conversationData.description}
            </p>

            <div className="mt-8 space-y-4">
              {conversationData.capabilities.map((cap, idx) => {
                const Icon = capabilityIcons[idx] || Sparkles;

                return (
                  <div
                    key={cap.title}
                    className="flex items-start gap-4 rounded-2xl p-4 border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-200 transition-all"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
