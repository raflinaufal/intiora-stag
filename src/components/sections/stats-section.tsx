import { Container } from "@/components/ui/container";
import { statisticsData } from "@/data/landing";
import { TrendingUp, Clock, Users2, Quote } from "lucide-react";

export function StatsSection() {
  const statIcons = [
    <Clock key="clock" className="w-5 h-5 text-blue-600" />,
    <Users2 key="users" className="w-5 h-5 text-blue-600" />,
    <TrendingUp key="trend" className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Stats Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold">
                <span>DAMPAK BISNIS TERUKUR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {statisticsData.headline}
              </h2>
            </div>

            {/* Main Highlight Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-xs">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-tight">
                  {statisticsData.mainMetric.value}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-200">
                  {statisticsData.mainMetric.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {statisticsData.mainMetric.description}
              </p>
            </div>

            {/* 3 Secondary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {statisticsData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-800/40 border border-slate-750/60 flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center mb-3">
                    {statIcons[idx]}
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-400 font-medium mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Testimonial Quote */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-b from-slate-800 to-slate-850 border border-slate-700 shadow-xl relative">
              <Quote className="w-10 h-10 text-blue-500/30 mb-6" />
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed italic mb-8">
                &ldquo;{statisticsData.testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-700/70">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {statisticsData.testimonial.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {statisticsData.testimonial.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {statisticsData.testimonial.role} ·{" "}
                    <span className="text-blue-400 font-medium">
                      {statisticsData.testimonial.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
