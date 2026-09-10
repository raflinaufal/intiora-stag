"use client";

import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { navItems, fiturMegaMenu, solusiMegaMenu } from "@/data/landing";
import {
  ChevronDown,
  Globe,
  X,
  Bot,
  MessageSquare,
  CheckCircle2,
  Layers,
  PhoneCall,
  Sparkles,
  Cpu,
  Zap,
  Sliders,
  CheckSquare,
  LayoutGrid,
  Database,
  UserPlus,
  Columns,
  LifeBuoy,
  Megaphone,
  Radio,
  Users,
  Activity,
  Target,
  BarChart3,
  ShoppingCart,
  Truck,
  QrCode,
  Clock,
  GitBranch,
  Headphones,
  Stethoscope,
  ShoppingBag,
  Utensils,
  GraduationCap,
  Landmark,
  Building2,
  Building,
  Hotel,
  Plane,
  HeartHandshake,
  Package,
  Wifi,
  Clapperboard,
  Dumbbell,
  Cloud,
  Bus,
  Car,
} from "lucide-react";

// Icon mapping for dynamic resolution
const iconMap: Record<string, React.ElementType> = {
  Bot,
  MessageSquare,
  CheckCircle2,
  Layers,
  PhoneCall,
  Sparkles,
  Cpu,
  Zap,
  Sliders,
  CheckSquare,
  LayoutGrid,
  Database,
  UserPlus,
  Kanban: Columns,
  Columns,
  LifeBuoy,
  Megaphone,
  Radio,
  Users,
  Activity,
  Target,
  BarChart3,
  ShoppingCart,
  Truck,
  QrCode,
  Clock,
  GitBranch,
  Headphones,
  Stethoscope,
  ShoppingBag,
  Utensils,
  GraduationCap,
  Landmark,
  Building2,
  Building,
  Hotel,
  Plane,
  HeartHandshake,
  Package,
  Wifi,
  Clapperboard,
  Dumbbell,
  Cloud,
  Bus,
  Car,
};

