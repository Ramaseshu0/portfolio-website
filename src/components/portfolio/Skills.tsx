import { Code2, Database, Cloud, Brain, BarChart3, Wrench } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "Java", "C", "R", "SQL"],
  },
  {
    icon: Cloud,
    title: "Data Engineering & ETL",
    items: ["AWS (S3, EC2, SQS)", "Informatica PowerCenter", "Reltio MDM", "dbt", "AutoSys", "ETL/ELT Pipelines"],
  },
  {
    icon: Database,
    title: "Databases & Warehousing",
    items: ["PostgreSQL", "MySQL", "Oracle", "Teradata", "Snowflake", "Star Schema", "Data Modeling"],
  },
  {
    icon: Brain,
    title: "Big Data & ML",
    items: ["Apache Spark", "PySpark", "scikit-learn", "XGBoost", "Random Forest", "Logistic Regression", "ROC-AUC"],
  },
  {
    icon: BarChart3,
    title: "Visualization & BI",
    items: ["Tableau", "Power BI", "Streamlit", "Matplotlib", "Seaborn", "Data Storytelling"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    items: ["Docker", "Git", "REST APIs", "Postman", "JSON", "Excel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 — Skills"
          title="The stack I reach for."
          description="From raw ingestion to ML and dashboards — production-grade tools across the full data lifecycle."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <SkillCard key={g.title} {...g} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon: Icon,
  title,
  items,
  delay,
}: {
  icon: typeof Code2;
  title: string;
  items: string[];
  delay: number;
}) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group rounded-xl border border-border bg-surface/60 backdrop-blur p-6 hover:border-primary/40 hover:shadow-glow transition"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="grid place-items-center h-10 w-10 rounded-lg bg-gradient-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/40 border border-border text-muted-foreground group-hover:text-foreground transition"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
