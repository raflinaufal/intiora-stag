export type MessageType =
  | "customer"
  | "ai"
  | "typing"
  | "system"
  | "invoice-card"
  | "booking-card"
  | "course-card"
  | "product-card"
  | "order-card"
  | "shipping-card"
  | "success-card";

export interface CustomerMessage {
  id: string;
  type: "customer";
  text: string;
  timestamp: string;
}

export interface AiMessage {
  id: string;
  type: "ai";
  text: string;
  timestamp: string;
  showAvatar?: boolean;
}

export interface TypingMessage {
  id: string;
  type: "typing";
}

export interface SystemMessage {
  id: string;
  type: "system";
  text: string;
}

export interface InvoiceItem {
  name: string;
  qty: number;
  price: string;
}

export interface InvoiceCardMessage {
  id: string;
  type: "invoice-card";
  storeName: string;
  invoiceNo: string;
  customerName: string;
  items: InvoiceItem[];
  shippingFee: string;
  total: string;
  status: "pending" | "paid";
  timestamp?: string;
}

export interface BookingCardMessage {
  id: string;
  type: "booking-card";
  clinicName: string;
  doctor: string;
  patient: string;
  schedule: string;
  location: string;
  status: string;
  timestamp?: string;
}

export interface CourseCardMessage {
  id: string;
  type: "course-card";
  academy: string;
  courseTitle: string;
  duration: string;
  price: string;
  badge: string;
  perks: string[];
  timestamp?: string;
}

export interface ProductCardMessage {
  id: string;
  type: "product-card";
  title: string;
  description: string;
  price: string;
  badge: string;
  ctaText: string;
  timestamp?: string;
}

export interface OrderCardMessage {
  id: string;
  type: "order-card";
  item: string;
  qty: number;
  delivery: string;
  total: string;
  timestamp?: string;
}

export interface ShippingCardMessage {
  id: string;
  type: "shipping-card";
  title: string;
  tracking: string;
  status: string;
  courier: string;
  estimate: string;
  buttonText: string;
  timestamp?: string;
}

export interface SuccessCardMessage {
  id: string;
  type: "success-card";
  title: string;
  invoice: string;
  badge: string;
  buttonText: string;
  timestamp?: string;
}

export type ChatMessageItem =
  | CustomerMessage
  | AiMessage
  | TypingMessage
  | SystemMessage
  | InvoiceCardMessage
  | BookingCardMessage
  | CourseCardMessage
  | ProductCardMessage
  | OrderCardMessage
  | ShippingCardMessage
  | SuccessCardMessage;

export interface ChatAnimationStep {
  delay: number;
  action: "add-message" | "show-typing" | "hide-typing";
  message?: ChatMessageItem;
}

export type DemoTabMode = "lead" | "service";
export type IndustryType = "retail" | "travel" | "clinic" | "education";

export interface IndustryMetadata {
  id: IndustryType;
  label: string;
  shortLabel: string;
  storeName: string;
  category: string;
}

export const INDUSTRIES: IndustryMetadata[] = [
  {
    id: "retail",
    label: "Ritel & E-Commerce",
    shortLabel: "Ritel",
    storeName: "NutriMax Store",
    category: "Online Store · Official",
  },
  {
    id: "travel",
    label: "Travel & Tour",
    shortLabel: "Travel",
    storeName: "Nusantara Travel",
    category: "Tour & Trip Operator",
  },
  {
    id: "clinic",
    label: "Klinik & Kesehatan",
    shortLabel: "Klinik",
    storeName: "Klinik Medika Sehat",
    category: "Layanan Kesehatan & Estetika",
  },
  {
    id: "education",
    label: "Pendidikan & Kursus",
    shortLabel: "Edukasi",
    storeName: "EduSmart Academy",
    category: "Lembaga Pelatihan & Bootcamp",
  },
];

