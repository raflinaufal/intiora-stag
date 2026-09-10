import Image from "next/image";
import { Container } from "@/components/ui/container";
import { footerData, siteConfig } from "@/data/landing";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 pt-16 pb-12 text-xs sm:text-sm">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-850">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-intiora.webp"
                alt="Intiora Logo"
                width={130}
                height={36}
                className="h-8 w-auto brightness-0 invert"
                unoptimized
              />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {footerData.description}
            </p>
            <div className="pt-2 text-xs text-slate-500">
              <p>PT Intiora Teknologi Cerdas Indonesia</p>
              <p>Jakarta Selatan, DKI Jakarta 12950</p>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerData.columns.map((col, idx) => (
            <div key={idx} className="col-span-1 md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Ketentuan Layanan
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Keamanan Data
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
