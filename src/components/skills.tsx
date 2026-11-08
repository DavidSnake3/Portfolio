import { Section } from "@/components/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { skills } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";

export function Skills({ lang }: { lang: Lang }) {
  const highlight = ["TypeScript", "React", "Node.js", "SQL", "Prisma", "MySQL", "SQL Server", "Python", "Power BI (DAX)", "Power Apps", "Power Automate", "Azure (Entra ID)", "Firebase", "GitHub Actions", "Gemini API"];
  return (
    <Section id="skills" label={t(ui.sections.skills.label, lang)} title={t(ui.sections.skills.title, lang)}>
      <BlurFade>
        <Marquee className="mb-8 [--duration:42s]">
          {highlight.map((s) => (
            <span key={s} className="whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-fg/85">
              {s}
            </span>
          ))}
        </Marquee>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g, i) => (
          <BlurFade key={g.group.en} delay={0.03 * i}>
            <div className="card h-full p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{t(g.group, lang)}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="rounded-md bg-surface-2 px-2 py-1 text-[13px] text-fg/85">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
