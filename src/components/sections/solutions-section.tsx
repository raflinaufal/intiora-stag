import { Container } from "@/components/ui/container";
import { industriesData } from "@/data/landing";
import {
  Stethoscope,
  ShoppingBag,
  Plane,
  Building,
  GraduationCap,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

export function SolutionsSection() {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "kesehatan":
        return <Stethoscope className="w-5 h-5 text-blue-600" />;
      case "retail":
        return <ShoppingBag className="w-5 h-5 text-blue-600" />;
      case "travel":
        return <Plane className="w-5 h-5 text-blue-600" />;
      case "property":
        return <Building className="w-5 h-5 text-blue-600" />;
      case "education":
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case "finance":
        return <Landmark className="w-5 h-5 text-blue-600" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="solusi" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <span>SOLUSI SPESIFIK INDUSTRI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {industriesData.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {industriesData.description}
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industriesData.industries.map((ind) => (
            <div
              key={ind.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <span className="text-slate-300 group-hover:text-blue-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>Lihat Studi Kasus</span>
                <span className="font-normal text-slate-400">→</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
