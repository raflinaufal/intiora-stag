import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { agentBuilderData } from "@/data/landing";
import {
  UploadCloud,
  Sliders,
  Share2,
  PlayCircle,
  FileText,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  Check,
} from "lucide-react";

export function AgentBuilderSection() {
  const stepIcons = [UploadCloud, Sliders, Share2, PlayCircle];

  return (
    <section className="py-20 md:py-28 bg-slate-50/80 border-y border-slate-200/60">
      <Container>
        <SectionHeading
          eyebrow="SETUP KILAT &amp; MUDAH"
          title={agentBuilderData.heading}
          description={agentBuilderData.description}
          centered={true}
        />

        {/* 4 Steps Indicator Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {agentBuilderData.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isFirst = idx === 0;

            return (
              <div
                key={step.title}
                className={`relative rounded-2xl p-4 border transition-all ${
                  isFirst
                    ? "bg-white border-blue-500 shadow-md shadow-blue-500/10"
                    : "bg-white/80 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      isFirst ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {step.number}
                  </span>
                  <Icon className={`h-4 w-4 ${isFirst ? "text-blue-600" : "text-slate-400"}`} />
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">
                    {step.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wizard / Configuration UI Mockup Panel */}
        <div className="mt-8 max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Sliders className="h-4 w-4" />
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Konfigurasi Agent: CS Assistant Retail
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Langkah 1 dari 4 &bull; Upload Dokumen &amp; SOP Pelayanan
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-200">
              <Sparkles className="h-3.5 w-3.5" /> AI Parsing Aktif
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* File Upload Dropzone Mockup */}
            <div className="md:col-span-6 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/30 p-6 text-center hover:bg-blue-50/50 transition-colors">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-3">
                <UploadCloud className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                Tarik file SOP atau klik untuk upload
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Format didukung: PDF, DOCX, XLSX, TXT, atau URL Website
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2 py-1 text-[11px] font-medium text-slate-700 shadow-2xs">
                  <FileText className="h-3 w-3 text-red-500" /> Katalog_2026.pdf
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2 py-1 text-[11px] font-medium text-slate-700 shadow-2xs">
                  <FileSpreadsheet className="h-3 w-3 text-emerald-500" /> Harga_Stok.xlsx
                </span>
              </div>
            </div>

            {/* Persona Settings Preview */}
            <div className="md:col-span-6 space-y-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                  <span>Nama &amp; Nada Bicara Agent</span>
                  <span className="text-blue-600">Ramah &amp; Profesional</span>
                </div>
                <p className="text-slate-500 text-[11px]">
                  &ldquo;Halo Kak! Ada yang bisa kami bantu seputar produk atau promo hari ini?&rdquo;
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                  <span>Saluran Terhubung</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <Check className="h-3 w-3" /> WhatsApp Business API
                  </span>
                </div>
                <p className="text-slate-500 text-[11px]">
                  Nomor resmi +62 812-XXXX-XXXX terverifikasi centang hijau Meta.
                </p>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Uji Coba Sandbox
                </button>
                <button
                  type="button"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-700"
                >
                  Aktifkan AI Agent &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Mini Benefits Underneath */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          {agentBuilderData.benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-2">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">{benefit.title}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
