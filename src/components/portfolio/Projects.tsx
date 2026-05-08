import { Github, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Healthcare Admissions Analytics",
    tag: "End-to-End Data Engineering",
    description:
      "Built an end-to-end OLTP→OLAP healthcare pipeline with PostgreSQL, Python, dbt, and Docker to analyze patient appointment no-show behavior. Designed normalized + star schemas and shipped a Streamlit dashboard for non-technical users.",
    tech: ["PostgreSQL", "Python", "dbt", "Docker", "Streamlit"],
    href: "https://github.com/Ramaseshu0",
  },
  {
    title: "Early Detection of Type 2 Diabetes",
    tag: "Machine Learning",
    description:
      "Trained Logistic Regression, Random Forest, and XGBoost on a 253K-record healthcare dataset, hitting 81% accuracy with XGBoost. Used ROC-AUC (0.86) and PR-AUC to handle imbalance and reduce false negatives.",
    tech: ["Python", "scikit-learn", "XGBoost", "ROC-AUC"],
    href: "https://github.com/Ramaseshu0",
  },
  {
    title: "Cardiovascular Disease ML",
    tag: "Machine Learning",
    description:
      "Built and tuned ensemble models reaching ROC-AUC 0.88 on structured clinical data. Applied feature scaling, selection, and cross-validation to surface the most influential clinical risk factors.",
    tech: ["Python", "Random Forest", "XGBoost", "Feature Engineering"],
    href: "https://github.com/Ramaseshu0",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work."
          description="Hands-on projects across data engineering, analytics, and applied machine learning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  tag,
  description,
  tech,
  href,
  delay,
}: (typeof projects)[number] & { delay: number }) {
  const ref = useReveal();
  return (
    <a
      ref={ref as never}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group relative flex flex-col rounded-xl border border-border bg-surface/60 backdrop-blur p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="font-mono text-xs uppercase tracking-wider text-primary">
          {tag}
        </span>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/40 border border-border text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition">
        <Github className="h-4 w-4" /> View on GitHub
      </div>
    </a>
  );
}
