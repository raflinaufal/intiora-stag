import { Container } from "@/components/ui/container";
import { statisticsData } from "@/data/landing";
import { TrendingUp, Clock, Users, ArrowUpRight, Quote } from "lucide-react";

export function StatisticsSection() {
  const statIcons = [Clock, Users, TrendingUp];

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold statement & customer quote */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                DAMPAK &amp; EFISIENSI NYATA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-900 leading-[1.2]">
                Otomatisasi hingga 40%,
                <br />
                <span className="text-slate-500 font-normal">
                  bukan cuma bisnis lebih cepat.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                Bisnis bertumbuh ketika percakapan ditangani tepat waktu. Nexa AI
                mengeliminasi bottleneck operasional customer service sehingga setiap
                lead terlayani maksimal.
              </p>
            </div>

            {/* Quote Card */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs relative">
              <Quote className="h-8 w-8 text-blue-100 absolute top-4 right-4 -z-0" />
              <p className="text-sm sm:text-base text-slate-700 italic relative z-10">
                &ldquo;{statisticsData.testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {statisticsData.testimonial.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {statisticsData.testimonial.role} &bull; {statisticsData.testimonial.company}
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
                  +25% Closing
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heroic metric + secondary stats grid */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-lg shadow-slate-200/50">
              {/* Giant Metric */}
              <div className="border-b border-slate-100 pb-8">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-blue-600 block">
                  {statisticsData.mainMetric.value}
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                  {statisticsData.mainMetric.label}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {statisticsData.mainMetric.description}
                </p>
              </div>

              {/* 3 Smaller Stats */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {statisticsData.stats.map((item, idx) => {
                  const Icon = statIcons[idx] || TrendingUp;
                  return (
                    <div key={item.label} className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                        <Icon className="h-4 w-4" />
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {item.value}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-500 leading-snug">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
