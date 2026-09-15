export const siteConfig = {
  name: "Intiora",
  description:
    "AI Agent Omnichannel untuk Customer Service & Sales 24/7. Otomatisasi percakapan di WhatsApp, Instagram, Website Chat dengan kecerdasan buatan.",
  url: "https://intiora.ai",
  ogImage: "/og-image.png",
};

export const navItems = [
  { label: "Fitur", href: "#produk", hasDropdown: true, type: "fitur" as const },
  { label: "Solusi", href: "#solusi", hasDropdown: true, type: "solusi" as const },
  { label: "Harga", href: "#harga", hasDropdown: false },
  { label: "Blog", href: "#resources", hasDropdown: false },
];

export const heroData = {
  eyebrow: "AI AGENT UNTUK BISNIS",
  headline: {
    parts: [
      { text: "AI Agent", highlight: true },
      { text: " & ", highlight: false },
      { text: "Omnichannel CRM", highlight: true },
      { text: "\nuntuk Customer Service\ndan Sales ", highlight: false },
      { text: "24/7", highlight: true },
    ],
  },
  description:
    "Otomatisasi percakapan pelanggan di WhatsApp, Instagram, dan Website Chat menggunakan AI Agent cerdas. Tingkatkan penjualan dan layanan pelanggan tanpa batas waktu.",
  primaryCta: { label: "Coba Gratis", href: "#demo" },
  secondaryCta: { label: "Jadwalkan Demo", href: "#demo" },
  trustBadge: "4.9/5 dari pengguna bisnis",
};

export const trustData = {
  headline: "Dipercaya lebih dari 3.000+ bisnis di Asia.",
  logos: [
    "TechFlow",
    "DataSync",
    "CloudBase",
    "ShopNest",
    "FinCore",
    "MediLink",
    "EduPrime",
    "LogiTrack",
    "PaySmart",
    "GreenHub",
  ],
  metrics: [
    { value: "10.000.000+", label: "percakapan" },
    { value: "3.000+", label: "bisnis" },
    { value: "15+", label: "industri" },
  ],
};

export const statisticsData = {
  headline: "Omset naik hingga 40%,\nbukan cuma bisnis lebih cepat.",
  mainMetric: {
    value: "+50%",
    label: "Peningkatan Produktivitas",
    description:
      "Rata-rata peningkatan produktivitas tim customer service setelah menggunakan Intiora selama 3 bulan pertama.",
  },
  stats: [
    { value: "70%", label: "Response time lebih cepat" },
    { value: "3x", label: "Kapasitas chat per agent" },
    { value: "40%", label: "Peningkatan closing rate" },
  ],
  testimonial: {
    quote:
      "Sejak menggunakan Intiora, closing rate kami naik dari 15% ke 40%. Tim customer service bisa handle 3x lebih banyak percakapan tanpa menambah headcount.",
    author: "Rina Hartono",
    role: "Head of Customer Success",
    company: "ShopNest Indonesia",
  },
};

export const productsData = {
  heading: "Fitur Lengkap Intiora untuk Otomasi Bisnis Anda",
  description:
    "Semua solusi yang Anda butuhkan untuk melayani pelanggan di WhatsApp, meningkatkan penjualan tim sales, dan menjalankan operasional bisnis secara otomatis.",
  items: [
    {
      id: "chat-omnichannel",
      name: "Chatbot AI & WhatsApp Omnichannel",
      headline: "Satu inbox resmi untuk WhatsApp, Instagram DM, dan Webchat.",
      description:
        "Satukan seluruh pesan masuk pelanggan dalam satu layar. AI membalas otomatis dalam hitungan detik dengan bahasa ramah santun, sehingga bisnis Anda tetap melayani 24 jam nonstop.",
      badges: [
        "Jalur Resmi Meta Cloud API",
        "Multi-Agent CS Inbox",
        "Respon Otomatis 24/7",
      ],
      ctaLabel: "Pelajari lebih lanjut",
      ctaHref: "/fitur#chatbot-wa",
    },
    {
      id: "ai-agent",
      name: "AI Agent Cerdas & Mandiri",
      headline: "AI terlatih dari dokumen toko, siap kualifikasi prospek.",
      description:
        "Cukup upload katalog PDF atau FAQ produk. AI Agent langsung menguasai informasi bisnis Anda, menjawab pertanyaan harga secara akurat, dan mengoper chat ke sales saat pembeli siap transaksi.",
      badges: [
        "Upload Dokumen / PDF",
        "Kualifikasi Pembeli Otomatis",
        "Alihkan Chat ke Tim Sales",
      ],
      ctaLabel: "Pelajari lebih lanjut",
      ctaHref: "/fitur#ai-agent-custom",
    },
    {
      id: "crm-pipeline",
      name: "Aplikasi CRM & Pipeline Penjualan",
      headline: "Kelola database kontak dan pantau alur closing tim sales.",
      description:
        "Data nomor kontak, riwayat belanja, dan nilai transaksi tersimpan otomatis. Pantau posisi tiap calon pembeli dari chat pertama hingga transfer lunas dalam papan Kanban visual.",
      badges: [
        "Simpan Kontak Otomatis",
        "Papan Kanban Sales",
        "Manajemen Tiket Komplain",
      ],
      ctaLabel: "Pelajari lebih lanjut",
      ctaHref: "/fitur#sales-pipeline",
    },
    {
      id: "wa-blast",
      name: "WA Blast & Broadcast Resmi",
      headline: "Kirim promo ke ribuan kontak sekaligus tanpa takut diblokir.",
      description:
        "Kirim pengumuman diskon dan peluncuran produk lewat WhatsApp Cloud API resmi Meta. Segmentasikan pembeli berdasarkan riwayat transaksi agar penawaran selalu tepat sasaran.",
      badges: [
        "100% Aman Anti-Banned",
        "Target Segmen Pelanggan",
        "Laporan Omset & Keterbacaan",
      ],
      ctaLabel: "Pelajari lebih lanjut",
      ctaHref: "/fitur#wa-broadcast",
    },
  ],
  ecosystemFeatures: [
    {
      id: "chatbot-wa",
      title: "Chatbot AI WhatsApp",
      description:
        "Balas chat pelanggan 24/7 di WhatsApp dengan bahasa alami, ramah, dan kontekstual.",
      category: "Chat",
    },
    {
      id: "routing-chat",
      title: "Auto Routing Chat",
      description:
        "Bagi pesan masuk secara otomatis dan merata ke tim customer service tanpa berebutan.",
      category: "Chat",
    },
    {
      id: "omnichannel",
      title: "Aplikasi Omnichannel",
      description:
        "Satukan pesan WhatsApp, Instagram DM, dan live chat website dalam satu kotak masuk terpadu.",
      category: "Chat",
    },
    {
      id: "wa-api",
      title: "WhatsApp Business API",
      description:
        "Koneksi resmi Meta dengan centang hijau, kecepatan pengiriman tertinggi, dan anti-blokir.",
      category: "Chat",
    },
    {
      id: "ai-agent",
      title: "Buat AI Agent Kustom",
      description:
        "Cukup unggah PDF atau dokumen katalog untuk melatih asisten AI bisnismu dalam 5 menit.",
      category: "AI",
    },
    {
      id: "crm",
      title: "Aplikasi CRM & Kontak",
      description:
        "Database pelanggan lengkap dengan nomor WhatsApp, label segmen, dan riwayat transaksi.",
      category: "CRM",
    },
    {
      id: "pipeline",
      title: "Manajemen Pipeline Sales",
      description:
        "Pantau tahapan calon pembeli dari chat pertama hingga berhasil closing dalam tabel visual.",
      category: "CRM",
    },
    {
      id: "komplain",
      title: "Manajemen Komplain",
      description:
        "Kelola tiket keluhan pelanggan, bagi penanggung jawab tim, dan jaga kepuasan pembeli.",
      category: "CRM",
    },
    {
      id: "blast",
      title: "WA Blast & Broadcast",
      description:
        "Kirim pengumuman promo diskon atau peluncuran produk ke ribuan nomor pelanggan resmi.",
      category: "Marketing",
    },
    {
      id: "segmentasi",
      title: "Segmentasi Pelanggan",
      description:
        "Kelompokkan kontak pembeli berdasarkan riwayat belanja untuk penawaran yang lebih personal.",
      category: "Marketing",
    },
    {
      id: "order",
      title: "Otomatisasi Order di Chat",
      description:
        "Terima pesanan, terapkan kupon promo, dan catat transaksi langsung dari obrolan pelanggan.",
      category: "Order",
    },
    {
      id: "ongkir-qr",
      title: "Cek Ongkir & Bayar QRIS",
      description:
        "Hitung tarif kurir ekspedisi seketika dan verifikasi pembayaran QRIS otomatis tanpa rekap manual.",
      category: "Order",
    },
  ],
};

