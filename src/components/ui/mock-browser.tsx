import { cn } from "@/lib/utils";

interface MockBrowserProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export function MockBrowser({ children, className, url = "app.nexa-ai.id" }: MockBrowserProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-white overflow-hidden",
        "shadow-lg",
        className
      )}
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-4 flex-1">
          <div className="mx-auto max-w-xs rounded-md bg-white border border-border px-3 py-1 text-xs text-muted-foreground text-center">
            {url}
          </div>
        </div>
      </div>
      {/* Browser Content */}
      <div className="bg-slate-50">{children}</div>
    </div>
  );
}
