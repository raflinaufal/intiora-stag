"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { footerData, siteConfig } from "@/data/landing";

function MetaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#0081FB" className={className}>
      <path d="M12 14.5c-1.35 0-2.43-.88-3.41-2.13-1.12-1.44-2.18-3.37-4.2-3.37-2.1 0-3.39 1.63-3.39 3.84 0 2.5 1.58 4.66 3.84 4.66 2.05 0 3.32-1.27 4.54-2.85 1.15 1.5 2.45 2.85 4.52 2.85 2.26 0 3.84-2.16 3.84-4.66 0-2.21-1.29-3.84-3.39-3.84-2.02 0-3.08 1.93-4.2 3.37-.98 1.25-2.06 2.13-3.41 2.13zm6.9-4.3c1.07 0 1.6.86 1.6 2.04 0 1.49-.93 2.76-2.14 2.76-1.39 0-2.29-.98-3.32-2.31 1.05-1.4 2.09-2.49 3.86-2.49zm-13.8 0c1.77 0 2.81 1.09 3.86 2.49-1.03 1.33-1.93 2.31-3.32 2.31-1.21 0-2.14-1.27-2.14-2.76 0-1.18.53-2.04 1.6-2.04z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.85 18.5V10.1H5.06v8.4h2.79z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black text-white hover:bg-slate-800 transition-colors shadow-2xs"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M3.6 2.4L13.7 12.5 3.6 22.6c-.4-.3-.6-.8-.6-1.4V3.8c0-.6.2-1.1.6-1.4z" fill="#00D3FF" />
        <path d="M17.1 9.1L13.7 12.5 3.6 2.4c.3-.2.8-.3 1.3-.1l12.2 6.8z" fill="#00F076" />
        <path d="M17.1 15.9L4.9 22.7c-.5.2-1 .1-1.3-.1l10.1-10.1 3.4 3.4z" fill="#FF3A44" />
        <path d="M20.9 11.2l-3.8-2.1-3.4 3.4 3.4 3.4 3.8-2.1c1.1-.6 1.1-1.6 0-2.6z" fill="#FFC800" />
      </svg>
      <div className="text-left">
        <div className="text-[7.5px] uppercase tracking-wider text-slate-300 leading-none">GET IT ON</div>
        <div className="text-[11px] font-bold leading-tight">Google Play</div>
      </div>
    </a>
  );
}

function AppStoreBadge() {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black text-white hover:bg-slate-800 transition-colors shadow-2xs"
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.06 1.71-.93 2.73 1.01.08 2.03-.48 2.65-1.23z" />
      </svg>
      <div className="text-left">
        <div className="text-[7.5px] text-slate-300 leading-none">Download on the</div>
        <div className="text-[11px] font-bold leading-tight">App Store</div>
      </div>
    </a>
  );
}

export function Footer() {
  const [selectedCountry, setSelectedCountry] = useState<"id" | "sg" | "my">("id");

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* 1. Top Meta Partner Banner */}
      <div className="border-b border-slate-200/90 py-3.5 bg-white">
        <Container className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
          <MetaIcon className="w-5 h-5 shrink-0" />
          <span className="font-bold text-slate-900">Meta</span>
          <span className="text-slate-600">· {footerData.metaPartner}</span>
        </Container>
      </div>

      {/* 2. Main Footer Body */}
      <div className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Half: Brand, Socials, Office Selector */}
            <div className="lg:col-span-6 space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo-intiora.webp"
                  alt="Intiora Logo"
                  width={140}
                  height={38}
                  className="h-8 w-auto"
                  unoptimized
                />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white transition-colors"
                >
                  <YouTubeIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Country Tabs Pill */}
              <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1 text-slate-400 text-[11px] font-medium border-r border-slate-200">
                  Kantor Kami
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCountry("id")}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedCountry === "id"
                      ? "bg-white text-slate-900 shadow-2xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>🇮🇩</span>
                  <span>Indonesia</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCountry("sg")}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedCountry === "sg"
                      ? "bg-white text-slate-900 shadow-2xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>🇸🇬</span>
                  <span>Singapore</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCountry("my")}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedCountry === "my"
                      ? "bg-white text-slate-900 shadow-2xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>🇲🇾</span>
                  <span>Malaysia</span>
                </button>
              </div>

              {/* Office Addresses Display */}
              <div className="pt-2">
                {selectedCountry === "id" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {footerData.offices.indonesia.map((office, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {office.city}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900">
                          {office.company}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedCountry === "sg" && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {footerData.offices.singapore[0].city}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900">
                      {footerData.offices.singapore[0].company}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                      {footerData.offices.singapore[0].address}
                    </p>
                  </div>
                )}

                {selectedCountry === "my" && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {footerData.offices.malaysia[0].city}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900">
                      {footerData.offices.malaysia[0].company}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                      {footerData.offices.malaysia[0].address}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Half: Download Badges & Navigation Columns */}
            <div className="lg:col-span-6 space-y-8">
              {/* App Store Download Badges */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2.5">
                  Unduh Aplikasi Mobile Intiora
                </p>
                <div className="flex items-center gap-2.5">
                  <GooglePlayBadge />
                  <AppStoreBadge />
                </div>
              </div>

              {/* Navigation Grid (2x3 Columns) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
                {/* Column 1: Produk & Fitur */}
                <div className="space-y-6">
                  {/* Produk */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2.5">
                      {footerData.sections.produk.title}
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      {footerData.sections.produk.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.href} className="hover:text-blue-600 transition-colors">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fitur */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2.5">
                      {footerData.sections.fitur.title}
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      {footerData.sections.fitur.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.href} className="hover:text-blue-600 transition-colors">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={footerData.sections.fitur.viewAll.href}
                      className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
                    >
                      {footerData.sections.fitur.viewAll.label}
                    </a>
                  </div>
                </div>

                {/* Column 2: Legal & Industri */}
                <div className="space-y-6">
                  {/* Legal */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2.5">
                      {footerData.sections.legal.title}
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      {footerData.sections.legal.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.href} className="hover:text-blue-600 transition-colors">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industri */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2.5">
                      {footerData.sections.industri.title}
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      {footerData.sections.industri.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.href} className="hover:text-blue-600 transition-colors">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={footerData.sections.industri.viewAll.href}
                      className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
                    >
                      {footerData.sections.industri.viewAll.label}
                    </a>
                  </div>
                </div>

                {/* Column 3: Solusi */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-2.5">
                    {footerData.sections.solusi.title}
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    {footerData.sections.solusi.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="hover:text-blue-600 transition-colors">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={footerData.sections.solusi.viewAll.href}
                    className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
                  >
                    {footerData.sections.solusi.viewAll.label}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-12 mt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} {siteConfig.name}. Hak cipta dilindungi undang-undang.</p>
            <p>Meta Business Partner Resmi · Official WhatsApp Cloud API Partner</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