export const industriesData = {
  heading: "Satu platform, disesuaikan dengan industri Anda",
  description:
    "Setiap industri punya pola percakapan sendiri. Intiora sudah memahami pertanyaan, alur booking, dan proses order yang khas di bidang Anda.",
  viewAllText: "Lihat semua industri →",
  viewAllHref: "#solusi",
  industries: [
    {
      id: "kesehatan",
      title: "Kesehatan",
      shortTitle: "Kesehatan",
      image: "/industries/kesehatan.jpg",
      description:
        "Dari permintaan jadwal sampai pertanyaan layanan, Intiora membalas instan di WhatsApp dan Instagram, 24/7, dengan bahasa natural, tanpa nambah staf front desk.",
      learnMoreHref: "#demo",
      solutions: [
        "Jawab pasien 24/7",
        "Booking dari chat",
        "Riwayat pasien terpusat",
        "Tiket komplain",
      ],
    },
    {
      id: "retail",
      title: "Ritel & E-Commerce",
      shortTitle: "Ritel &\nE-Commerce",
      image: "/industries/retail.jpg",
      description:
        "Tingkatkan konversi penjualan dengan rekomendasi produk otomatis, pengecekan ketersediaan stok, order tracking, dan broadcast promo terpersonalisasi.",
      learnMoreHref: "#demo",
      solutions: [
        "Katalog & Stok 24/7",
        "Checkout via chat",
        "Lacak nomor resi",
        "Broadcast promo tertarget",
      ],
    },
    {
      id: "fnb",
      title: "F&B",
      shortTitle: "F&B",
      image: "/industries/fnb.jpg",
      description:
        "Kelola reservasi meja otomatis, order take-away via WhatsApp, info menu promo, dan pengingat reservasi secara instan tanpa staf manual.",
      learnMoreHref: "#demo",
      solutions: [
        "Reservasi meja instan",
        "Order menu via chat",
        "Pengingat reservasi",
        "Feedback & review",
      ],
    },
    {
      id: "pendidikan",
      title: "Pendidikan",
      shortTitle: "Pendidikan",
      image: "/industries/pendidikan.jpg",
      description:
        "Otomatisasi info pendaftaran siswa/mahasiswa baru, jadwal ujian, rincian biaya SPP, dan konsultasi program studi 24 jam sehari.",
      learnMoreHref: "#demo",
      solutions: [
        "Pendaftaran 24/7",
        "Kalkulasi biaya studi",
        "Pengingat ujian & SPP",
        "Konsultasi jurusan",
      ],
    },
    {
      id: "keuangan",
      title: "Keuangan",
      shortTitle: "Keuangan",
      image: "/industries/keuangan.jpg",
      description:
        "Layanan perbankan & fintech terenkripsi untuk cek status pengajuan, simulasi pinjaman, panduan klaim, dan verifikasi data nasabah aman.",
      learnMoreHref: "#demo",
      solutions: [
        "Simulasi pinjaman instan",
        "Verifikasi nasabah",
        "Panduan klaim & polis",
        "Keamanan enterprise",
      ],
    },
    {
      id: "properti",
      title: "Properti",
      shortTitle: "Properti",
      image: "/industries/properti.jpg",
      description:
        "Kualifikasi preferensi calon pembeli, kirim e-brochure & price list otomatis, dan jadwalkan viewing unit properti langsung ke kalender sales.",
      learnMoreHref: "#demo",
      solutions: [
        "Kualifikasi calon pembeli",
        "Kirim brosur otomatis",
        "Jadwalkan viewing unit",
        "Lead routing ke agen",
      ],
    },
    {
      id: "salon",
      title: "Salon & Kecantikan",
      shortTitle: "Salon &\nKecantikan",
      image: "/industries/salon.jpg",
      description:
        "Booking appointment treatment & terapis, konsultasi awal jenis perawatan, hingga follow-up kepuasan pelanggan secara ramah dan natural.",
      learnMoreHref: "#demo",
      solutions: [
        "Booking jadwal treatment",
        "Pilih terapis & paket",
        "Konsultasi treatment",
        "Follow-up perawatan",
      ],
    },
    {
      id: "logistik",
      title: "Logistik",
      shortTitle: "Logistik",
      image: "/industries/logistik.jpg",
      description:
        "Cek tarif ongkos kirim seketika, live tracking status pengiriman barang, permintaan pick-up paket, dan penanganan tiket komplain cepat.",
      learnMoreHref: "#demo",
      solutions: [
        "Cek tarif & estimasi",
        "Live tracking status",
        "Request pick-up paket",
        "Eskalasi komplain",
      ],
    },
  ],
};

