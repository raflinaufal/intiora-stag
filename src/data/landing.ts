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
      headline: "Balas pesan WhatsApp, Instagram & Web 24/7 dalam satu inbox resmi.",
      description:
        "Terhubung langsung ke WhatsApp Business API resmi Meta dan Instagram DM. Dilengkapi asisten AI yang membalas chat instan dalam 2 detik serta WhatsApp Call AI yang merangkum percakapan telepon otomatis.",
      badges: [
        "WhatsApp Business API Resmi",
        "WhatsApp Call AI",
        "1 Layar Semua Channel",
      ],
      subFeatures: [
        "Chatbot AI membalas dalam 2 detik dengan bahasa ramah santun",
        "WhatsApp Call AI otomatis mencatat poin penting telepon pelanggan",
        "Jalur resmi Meta aman dari risiko pemblokiran nomor WhatsApp",
      ],
      ctaLabel: "Lihat Demo Chatbot AI",
      ctaHref: "#demo",
    },
    {
      id: "ai-agent",
      name: "AI Agent Cerdas & Mandiri",
      headline: "AI yang paham katalog bisnismu, siap kualifikasi prospek otomatis.",
      description:
        "Cukup unggah dokumen PDF, daftar harga, atau FAQ tokomu. AI Agent akan mempelajari bisnis Anda dalam hitungan menit, menjawab pertanyaan akurat, dan otomatis mengoper ke tim sales saat ada prospek potensial.",
      badges: [
        "Latih AI Pakai Dokumen/PDF",
        "Kualifikasi Lead Otomatis",
        "Human Handoff Cerdas",
      ],
      subFeatures: [
        "Paham bahasa gaul, singkatan, dan gaya chat pembeli Indonesia",
        "Kualifikasi kebutuhan & budget calon pembeli secara natural",
        "Alihkan chat ke admin manusia dengan rangkuman inti masalah",
      ],
      ctaLabel: "Lihat Cara Kerja AI Agent",
      ctaHref: "#demo",
    },
    {
      id: "crm-pipeline",
      name: "Aplikasi CRM & Pipeline Penjualan",
      headline: "Kelola data pelanggan dan pantau proses closing dari chat sampai lunas.",
      description:
        "Semua kontak WhatsApp, riwayat percakapan, dan status prospek tersimpan rapi dalam pipeline visual. Tidak ada lagi calon pembeli yang lupa di-follow-up oleh tim sales Anda.",
      badges: [
        "Database Pelanggan 360",
        "Visual Sales Pipeline",
        "Manajemen Tiket Komplain",
      ],
      subFeatures: [
        "Catat riwayat chat & preferensi belanja tiap pelanggan otomatis",
        "Pantau tahapan prospek: Kontak Baru ➔ Kualifikasi ➔ Closing",
        "Kelola tiket komplain pelanggan dengan respon cepat dan terukur",
      ],
      ctaLabel: "Lihat Tampilan CRM",
      ctaHref: "#demo",
    },
    {
      id: "wa-blast",
      name: "WA Blast & Broadcast Resmi",
      headline: "Kirim pesan promo ke ribuan kontak sekaligus tanpa takut diblokir.",
      description:
        "Gunakan jalur WhatsApp Business API resmi untuk mengirim penawaran diskon, katalog terbaru, atau pengumuman event. Kelompokkan penerima berdasarkan riwayat beli agar promo tepat sasaran dan menghasilkan omset tinggi.",
      badges: [
        "WA Blast Resmi Meta (Aman)",
        "Segmentasi Pelanggan",
        "Laporan Penjualan & ROAS",
      ],
      subFeatures: [
        "Broadcast massal resmi 100% aman tanpa risiko banned nomor",
        "Kirim pesan khusus ke pelanggan setia atau pembeli yang lama tak order",
        "Pantau jumlah pesan terkirim, dibaca, dan nominal omset yang masuk",
      ],
      ctaLabel: "Lihat Fitur WA Blast",
      ctaHref: "#demo",
    },
    {
      id: "order-automation",
      name: "Otomatisasi Order & Kasir Chat",
      headline: "Pemesanan, cek ongkir kurir, dan bayar QRIS langsung di obrolan.",
      description:
        "Pelanggan tidak perlu pindah ke aplikasi lain. Buat pesanan langsung di WhatsApp, hitung ongkos kirim kurir otomatis, dan terima pembayaran lewat QRIS yang langsung terverifikasi seketika.",
      badges: [
        "Buat Pesanan di Chat",
        "Cek Ongkir Kurir Otomatis",
        "Pembayaran QRIS Instan",
      ],
      subFeatures: [
        "Kirim invoice dan rincian belanja berlogo tokomu langsung di chat",
        "Cek tarif ongkos kirim JNE, SiCepat, J&T secara real-time di obrolan",
        "Pembayaran QRIS otomatis dicek sistem, nota PDF langsung terbit",
      ],
      ctaLabel: "Lihat Alur Order Chat",
      ctaHref: "#demo",
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
      id: "call-ai",
      title: "WhatsApp Call AI",
      description:
        "Rangkum percakapan telepon otomatis menjadi catatan poin penting dan follow-up berikutnya.",
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
  heading: "Hubungkan Semua Tools Bisnismu dalam Satu Platform",
  description:
    "Integrasikan Intiora dengan tools yang sudah Anda gunakan. WhatsApp Business API, Instagram, CRM, e-commerce, dan platform bisnis lainnya.",
  cta: { label: "Lihat Semua Integrasi", href: "#integrasi" },
  integrations: [
    { name: "WhatsApp", icon: "MessageCircle" as const },
    { name: "Instagram", icon: "Instagram" as const },
    { name: "Gmail", icon: "Mail" as const },
    { name: "Google Sheets", icon: "Sheet" as const },
    { name: "Shopify", icon: "ShoppingBag" as const },
    { name: "WooCommerce", icon: "ShoppingCart" as const },
    { name: "Slack", icon: "Hash" as const },
    { name: "Telegram", icon: "Send" as const },
    { name: "Zapier", icon: "Zap" as const },
    { name: "HubSpot", icon: "BarChart3" as const },
    { name: "Stripe", icon: "CreditCard" as const },
    { name: "Webhook", icon: "Globe" as const },
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
    "Tidak perlu keahlian teknis. Cukup upload knowledge base, atur persona, hubungkan channel, dan AI Agent Anda siap melayani pelanggan.",
  steps: [
    {
      number: 1,
      title: "Upload Knowledge",
      description:
        "Upload dokumen, FAQ, katalog produk, atau URL website sebagai sumber pengetahuan AI Agent.",
    },
    {
      number: 2,
      title: "Atur Persona",
      description:
        "Tentukan nama, gaya bicara, dan aturan respon AI Agent sesuai brand Anda.",
    },
    {
      number: 3,
      title: "Hubungkan Channel",
      description:
        "Sambungkan AI Agent ke WhatsApp, Instagram, Website Chat, atau channel lainnya.",
    },
    {
      number: 4,
      title: "Aktifkan Agent",
      description:
        "AI Agent Anda siap menjawab pelanggan 24/7 secara otomatis dan cerdas.",
    },
  ],
  benefits: [
    { title: "Tanpa coding", description: "Setup visual tanpa menulis satu baris kode" },
    {
      title: "Mudah dikustomisasi",
      description: "Sesuaikan respon dan perilaku AI kapan saja",
    },
    {
      title: "Siap digunakan",
      description: "Langsung aktif dan melayani pelanggan dalam hitungan menit",
    },
  ],
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
        { name: "WhatsApp Call AI", icon: "PhoneCall", href: "#produk" },
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
    title: "WhatsApp Call AI",
    description:
      "Setiap telepon dirangkum AI, poin penting dan langkah berikutnya, otomatis.",
    linkText: "Jelajahi fitur →",
    href: "#produk",
    trustText: "Dipercaya 3.000+ bisnis di Indonesia",
  },
  bottomLink: { label: "Lihat semua fitur →", href: "#produk" },
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

