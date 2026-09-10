import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { analyticsData } from "@/data/landing";
import {
  Activity,
  Lightbulb,
  TrendingUp,
  ArrowUpRight,
  BarChart3,
  Bot,
  ShieldCheck,
} from "lucide-react";

export function AnalyticsSection() {
  const featureIcons = [Activity, Lightbulb, TrendingUp];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="ANALYTICS &amp; REPORTING"
          title={analyticsData.heading}
          description={analyticsData.description}
          centered={true}
        />

        {/* Large Original SaaS Dashboard Mockup */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-900/5 p-3 sm:p-6 shadow-2xl shadow-slate-300/40">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            {/* Mockup Top Application Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 bg-slate-50/90 px-5 py-3.5 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="h-4 w-px bg-slate-200 mx-1" />
                <span className="text-xs font-bold text-slate-800">
                  Performance Analytics Dashboard
                </span>
                <span className="rounded bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5">
                  Live Sync (30s)
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 font-medium">
                  Bulan Ini: 1 Agt - 31 Agt
                </span>
                <span className="rounded-lg bg-blue-600 text-white px-2.5 py-1 font-semibold">
                  Ekspor Laporan
                </span>
              </div>
            </div>

            {/* Mockup Body Content */}
            <div className="p-5 sm:p-6 space-y-6">
              {/* 4 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <span className="text-xs font-semibold text-slate-500">
                    {analyticsData.dashboardMetrics.revenue.label}
                  </span>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {analyticsData.dashboardMetrics.revenue.value}
                    </span>
                    <span className="flex items-center text-xs font-bold text-emerald-600">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      {analyticsData.dashboardMetrics.revenue.change}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <span className="text-xs font-semibold text-slate-500">
                    {analyticsData.dashboardMetrics.customers.label}
                  </span>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {analyticsData.dashboardMetrics.customers.value}
                    </span>
                    <span className="flex items-center text-xs font-bold text-emerald-600">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      {analyticsData.dashboardMetrics.customers.change}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <span className="text-xs font-semibold text-slate-500">
                    {analyticsData.dashboardMetrics.agents.label}
                  </span>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {analyticsData.dashboardMetrics.agents.value}
                    </span>
                    <span className="flex items-center text-xs font-bold text-blue-600">
                      <Bot className="h-3.5 w-3.5 mr-1" />
                      {analyticsData.dashboardMetrics.agents.change}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <span className="text-xs font-semibold text-slate-500">
                    {analyticsData.dashboardMetrics.conversion.label}
                  </span>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {analyticsData.dashboardMetrics.conversion.value}
                    </span>
                    <span className="flex items-center text-xs font-bold text-emerald-600">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      {analyticsData.dashboardMetrics.conversion.change}
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Section: Line Chart & Bar Chart UI Representation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Visual Line Chart Panel */}
                <div className="lg:col-span-8 rounded-xl border border-slate-200 p-4 sm:p-5 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">
                        Volume Percakapan &amp; Resolusi AI Otomatis
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Perbandingan percakapan ditangani AI vs Tim Manual
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 font-medium text-blue-600">
                        <span className="h-2 w-2 rounded-full bg-blue-600" /> AI Agent (84%)
                      </span>
                      <span className="flex items-center gap-1 font-medium text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-slate-300" /> Human CS (16%)
                      </span>
                    </div>
                  </div>

                  {/* SVG Line / Area Graph */}
                  <div className="relative h-44 w-full pt-4">
                    <svg
                      viewBox="0 0 500 120"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="70" x2="500" y2="70" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="110" x2="500" y2="110" stroke="#f1f5f9" strokeWidth="1" />

                      {/* Area fill */}
                      <path
                        d="M0,90 Q60,40 120,60 T240,25 T360,45 T480,15 L500,10 L500,120 L0,120 Z"
                        fill="url(#blueGradient)"
                      />
                      {/* Primary Line */}
                      <path
                        d="M0,90 Q60,40 120,60 T240,25 T360,45 T480,15 L500,10"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Secondary baseline */}
                      <path
                        d="M0,105 Q70,95 140,100 T280,90 T420,95 L500,85"
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    <div className="mt-3 flex justify-between text-[10px] text-slate-400 font-medium">
                      <span>Senin</span>
                      <span>Selasa</span>
                      <span>Rabu</span>
                      <span>Kamis</span>
                      <span>Jumat</span>
                      <span>Sabtu</span>
                      <span>Minggu</span>
                    </div>
                  </div>
                </div>

                {/* Right Mini Bar Chart & Recent Conversations */}
                <div className="lg:col-span-4 rounded-xl border border-slate-200 p-4 sm:p-5 bg-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 mb-1">
                      Distribusi Saluran
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-4">
                      Trafik chat berdasarkan channel aktif
                    </p>

                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between text-slate-700 font-medium mb-1">
                          <span>WhatsApp Official</span>
                          <span className="font-bold">65%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full w-[65%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-700 font-medium mb-1">
                          <span>Instagram DM</span>
                          <span className="font-bold">23%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full w-[23%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-700 font-medium mb-1">
                          <span>Web Live Chat</span>
                          <span className="font-bold">12%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full w-[12%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                      SLA Respon: 99.8%
                    </span>
                    <span className="text-blue-600 font-bold">Detail Log &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Under the dashboard: 3 Feature Columns */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {analyticsData.features.map((feature, i) => {
            const Icon = featureIcons[i] || BarChart3;

            return (
              <div key={feature.title} className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4 shadow-2xs">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
