import { Container } from "@/components/ui/container";
import { footerData } from "@/data/landing";
import { Sparkles, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/70 pt-16 pb-12 text-slate-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200">
          {/* Brand Info Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 group mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Nexa<span className="text-blue-600">.ai</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-6">
              {footerData.description}
            </p>

            {/* Official Meta Badge Placeholder */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-xs font-black">
                M
              </div>
              <div className="text-[11px] leading-tight">
                <span className="font-bold text-slate-800 block">Meta Business Partner</span>
                <span className="text-slate-400">Official WhatsApp Tech Provider</span>
              </div>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerData.columns.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Socials */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Nexa AI Indonesia. Seluruh hak cipta dilindungi.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Globe className="h-3.5 w-3.5" />
              <span>Bahasa Indonesia (ID)</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-600 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
