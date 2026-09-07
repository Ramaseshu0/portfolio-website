import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const roles = [
  {
    period: "JAN — MAY 2026", role: "Data Science Cohort", company: "University at Buffalo · QAS.AI", location: "Buffalo, NY",
    summary: "Built a privacy-preserving clinical decision-support platform for congestive heart failure.",
    points: ["Processed 546K+ MIMIC-IV admissions into a reproducible 137K-visit corpus, reducing preparation time by ~60%.", "Trained 11 multi-label LightGBM models on 108 temporal features, reaching 0.78–0.98 AUROC.", "Built an auditable GDMT orchestration engine spanning 6 drug classes and 4 titration strategies."],
    stack: ["Python", "LightGBM", "FastAPI", "ChromaDB", "RAG", "MCP", "TypeScript"], link: "https://qas.ai/"
  },
  {
    period: "OCT 2023 — JAN 2025", role: "Senior Data Engineer", company: "Cognizant Technology Solutions · AbbVie", location: "Hyderabad, India",
    summary: "Led enterprise data integration and analytics work across a healthcare master-data ecosystem.",
    points: ["Optimized Reltio Cloud MDM for 9M+ HCP records, cutting processing latency by 25% with 98%+ data accuracy.", "Reduced production downtime by 30% through AutoSys optimization, dependency management, and proactive failure detection.", "Accelerated sprint delivery by ~20% through reusable data objects, validation rules, and technical specifications."],
    stack: ["Reltio MDM", "IICS", "Informatica", "AWS", "Snowflake", "Oracle", "Tableau"]
  },
  {
    period: "APR 2021 — OCT 2023", role: "Junior Data Engineer", company: "Cognizant Technology Solutions · AbbVie", location: "Hyderabad, India",
    summary: "Developed, monitored, and validated large-scale healthcare ingestion workflows.",
    points: ["Maintained ETL/ELT ingestion across Reltio, AWS S3/SQS, Oracle, and Teradata.", "Implemented 30+ Reltio LOV configurations and historical reprocessing workflows.", "Built Tableau and Power BI reporting for data quality, pipeline performance, and operational KPIs."],
    stack: ["Java", "SQL", "AWS", "Teradata", "AutoSys", "Power BI"]
  }
];

export function Experience() {
  return <section id="experience" className="border-y border-border bg-secondary py-20 md:py-28"><div className="mx-auto max-w-6xl px-6">
    <SectionHeading eyebrow="03 / Experience" title="Built in production. Proven by outcomes." />
    <div className="relative mx-auto max-w-5xl before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-primary md:before:left-1/2">{roles.map((role, i) => <Role key={role.role} {...role} index={i} delay={i * 70} />)}</div>
  </div></section>;
}

function Role({ period, role, company, location, summary, points, stack, link, delay, index }: (typeof roles)[number] & { delay: number; index: number }) {
  const ref = useReveal();
  const left = index % 2 === 1;
  return <article ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal relative grid py-9 pl-11 md:grid-cols-2 md:pl-0 ${left ? "" : ""}`}>
    <span className="absolute left-[7px] top-12 h-3 w-3 border-2 border-secondary bg-primary md:left-1/2 md:-translate-x-1/2" />
    <div className={`${left ? "md:col-start-1 md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"}`}>
      <p className="font-mono text-xs text-primary">{period}</p><p className="mt-2 text-sm text-muted-foreground">{location}</p>
      <h3 className="mt-4 text-2xl font-bold">{role}</h3><p className="mt-1 font-medium text-muted-foreground">{company} {link && <a href={link} target="_blank" rel="noreferrer" aria-label="Visit QAS.AI" className="inline-flex text-primary"><ArrowUpRight className="h-4 w-4" /></a>}</p><p className="mt-4 leading-relaxed">{summary}</p>
      <ul className="mt-5 grid gap-3">{points.map(point => <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />{point}</li>)}</ul>
      <div className={`mt-6 flex flex-wrap gap-x-4 gap-y-2 ${left ? "md:justify-end" : ""}`}>{stack.map(item => <span key={item} className="font-mono text-xs text-primary">{item}</span>)}</div>
    </div>
  </article>;
}