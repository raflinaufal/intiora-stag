import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap",
        // Sizes
        size === "sm" && "h-9 px-4 text-sm gap-1.5",
        size === "md" && "h-11 px-6 text-sm gap-2",
        size === "lg" && "h-[52px] px-8 text-base gap-2.5",
        // Variants
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-blue-700 shadow-sm hover:shadow-md",
        variant === "secondary" &&
          "bg-white text-foreground border border-border hover:bg-muted hover:border-muted-foreground/20",
        variant === "ghost" &&
          "text-foreground hover:bg-muted",
        variant === "outline" &&
          "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
