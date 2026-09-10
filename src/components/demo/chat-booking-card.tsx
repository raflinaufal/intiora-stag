import { CalendarCheck, Stethoscope, MapPin, CheckCircle2 } from "lucide-react";
import { BookingCardMessage } from "@/data/chat-demo";

interface ChatBookingCardProps {
  card: BookingCardMessage;
}

export function ChatBookingCard({ card }: ChatBookingCardProps) {
  return (
    <div className="w-full max-w-[290px] sm:max-w-[320px] rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden text-left animate-chat-fade-up">
      {/* Top Header */}
      <div className="bg-emerald-50 px-3.5 py-2 border-b border-emerald-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
          <CalendarCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>Bukti Reservasi Konsultasi</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
          {card.status}
        </span>
      </div>

      {/* Details */}
      <div className="p-3.5 space-y-2.5 text-xs">
        <div className="flex items-start gap-2">
          <Stethoscope className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="block text-[10px] text-slate-400 font-medium">Dokter Spesialis</span>
            <span className="font-bold text-slate-900 text-xs">{card.doctor}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
          <div>
            <span className="text-[10px] text-slate-400 block">Pasien</span>
            <span className="font-semibold text-slate-800">{card.patient}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block">Waktu</span>
            <span className="font-semibold text-blue-600">{card.schedule}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-500">
          <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
          <span>{card.location}</span>
        </div>

        <div className="mt-1 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50/60 p-1.5 rounded-lg">
          <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
          <span>Nomor Antrean #04 dikirim via WhatsApp</span>
        </div>
      </div>
    </div>
  );
}
