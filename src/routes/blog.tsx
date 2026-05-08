import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, PenLine } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Blog — Chinmaya Pasupuleti";
const DESC =
  "Writing on data engineering, MDM in healthcare, and lessons from shipping ML in production. Coming soon.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto grid place-items-center h-16 w-16 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-6">
            <PenLine className="h-7 w-7" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Writing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The blog is <span className="text-gradient">brewing</span>.
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I'm putting together essays on data engineering at scale, master data
            management in healthcare, and what I've learned shipping ML in
            production. The first posts will land here soon.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
