import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  ["Languages & analysis", "Python · SQL · Java · Pandas · NumPy · Excel · Statistical Analysis"],
  ["Data engineering", "ETL/ELT · Informatica PowerCenter · IICS · Reltio MDM · dbt · Airflow · Spark · PySpark"],
  ["Data platforms", "Snowflake · PostgreSQL · Oracle · Teradata · MySQL · MongoDB · Data Modeling · Star Schema"],
  ["Cloud & delivery", "AWS S3/SQS/EC2 · Azure · Docker · Git · GitHub Actions · AutoSys · REST APIs"],
  ["Analytics & BI", "Tableau · Power BI · Streamlit · KPI Dashboards · Data Visualization · Data Storytelling"],
  ["Applied AI", "LightGBM · XGBoost · scikit-learn · RAG · ChromaDB · SHAP · FastAPI · MCP"],
];

export function Skills() {
  return <section id="skills" className="py-20 md:py-28"><div className="mx-auto max-w-6xl px-6">
    <SectionHeading eyebrow="02 / Capabilities" title="From raw source to decision-ready data." />
    <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">{groups.map(([title, items], i) => <Skill key={title} title={title} items={items} index={i + 1} />)}</div>
  </div></section>;
}
function Skill({ title, items, index }: { title: string; items: string; index: number }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal grid grid-cols-[2.25rem_1fr] gap-4 border-t border-border py-6"><span className="font-mono text-xs text-primary">0{index}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{items}</p></div></div>;
}