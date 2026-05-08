import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "9M+", label: "HCP records engineered" },
  { value: "25%", label: "Lower data processing latency" },
  { value: "30%", label: "Reduction in system downtime" },
  { value: "81%", label: "ML accuracy (XGBoost)" },
];

export function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 — About"
          title="Engineering trustworthy data, end-to-end."
        />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div ref={ref} className="reveal md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a data engineer turned data scientist who's spent the last four
              years inside healthcare data — building cloud MDM ecosystems, ETL
              pipelines, and analytics platforms for{" "}
              <span className="text-foreground font-medium">AbbVie</span> at
              Cognizant. I care about pipelines that don't break at 3am and
              dashboards that actually answer the question.
            </p>
            <p>
              Now at the{" "}
              <span className="text-foreground font-medium">
                University at Buffalo
              </span>
              , I'm deepening that foundation with an MS in Data Science — pairing
              production-grade engineering with modern ML to ship systems that are
              both reliable and intelligent.
            </p>
            <p>
              I work fluently across <span className="font-mono text-primary">AWS</span>,{" "}
              <span className="font-mono text-primary">Informatica</span>,{" "}
              <span className="font-mono text-primary">Reltio</span>,{" "}
              <span className="font-mono text-primary">Snowflake</span>,{" "}
              <span className="font-mono text-primary">PySpark</span>, and{" "}
              <span className="font-mono text-primary">Python</span>.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal rounded-xl border border-border bg-surface/60 backdrop-blur p-5 hover:border-primary/40 transition"
    >
      <div className="text-3xl md:text-4xl font-bold text-gradient font-mono">
        {value}
      </div>
      <div className="mt-2 text-xs text-muted-foreground leading-snug">{label}</div>
    </div>
  );
}
