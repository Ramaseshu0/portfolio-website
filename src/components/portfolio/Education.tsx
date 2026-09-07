import { Award, GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const education = [
  { school: "University at Buffalo", degree: "M.S. Engineering Science — Data Science", period: "JAN 2025 — MAY 2026", detail: "Buffalo, NY · GPA 3.6 / 4.0" },
  { school: "Amrita University", degree: "B.Tech — Electronics & Communication Engineering", period: "AUG 2017 — MAY 2021", detail: "Bangalore, India" },
];
const certifications = ["Microsoft Certified: Power BI Data Analyst Associate · July 2026", "Microsoft Certified: Azure Databricks Data Engineer Associate · Aug 2026", "Informatica MDM Certification · Aug 2023", "Reltio MDM Configuration Specialist · Dec 2021"];

export function Education() {
  const ref = useReveal();
  return <section id="education" className="border-y border-border bg-secondary py-20 text-secondary-foreground md:py-28"><div className="mx-auto max-w-6xl px-6">
    <SectionHeading eyebrow="05 / Credentials" title="Education and certifications." className="[&_p]:text-accent" />
    <div ref={ref} className="reveal grid gap-12 lg:grid-cols-2">
      <div><div className="mb-6 flex items-center gap-3 text-accent"><GraduationCap className="h-5 w-5" /><span className="font-mono text-xs uppercase">Education</span></div><div className="divide-y divide-secondary-foreground/15 border-y border-secondary-foreground/15">{education.map(item => <div key={item.school} className="py-6"><p className="font-mono text-xs text-accent">{item.period}</p><h3 className="mt-2 text-xl font-semibold">{item.school}</h3><p className="mt-1 text-sm text-secondary-foreground/70">{item.degree}</p><p className="mt-2 font-mono text-xs text-secondary-foreground/55">{item.detail}</p></div>)}</div></div>
      <div><div className="mb-6 flex items-center gap-3 text-accent"><Award className="h-5 w-5" /><span className="font-mono text-xs uppercase">Certifications</span></div><ol className="divide-y divide-secondary-foreground/15 border-y border-secondary-foreground/15">{certifications.map((item, i) => <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 py-5 text-sm leading-relaxed"><span className="font-mono text-xs text-accent">0{i + 1}</span>{item}</li>)}</ol></div>
    </div>
  </div></section>;
}