// ============================================================================
// 1. RETAIL & E-COMMERCE SCENARIOS
// ============================================================================
export const RETAIL_LEAD_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "ret-1",
      type: "customer",
      text: "Halo, saya mau pesan Vitamin C 1000mg dan Omega-3. Ada stok?",
      timestamp: "10:14",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "ret-2",
      type: "ai",
      text: "Halo Kak! Kedua produk ready stock. Mau dibantu proses pemesanannya sekarang?",
      timestamp: "10:14",
      showAvatar: true,
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "ret-3",
      type: "customer",
      text: "Iya, Vitamin C 2 botol dan Omega-3 1 botol ya. Kirim ke Jakarta via JNE.",
      timestamp: "10:15",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "ret-4",
      type: "ai",
      text: "Baik Kak, pesanan sudah saya rekap dan invoice pembayaran QRIS otomatis dibuat di bawah:",
      timestamp: "10:15",
      showAvatar: true,
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "ret-sys-1",
      type: "system",
      text: "Pesanan tersimpan di CRM Intiora · Menunggu pembayaran sistem",
    },
  },
  {
    delay: 1000,
    action: "add-message",
    message: {
      id: "ret-inv",
      type: "invoice-card",
      storeName: "NutriMax Store",
      invoiceNo: "INV-2026-0827",
      customerName: "Kak Andi",
      items: [
        { name: "Vitamin C 1000mg (2 botol)", qty: 2, price: "Rp 170.000" },
        { name: "Omega-3 1000mg (1 botol)", qty: 1, price: "Rp 120.000" },
      ],
      shippingFee: "Rp 18.000 (JNE Reguler)",
      total: "Rp 308.000",
      status: "pending",
      timestamp: "10:15",
    },
  },
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "ret-5",
      type: "customer",
      text: "Oke sudah saya bayar via QRIS ya!",
      timestamp: "10:16",
    },
  },
  { delay: 700, action: "show-typing" },
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "ret-6",
      type: "ai",
      text: "Pembayaran berhasil terverifikasi otomatis! Paket segera kami siapkan dan resi akan dikirim ke WhatsApp ini.",
      timestamp: "10:16",
      showAvatar: true,
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "ret-sys-2",
      type: "system",
      text: "Pembayaran terkonfirmasi · CRM Auto-tag: Loyal Customer",
    },
  },
];

export const RETAIL_SERVICE_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "ret-cs-1",
      type: "customer",
      text: "Halo, saya mau cek status resi pesanan INV-2026-0827.",
      timestamp: "14:10",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "ret-cs-2",
      type: "ai",
      text: "Tentu Kak! Paket Anda telah dikirim dan saat ini dalam perjalanan kurir:",
      timestamp: "14:10",
      showAvatar: true,
    },
  },
  {
    delay: 900,
    action: "add-message",
    message: {
      id: "ret-cs-ship",
      type: "shipping-card",
      title: "Status Pengiriman Paket",
      tracking: "JNE8829103829",
      status: "Sedang Dikirim",
      courier: "JNE Express",
      estimate: "Estimasi tiba besok siang",
      buttonText: "Lacak Realtime",
      timestamp: "14:10",
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "ret-cs-3",
      type: "customer",
      text: "Bisa minta nomor kurirnya kalau sudah dekat?",
      timestamp: "14:11",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "ret-cs-4",
      type: "ai",
      text: "Tentu Kak, nomor kurir akan dikirimkan otomatis ke WhatsApp begitu paket masuk ke rute pengantaran terakhir.",
      timestamp: "14:11",
      showAvatar: true,
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "ret-cs-sys",
      type: "system",
      text: "Tiket pertanyaan selesai otomatis",
    },
  },
];