export const integrationsData = {
  eyebrow: "INTEGRASI",
  heading: "Hubungkan Semua Tools Bisnismu dalam Satu Platform",
  description:
    "WhatsApp Business API resmi Meta, Instagram, TikTok, Telegram, dan email masuk ke satu inbox cerdas. Konversi chat otomatis tersinkronisasi ke platform iklan (Meta CAPI), serta sistem internal bisnis Anda tersambung mulus lewat Open API & Webhook.",
  cta: { label: "Lihat integrasi", href: "/fitur" },
  integrations: [
    { name: "WhatsApp Business API", key: "whatsapp" },
    { name: "Instagram", key: "instagram" },
    { name: "TikTok", key: "tiktok" },
    { name: "Facebook Messenger", key: "messenger" },
    { name: "Telegram", key: "telegram" },
    { name: "Live chat website", key: "livechat" },
    { name: "Email", key: "email" },
    { name: "Meta", key: "meta" },
    { name: "Open API", key: "openapi" },
    { name: "Webhook", key: "webhook" },
  ],
};

export const analyticsData = {
  heading: "Pantau performa bisnis secara real-time",
  description:
    "Dashboard analitik yang memberikan insight mendalam tentang performa tim, tren percakapan, dan peluang pertumbuhan bisnis Anda.",
  dashboardMetrics: {
    revenue: { label: "Total Revenue", value: "Rp187.230.500", change: "+12.5%" },
    customers: { label: "Total Customer", value: "8.456", change: "+8.2%" },
    agents: { label: "Active Agents", value: "124", change: "+3" },
    conversion: { label: "Conversion Rate", value: "34.8%", change: "+5.1%" },
  },
  features: [
    {
      title: "Monitor semua aktivitas customer",
      description:
        "Lacak setiap interaksi pelanggan dari berbagai channel dalam satu dashboard terpadu dengan data real-time.",
      icon: "Activity" as const,
    },
    {
      title: "Temukan insight dari percakapan",
      description:
        "AI menganalisis ribuan percakapan untuk menemukan tren, sentimen, dan peluang yang mungkin terlewat.",
      icon: "Lightbulb" as const,
    },
    {
      title: "Optimalkan performa tim",
      description:
        "Pantau KPI setiap agent, identifikasi bottleneck, dan tingkatkan efisiensi operasional secara data-driven.",
      icon: "TrendingUp" as const,
    },
  ],
};

export const agentBuilderData = {
  heading: "Buat AI Agent dalam 5 Menit",
  description:
    "Kelola semua chat dengan AI yang mudah dibuat. Latih pakai data bisnismu dan hubungkan ke sistem lain tanpa ribet.",
  pillars: [
    {
      title: "Builder AI Lebih Sederhana",
      description:
        "Buat AI Agent yang powerful tanpa coding, cukup 5 menit, semudah briefing admin CS.",
    },
    {
      title: "Sumber Pengetahuan",
      description:
        "Cukup salin SOP dan info bisnismu, AI langsung bisa jawab dengan tepat.",
    },
    {
      title: "API Integration",
      description:
        "Hubungkan AI dengan berbagai API untuk cek ongkir, booking jadwal, dan kebutuhan bisnis lainnya.",
    },
  ],
  mockup: {
    agentName: "Michael",
    agentRole: "Create Your AI Agent",
    behaviour:
      "You are the official Customer Service AI for Lumière Beauty Lounge. Provide clear, concise, and accurate information about services, pricing, promotions, and booking procedures. Use a friendly and professional tone.",
    welcomeMessage:
      "Hello and welcome to Lumière Beauty Lounge. I'm here to help you with our treatments, prices, and bookings. Let me know what service you need and I'll assist you.",
    transferCondition:
      "Transfer to a human staff member if:\n• The customer requests a refund, compensation, or pricing exception",
    previewAiGreeting:
      "Hello and welcome to Lumière Beauty Lounge. I'm here to help you with our treatments, prices, and bookings. Let me know what service you need and I'll assist you.",
    previewUserReply: "Hello, I want to ask",
  },
};

export const conversationData = {
  heading: "AI Agent & Alur Chat",
  description:
    "AI yang cerdas dengan kemampuan memahami konteks, menjawab pertanyaan kompleks, dan melakukan handoff ke tim Anda saat dibutuhkan.",
  capabilities: [
    {
      title: "Memahami Bahasa Natural",
      description:
        "AI Agent memahami bahasa Indonesia sehari-hari, termasuk bahasa gaul, singkatan, dan konteks percakapan.",
    },
    {
      title: "Menjawab Berdasarkan Knowledge Base",
      description:
        "Respon akurat berdasarkan data produk, FAQ, dan dokumen yang Anda upload ke sistem.",
    },
    {
      title: "Memberikan Rekomendasi Produk",
      description:
        "AI menganalisis kebutuhan pelanggan dan merekomendasikan produk atau layanan yang paling relevan.",
    },
    {
      title: "Melakukan Qualification Lead",
      description:
        "Otomatis mengumpulkan informasi penting calon pelanggan sebelum diteruskan ke tim sales.",
    },
    {
      title: "Handoff ke Human Agent",
      description:
        "Saat percakapan membutuhkan sentuhan manusia, AI akan meneruskan ke agent yang tepat beserta konteks lengkap.",
    },
  ],
  chatMessages: [
    { sender: "customer", text: "Halo, saya mau tanya soal paket Business" },
    {
      sender: "ai",
      text: "Halo! Terima kasih sudah menghubungi kami. Paket Business kami mencakup fitur Omnichannel Inbox, AI Agent, dan CRM terintegrasi. Apakah ada fitur spesifik yang ingin Anda ketahui lebih lanjut?",
    },
    { sender: "customer", text: "Berapa harganya dan bisa trial dulu ga?" },
    {
      sender: "ai",
      text: "Tentu! Paket Business dimulai dari Rp899.000/bulan. Kami juga menyediakan free trial 14 hari tanpa kartu kredit. Mau saya bantu setup trial-nya sekarang?",
    },
    { sender: "customer", text: "Boleh, tolong bantu setup ya" },
    {
      sender: "ai",
      text: "Baik! Saya akan hubungkan Anda dengan tim kami untuk proses setup. Mohon tunggu sebentar ya 😊",
      isHandoff: true,
    },
  ],
};

