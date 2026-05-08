import { Briefcase } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const bullets = [
  "Engineered a Reltio Cloud MDM ecosystem for 9M+ HCP records, cutting data processing latency by 25% and achieving 100% data accuracy via automated AWS + Informatica integrations.",
  "Architected end-to-end ingestion workflows using JSON payloads, Reltio, AWS, Informatica PowerCenter, Java, Oracle SQL, Teradata, and Postman for large-scale healthcare data ops.",
  "Optimized real-time data workflows with AutoSys, reducing system downtime by 30% and proactively resolving high-priority incidents.",
  "Implemented 30+ List of Values (LOV) configurations in Reltio MDM, reducing data inconsistency by 15% across 9M+ HCP records.",
  "Built interactive Tableau dashboards on enterprise healthcare data to enable executive-level decision-making and performance tracking.",
];

const stack = ["AWS", "Informatica", "Reltio", "SQL", "Java", "Teradata", "Snowflake", "Power BI"];

export function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — Experience"
          title="Where I've shipped."
        />

        <div ref={ref} className="reveal relative">
          {/* timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

          <article className="relative pl-14">
            <span className="absolute left-0 top-1 grid place-items-center h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
              <Briefcase className="h-4 w-4" />
            </span>

            <div className="rounded-xl border border-border bg-surface/60 backdrop-blur p-6 md:p-8 hover:border-primary/40 transition">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-xl font-semibold">Data Analyst</h3>
                <span className="font-mono text-xs text-primary">2021 — 2025</span>
              </div>
              <p className="text-muted-foreground">
                Cognizant Technology Solutions · Hyderabad, India
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Client: <span className="text-foreground">AbbVie</span> (American pharmaceutical company)
              </p>

              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/40 border border-border text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
