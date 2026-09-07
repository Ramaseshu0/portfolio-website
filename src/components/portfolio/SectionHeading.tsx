import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, className }: { eyebrow: string; title: string; description?: string; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={cn("reveal mb-11 grid gap-4 md:grid-cols-[0.35fr_1fr]", className)}>
    <p className="pt-2 font-mono text-xs uppercase text-primary">{eyebrow}</p>
    <div><h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>{description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}</div>
  </div>;
}