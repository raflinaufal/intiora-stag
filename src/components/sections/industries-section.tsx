import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { industriesData } from "@/data/landing";
import {
  HeartPulse,
  ShoppingBag,
  Plane,
  Building,
  GraduationCap,
  Landmark,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function IndustriesSection() {
  const industryIcons = {
    kesehatan: HeartPulse,
    retail: ShoppingBag,
    travel: Plane,
    property: Building,
    education: GraduationCap,
    finance: Landmark,
  };

  const featured = industriesData.industries[0];
  const others = industriesData.industries.slice(1);

  return (
    <section id="solusi" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="SOLUSI SPESIFIK INDUSTRI"
            title={industriesData.heading}
            description={industriesData.description}
            centered={false}
          />
          <a
            href="#demo"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
          >
            <span>Konsultasikan Industri Anda</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Featured Card + 5 Grid Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Large Card: Kesehatan */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between min-h-[380px]">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/30 border border-blue-400/30 px-3 py-1 text-xs font-semibold text-blue-200 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                <span>Unggulan &bull; Industri Kesehatan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
                {featured.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-sm">
                {featured.description}
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 mt-6">
              <div className="grid grid-cols-2 gap-3 text-xs text-blue-200">
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <span className="block font-bold text-white text-base">24/7</span>
                  Booking Pasien Otomatis
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <span className="block font-bold text-white text-base">98%</span>
                  Akurasi Konsultasi Awal
                </div>
              </div>
            </div>
          </div>

          {/* 5 Other Industry Cards in 2-column or 3-column subgrid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((industry) => {
              const Icon =
                industryIcons[industry.id as keyof typeof industryIcons] || Building;

              return (
                <div
                  key={industry.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                        Lihat Alur &rarr;
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {industry.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>Integrasi API Siap Pakai</span>
                    <span className="text-blue-600 font-bold">Aktif 24 Jam</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
