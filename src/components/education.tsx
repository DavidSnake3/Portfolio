import { Section } from "@/components/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { certifications, education, languages } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";
import { Award, GraduationCap, Languages } from "lucide-react";

export function Education({ lang }: { lang: Lang }) {
  return (
    <Section id="education" label={t(ui.sections.education.label, lang)} title={t(ui.sections.education.title, lang)}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e, i) => (
            <BlurFade key={e.place} delay={0.05 * i}>
              <div className="card flex gap-4 p-5">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                  <GraduationCap className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-fg">{t(e.title, lang)}</h3>
                    {e.note && (
                      <span className="rounded-full border border-ok/25 bg-ok/10 px-2 py-0.5 text-[11px] font-medium text-ok">{t(e.note, lang)}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted">{e.place}</p>
                  <p className="mt-1 font-mono text-xs text-fg/70">{t(e.period, lang)}</p>
                </div>
              </div>
            </BlurFade>
          ))}
          <BlurFade delay={0.1}>
            <div className="card flex gap-4 p-5">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent-2">
                <Languages className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-fg">{t(ui.education.languages, lang)}</h3>
                <ul className="mt-1 space-y-0.5 text-sm text-muted">
                  {languages.map((l) => (
                    <li key={l.en}>{t(l, lang)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.05}>
          <div className="card h-full p-5">
            <div className="flex items-center gap-2">
              <Award className="size-4 text-accent" />
              <h3 className="font-semibold text-fg">{t(ui.education.certifications, lang)}</h3>
            </div>
            <ul className="mt-4 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-center justify-between gap-4 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm text-fg/90">{c.name}</p>
                    <p className="text-xs text-muted">{c.issuer}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}
