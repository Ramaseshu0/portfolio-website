import { ArrowUpRight, Github } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const projects = [
  { title: "Healthcare Admissions Analytics", type: "Data Engineering", metric: "100K+ patient records", text: "An OLTP-to-OLAP platform with 3NF and star schemas, orchestrated transformations, and advanced no-show analysis.", tech: ["PostgreSQL", "Python", "dbt", "Airflow", "Docker"], href: "https://github.com/Ramaseshu0/Healthcare-Executive-Dashboard" },
  { title: "E-Commerce Retail Analytics", type: "Database Engineering", metric: "~60% faster queries", text: "A containerized ETL and analytics database processing ~100K orders and ~3M geolocation records with RFM segmentation.", tech: ["Python", "Pandas", "PostgreSQL", "SQLAlchemy", "Docker"], href: "https://github.com/Ramaseshu0/E-Commerce-Retail-Analytics-Database-Project" },
  { title: "360° Enterprise Performance", type: "Business Intelligence", metric: "Executive KPI system", text: "An interactive performance dashboard connecting sales, margin, customer, product, and regional signals for decision-makers.", tech: ["Tableau", "Calculated Fields", "Data Storytelling"], href: "https://github.com/Ramaseshu0/360-Enterprise-Performance-Analytics-Superstore-Tableau" },
  { title: "Bookshop 360° Intelligence", type: "Business Intelligence", metric: "What-if analysis", text: "A multi-stakeholder BI experience covering pricing, marketing ROI, inventory, licensing, and portfolio investment.", tech: ["Tableau", "KPI Design", "Parameters", "Analytics"], href: "https://github.com/Ramaseshu0/Bookshop-360-Business-Intelligence-Tableau-Project" },
  { title: "Heart Disease Risk Prediction", type: "Machine Learning", metric: "5 models compared", text: "An end-to-end clinical risk pipeline with tuned classifiers and interpretable feature importance across 10+ attributes.", tech: ["Python", "XGBoost", "Random Forest", "GridSearchCV"], href: "https://github.com/Ramaseshu0/Heart-Disease-Risk-Prediction" },
  { title: "Corporate Financial Performance", type: "Financial Analytics", metric: "Full-statement analysis", text: "A Tableau analysis of profitability, liquidity, leverage, cash flow, valuation, and market performance over time.", tech: ["Tableau", "Financial Ratios", "Time Series"], href: "https://github.com/Ramaseshu0/Financial-Performance-Analysis-Tableau" },
];

export function Projects() {
  return <section id="projects" className="py-20 md:py-28"><div className="mx-auto max-w-6xl px-6">
    <SectionHeading eyebrow="04 / Selected work" title="Systems that connect data to decisions." description="A focused selection spanning pipelines, databases, machine learning, and business intelligence." />
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">{projects.map((project, i) => <ProjectCard key={project.title} {...project} index={i + 1} delay={i * 50} />)}</div>
  </div></section>;
}

function ProjectCard({ title, type, metric, text, tech, href, index, delay }: (typeof projects)[number] & { index: number; delay: number }) {
  const ref = useReveal<HTMLAnchorElement>();
  return <a ref={ref} href={href} target="_blank" rel="noreferrer" style={{ transitionDelay: `${delay}ms` }} className="reveal group flex min-h-80 flex-col bg-surface p-7 transition hover:bg-accent/35 md:p-9">
    <div className="flex justify-between font-mono text-xs text-muted-foreground"><span>0{index}</span><span className="text-primary">{type}</span></div>
    <h3 className="mt-8 max-w-md text-2xl font-bold leading-tight">{title}</h3><p className="mt-3 font-mono text-sm text-primary">{metric}</p><p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
    <div className="mt-6 flex flex-wrap gap-2">{tech.map(item => <span key={item} className="border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">{item}</span>)}</div>
    <div className="mt-7 flex items-center justify-between border-t border-border pt-5 text-sm font-semibold"><span className="flex items-center gap-2"><Github className="h-4 w-4" /> View repository</span><ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
  </a>;
}