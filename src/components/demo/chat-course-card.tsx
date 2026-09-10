import { GraduationCap, Check, ArrowRight } from "lucide-react";
import { CourseCardMessage } from "@/data/chat-demo";

interface ChatCourseCardProps {
  card: CourseCardMessage;
}

export function ChatCourseCard({ card }: ChatCourseCardProps) {
  return (
    <div className="w-full max-w-[290px] sm:max-w-[320px] rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden text-left animate-chat-fade-up">
      {/* Top Banner */}
      <div className="bg-blue-50 px-3.5 py-2 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800">
          <GraduationCap className="h-3.5 w-3.5 text-blue-600" />
          <span>{card.academy}</span>
        </div>
        <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
          {card.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-3.5 space-y-2.5 text-xs">
        <div>
          <h4 className="font-bold text-slate-900 text-xs leading-snug">
            {card.courseTitle}
          </h4>
          <span className="text-[11px] text-slate-500 block mt-0.5">
            {card.duration}
          </span>
        </div>

        {/* Perks */}
        <div className="space-y-1 pt-1.5 border-t border-slate-100">
          {card.perks.map((p, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-600">
              <Check className="h-3 w-3 text-emerald-600 shrink-0" />
              <span>{p}</span>
            </div>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="block text-[9px] text-slate-400 font-medium">Biaya Investasi</span>
            <span className="font-extrabold text-blue-600 text-xs sm:text-sm">
              {card.price}
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold transition-colors"
          >
            <span>Daftar</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
