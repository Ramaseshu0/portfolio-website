import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="01 / Profile" title="Engineering data people can trust." />
        <div ref={ref} className="reveal grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>I’m a Data Engineer with 4+ years of experience across ETL/ELT, cloud platforms, pipeline development, data quality, and analytics. At Cognizant, I helped operate and optimize a Reltio MDM ecosystem serving <strong className="font-semibold text-foreground">9M+ healthcare professional records</strong> for AbbVie.</p>
            <p>At the University at Buffalo, I’m expanding that foundation into clinical AI—building reproducible data pipelines, predictive models, and privacy-preserving decision-support systems that remain auditable to clinicians.</p>
          </div>
          <dl className="border-l-2 border-primary pl-6">
            <div className="pb-5"><dt className="font-mono text-xs uppercase text-muted-foreground">Focus</dt><dd className="mt-1 font-semibold">Data engineering & analytics</dd></div>
            <div className="border-t border-border py-5"><dt className="font-mono text-xs uppercase text-muted-foreground">Domain</dt><dd className="mt-1 font-semibold">Healthcare & enterprise data</dd></div>
            <div className="border-t border-border pt-5"><dt className="font-mono text-xs uppercase text-muted-foreground">Working style</dt><dd className="mt-1 font-semibold">Reliable, measurable, collaborative</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}