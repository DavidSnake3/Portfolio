import { Section } from "@/components/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Points } from "@/components/points";
import { experience } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";
import { asset } from "@/lib/utils";
import { ArrowUpRight, MapPin } from "lucide-react";

export function Experience({ lang }: { lang: Lang }) {
  return (
    <Section id="experience" label={t(ui.sections.experience.label, lang)} title={t(ui.sections.experience.title, lang)}>
      <ol className="relative space-y-4 before:absolute before:left-[27px] before:top-8 before:bottom-8 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-line-strong before:to-transparent sm:before:left-[31px]">
        {experience.map((job, i) => (
          <BlurFade key={job.company} delay={0.05 * i}>
            <li className="relative flex gap-4 sm:gap-6">
              <div className="relative z-10 mt-6 grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line-strong bg-surface-2 shadow-[var(--card-shadow)] sm:size-16">
                {job.logo ? (
                  <img src={asset(job.logo)} alt={job.company} className="logo-on-dark w-[62%] object-contain" />
                ) : (
                  <span className="font-mono text-sm font-semibold text-fg">{job.initials}</span>
                )}
              </div>

              <article className="card flex-1 p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{t(job.role, lang)}</h3>
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-sm font-medium text-accent">
                        {job.company}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-accent">{job.company}</p>
                    )}
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-xs text-fg/90">{t(job.period, lang)}</p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted">
                      <MapPin className="size-3" />
                      {t(job.location, lang)}
                    </p>
                  </div>
                </div>

                {job.badges.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.badges.map((b) => (
                      <span key={b.en} className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-[11px] text-muted">
                        {t(b, lang)}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-sm leading-relaxed text-fg/85">{t(job.summary, lang)}</p>
                <Points
                  items={job.points.map((p) => t(p, lang))}
                  visible={4}
                  more={t(ui.experience.showMore, lang)}
                  less={t(ui.experience.showLess, lang)}
                />

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <span key={s} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg/75">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          </BlurFade>
        ))}
      </ol>
    </Section>
  );
}
