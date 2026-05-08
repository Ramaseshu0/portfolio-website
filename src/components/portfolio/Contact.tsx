import { useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const EMAIL = "pramaseshu12345@gmail.com";
const PHONE = "+1 716-709-1548";

export function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something great."
          description="I'm open to data engineering, analytics, and ML roles — and to interesting collaborations."
        />

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={copyEmail}
            className="text-left group rounded-xl border border-border bg-surface/60 backdrop-blur p-5 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                Email
              </span>
              <span className="ml-auto text-muted-foreground group-hover:text-primary transition">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </span>
            </div>
            <div className="text-sm font-mono break-all">{EMAIL}</div>
          </button>

          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="group rounded-xl border border-border bg-surface/60 backdrop-blur p-5 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                Phone
              </span>
            </div>
            <div className="text-sm font-mono">{PHONE}</div>
          </a>

          <a
            href="https://github.com/Ramaseshu0"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-surface/60 backdrop-blur p-5 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <Github className="h-5 w-5 text-primary" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                GitHub
              </span>
            </div>
            <div className="text-sm font-mono">@Ramaseshu0</div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-surface/60 backdrop-blur p-5 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                LinkedIn
              </span>
            </div>
            <div className="text-sm font-mono">Connect</div>
          </a>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" /> Buffalo, New York · Open to relocation
        </div>
      </div>
    </section>
  );
}
