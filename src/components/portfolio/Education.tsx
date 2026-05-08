import { GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    school: "University at Buffalo",
    degree: "M.S. in Engineering Science, Data Science",
    period: "2026 — Present",
    detail: "Buffalo, NY · GPA 3.5 / 4.0",
  },
  {
    school: "Amrita University",
    degree: "B.Tech in Electronics & Communication Engineering",
    period: "2017 — 2021",
    detail: "Bangalore, India",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="05 — Education" title="Foundations." />

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <EduCard key={it.school} {...it} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EduCard({
  school,
  degree,
  period,
  detail,
  delay,
}: (typeof items)[number] & { delay: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal rounded-xl border border-border bg-surface/60 backdrop-blur p-6 hover:border-primary/40 transition"
    >
      <div className="flex items-start gap-4">
        <div className="grid place-items-center h-10 w-10 rounded-lg bg-gradient-primary text-primary-foreground shrink-0">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold">{school}</h3>
            <span className="font-mono text-xs text-primary">{period}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{degree}</p>
          <p className="text-xs text-muted-foreground mt-2 font-mono">{detail}</p>
        </div>
      </div>
    </div>
  );
}
