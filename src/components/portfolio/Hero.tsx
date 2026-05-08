import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-pulse [animation-delay:1.5s]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-3 py-1 text-xs font-mono text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for Data Engineer / Data Scientist roles
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Chinmaya</span>.
            <br />
            I build data systems that{" "}
            <span className="text-gradient">scale</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Data Engineer & Analyst with 4 years of experience designing cloud-scale
            ETL pipelines and master-data ecosystems for healthcare. Currently pursuing
            an MS in Data Science at the University at Buffalo.
          </p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground font-mono">
            <MapPin className="h-4 w-4 text-primary" />
            Buffalo, New York
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-foreground hover:text-primary transition"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
