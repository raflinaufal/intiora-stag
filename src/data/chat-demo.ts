export type MessageType =
  | "customer"
  | "ai"
  | "typing"
  | "system"
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
  | ProductCardMessage
  | OrderCardMessage
  | ShippingCardMessage
  | SuccessCardMessage;

export interface ChatAnimationStep {
  /** Delay in milliseconds before executing this step */
  delay: number;
  /** Action to perform */
  action: "add-message" | "show-typing" | "hide-typing";
  /** The message object when action is 'add-message' */
  message?: ChatMessageItem;
}

export type DemoTabMode = "lead" | "service";

// ============================================================================
// LEAD GENERATION FLOW
// ============================================================================
export const LEAD_GEN_STEPS: ChatAnimationStep[] = [
  // 1. Customer initiates chat
  {
    delay: 600,
    action: "add-message",
    message: {
      id: "lead-1",
      type: "customer",
      text: "Halo, saya tertarik collagen dan biotin. Bisa dibantu?",
      timestamp: "10:14",
    },
  },
  // 2. AI typing indicator
  {
    delay: 900,
    action: "show-typing",
  },
  // 3. AI responds
  {
    delay: 1400,
    action: "add-message",
    message: {
      id: "lead-2",
      type: "ai",
      text: "Tentu bisa. Collagen dan biotin tersedia. Boleh saya tahu kebutuhan utamanya?",
      timestamp: "10:14",
      showAvatar: true,
    },
  },
  // 4. Customer clarifies
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "lead-3",
      type: "customer",
      text: "Saya cari untuk perawatan rambut.",
      timestamp: "10:15",
    },
  },
  // 5. AI typing indicator
  {
    delay: 800,
    action: "show-typing",
  },
  // 6. AI recommendation text
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "lead-4",
      type: "ai",
      text: "Siap. Saya rekomendasikan paket Collagen + Biotin yang paling sesuai untuk kebutuhan tersebut.",
      timestamp: "10:15",
      showAvatar: true,
    },
  },
  // 7. Product Card
  {
    delay: 1000,
    action: "add-message",
    message: {
      id: "lead-5",
      type: "product-card",
      title: "Collagen + Biotin Bundle",
      description: "Formula premium kekuatan akar rambut & elastisitas kulit.",
      price: "Rp 349.000",
      badge: "Rekomendasi AI",
      ctaText: "Pilih Produk",
      timestamp: "10:15",
    },
  },
  // 8. Customer orders
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "lead-6",
      type: "customer",
      text: "Saya ambil 1. Kirim ke Jakarta ya.",
      timestamp: "10:16",
    },
  },
  // 9. AI typing indicator
  {
    delay: 800,
    action: "show-typing",
  },
  // 10. AI confirmation text
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "lead-7",
      type: "ai",
      text: "Siap. Pesanan sudah saya siapkan.",
      timestamp: "10:16",
      showAvatar: true,
    },
  },
  // 11. System CRM indicator
  {
    delay: 800,
    action: "add-message",
    message: {
      id: "lead-8",
      type: "system",
      text: "Pesanan tersimpan di CRM",
    },
  },
  // 12. Order Summary Card
  {
    delay: 1000,
    action: "add-message",
    message: {
      id: "lead-9",
      type: "order-card",
      item: "Collagen + Biotin Bundle",
      qty: 1,
      delivery: "Jakarta",
      total: "Rp 349.000",
      timestamp: "10:16",
    },
  },
  // 13. AI asks about payment link
  {
    delay: 1000,
    action: "add-message",
    message: {
      id: "lead-10",
      type: "ai",
      text: "Link pembayaran sudah dibuat. Mau saya kirim sekarang?",
      timestamp: "10:16",
      showAvatar: true,
    },
  },
  // 14. Customer confirms
  {
    delay: 1000,
    action: "add-message",
    message: {
      id: "lead-11",
      type: "customer",
      text: "Ya, kirim.",
      timestamp: "10:17",
    },
  },
  // 15. AI typing
  {
    delay: 700,
    action: "show-typing",
  },
  // 16. AI sends link
  {
    delay: 1100,
    action: "add-message",
    message: {
      id: "lead-12",
      type: "ai",
      text: "Link pembayaran sudah dikirim.",
      timestamp: "10:17",
      showAvatar: true,
    },
  },
  // 17. Final Order Success Card
  {
    delay: 1000,
    action: "add-message",
    message: {
      id: "lead-13",
      type: "success-card",
      title: "Order Berhasil",
      invoice: "INV-20260910-00124",
      badge: "Link Pembayaran Terkirim",
      buttonText: "Lihat Pesanan",
      timestamp: "10:17",
    },
  },
];

// ============================================================================
// CUSTOMER SERVICE FLOW
// ============================================================================
export const CUSTOMER_SERVICE_STEPS: ChatAnimationStep[] = [
  // 1. Customer asks about order
  {
    delay: 600,
    action: "add-message",
    message: {
      id: "cs-1",
      type: "customer",
      text: "Halo, saya mau cek status pesanan INV-20260910-00124.",
      timestamp: "14:22",
    },
  },
  // 2. AI typing
  {
    delay: 800,
    action: "show-typing",
  },
  // 3. AI responds
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "cs-2",
      type: "ai",
      text: "Tentu, saya bantu cek status pesanannya.",
      timestamp: "14:22",
      showAvatar: true,
    },
  },
  // 4. System checking indicator
  {
    delay: 800,
    action: "add-message",
    message: {
      id: "cs-3",
      type: "system",
      text: "Mengecek data pesanan...",
    },
  },
  // 5. AI updates customer
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "cs-4",
      type: "ai",
      text: "Pesanan Anda sudah diproses dan sedang disiapkan untuk pengiriman.",
      timestamp: "14:23",
      showAvatar: true,
    },
  },
  // 6. Customer asks for tracking number
  {
    delay: 1200,
    action: "add-message",
    message: {
      id: "cs-5",
      type: "customer",
      text: "Boleh sekalian kirim nomor resinya?",
      timestamp: "14:23",
    },
  },
  // 7. AI typing
  {
    delay: 800,
    action: "show-typing",
  },
  // 8. AI sends tracking
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "cs-6",
      type: "ai",
      text: "Tentu. Nomor resi Anda JKT24091872 dan paket sudah dalam perjalanan.",
      timestamp: "14:23",
      showAvatar: true,
    },
  },
  // 9. Shipping Status Card
  {
    delay: 1000,
    action: "add-message",
    message: {
      id: "cs-7",
      type: "shipping-card",
      title: "Status Pengiriman",
      tracking: "JKT24091872",
      status: "Sedang Dikirim",
      courier: "JNE Express",
      estimate: "Estimasi tiba besok",
      buttonText: "Lihat Detail",
      timestamp: "14:23",
    },
  },
  // 10. Customer follows up
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "cs-8",
      type: "customer",
      text: "Kalau besok belum sampai bagaimana?",
      timestamp: "14:24",
    },
  },
  // 11. AI typing
  {
    delay: 800,
    action: "show-typing",
  },
  // 12. AI reassures
  {
    delay: 1300,
    action: "add-message",
    message: {
      id: "cs-9",
      type: "ai",
      text: "Saya bisa bantu pantau status pengiriman dan lanjutkan ke tim support jika ada kendala.",
      timestamp: "14:24",
      showAvatar: true,
    },
  },
  // 13. System resolution indicator
  {
    delay: 800,
    action: "add-message",
    message: {
      id: "cs-10",
      type: "system",
      text: "Permintaan terselesaikan",
    },
  },
];
