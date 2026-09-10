import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intiora.ai"),
  title: "Intiora - Platform AI Agent Customer Service & Sales 24/7",
  description:
    "AI Agent Omnichannel untuk Customer Service & Sales 24/7. Otomatisasi percakapan WhatsApp, Instagram, dan Website Chat dengan AI cerdas.",
  keywords: [
    "Intiora",
    "Intiora AI",
    "AI Agent Indonesia",
    "Omnichannel CRM",
    "Chatbot WhatsApp AI",
    "Customer Service Otomatis",
    "Sales AI Agent",
  ],
  authors: [{ name: "Intiora Team" }],
  creator: "Intiora",
  publisher: "Intiora Indonesia",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/intiora-icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Intiora - Platform AI Agent Customer Service & Sales 24/7",
    description:
      "Otomatisasi percakapan pelanggan di WhatsApp, Instagram, dan Web Chat menggunakan AI Agent cerdas.",
    url: "https://intiora.ai",
    siteName: "Intiora",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intiora Platform AI Agent Omnichannel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intiora - Platform AI Agent Customer Service & Sales 24/7",
    description:
      "Tingkatkan penjualan dan layanan pelanggan 24/7 tanpa batas waktu dengan AI Agent Omnichannel.",
    images: ["/og-image.png"],
    creator: "@intiora_ai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
