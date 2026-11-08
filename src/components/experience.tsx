import { Section } from "@/components/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Points } from "@/components/points";
import { experience, type Job } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";
import { asset, cn } from "@/lib/utils";
import { ArrowUpRight, MapPin } from "lucide-react";

/** Company logo (or initials) in a rounded square. */
function Logo({ job, className }: { job: Job; className?: string }) {
  return (
    <div className={cn("grid shrink-0 place-items-center overflow-hidden rounded-2xl border border-line-strong bg-surface-2 shadow-[var(--card-shadow)]", className)}>
      {job.logo ? (
        <img src={asset(job.logo)} alt={job.company} className="logo-on-dark w-[62%] object-contain" />
      ) : (
        <span className="font-mono text-sm font-semibold text-fg">{job.initials}</span>
      )}
    </div>
  );
}

export function Experience({ lang }: { lang: Lang }) {
  return (
    <Section id="experience" label={t(ui.sections.experience.label, lang)} title={t(ui.sections.experience.title, lang)}>
      {/* Timeline on tablet/desktop; on phones the logo moves inside each card to give the text the full width. */}
      <ol className="relative space-y-4 sm:before:absolute sm:before:bottom-8 sm:before:left-[31px] sm:before:top-8 sm:before:w-px sm:before:bg-gradient-to-b sm:before:from-accent/60 sm:before:via-line-strong sm:before:to-transparent">
        {experience.map((job, i) => (
          <BlurFade key={job.company} delay={0.05 * i}>
            <li className="relative flex gap-6">
              <Logo job={job} className="relative z-10 mt-6 hidden size-16 sm:grid" />

              <article className="card min-w-0 flex-1 p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div className="flex min-w-0 items-start gap-3">
                    <Logo job={job} className="size-11 rounded-xl sm:hidden" />
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug text-fg">{t(job.role, lang)}</h3>
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noreferrer" className="group text-sm font-medium text-accent">
                          {/* keeps the arrow attached to the last word when the name wraps */}
                          {job.company.split(" ").slice(0, -1).join(" ")}{" "}
                          <span className="whitespace-nowrap">
                            {job.company.split(" ").slice(-1)}
                            <ArrowUpRight className="ml-1 inline size-3.5 align-[-2px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-accent">{job.company}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-xs text-fg/90">{t(job.period, lang)}</p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted">
                      <MapPin className="size-3 shrink-0" />
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