export const pricingData = {
  heading: "Harga yang menyesuaikan kebutuhan Anda",
  description:
    "Mulai dari bisnis kecil hingga enterprise. Pilih paket yang sesuai dengan skala dan kebutuhan bisnis Anda.",
  plans: [
    {
      name: "Starter",
      description: "Untuk bisnis kecil yang baru memulai",
      monthlyPrice: "Rp299.000",
      yearlyPrice: "Rp249.000",
      period: "/bulan",
      popular: false,
      cta: "Mulai Starter",
      features: [
        "1 AI Agent",
        "2 Channel (WhatsApp + Web Chat)",
        "1.000 percakapan/bulan",
        "Basic analytics",
        "Email support",
        "Knowledge base upload",
      ],
    },
    {
      name: "Growth",
      description: "Untuk bisnis yang sedang berkembang",
      monthlyPrice: "Rp599.000",
      yearlyPrice: "Rp499.000",
      period: "/bulan",
      popular: true,
      cta: "Mulai Growth",
      features: [
        "3 AI Agents",
        "5 Channel termasuk Instagram",
        "5.000 percakapan/bulan",
        "CRM terintegrasi",
        "Advanced analytics",
        "Priority support",
        "Broadcast & Campaign",
        "Custom fields",
      ],
    },
    {
      name: "Business",
      description: "Untuk bisnis skala menengah",
      monthlyPrice: "Rp899.000",
      yearlyPrice: "Rp749.000",
      period: "/bulan",
      popular: false,
      cta: "Mulai Business",
      features: [
        "10 AI Agents",
        "Unlimited channels",
        "25.000 percakapan/bulan",
        "Full CRM & pipeline",
        "Custom integrations",
        "Dedicated support",
        "Team management",
        "API access",
        "Webhook support",
      ],
    },
    {
      name: "Enterprise",
      description: "Untuk perusahaan besar",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      period: "",
      popular: false,
      cta: "Hubungi Sales",
      features: [
        "Unlimited AI Agents",
        "Unlimited channels",
        "Unlimited percakapan",
        "Full platform access",
        "Custom AI training",
        "SLA guarantee",
        "On-premise option",
        "Dedicated account manager",
        "Custom development",
        "Security audit & compliance",
      ],
    },
  ],
};

export const testimonialsData = {
  heading: "Bukti Nyata dari Bisnis yang Menggunakan Intiora",
  description:
    "Dengarkan langsung dari para pelaku bisnis yang telah merasakan dampak Intiora terhadap pertumbuhan bisnis mereka.",
  testimonials: [
    {
      name: "Ahmad Rizki",
      company: "TechStore Indonesia",
      role: "CEO",
      result: "Response time turun 70%",
      quote:
        "Intiora mengubah cara kami melayani pelanggan. Response time kami turun drastis dan customer satisfaction meningkat signifikan.",
    },
    {
      name: "Sari Dewi",
      company: "FashionHub",
      role: "COO",
      result: "Lead conversion naik 35%",
      quote:
        "Dengan AI Agent yang melakukan kualifikasi lead otomatis, tim sales kami bisa fokus pada prospek yang benar-benar potensial.",
    },
    {
      name: "Budi Santoso",
      company: "HealthPlus Clinic",
      role: "Direktur Operasional",
      result: "CS menangani 3x lebih banyak chat",
      quote:
        "AI Agent membantu menjawab pertanyaan umum pasien sehingga tim CS kami bisa fokus pada kasus yang kompleks.",
    },
    {
      name: "Lina Kurniawati",
      company: "PropertyMax",
      role: "VP Sales",
      result: "Closing rate naik 45%",
      quote:
        "Kualifikasi lead otomatis oleh AI Agent memastikan tim kami hanya follow-up prospek yang serius. Efisiensi naik drastis.",
    },
    {
      name: "Hendra Wijaya",
      company: "EduSmart Academy",
      role: "Founder",
      result: "Registrasi naik 60%",
      quote:
        "Proses pendaftaran jadi lebih mudah dengan chatbot AI yang bisa menjawab semua pertanyaan calon siswa 24/7.",
    },
    {
      name: "Maya Putri",
      company: "TravelEase",
      role: "Head of Digital",
      result: "Customer satisfaction 98%",
      quote:
        "Respon instan untuk pertanyaan booking dan itinerary membuat pelanggan kami sangat puas dengan layanan kami.",
    },
  ],
};

export const faqData = {
  heading: "Pertanyaan yang Sering Diajukan",
  description:
    "Semua yang perlu Anda ketahui tentang implementasi AI Agent dan Omnichannel CRM Intiora.",
  faqs: [
    {
      question: "Apakah Intiora menggunakan WhatsApp Business API resmi (Official Meta)?",
      answer:
        "Ya, Intiora menggunakan integrasi resmi WhatsApp Business API (Cloud API) yang terhubung langsung dengan Meta. Akun bisnis Anda aman dari risiko pemblokiran nomor, memiliki performa pengiriman pesan tercepat, dan memenuhi syarat untuk pengajuan centang hijau (verified green badge).",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan hingga AI Agent siap digunakan?",
      answer:
        "Sangat cepat. Rata-rata tim bisnis kami dapat go-live hanya dalam 5 hingga 15 menit. Anda cukup mengunggah dokumen FAQ, katalog produk (PDF/Excel), atau tautan website Anda ke Knowledge Base Intiora, lalu menghubungkan nomor WhatsApp dan akun Instagram Anda.",
    },
    {
      question: "Apakah AI Agent bisa memahami bahasa Indonesia informal, singkatan, dan typo?",
      answer:
        "Tentu saja. Model AI Intiora telah dilatih secara mendalam dengan ratusan ribu percakapan e-commerce dan customer service di Indonesia, sehingga sangat luwes memahami singkatan, bahasa gaul, gaya bahasa santai, maupun kesalahan ketik (typo) pelanggan secara kontekstual.",
    },
    {
      question: "Bagaimana jika ada pertanyaan sulit atau komplain mendesak dari pelanggan?",
      answer:
        "Intiora dilengkapi sistem Human Handoff pintar. Saat AI mendeteksi sentimen negatif, permintaan eskalasi, atau pertanyaan di luar cakupan knowledge base, percakapan akan otomatis dialihkan ke staf Customer Service Anda disertai rangkuman inti masalah secara instan.",
    },
    {
      question: "Apakah Intiora bisa diintegrasikan dengan database atau POS kami?",
      answer:
        "Ya, Intiora menyediakan dokumentasi RESTful API lengkap, Webhook real-time, dan integrasi bawaan dengan Google Sheets, Shopify, WooCommerce, Meta CAPI, serta CRM pihak ketiga sehingga stok dan data transaksi bisa tersinkronisasi otomatis.",
    },
    {
      question: "Apakah ada masa uji coba gratis sebelum berlangganan?",
      answer:
        "Ya! Kami menyediakan Free Trial selama 14 hari dengan akses fitur penuh tanpa perlu memasukkan kartu kredit. Anda bisa mencoba performa AI Agent dan mengevaluasi peningkatannya pada bisnis Anda secara langsung.",
    },
  ],
};

