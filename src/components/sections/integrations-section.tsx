import { Container } from "@/components/ui/container";
import { integrationsData } from "@/data/landing";

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        fill="#25D366"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"
      />
      <path
        fill="#ffffff"
        d="M17.52 14.33c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.14 3.27 5.19 4.58.73.31 1.29.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.27-.2-.57-.35z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.32 0 .63.05.92.15V9.45a6.33 6.33 0 0 0-.92-.07 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.28 8.28 0 0 0 4.76 1.48V7.08a4.84 4.84 0 0 1-1-.39z" />
    </svg>
  );
}

function MessengerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        fill="url(#messenger-grad)"
        d="M12 2C6.48 2 2 6.13 2 11.23c0 2.91 1.45 5.51 3.73 7.15V22l3.47-1.91c.88.25 1.83.39 2.8.39 5.52 0 10-4.13 10-9.23S17.52 2 12 2z"
      />
      <path
        fill="#ffffff"
        d="M7.4 13.6l3.4-3.6 2.4 2.4 4.4-4.8-3.4 3.6-2.4-2.4-4.4 4.8z"
      />
      <defs>
        <linearGradient id="messenger-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B2FE" />
          <stop offset="0.5" stopColor="#006AFF" />
          <stop offset="1" stopColor="#9B34EF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TelegramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#29B6F6" />
      <path
        fill="#ffffff"
        d="M17.5 7.2L5.8 11.7c-.8.3-.8.8-.1 1l3 1 1 3.1c.1.4.3.4.5.2l1.6-1.5 3.3 2.4c.6.3 1 .2 1.2-.5l2.2-10.2c.2-.9-.3-1.3-1-.9z"
      />
    </svg>
  );
}

function LiveChatIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="20" height="15" x="2" y="3.5" rx="4" fill="#0066FF" />
      <path d="M7 18.5l3.5-2.5h-3.5z" fill="#0066FF" />
      <path d="M6 7.5h10M6 10.5h6" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function EmailIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#0066FF" />
      <path
        d="M7 9l5 3.5L17 9M7 8.5h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MetaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#0081FB" className={className}>
      <path d="M12 14.5c-1.35 0-2.43-.88-3.41-2.13-1.12-1.44-2.18-3.37-4.2-3.37-2.1 0-3.39 1.63-3.39 3.84 0 2.5 1.58 4.66 3.84 4.66 2.05 0 3.32-1.27 4.54-2.85 1.15 1.5 2.45 2.85 4.52 2.85 2.26 0 3.84-2.16 3.84-4.66 0-2.21-1.29-3.84-3.39-3.84-2.02 0-3.08 1.93-4.2 3.37-.98 1.25-2.06 2.13-3.41 2.13zm6.9-4.3c1.07 0 1.6.86 1.6 2.04 0 1.49-.93 2.76-2.14 2.76-1.39 0-2.29-.98-3.32-2.31 1.05-1.4 2.09-2.49 3.86-2.49zm-13.8 0c1.77 0 2.81 1.09 3.86 2.49-1.03 1.33-1.93 2.31-3.32 2.31-1.21 0-2.14-1.27-2.14-2.76 0-1.18.53-2.04 1.6-2.04z" />
    </svg>
  );
}

function ApiIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="5.5" width="20" height="13" rx="3.5" stroke="#0066FF" strokeWidth="1.8" />
      <text
        x="12"
        y="14.8"
        textAnchor="middle"
        fill="#0066FF"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="sans-serif"
        letterSpacing="0.6"
      >
        API
      </text>
    </svg>
  );
}

function WebhookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0066FF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06l1.96 3.42c.6 1.05 1.8 1.5 2.97 1.5" />
      <circle cx="12" cy="5" r="2" fill="#0066FF" stroke="none" />
      <circle cx="4" cy="17" r="2" fill="#0066FF" stroke="none" />
      <circle cx="19" cy="17" r="2" fill="#0066FF" stroke="none" />
    </svg>
  );
}

export function IntegrationsSection() {
  const getToolIcon = (key: string) => {
    switch (key) {
      case "whatsapp":
        return <WhatsAppIcon className="w-6 h-6" />;
      case "instagram":
        return <InstagramIcon className="w-5 h-5 text-slate-800" />;
      case "tiktok":
        return <TikTokIcon className="w-5 h-5 text-slate-900" />;
      case "messenger":
        return <MessengerIcon className="w-6 h-6" />;
      case "telegram":
        return <TelegramIcon className="w-6 h-6" />;
      case "livechat":
        return <LiveChatIcon className="w-6 h-6" />;
      case "email":
        return <EmailIcon className="w-6 h-6" />;
      case "meta":
        return <MetaIcon className="w-6 h-6" />;
      case "openapi":
        return <ApiIcon className="w-6 h-6" />;
      case "webhook":
        return <WebhookIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="integrasi" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Link */}
          <div className="lg:col-span-5 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {integrationsData.eyebrow || "INTEGRASI"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mt-3 mb-5">
              {integrationsData.heading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {integrationsData.description}
            </p>
            <a
              href={integrationsData.cta.href}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              <span>{integrationsData.cta.label}</span>
              <span className="text-base leading-none">→</span>
            </a>
          </div>

          {/* Right Column: 5x2 Icons inside rounded card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 p-6 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-64 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

              {/* Grid 5x2 */}
              <div className="relative z-10 grid grid-cols-5 gap-y-7 sm:gap-y-9 gap-x-2 sm:gap-x-4 items-start justify-items-center">
                {integrationsData.integrations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-md">
                      {getToolIcon(item.key)}
                    </div>
                    <span className="mt-2.5 text-[11px] sm:text-xs font-medium text-slate-700 leading-tight group-hover:text-slate-900 max-w-[76px] sm:max-w-[92px]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
