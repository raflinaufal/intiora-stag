import { Container } from "@/components/ui/container";
import { integrationsData } from "@/data/landing";
import {
  MessageSquare,
  Mail,
  FileSpreadsheet,
  ShoppingBag,
  ShoppingCart,
  Hash,
  Send,
  Zap,
  BarChart3,
  CreditCard,
  Globe,
} from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function IntegrationsSection() {
  const getToolIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "whatsapp":
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case "instagram":
        return <InstagramIcon className="w-5 h-5 text-pink-600" />;
      case "gmail":
        return <Mail className="w-5 h-5 text-red-500" />;
      case "google sheets":
        return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
      case "shopify":
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case "woocommerce":
        return <ShoppingCart className="w-5 h-5 text-purple-600" />;
      case "slack":
        return <Hash className="w-5 h-5 text-amber-600" />;
      case "telegram":
        return <Send className="w-5 h-5 text-sky-500" />;
      case "zapier":
        return <Zap className="w-5 h-5 text-orange-500" />;
      case "hubspot":
        return <BarChart3 className="w-5 h-5 text-orange-600" />;
      case "stripe":
        return <CreditCard className="w-5 h-5 text-indigo-600" />;
      case "webhook":
        return <Globe className="w-5 h-5 text-blue-600" />;
      default:
        return <Globe className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="integrasi" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <span>EKOSISTEM &amp; KONEKTIVITAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {integrationsData.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {integrationsData.description}
          </p>
        </div>

        {/* Integration Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 max-w-5xl mx-auto mb-12">
          {integrationsData.integrations.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-150"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center shrink-0 shadow-2xs">
                {getToolIcon(item.name)}
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-tight truncate">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA note */}
        <div className="text-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>{integrationsData.cta.label} &amp; Dokumentasi API RESTful</span>
            <span>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
