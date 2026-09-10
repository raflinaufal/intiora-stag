import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className,
  titleClassName,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "max-w-3xl", centered && "mx-auto", className)}>
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-bold tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[44px]",
          titleClassName
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg md:mt-5">
          {description}
        </p>
      )}
    </div>
  );
}
