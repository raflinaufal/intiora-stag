"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { testimonialsData } from "@/data/landing";
import {
  Star,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
} from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalItems = testimonialsData.testimonials.length;
  const maxIndex = Math.max(0, totalItems - visibleItems);

  // Handle responsive visible items count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Clamp current index if visible items change
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    if (diffX > 45) {
      nextSlide();
    } else if (diffX < -45) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  // Predefined avatar color gradients
  const avatarGradients = [
    "from-blue-600 to-indigo-600",
    "from-purple-600 to-pink-600",
    "from-emerald-600 to-teal-600",
    "from-sky-600 to-blue-600",
    "from-amber-600 to-orange-600",
    "from-rose-600 to-red-600",
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 border-t border-slate-100 overflow-hidden">
      <Container>
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
              <span>TESTIMONI &amp; KISAH SUKSES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {testimonialsData.heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {testimonialsData.description}
            </p>
          </div>

          {/* Slider Prev/Next Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Testimoni Sebelumnya"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-semibold text-slate-500 px-1 select-none">
              <span className="text-slate-900 font-extrabold">{currentIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>{maxIndex + 1}</span>
            </div>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Testimoni Selanjutnya"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden -mx-3 px-1 py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {testimonialsData.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden group">
                    {/* Watermark Quote Icon */}
                    <Quote className="absolute right-4 top-4 w-16 h-16 text-slate-100 -rotate-6 pointer-events-none group-hover:text-blue-50/70 transition-colors" />

                    <div className="relative z-10">
                      {/* 5 Stars Rating & Quantitative Result Badge */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold">
                          <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                          <span>{t.result}</span>
                        </span>
                      </div>

                      {/* Quote */}
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed mb-6 italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-5 border-t border-slate-100 relative z-10">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                          avatarGradients[idx % avatarGradients.length]
                        } text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
                      >
                        {t.name[0]}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-slate-900 truncate">
                            {t.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        </div>
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                          {t.role} ·{" "}
                          <span className="font-semibold text-slate-700">
                            {t.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ke slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
