import { Link } from "@tanstack/react-router";
import { ArrowRight, PenLine } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

export function BlogTeaser() {
  const ref = useReveal();
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="06 — Writing" title="Notes & essays." />

        <div
          ref={ref}
          className="reveal rounded-2xl border border-border bg-surface/60 backdrop-blur p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between hover:border-primary/40 transition"
        >
          <div className="flex items-start gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
              <PenLine className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Coming soon</h3>
              <p className="text-muted-foreground mt-1 max-w-xl">
                I'll be writing about data engineering at scale, MDM in healthcare,
                and lessons from shipping ML in production. Stay tuned.
              </p>
            </div>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary transition"
          >
            Visit blog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
