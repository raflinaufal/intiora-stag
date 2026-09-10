import { cn } from "@/lib/utils";

interface MockPhoneProps {
  children: React.ReactNode;
  className?: string;
}

export function MockPhone({ children, className }: MockPhoneProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] sm:w-[300px] md:w-[320px]",
        className
      )}
    >
      {/* Phone Frame */}
      <div className="rounded-[36px] border-[6px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="relative bg-slate-800 flex justify-center pt-2 pb-1">
          <div className="h-5 w-28 rounded-full bg-slate-900" />
        </div>
        {/* Screen */}
        <div className="bg-white overflow-hidden">
          {children}
        </div>
        {/* Bottom bar */}
        <div className="bg-slate-800 flex justify-center py-2">
          <div className="h-1 w-28 rounded-full bg-slate-600" />
        </div>
      </div>
    </div>
  );
}
