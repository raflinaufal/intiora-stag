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
  heading: "Satu sistem untuk semua urusan jualan & chat pelanggan",
  description:
    "Dari balas chat ribuan pembeli, kirim promo WhatsApp, sampai terima pesanan dan cek stok — semuanya beres otomatis tanpa admin harus buka banyak aplikasi.",
  items: [
    {
      id: "ai-support",
      name: "Semua Chat & Asisten 24 Jam",
      headline: "Balas chat pelanggan dalam hitungan detik, siang maupun tengah malam.",
      description:
        "Satukan pesan WhatsApp, Instagram DM, dan chat website dalam satu layar. Asisten pintar siap menjawab tanya jawab produk, harga, dan jam operasional dengan bahasa ramah seperti admin terbaik Anda.",
      badges: [
        "1 Layar untuk semua chat",
        "Balas cepat 24 jam nonstop",
        "Oper ke admin jika butuh",
      ],
      subFeatures: [
        "WhatsApp & Instagram kumpul jadi satu inbox",
        "Jawaban akurat sesuai katalog & info tokomu",
        "Bagi chat ke staf admin tanpa berebutan",
      ],
      ctaLabel: "Lihat Demo Balas Chat",
      ctaHref: "#demo",
    },
    {
      id: "crm-marketing",
      name: "Database Kontak & Promo WhatsApp",
      headline: "Kirim pesan promo ke ribuan pelanggan sekaligus langsung ke WhatsApp.",
      description:
        "Nomor HP dan riwayat belanja pelanggan tersimpan rapi otomatis. Kirim penawaran khusus ke pelanggan setia, ajak pelanggan lama repeat order, dan pantau langsung berapa banyak yang membeli.",
      badges: [
        "Kontak tersimpan otomatis",
        "Broadcast WhatsApp resmi aman",
        "Lacak omset dari promo",
      ],
      subFeatures: [
        "Buku kontak & riwayat belanja pelanggan otomatis",
        "Kirim promo terjadwal ke kelompok pelanggan tertentu",
        "Laporan penjualan nyata dari tiap pesan promo",
      ],
      ctaLabel: "Lihat Contoh Pesan Promo",
      ctaHref: "#demo",
    },
    {
      id: "commerce-inventory",
      name: "Katalog, Pesanan & Cek Stok",
      headline: "Pelanggan bisa langsung pesan di chat, stok otomatis berkurang.",
      description:
        "Kirim katalog produk bergambar langsung di obrolan. Pembeli bisa langsung checkout, bayar pakai QRIS atau transfer, dan nota belanja terkirim otomatis tanpa admin perlu rekap manual di buku.",
      badges: [
        "Buat pesanan langsung di chat",
        "Bayar mudah via QRIS & Transfer",
        "Stok toko & gudang selalu pas",
      ],
      subFeatures: [
        "Kirim daftar produk & diskon langsung di chat",
        "Kirim nota/invoice PDF otomatis berlogo bisnismu",
        "Pantau sisa stok toko & gudang secara otomatis",
      ],
      ctaLabel: "Lihat Cara Pemesanan",
      ctaHref: "#demo",
    },
    {
      id: "workflow-developer",
      name: "Otomasi Kerja & Laporan Bisnis",
      headline: "Pekerjaan rutin beres sendiri, bos tinggal pantau laporan omset.",
      description:
        "Atur pengingat otomatis jika pembeli belum bayar, bagi chat baru ke admin yang sedang santai, dan terima ringkasan penjualan harian langsung di dashboard yang sangat mudah dipahami.",
      badges: [
        "Pengingat bayar otomatis",
        "Bagi tugas admin otomatis",
        "Grafik omset harian jelas",
      ],
      subFeatures: [
        "Follow-up otomatis ke pembeli yang belum transfer",
        "Atur jadwal shift kerja & hak akses staf admin",
        "Pantau admin mana yang paling rajin melayani",
      ],
      ctaLabel: "Lihat Otomasi Tim",
      ctaHref: "#demo",
    },
  ],
  ecosystemFeatures: [
    {
      id: "omnichannel",
      title: "1 Kotak Masuk Semua Chat",
      description:
        "Balas chat WhatsApp, DM Instagram, dan website dalam satu tempat tanpa perlu gonta-ganti banyak HP.",
      category: "Layanan",
    },
    {
      id: "ai-support",
      title: "Asisten Pintar 24 Jam",
      description:
        "Bantu jawab pertanyaan harga, cara pesan, dan info produk seketika meski admin sedang istirahat.",
      category: "Layanan",
    },
    {
      id: "crm-360",
      title: "Buku Kontak Pelanggan",
      description:
        "Catat nama, alamat, nomor WhatsApp, dan riwayat belanja pembeli secara otomatis tanpa rekap manual.",
      category: "Database",
    },
    {
      id: "commerce",
      title: "Kasir & Pesanan di Chat",
      description:
        "Buat tagihan belanja, hitung total pesanan, dan terima pembayaran langsung di dalam obrolan chat.",
      category: "Penjualan",
    },
    {
      id: "inventory",
      title: "Pantau Sisa Stok",
      description:
        "Stok barang berkurang otomatis tiap ada penjualan, ada peringatan dini saat stok barang hampir habis.",
      category: "Stok",
    },
    {
      id: "marketing",
      title: "Kirim Promo WhatsApp",
      description:
        "Broadcast info diskon, promo tanggal kembar, atau produk baru ke ribuan pelanggan dalam sekali klik.",
      category: "Promosi",
    },
    {
      id: "workflow",
      title: "Follow-Up Otomatis",
      description:
        "Kirim pengingat ramah ke pembeli yang belum transfer atau belum konfirmasi pesanan secara otomatis.",
      category: "Otomasi",
    },
    {
      id: "collaboration",
      title: "Kerjasama Tim Admin",
      description:
        "Tinggalkan catatan internal di obrolan pelanggan dan oper chat ke rekan tim tanpa terlihat oleh pembeli.",
      category: "Tim",
    },
    {
      id: "reports",
      title: "Laporan Omset & Chat",
      description:
        "Lihat grafik penjualan, jam paling ramai chat, dan jumlah pesan yang berhasil jadi transaksi nyata.",
      category: "Laporan",
    },
    {
      id: "finance",
      title: "Nota & Kwitansi Otomatis",
      description:
        "Terbitkan nota dan kwitansi PDF berlogo toko Anda langsung ke chat pembeli sebagai bukti transaksi sah.",
      category: "Keuangan",
    },
    {
      id: "hr",
      title: "Kelola Staf & Performa",
      description:
        "Atur jadwal kerja admin, batasi akses data penting, dan ketahui admin mana yang paling cepat melayani.",
      category: "Tim",
    },
    {
      id: "developer",
      title: "Sambung ke Aplikasi Lain",
      description:
        "Mudah disambungkan ke Google Sheets, toko online, kurir ekspedisi, atau sistem kasir yang sudah Anda punya.",
      category: "Koneksi",
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

