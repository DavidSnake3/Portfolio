import { BlurFade } from "@/components/ui/blur-fade";
import { certifications, education, languages } from "@/data/profile";
import { Award, GraduationCap, Languages } from "lucide-react";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" label="04 · Education" title="Learning never stops">
      <div className="grid gap-4 sm:grid-cols-2">
        <BlurFade>
          <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
            <GraduationCap className="size-5 text-accent" />
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="font-medium text-fg">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.place} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-sm text-muted">
              <Languages className="size-4 text-accent" /> {languages.join(" · ")}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.06}>
          <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
            <Award className="size-5 text-accent" />
            <ul className="mt-4 space-y-2.5">
              {certifications.map((c) => (
                <li key={c} className="text-sm leading-relaxed text-fg/85">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}
