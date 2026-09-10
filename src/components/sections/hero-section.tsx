import { Container } from "@/components/ui/container";
import { IntioraChatDemo } from "@/components/demo/intiora-chat-demo";

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

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center justify-center -mt-[72px] pt-[96px] pb-16 lg:pt-[118px] lg:pb-24">
      {/* Background Banner extending seamlessly behind the navbar */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-90"
        style={{ backgroundImage: `url('/background-banner.webp')` }}
      />

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: HERO HEADLINE & CTAs (Server Component) (50%)               */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Top Eyebrow Badge (Clean, No AI-slop dot) */}
            <div className="inline-flex items-center rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-2xs backdrop-blur-xs mb-4">
              <span>Platform AI Agent &amp; Omnichannel CRM</span>
            </div>

            {/* Main Headline (Paraphrased & Scaled Down Font) */}
            <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              AI Agent Omnichannel: Ubah Setiap Percakapan Jadi Penjualan Nyata &amp; Pelanggan Setia
            </h1>

            {/* Subtitle Description (Paraphrased & Scaled Down Font) */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
              Tingkatkan respon chat dan closing rate bisnis Anda. Intiora mengintegrasikan WhatsApp, Instagram, dan live chat dengan AI cerdas untuk follow-up otomatis, kualifikasi prospek, serta pelacakan iklan yang akurat.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#demo"
                className="inline-flex h-11 sm:h-12 items-center justify-center gap-2.5 rounded-[10px] bg-blue-600 px-5 sm:px-6 text-sm sm:text-base font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>WhatsApp Kami</span>
              </a>

              <a
                href="#demo"
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[10px] border border-blue-600 bg-white px-5 sm:px-6 text-sm sm:text-base font-semibold text-blue-600 hover:bg-blue-50/80 active:scale-[0.98] transition-all"
              >
                <span>Mulai Coba Gratis</span>
              </a>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: INTIORA CHAT DEMO WIREFRAME (50%)                          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <IntioraChatDemo />
          </div>

        </div>
      </Container>

      {/* Floating Bottom-Right WhatsApp CTA Widget */}
      <a
        href="#demo"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-2xl shadow-blue-600/40 hover:bg-blue-700 active:scale-95 transition-all group"
      >
        <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>WhatsApp Kami</span>
      </a>
    </section>
  );
}
