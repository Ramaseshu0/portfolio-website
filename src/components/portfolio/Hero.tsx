import { ArrowDownRight, Download, Mail, MapPin } from "lucide-react";

const metrics = [
  ["9M+", "Healthcare records"],
  ["25%", "Lower latency"],
  ["30%", "Less downtime"],
  ["546K+", "Admissions analyzed"],
  ["0.98", "Peak AUROC"],
];

export function Hero() {
  return (
    <>
      <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-surface px-3 py-1.5 font-mono text-xs uppercase text-primary">
              <span className="h-2 w-2 bg-primary" /> Open to opportunities
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Data<br />Engineer<span className="text-primary">.</span>
            </h1>
            <p className="mt-4 font-mono text-sm uppercase text-muted-foreground">
              Buffalo, New York · 4+ years experience
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I build reliable data platforms that turn complex healthcare data into analytics-ready systems, measurable decisions, and production-grade intelligence.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Buffalo, NY · Open to relocation
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Explore my work <ArrowDownRight className="h-4 w-4" /></a>
              <a href="/resume.pdf" download="Chinmaya-Sri-Rama-Seshu-Pasupuleti-Resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold transition hover:border-primary"><Download className="h-4 w-4" /> Resume</a>
              <a href="mailto:pramaseshu12345@gmail.com" aria-label="Email Chinmaya" className="grid h-11 w-11 place-items-center rounded-md border border-border bg-surface transition hover:border-primary hover:text-primary"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="absolute -inset-3 translate-x-5 translate-y-5 border border-primary/35" />
            <figure className="relative aspect-[3/4] overflow-hidden bg-secondary shadow-elevated">
              <img src="/profile.jpg" alt="Chinmaya Sri Rama Seshu Pasupuleti in professional attire" className="h-full w-full object-cover object-top" fetchPriority="high" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-secondary/90 px-5 py-4 text-secondary-foreground backdrop-blur-sm">
                <p className="font-mono text-xs uppercase text-accent">4+ years in data engineering</p>
                <p className="mt-1 text-sm">Healthcare · Cloud · Analytics · ML</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <div className="border-y border-border bg-surface text-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map(([value, label]) => <div key={label} className="border-border px-4 py-6 first:pl-0 lg:border-r"><p className="font-mono text-2xl font-semibold text-primary">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>)}
        </div>
      </div>
    </>
  );
}