// Official WhatsApp vector icon
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// Safe client hydration snapshot
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Navbar() {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [activeDropdown, setActiveDropdown] = useState<"fitur" | "solusi" | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"fitur" | "solusi" | null>("fitur");
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleMouseEnter = (type: "fitur" | "solusi") => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all"
    >
      <Container className="flex h-[72px] items-center justify-between">
        {/* Left: Intiora Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0 group">
          <Image
            src="/logo-intiora.webp"
            alt="Intiora Logo"
            width={130}
            height={32}
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </a>

        {/* Center: Desktop Navigation Links with Mega Menu triggers */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const hasDropdown = item.hasDropdown;
            const dropdownType = item.type as "fitur" | "solusi" | undefined;
            const isActive = activeDropdown === dropdownType;

            if (hasDropdown && dropdownType) {
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => handleMouseEnter(dropdownType)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(isActive ? null : dropdownType)
                    }
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 bg-blue-50/70"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                        isActive ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Language, Login, WhatsApp Kami, Coba Gratis) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {/* Language Selector */}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>Indonesian</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>

          {/* Login Link */}
          <a
            href="#demo"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors px-2 py-1"
          >
            Login
          </a>

          {/* WhatsApp Kami Button */}
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-[8px] bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition-all active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp Kami</span>
          </a>

          {/* Coba Gratis Button */}
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-[8px] border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50/80 hover:text-blue-700 transition-all active:scale-[0.98]"
          >
            Coba Gratis
          </a>
        </div>

        {/* Modern Sleek Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Buka navigasi menu"
            className="flex flex-col items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 active:scale-95 transition-all text-slate-800 gap-[5px] p-2 focus:outline-hidden"
          >
            <span className="w-5 h-[2px] bg-slate-800 rounded-full transition-transform" />
            <span className="w-5 h-[2px] bg-slate-800 rounded-full transition-opacity" />
            <span className="w-3.5 self-start ml-0.5 h-[2px] bg-slate-800 rounded-full transition-transform" />
          </button>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* FITUR MEGA MENU DROPDOWN (DESKTOP) */}
      {/* ========================================================================= */}
      {activeDropdown === "fitur" && (
        <div
          onMouseEnter={() => handleMouseEnter("fitur")}
          onMouseLeave={handleMouseLeave}
          className="absolute left-0 right-0 top-full pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 md:p-7 shadow-2xl shadow-slate-900/10 backdrop-blur-md">
              <div className="grid grid-cols-12 gap-5 items-stretch">
                {/* 5 Left Columns of Feature Categories */}
                <div className="col-span-9 grid grid-cols-5 gap-3">
                  {fiturMegaMenu.columns.map((col) => (
                    <div key={col.category} className="flex flex-col space-y-1.5">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                        {col.category}
                      </span>
                      <div className="space-y-0.5">
                        {col.items.map((item) => {
                          const Icon = iconMap[item.icon] || Bot;
                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <span className="text-[11px] font-semibold text-slate-800 group-hover:text-blue-600 leading-tight transition-colors">
                                {item.name}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 1 Right Column: Featured Blue Card */}
                <div className="col-span-3">
                  <div className="h-full rounded-2xl bg-blue-600 text-white p-5 flex flex-col justify-between shadow-lg shadow-blue-600/20 group cursor-pointer">
                    <div>
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full">
                        {fiturMegaMenu.featured.tag}
                      </span>
                      <h4 className="mt-3 text-base font-bold text-white leading-snug">
                        {fiturMegaMenu.featured.title}
                      </h4>
                      <p className="mt-2 text-xs text-blue-100 leading-relaxed">
                        {fiturMegaMenu.featured.description}
                      </p>

                      <a
                        href={fiturMegaMenu.featured.href}
                        onClick={() => setActiveDropdown(null)}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>{fiturMegaMenu.featured.linkText}</span>
                      </a>
                    </div>

                    <div className="pt-4 border-t border-blue-500/70 mt-4">
                      <span className="text-[11px] text-blue-200 font-medium block">
                        {fiturMegaMenu.featured.trustText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={fiturMegaMenu.bottomLink.href}
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>{fiturMegaMenu.bottomLink.label}</span>
                </a>
                <span className="text-[11px] text-slate-400">
                  Semua fitur terhubung langsung ke satu database terpusat
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SOLUSI MEGA MENU DROPDOWN (DESKTOP) */}
      {/* ========================================================================= */}
      {activeDropdown === "solusi" && (
        <div
          onMouseEnter={() => handleMouseEnter("solusi")}
          onMouseLeave={handleMouseLeave}
          className="absolute left-0 right-0 top-full pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="mx-auto max-w-[1240px] px-4">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-md">
              <div className="grid grid-cols-12 gap-6 items-start">
                {/* Left: Solusi Berdasarkan Peran */}
                <div className="col-span-4 border-r border-slate-100 pr-5">
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3 block">
                    SOLUSI BERDASARKAN PERAN
                  </span>
                  <div className="space-y-1.5">
                    {solusiMegaMenu.peran.map((item) => {
                      const Icon = iconMap[item.icon] || Target;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 shrink-0 transition-colors mt-0.5">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Berdasarkan Industri (4 Columns Grid) */}
                <div className="col-span-8 pl-2">
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3 block">
                    BERDASARKAN INDUSTRI
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {solusiMegaMenu.industri.map((ind) => {
                      const Icon = iconMap[ind.icon] || Building;
                      return (
                        <a
                          key={ind.title}
                          href={ind.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 shrink-0 transition-colors mt-0.5">
                            <Icon className="h-3 w-3" />
                          </div>
                          <div>
                            <h6 className="text-[11px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                              {ind.title}
                            </h6>
                            <p className="text-[10px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                              {ind.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Links */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-8">
                {solusiMegaMenu.bottomLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE SHEET / DRAWER (SLIDE-OVER FROM RIGHT - CEKAT.AI STYLE) */}
      {/* Rendered via Portal to break free from sticky header stacking context */}
      {/* ========================================================================= */}
      {mounted &&
        createPortal(
          <>
            {/* Dimmed Backdrop */}
            <div
              onClick={() => setIsMobileOpen(false)}
              className={`fixed inset-0 z-[999] bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
                isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Navigasi Menu Mobile"
              className={`fixed inset-y-0 right-0 z-[1000] w-full sm:w-[380px] max-w-full bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden ${
                isMobileOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Top Header of Drawer */}
              <div className="h-[72px] px-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <Image
                  src="/logo-intiora.webp"
                  alt="Intiora Logo"
                  width={116}
                  height={30}
                  className="h-7 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Tutup navigasi menu"
                  className="p-2 -mr-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 active:scale-95 transition-all"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable Links List */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                {/* Fitur Accordion */}
                <div className="border-b border-slate-100/80 pb-3">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === "fitur" ? null : "fitur")
                    }
                    className="flex w-full items-center justify-between py-1 text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>Fitur</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                        mobileSubmenu === "fitur" ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {mobileSubmenu === "fitur" && (
                    <div className="mt-2 space-y-4 animate-in fade-in slide-in-from-top-1 duration-150">
                      {fiturMegaMenu.columns.map((col) => (
                        <div key={col.category}>
                          <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                            {col.category}
                          </span>
                          <div className="space-y-0.5">
                            {col.items.map((item) => {
                              const Icon = iconMap[item.icon] || Bot;
                              return (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="flex items-center gap-3.5 py-2 px-1 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100/90 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 shrink-0 transition-colors">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                    {item.name}
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solusi Accordion */}
                <div className="border-b border-slate-100/80 pb-3">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === "solusi" ? null : "solusi")
                    }
                    className="flex w-full items-center justify-between py-1 text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>Solusi</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                        mobileSubmenu === "solusi" ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {mobileSubmenu === "solusi" && (
                    <div className="mt-2 space-y-4 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                          Berdasarkan Peran
                        </span>
                        <div className="space-y-0.5">
                          {solusiMegaMenu.peran.map((p) => {
                            const Icon = iconMap[p.icon] || Target;
                            return (
                              <a
                                key={p.title}
                                href={p.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center gap-3.5 py-2 px-1 rounded-xl hover:bg-slate-50 transition-colors group"
                              >
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100/90 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 shrink-0 transition-colors">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 block transition-colors">
                                    {p.title}
                                  </span>
                                  <span className="text-[11px] text-slate-400 block line-clamp-1">
                                    {p.desc}
                                  </span>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                          Berdasarkan Industri
                        </span>
                        <div className="grid grid-cols-2 gap-1">
                          {solusiMegaMenu.industri.map((ind) => (
                            <a
                              key={ind.title}
                              href={ind.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors line-clamp-1"
                            >
                              {ind.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Harga */}
                <div className="border-b border-slate-100/80 pb-3">
                  <a
                    href="#harga"
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-1 text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    Harga
                  </a>
                </div>

                {/* Blog */}
                <div>
                  <a
                    href="#resources"
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-1 text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </a>
                </div>
              </div>

              {/* Fixed Sticky Bottom Actions (Exact Cekat.ai Style) */}
              <div className="p-6 border-t border-slate-100 bg-white space-y-3 shrink-0">
                {/* WhatsApp Kami Button */}
                <a
                  href="#demo"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full h-11 rounded-[10px] bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-xs active:scale-[0.99] transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp Kami</span>
                </a>

                {/* Coba Gratis Button */}
                <a
                  href="#demo"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full h-11 rounded-[10px] border border-blue-600 text-blue-600 hover:bg-blue-50/80 font-semibold text-sm flex items-center justify-center active:scale-[0.99] transition-all"
                >
                  <span>Coba Gratis</span>
                </a>

                {/* Language & Login Row */}
                <div className="pt-2 flex items-center justify-between text-sm font-semibold text-slate-800">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Globe className="h-4 w-4 text-slate-500" />
                    <span>Indonesian</span>
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                  </button>
                  <a
                    href="#demo"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </header>
  );
}
