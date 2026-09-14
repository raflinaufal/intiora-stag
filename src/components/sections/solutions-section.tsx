"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { industriesData } from "@/data/landing";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeIndustry = industriesData.industries[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? industriesData.industries.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === industriesData.industries.length - 1 ? 0 : prev + 1
    );
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="solusi" className="py-20 sm:py-28 bg-white border-t border-slate-100 overflow-hidden">
      <Container>
        {/* Top Header: Left Title, Right Description & Link */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {industriesData.heading}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3 lg:pt-1">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {industriesData.description}
            </p>
            <div>
              <Link
                href={industriesData.viewAllHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>{industriesData.viewAllText}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Industry Cards Gallery */}
        <div
          ref={containerRef}
          className="flex gap-2 sm:gap-3 w-full h-[360px] sm:h-[400px] lg:h-[440px] overflow-x-auto sm:overflow-hidden scrollbar-none pb-2 sm:pb-0"
        >
          {industriesData.industries.map((ind, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={ind.id}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out select-none shrink-0 sm:shrink",
                  isActive
                    ? "w-[280px] sm:w-auto sm:flex-[3.8] shadow-lg ring-1 ring-black/5"
                    : "w-[60px] sm:w-auto sm:flex-[0.8] lg:flex-1 opacity-90 hover:opacity-100 hover:shadow-md"
                )}
                role="button"
                tabIndex={0}
                aria-label={`Pilih industri ${ind.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(idx);
                  }
                }}
              >
                {/* Background Image */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
                    isActive
                      ? "grayscale-0 brightness-100 scale-100"
                      : "grayscale brightness-[0.75] hover:brightness-90 hover:grayscale-[0.3] scale-105"
                  )}
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 pointer-events-none",
                    isActive
                      ? "bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                      : "bg-gradient-to-t from-black/90 via-black/40 to-black/20"
                  )}
                />

                {/* Card Title Label */}
                {isActive ? (
                  <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 right-5 z-10 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {ind.title}
                    </h3>
                  </div>
                ) : (
                  <div className="absolute bottom-4 inset-x-1 sm:inset-x-1.5 z-10 text-center">
                    <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-snug line-clamp-2 drop-shadow-md whitespace-pre-line block">
                      {ind.shortTitle || ind.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Details Row: Active Industry Description, Solutions Pills & Arrows */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left: Active Industry Description & Link */}
          <div className="md:col-span-5 space-y-2.5">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[44px]">
              {activeIndustry.description}
            </p>
            <div>
              <Link
                href={activeIndustry.learnMoreHref}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>Pelajari lebih lanjut</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Center: Solutions Pills */}
          <div className="md:col-span-5 space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Solusi Kami
            </span>
            <div className="flex flex-wrap gap-2">
              {activeIndustry.solutions.map((sol, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200/70 text-xs font-medium text-slate-700 transition-colors"
                >
                  {sol}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Prev & Next Navigation Buttons */}
          <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-2.5 pt-2 md:pt-0">
            <button
              onClick={handlePrev}
              type="button"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all active:scale-95 shadow-2xs cursor-pointer"
              aria-label="Industri sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all active:scale-95 shadow-2xs cursor-pointer"
              aria-label="Industri berikutnya"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