// ============================================================================
// 2. TRAVEL & TOUR SCENARIOS
// ============================================================================
export const TRAVEL_LEAD_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "trv-1",
      type: "customer",
      text: "Info paket Bali 4D3N dong buat 2 orang bulan depan.",
      timestamp: "19:01",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "trv-2",
      type: "ai",
      text: "Seru! Untuk honeymoon, family trip, atau friends trip Kak? Dan budget per orang sekitar berapa?",
      timestamp: "19:02",
      showAvatar: true,
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "trv-3",
      type: "customer",
      text: "Honeymoon, budget sekitar 6 juta per orang.",
      timestamp: "19:05",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "trv-4",
      type: "ai",
      text: "Perfect! Ada Paket Honeymoon Bali 4D3N Rp 5.800.000/orang, include resort bintang 4 Seminyak, private tour, candle dinner, dan breakfast setiap hari.",
      timestamp: "19:06",
      showAvatar: true,
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "trv-sys-1",
      type: "system",
      text: "Paket Honeymoon Bali held · Itinerary terkirim · Penjualan teratribusi ke iklan Meta",
    },
  },
  { delay: 900, action: "show-typing" },
  {
    delay: 1400,
    action: "add-message",
    message: {
      id: "trv-5",
      type: "ai",
      text: "Kak, tambahan populer buat honeymoon: Nusa Penida Day Trip Rp 450.000/pax dan Couples Spa Rp 350.000/pasang. Mau ditambahkan ke paket?",
      timestamp: "22:00",
      showAvatar: true,
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "trv-6",
      type: "customer",
      text: "Tambahin keduanya sekalian!",
      timestamp: "22:07",
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "trv-sys-2",
      type: "system",
      text: "Nusa Penida + Couples Spa +Rp 1.250.000 ditambahkan · Invoice diperbarui · Dikirim ke WhatsApp",
    },
  },
];

export const TRAVEL_SERVICE_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "trv-cs-1",
      type: "customer",
      text: "Halo, mau reschedule jam penjemputan bandara di Bali bisa?",
      timestamp: "11:20",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "trv-cs-2",
      type: "ai",
      text: "Bisa banget Kak! Mohon infokan kode booking dan jam kedatangan penerbangan yang baru.",
      timestamp: "11:20",
      showAvatar: true,
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "trv-cs-3",
      type: "customer",
      text: "Booking TRV-8821, landing mundur jadi jam 16.30 WITA.",
      timestamp: "11:21",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "trv-cs-4",
      type: "ai",
      text: "Siap Kak! Jadwal driver berhasil diubah ke 16.30 WITA. Driver kami akan standby di terminal kedatangan dengan nameboard.",
      timestamp: "11:21",
      showAvatar: true,
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "trv-cs-sys",
      type: "system",
      text: "Jadwal driver diperbarui realtime di sistem armada",
    },
  },
];

// ============================================================================
// 3. CLINIC & HEALTH SCENARIOS
// ============================================================================
export const CLINIC_LEAD_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "cln-1",
      type: "customer",
      text: "Halo, mau tanya jadwal dokter spesialis kulit untuk hari Sabtu ini ada jam berapa?",
      timestamp: "09:30",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "cln-2",
      type: "ai",
      text: "Halo Kak! Untuk Sabtu ini, dr. Sarah, Sp.DV tersedia di sesi pagi (10.00 - 12.00) dan sore (15.00 - 17.00). Mau reservasi di sesi yang mana?",
      timestamp: "09:30",
      showAvatar: true,
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "cln-3",
      type: "customer",
      text: "Mau yang sesi pagi jam 10.00 ya atas nama Rina Maharani.",
      timestamp: "09:31",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "cln-4",
      type: "ai",
      text: "Siap Kak Rina! Reservasi berhasil dikonfirmasi. Berikut tiket bukti reservasi konsultasi Anda:",
      timestamp: "09:31",
      showAvatar: true,
    },
  },
  {
    delay: 900,
    action: "add-message",
    message: {
      id: "cln-card",
      type: "booking-card",
      clinicName: "Klinik Medika Sehat Kemang",
      doctor: "dr. Sarah, Sp.DV (Spesialis Dermatologi)",
      patient: "Rina Maharani",
      schedule: "Sabtu, 14 Sept 2026 · 10:00 WIB",
      location: "Lantai 2, Ruang Poliklinik Kulit",
      status: "Terkonfirmasi",
      timestamp: "09:31",
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "cln-sys",
      type: "system",
      text: "Jadwal tersinkron ke Kalender Dokter · WhatsApp Reminder H-1 aktif",
    },
  },
];

