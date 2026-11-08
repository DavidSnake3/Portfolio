import { CopyEmail } from "@/components/controls";
import { Section } from "@/components/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";
import { asset } from "@/lib/utils";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Contact({ lang }: { lang: Lang }) {
  return (
    <Section id="contact" label={t(ui.sections.contact.label, lang)} title={t(ui.sections.contact.title, lang)}>
      <BlurFade>
        <div className="card relative overflow-hidden p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 size-72 rounded-full bg-accent-2/15 blur-3xl" />
          <p className="relative max-w-2xl text-lg leading-relaxed text-fg/90">{t(ui.contact.text, lang)}</p>

          <div className="relative mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--accent)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <CopyEmail email={profile.email} copy={t(ui.contact.copy, lang)} copied={t(ui.contact.copied, lang)} />
          </div>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {[
              { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: profile.links.github, label: "GitHub", Icon: Github },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-colors hover:bg-surface-2"
              >
                <Icon className="size-4" />
                {label}
                <ArrowUpRight className="size-3.5 text-muted" />
              </a>
            ))}
            {(["en", "es"] as const).map((l) => (
              <a
                key={l}
                href={asset(profile.cv[l])}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-colors hover:bg-surface-2"
              >
                <Download className="size-4" />
                CV {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </BlurFade>
    </Section>
  );
}
