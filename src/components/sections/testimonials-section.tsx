import { Container } from "@/components/ui/container";
import { testimonialsData } from "@/data/landing";
import { Star, TrendingUp } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <span>TESTIMONI &amp; KISAH SUKSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {testimonialsData.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {testimonialsData.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonialsData.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* 5 Stars Rating & Quantitative Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                    <TrendingUp className="w-3 h-3" />
                    <span>{t.result}</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">
                    {t.role} · <span className="font-semibold text-slate-700">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