export const finalCtaData = {
  heading: "Ubah Setiap Percakapan Jadi Penjualan",
  description:
    "Mulai gunakan Intiora hari ini dan rasakan bagaimana AI Agent dapat mengubah cara bisnis Anda melayani pelanggan dan meningkatkan penjualan.",
  primaryCta: { label: "Coba Gratis", href: "#demo" },
  secondaryCta: { label: "Jadwalkan Demo", href: "#demo" },
  trustNote: "Tanpa kartu kredit • Setup dalam hitungan menit",
};

export const footerData = {
  description:
    "Platform AI Agent dan Omnichannel CRM terdepan untuk customer service dan sales bisnis di Indonesia.",
  columns: [
    {
      title: "Produk",
      links: [
        { label: "AI Agent", href: "#produk" },
        { label: "Omnichannel", href: "#produk" },
        { label: "CRM", href: "#produk" },
        { label: "Analytics", href: "#produk" },
      ],
    },
    {
      title: "Solusi",
      links: [
        { label: "Customer Service", href: "#solusi" },
        { label: "Sales", href: "#solusi" },
        { label: "Marketing", href: "#solusi" },
        { label: "Enterprise", href: "#solusi" },
      ],
    },
    {
      title: "Perusahaan",
      links: [
        { label: "Tentang Kami", href: "#" },
        { label: "Karier", href: "#" },
        { label: "Partner", href: "#" },
        { label: "Kontak", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#resources" },
        { label: "Dokumentasi", href: "#resources" },
        { label: "Help Center", href: "#resources" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
};

export const fiturMegaMenu = {
  columns: [
    {
      category: "CHAT",
      items: [
        { name: "Chatbot AI", icon: "Bot", href: "#produk" },
        { name: "Chatbot AI WhatsApp", icon: "MessageSquare", href: "#produk" },
        { name: "WhatsApp Business API", icon: "CheckCircle2", href: "#produk" },
        { name: "Aplikasi Omnichannel", icon: "Layers", href: "#produk" },
        { name: "Auto Routing Chat", icon: "GitBranch", href: "#produk" },
      ],
    },
    {
      category: "AI",
      items: [
        { name: "Buat AI Agent", icon: "Sparkles", href: "#produk" },
        { name: "Agentic AI", icon: "Cpu", href: "#produk" },
        { name: "Function Calling", icon: "Zap", href: "#produk" },
        { name: "Pengaturan Lanjutan AI", icon: "Sliders", href: "#produk" },
        { name: "AI Feedback & Evaluasi", icon: "CheckSquare", href: "#produk" },
      ],
    },
    {
      category: "CRM",
      items: [
        { name: "Aplikasi CRM", icon: "LayoutGrid", href: "#produk" },
        { name: "Manajemen Data Pelanggan", icon: "Database", href: "#produk" },
        { name: "Manajemen Lead", icon: "UserPlus", href: "#produk" },
        { name: "Manajemen Pipeline", icon: "Kanban", href: "#produk" },
        { name: "Manajemen Komplain", icon: "LifeBuoy", href: "#produk" },
      ],
    },
    {
      category: "MARKETING",
      items: [
        { name: "WA Blast", icon: "Megaphone", href: "#produk" },
        { name: "Aplikasi Broadcast WhatsApp", icon: "Radio", href: "#produk" },
        { name: "Segmentasi Pelanggan", icon: "Users", href: "#produk" },
        { name: "Intiora Tracker", icon: "Activity", href: "#produk" },
        { name: "Integrasi CAPI", icon: "Target", href: "#produk" },
        { name: "Dashboard ROAS", icon: "BarChart3", href: "#produk" },
      ],
    },
    {
      category: "ORDER",
      items: [
        { name: "Otomatisasi Order", icon: "ShoppingCart", href: "#produk" },
        { name: "Cek Ongkir Otomatis", icon: "Truck", href: "#produk" },
        { name: "Pembayaran QR Otomatis", icon: "QrCode", href: "#produk" },
        { name: "Jam Kerja AI", icon: "Clock", href: "#produk" },
        { name: "Automasi Workflow", icon: "GitBranch", href: "#produk" },
      ],
    },
  ],
  featured: {
    tag: "UNGGULAN",
    title: "Chatbot AI WhatsApp Resmi",
    description:
      "Balas chat pelanggan otomatis 24/7 dengan WhatsApp Business API resmi Meta, cepat dan anti-blokir.",
    linkText: "Jelajahi fitur →",
    href: "#produk",
    trustText: "Dipercaya 3.000+ bisnis di Indonesia",
  },
  bottomLink: { label: "Lihat semua fitur →", href: "/fitur" },
};

export const solusiMegaMenu = {
  peran: [
    {
      title: "Sales",
      desc: "Balas duluan, kualifikasi, closing lebih banyak",
      icon: "Target",
      href: "#solusi",
    },
    {
      title: "Customer Service",
      desc: "Semua channel terjawab 24/7, manusia pegang yang sulit",
      icon: "Headphones",
      href: "#solusi",
    },
    {
      title: "Marketing",
      desc: "Campaign yang kelacak sampai penjualan",
      icon: "Megaphone",
      href: "#solusi",
    },
    {
      title: "HRD",
      desc: "Pertanyaan kandidat & karyawan, satu inbox",
      icon: "Users",
      href: "#solusi",
    },
    {
      title: "Operasional",
      desc: "Order, tiket, dan serah terima jalan sendiri",
      icon: "GitBranch",
      href: "#solusi",
    },
  ],
  industri: [
    { title: "Kesehatan", desc: "Jawab & booking pasien 24/7", icon: "Stethoscope", href: "#solusi" },
    { title: "Ritel & E-Commerce", desc: "Jualan & layani di semua channel", icon: "ShoppingBag", href: "#solusi" },
    { title: "F&B", desc: "Reservasi & order tertangani 24/7", icon: "Utensils", href: "#solusi" },
    { title: "Pendidikan", desc: "Jawab calon siswa saat PMB", icon: "GraduationCap", href: "#solusi" },
    { title: "Keuangan", desc: "Layanan compliant, volume tinggi", icon: "Landmark", href: "#solusi" },
    { title: "Pemerintahan", desc: "Jawab warga, lacak tiap kasus", icon: "Building2", href: "#solusi" },
    { title: "Properti", desc: "Kualifikasi leads & atur kunjungan", icon: "Building", href: "#solusi" },
    { title: "Salon & Kecantikan", desc: "Booking, reminder, minim no-show", icon: "Sparkles", href: "#solusi" },
    { title: "Perhotelan", desc: "Reservasi & pertanyaan tamu, 24/7", icon: "Hotel", href: "#solusi" },
    { title: "Tour & Travel", desc: "Jawaban multi-bahasa lintas zona", icon: "Plane", href: "#solusi" },
    { title: "Lembaga Sosial", desc: "Jawab donatur & jalankan campaign", icon: "HeartHandshake", href: "#solusi" },
    { title: "Logistik", desc: "Update kiriman & CS 24/7", icon: "Truck", href: "#solusi" },
    { title: "FMCG", desc: "Layani distributor & konsumen", icon: "Package", href: "#solusi" },
    { title: "Internet Service Provider", desc: "Tangani gangguan & tagihan 24/7", icon: "Wifi", href: "#solusi" },
    { title: "Maskapai", desc: "Jawab penumpang lintas zona waktu", icon: "Plane", href: "#solusi" },
    { title: "Hiburan", desc: "Tiket & event tanpa antrean chat", icon: "Clapperboard", href: "#solusi" },
    { title: "Gym & Padel", desc: "Booking kelas & membership otomatis", icon: "Dumbbell", href: "#solusi" },
    { title: "SaaS", desc: "Onboarding & support pengguna 24/7", icon: "Cloud", href: "#solusi" },
    { title: "Transportasi", desc: "Jadwal, tarif, & pesanan di chat", icon: "Bus", href: "#solusi" },
    { title: "Otomotif", desc: "Leads test drive & booking servis", icon: "Car", href: "#solusi" },
  ],
  bottomLinks: [
    { label: "Lihat semua solusi →", href: "#solusi" },
    { label: "Lihat semua industri →", href: "#solusi" },
  ],
};

export const allFeaturesDetailed = {
  header: {
    badge: "SEMUA FITUR INTIORA",
    heading: "Lengkap, Terintegrasi, dan Siap Membantu Bisnis Anda",
    description:
      "Pelajari seluruh kemampuan platform Intiora secara rinci. Dirancang khusus untuk mempermudah kerja tim sales, customer service, dan pemilik toko di Indonesia.",
  },
  categories: [
    { id: "all", label: "Semua Fitur" },
    { id: "chat", label: "Chat & WhatsApp Resmi" },
    { id: "ai", label: "Kecerdasan Buatan (AI)" },
    { id: "crm", label: "CRM & Data Pelanggan" },
    { id: "marketing", label: "Marketing & Broadcast" },
    { id: "order", label: "Kasir & Transaksi Chat" },
  ],
  items: [
    {
      id: "chatbot-wa",
      category: "chat",
      categoryLabel: "Chat & WhatsApp Resmi",
      name: "Chatbot AI WhatsApp",
      tagline: "Balas chat pembeli 24 jam nonstop dalam 2 detik",
      summary:
        "Asisten pintar yang otomatis membalas pesan WhatsApp pembeli kapan saja. Mengerti bahasa percakapan sehari-hari, singkatan, dan pertanyaan umum seputar harga serta spesifikasi produk.",
      problem: "Admin lambat membalas chat di luar jam kerja, membuat calon pembeli kabur ke toko sebelah.",
      solution: "Chatbot langsung menjawab pertanyaan produk detik itu juga, menjaga minat beli tetap hangat.",
      bullets: [
        "Kecepatan balas rata-rata di bawah 2 detik",
        "Paham bahasa informal dan typo pembeli Indonesia",
        "Bisa dilatih dengan katalog, FAQ, dan SOP toko Anda",
      ],
      icon: "Bot",
    },
    {
      id: "wa-api",
      category: "chat",
      categoryLabel: "Chat & WhatsApp Resmi",
      name: "WhatsApp Business API Resmi",
      tagline: "Koneksi resmi Meta dengan centang hijau dan aman anti-blokir",
      summary:
        "Gunakan jalur resmi WhatsApp Cloud API dari Meta. Nomor bisnis Anda aman dari pemblokiran, memiliki kecepatan pengiriman broadcast tertinggi, dan memenuhi syarat centang hijau resmi.",
      problem: "Memakai aplikasi WhatsApp tidak resmi berisiko tinggi nomor toko diblokir sepihak oleh Meta.",
      solution: "Integrasi API resmi menjamin nomor bisnis aman, terverifikasi, dan bisa diakses banyak admin sekaligus.",
      bullets: [
        "100% aman dan didukung langsung oleh Meta",
        "Satu nomor WhatsApp bisa dipakai puluhan admin bersamaan",
        "Dukungan pengajuan centang hijau (verified green badge)",
      ],
      icon: "CheckCircle2",
    },
    {
      id: "omnichannel",
      category: "chat",
      categoryLabel: "Chat & WhatsApp Resmi",
      name: "Aplikasi Omnichannel",
      tagline: "Satukan WhatsApp, Instagram DM, dan Webchat di satu layar",
      summary:
        "Semua obrolan dari berbagai channel masuk ke satu kotak masuk terpadu. Admin tidak perlu lagi repot gonta-ganti smartphone atau membuka banyak tab aplikasi browser.",
      problem: "Admin kewalahan mengecek banyak HP toko, menyebabkan banyak pesan di Instagram dan WhatsApp terlewat.",
      solution: "Semua pesan dari semua akun berkumpul di satu dashboard yang rapi dan terorganisir.",
      bullets: [
        "Mendukung WhatsApp, Instagram DM, dan Live Webchat",
        "Riwayat chat pelanggan lintas channel tersimpan jadi satu",
        "Pemberitahuan pesan masuk instan ke seluruh staf yang bertugas",
      ],
      icon: "Layers",
    },
    {
      id: "auto-routing",
      category: "chat",
      categoryLabel: "Chat & WhatsApp Resmi",
      name: "Auto Routing & Pembagian Chat",
      tagline: "Bagi pesan masuk secara otomatis dan adil ke staf admin",
      summary:
        "Atur aturan pembagian pesan otomatis, baik secara bergiliran (round-robin) maupun berdasarkan keahlian staf (misal: pertanyaan teknis langsung ke CS, tanya grosir ke Sales).",
      problem: "Admin berebutan memilih chat yang gampang dan menelantarkan pertanyaan yang butuh penanganan khusus.",
      solution: "Sistem membagi beban chat secara otomatis dan merata ke staf yang sedang aktif bertugas.",
      bullets: [
        "Bagi chat otomatis berdasarkan shift dan kapasitas staf",
        "Routing khusus berdasarkan kategori pertanyaan pembeli",
        "Tinggalkan catatan internal di obrolan yang hanya bisa dibaca tim",
      ],
      icon: "GitBranch",
    },
    {
      id: "ai-agent-custom",
      category: "ai",
      categoryLabel: "Kecerdasan Buatan (AI)",
      name: "Buat AI Agent Kustom",
      tagline: "Latih asisten AI bisnismu dalam 5 menit hanya dengan unggah PDF",
      summary:
        "Cukup upload dokumen katalog produk, price list, atau file FAQ toko Anda. AI Agent akan membaca seluruh informasi tersebut dan siap menjawab pembeli secara cerdas dan akurat.",
      problem: "Melatih admin baru butuh waktu berminggu-minggu dan sering salah memberikan informasi ke pembeli.",
      solution: "AI Agent langsung menguasai seluruh informasi tokomu seketika dan menjawab konsisten.",
      bullets: [
        "Tinggal unggah file PDF, Word, Excel, atau link website toko",
        "Pembaruan harga atau stok dapat dilakukan kapan saja dengan mudah",
        "AI hanya menjawab sesuai data bisnismu tanpa mengarang info",
      ],
      icon: "Sparkles",
    },
    {
      id: "lead-qualification",
      category: "ai",
      categoryLabel: "Kecerdasan Buatan (AI)",
      name: "Kualifikasi Leads Otomatis",
      tagline: "AI menyaring pembeli yang benar-benar siap transaksi",
      summary:
        "AI menanyakan kebutuhan, jumlah pesanan, dan estimasi waktu pembelian secara ramah dan terstruktur. Tim sales Anda hanya perlu menindaklanjuti calon pembeli yang benar-benar berpotensi closing.",
      problem: "Tim sales kehabisan waktu melayani penanya iseng yang tidak berniat membeli.",
      solution: "AI menyaring prospek terlebih dahulu, melabeli 'Hot Lead', lalu mengalihkan ke sales.",
      bullets: [
        "Kumpulkan data preferensi, jumlah pesanan, dan alamat pembeli",
        "Label otomatis: Hot Lead, Warm Lead, atau Sekadar Tanya",
        "Meningkatkan closing rate tim sales hingga 40%",
      ],
      icon: "Cpu",
    },
    {
      id: "smart-handoff",
      category: "ai",
      categoryLabel: "Kecerdasan Buatan (AI)",
      name: "Smart Human Handoff",
      tagline: "Alihkan obrolan ke admin manusia dengan rangkuman instan",
      summary:
        "Saat pelanggan meminta bicara dengan staf atau kasus membutuhkan negosiasi khusus, AI otomatis mengalihkan chat ke staf manusia disertai ringkasan inti kebutuhan pembeli.",
      problem: "Pelanggan frustrasi jika chatbot kaku memaksakan jawaban saat menghadapi komplain rumit.",
      solution: "Transisi mulus dari AI ke manusia tanpa pelanggan harus mengulang ceritanya dari awal.",
      bullets: [
        "AI menyertakan ringkasan masalah di catatan internal untuk staf",
        "Notifikasi otomatis ke admin saat eskalasi dibutuhkan",
        "Pelanggan merasa dihargai dengan penanganan manusiawi",
      ],
      icon: "Zap",
    },
    {
      id: "crm-contacts",
      category: "crm",
      categoryLabel: "CRM & Data Pelanggan",
      name: "Aplikasi CRM & Buku Kontak",
      tagline: "Database pelanggan rapi lengkap dengan riwayat belanja",
      summary:
        "Setiap orang yang chat otomatis tersimpan nomor dan namanya. Anda bisa menambahkan label kustom (misal: Reseller, Pelanggan VIP, Grosir) serta melihat total nominal belanja tiap pembeli.",
      problem: "Nomor kontak pelanggan tersebar di berbagai HP dan hilang saat HP toko rusak atau ganti admin.",
      solution: "Seluruh data pelanggan tersimpan aman di server terpusat milik bisnis Anda sendiri.",
      bullets: [
        "Simpan otomatis kontak dari WhatsApp, Instagram, dan Web",
        "Label kustom: VIP, Reseller, Distributor, Pelanggan Baru",
        "Lihat riwayat belanja dan total omset dari tiap pelanggan (CLV)",
      ],
      icon: "Users",
    },
    {
      id: "sales-pipeline",
      category: "crm",
      categoryLabel: "CRM & Data Pelanggan",
      name: "Manajemen Pipeline Sales",
      tagline: "Pantau proses transaksi dari chat pertama sampai lunas",
      summary:
        "Visualisasikan proses penjualan dalam papan pipeline (Kanban). Ketahui dengan pasti berapa calon pembeli yang baru masuk, sedang negosiasi, menunggu transfer, atau sudah lunas.",
      problem: "Banyak calon pembeli terlupakan dan tidak pernah di-follow up hingga akhirnya batal membeli.",
      solution: "Papan visual memperlihatkan posisi tiap pembeli agar tim sales segera menindaklanjuti.",
      bullets: [
        "Papan visual tarik-lepas (drag and drop) yang sangat mudah",
        "Pengingat batas waktu follow-up agar tidak keduluan kompetitor",
        "Laporan konversi sales dari tiap tahapan corong penjualan",
      ],
      icon: "Kanban",
    },
    {
      id: "complaint-tickets",
      category: "crm",
      categoryLabel: "CRM & Data Pelanggan",
      name: "Manajemen Tiket Komplain",
      tagline: "Tangani keluhan pelanggan secara cepat dan transparan",
      summary:
        "Ubah chat komplain menjadi tiket berpenanggung jawab jelas. Lengkap dengan status pengerjaan, batas waktu penanganan (SLA), dan riwayat penyelesaian masalah.",
      problem: "Komplain pembeli di chat tenggelam dan tidak ditangani, memicu ulasan negatif di media sosial.",
      solution: "Setiap komplain tercatat menjadi tiket resmi dengan tim yang bertanggung jawab menyelesaikannya.",
      bullets: [
        "Penetapan tingkat urgensi: Rendah, Sedang, Mendesak",
        "Penetapan penanggung jawab spesifik untuk tiap kasus",
        "Pantau waktu respon dan tingkat kepuasan pelanggan",
      ],
      icon: "LifeBuoy",
    },
    {
      id: "wa-broadcast",
      category: "marketing",
      categoryLabel: "Marketing & Broadcast",
      name: "WA Blast & Broadcast Resmi",
      tagline: "Kirim promo ke ribuan pelanggan sekaligus tanpa risiko blokir",
      summary:
        "Luncurkan broadcast promo diskon, peluncuran produk baru, atau pengingat jadwal ke ribuan kontak pelanggan secara resmi lewat Meta Cloud API dengan performa pengiriman tertinggi.",
      problem: "Software blast ilegal sering membuat nomor WhatsApp bisnis diblokir permanen oleh pihak WhatsApp.",
      solution: "Broadcast resmi resmi Meta menjamin pesan sampai ke inbox pembeli dengan aman dan terpercaya.",
      bullets: [
        "Kirim ribuan pesan massal dalam hitungan menit",
        "Bisa menyertakan tombol interaktif 'Beli Sekarang' di dalam pesan",
        "Tingkat keterbacaan mencapai 95% jauh mengungguli email",
      ],
      icon: "Radio",
    },
    {
      id: "segmentation",
      category: "marketing",
      categoryLabel: "Marketing & Broadcast",
      name: "Segmentasi Pelanggan Pintar",
      tagline: "Kirim penawaran tepat ke orang yang tepat",
      summary:
        "Kelompokkan kontak berdasarkan kota, jenis produk yang pernah dibeli, atau waktu terakhir transaksi. Kirim promo yang relevan agar tingkat pembelian jauh lebih tinggi.",
      problem: "Mengirim promo yang sama ke semua orang terasa mengganggu dan membuat pelanggan risih.",
      solution: "Kirim promo yang dipersonalisasi sesuai minat belanja masing-masing kelompok pelanggan.",
      bullets: [
        "Filter kontak berdasarkan tag, riwayat produk, atau total belanja",
        "Target khusus pelanggan yang sudah 30 hari tidak belanja",
        "Meningkatkan tingkat konversi penjualan hingga 3x lipat",
      ],
      icon: "Users",
    },
    {
      id: "roas-analytics",
      category: "marketing",
      categoryLabel: "Marketing & Broadcast",
      name: "Laporan Penjualan & ROAS",
      tagline: "Ketahui pasti berapa omset yang dihasilkan dari tiap promo",
      summary:
        "Dashboard analitik yang menghitung berapa banyak pesan broadcast yang berhasil terkirim, dibaca oleh pelanggan, dan menghasilkan transaksi penjualan nyata.",
      problem: "Pemilik bisnis tidak tahu apakah biaya promosi yang dikeluarkan benar-benar menghasilkan keuntungan.",
      solution: "Laporan transparan menghitung langsung omset yang masuk dari setiap kampanye broadcast.",
      bullets: [
        "Metrik lengkap: Terkirim, Terbaca, Chat Masuk, Closing Penjualan",
        "Kalkulasi rasio pengembalian modal promo (ROAS)",
        "Grafik jam paling responsif pelanggan membuka pesan",
      ],
      icon: "BarChart3",
    },
    {
      id: "chat-cashier",
      category: "order",
      categoryLabel: "Kasir & Transaksi Chat",
      name: "Kasir & Pemesanan di Chat",
      tagline: "Pelanggan bisa langsung pesan produk di dalam obrolan",
      summary:
        "Kirim daftar produk bergambar dan rincian harga langsung di chat. Pembeli dapat memilih varian, memasukkan alamat, dan menerima rincian total belanja tanpa keluar dari WhatsApp.",
      problem: "Mengarahkan pembeli keluar dari WhatsApp ke web lain sering membuat mereka batal membeli.",
      solution: "Seluruh proses pemesanan diselesaikan langsung di dalam percakapan chat yang sudah berjalan.",
      bullets: [
        "Katalog produk bergambar siap kirim sekali klik",
        "Hitung subtotal, diskon kupon, dan rincian otomatis",
        "Terbitkan nota pesanan berlogo toko langsung ke obrolan",
      ],
      icon: "ShoppingCart",
    },
    {
      id: "shipping-calculator",
      category: "order",
      categoryLabel: "Kasir & Transaksi Chat",
      name: "Cek Ongkir Kurir Otomatis",
      tagline: "Hitung tarif kurir ekspedisi seketika di dalam chat",
      summary:
        "Koneksi langsung ke berbagai ekspedisi pengiriman terkemuka di Indonesia (JNE, SiCepat, J&T, Anteraja, dll.). Sistem otomatis menghitung ongkos kirim berdasarkan alamat pembeli.",
      problem: "Admin harus membuka aplikasi kurir lain untuk mengecek ongkir secara manual satu per satu.",
      solution: "Tarif ongkos kirim muncul seketika di chat begitu pembeli mengetik kecamatan atau kota tujuan.",
      bullets: [
        "Mendukung berbagai pilihan kurir reguler, kargo, dan instan",
        "Ongkir langsung ditambahkan ke total tagihan pesanan",
        "Pemberitahuan nomor resi otomatis saat paket sudah dikirim",
      ],
      icon: "Truck",
    },
    {
      id: "qris-payments",
      category: "order",
      categoryLabel: "Kasir & Transaksi Chat",
      name: "Pembayaran QRIS Instan",
      tagline: "Bayar pakai QR langsung terverifikasi otomatis oleh sistem",
      summary:
        "Kirim kode QRIS dinamis langsung ke obrolan. Begitu pembeli memindai dan membayar lewat e-wallet atau m-banking, sistem otomatis memverifikasi pembayaran dan menerbitkan kwitansi lunas.",
      problem: "Admin harus bolak-balik cek mutasi rekening bank dan mencocokkan struk bukti transfer manual.",
      solution: "Verifikasi lunas otomatis dalam hitungan detik tanpa perlu bukti transfer fisik.",
      bullets: [
        "Mendukung semua bank dan e-wallet (GoPay, OVO, ShopeePay, Dana, dll.)",
        "Pemberitahuan status 'Lunas' seketika ke pembeli dan admin",
        "Stok produk otomatis terpotong saat pembayaran terverifikasi",
      ],
      icon: "QrCode",
    },
  ],
};


