import { Container } from "@/components/ui/container";
import { integrationsData } from "@/data/landing";
import {
  MessageCircle,
  Camera,
  Mail,
  FileSpreadsheet,
  ShoppingBag,
  ShoppingCart,
  Send,
  Zap,
  Globe,
  ArrowRight,
  Workflow,
  Sparkles,
  Layers,
} from "lucide-react";

export function IntegrationsSection() {
  const iconMap: Record<string, React.ElementType> = {
    WhatsApp: MessageCircle,
    Instagram: Camera,
    Gmail: Mail,
    "Google Sheets": FileSpreadsheet,
    Shopify: ShoppingBag,
    WooCommerce: ShoppingCart,
    Telegram: Send,
    Zapier: Zap,
    Webhook: Globe,
    Slack: Layers,
    HubSpot: Workflow,
    Stripe: Sparkles,
  };

  return (
    <section id="integrasi" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              EKOSISTEM INTEGRASI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              {integrationsData.heading}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {integrationsData.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={integrationsData.cta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all"
              >
                <span>{integrationsData.cta.label}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-slate-500 font-medium">
                100+ konektor API &amp; Webhook resmi
              </span>
            </div>
          </div>

          {/* Right Column: Floating Integration Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {integrationsData.integrations.map((item) => {
                const Icon = iconMap[item.name] || Globe;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Tersinkronisasi
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom mini banner */}
            <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/80 p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-xs font-semibold text-blue-950">
                Punya custom database internal atau ERP enterprise?
              </span>
              <a
                href="#demo"
                className="text-xs font-bold text-blue-600 hover:underline shrink-0"
              >
                Hubungkan via REST API &rarr;
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
