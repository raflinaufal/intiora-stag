import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonialsData } from "@/data/landing";
import { Play, TrendingUp, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/60">
      <Container>
        <SectionHeading
          eyebrow="STUDI KASUS &amp; TESTIMONI"
          title={testimonialsData.heading}
          description={testimonialsData.description}
          centered={true}
        />

        {/* 6 Video Testimonial Cards in 3-column Desktop Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.testimonials.map((item) => {
            return (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Video Preview Aspect Frame */}
                <div className="relative aspect-video w-full bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 p-4 flex flex-col justify-between overflow-hidden">
                  {/* Subtle decorative background blur */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

                  {/* Top Metric Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/90 backdrop-blur-xs px-3 py-1 text-xs font-bold text-white shadow-xs">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {item.result}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300">
                      Video 2:15 min
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all cursor-pointer">
                    <Play className="h-6 w-6 fill-white translate-x-0.5" />
                  </div>

                  {/* Bottom Title on Video */}
                  <div className="relative z-10">
                    <p className="text-xs font-semibold text-blue-200">
                      Studi Kasus Bisnis &bull; {item.company}
                    </p>
                  </div>
                </div>

                {/* Content Details Below Video */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <Quote className="h-6 w-6 text-blue-100 absolute -top-2 -left-1 -z-0" />
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed relative z-10">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {item.role}, {item.company}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-blue-600 group-hover:underline">
                      Tonton &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
