import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={cn("reveal mb-12 max-w-2xl", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
