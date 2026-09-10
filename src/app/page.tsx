export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-md p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
        <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
          Bedah Per Section &bull; Tahap 1: Navbar
        </span>
        <h2 className="text-lg font-bold text-slate-800 mb-2">
          Navbar Selesai
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Silakan cek navigasi di atas: Logo Intiora, dropdown Mega Menu <strong>Fitur ⌵</strong>, dropdown Mega Menu <strong>Solusi ⌵</strong>, tombol <strong>WhatsApp Kami</strong>, dan <strong>Coba Gratis</strong>.
        </p>
      </div>
    </div>
  );
}
