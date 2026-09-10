"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/landing";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigasi Menu Mobile"
          className="fixed inset-0 top-[65px] z-50 bg-white/95 backdrop-blur-md px-6 py-8 flex flex-col justify-between border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 text-lg font-medium text-slate-800 border-b border-slate-100 hover:text-blue-600 transition-colors"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4 text-slate-400" />}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <a
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Masuk
            </a>
            <a
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 text-base font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
            >
              Coba Gratis
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