export const CLINIC_SERVICE_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "cln-cs-1",
      type: "customer",
      text: "Halo, apakah hasil tes lab darah saya kemarin sudah keluar?",
      timestamp: "15:00",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "cln-cs-2",
      type: "ai",
      text: "Halo Kak Rina! Hasil tes lab Anda sudah diverifikasi oleh dokter penanggung jawab dan dapat diunduh langsung via portal pasien resmi.",
      timestamp: "15:00",
      showAvatar: true,
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "cln-cs-sys",
      type: "system",
      text: "Dokumen Rekam Medis terenkripsi dikirim ke WhatsApp pasien",
    },
  },
];

// ============================================================================
// 4. EDUCATION & COURSE SCENARIOS
// ============================================================================
export const EDUCATION_LEAD_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "edu-1",
      type: "customer",
      text: "Halo, mau tanya info kelas kursus Data Science & AI untuk pemula.",
      timestamp: "16:40",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "edu-2",
      type: "ai",
      text: "Halo Kak! Program Data Science Bootcamp kami dirancang dari nol hingga mahir dengan bimbingan mentor praktisi. Batch baru mulai awal bulan depan.",
      timestamp: "16:40",
      showAvatar: true,
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "edu-3",
      type: "customer",
      text: "Jadwal belajarnya kapan ya? Ada promo early bird?",
      timestamp: "16:41",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "edu-4",
      type: "ai",
      text: "Ada kelas Weekend (Sabtu-Minggu 09.00-12.00). Promo Early Bird diskon 30% masih tersisa 3 kuota Kak!",
      timestamp: "16:41",
      showAvatar: true,
    },
  },
  {
    delay: 900,
    action: "add-message",
    message: {
      id: "edu-card",
      type: "course-card",
      academy: "EduSmart Academy",
      courseTitle: "Fullstack Data Science & AI Bootcamp",
      duration: "12 Minggu · Weekend Live Class",
      price: "Rp 2.450.000 (Early Bird 30% OFF)",
      badge: "Sisa 3 Slot",
      perks: [
        "1-on-1 Mentoring Praktisi",
        "5 Portfolio Real-World Project",
        "Sertifikat & Rekomendasi Kerja",
      ],
      timestamp: "16:41",
    },
  },
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "edu-5",
      type: "customer",
      text: "Saya mau amankan slot promonya!",
      timestamp: "16:42",
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "edu-sys",
      type: "system",
      text: "Lead masuk ke Pipeline CRM EduSmart · Skor Prospek: High Intent",
    },
  },
];

export const EDUCATION_SERVICE_STEPS: ChatAnimationStep[] = [
  {
    delay: 500,
    action: "add-message",
    message: {
      id: "edu-cs-1",
      type: "customer",
      text: "Halo, rekaman sesi belajar minggu lalu bisa diakses di mana ya?",
      timestamp: "13:15",
    },
  },
  { delay: 800, action: "show-typing" },
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "edu-cs-2",
      type: "ai",
      text: "Halo Kak! Rekaman seluruh sesi dan materi slide sudah tersedia di portal LMS siswa di menu 'Kelas Saya > Batch 12'.",
      timestamp: "13:15",
      showAvatar: true,
    },
  },
  {
    delay: 700,
    action: "add-message",
    message: {
      id: "edu-cs-sys",
      type: "system",
      text: "Link akses materi LMS dikirim otomatis ke akun siswa",
    },
  },
];

export function getScenarioSteps(industry: IndustryType, tab: DemoTabMode): ChatAnimationStep[] {
  switch (industry) {
    case "retail":
      return tab === "lead" ? RETAIL_LEAD_STEPS : RETAIL_SERVICE_STEPS;
    case "travel":
      return tab === "lead" ? TRAVEL_LEAD_STEPS : TRAVEL_SERVICE_STEPS;
    case "clinic":
      return tab === "lead" ? CLINIC_LEAD_STEPS : CLINIC_SERVICE_STEPS;
    case "education":
      return tab === "lead" ? EDUCATION_LEAD_STEPS : EDUCATION_SERVICE_STEPS;
    default:
      return RETAIL_LEAD_STEPS;
  }
}
