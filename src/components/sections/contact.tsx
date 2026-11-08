import { BlurFade } from "@/components/ui/blur-fade";
import { LocalTime } from "@/components/ui/local-time";
import { profile } from "@/data/profile";
import { asset } from "@/lib/utils";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <BlurFade>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
          <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent">05 · Contact</p>
          <h2 className="relative mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">Let&apos;s build something useful.</h2>
          <p className="relative mx-auto mt-3 max-w-md text-muted">
            Open to full-stack, data and Power Platform roles — on-site or hybrid in Costa Rica, or remote.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              <Mail className="size-4" /> {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-white/5"
            >
              LinkedIn <ArrowUpRight className="size-4" />
            </a>
            <a
              href={asset(profile.links.cvEn)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-white/5"
            >
              Resume <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </BlurFade>
      <footer className="mt-10 flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <LocalTime timezone={profile.timezone} />
      </footer>
    </section>
  );
}
