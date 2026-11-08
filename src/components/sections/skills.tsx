import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { skills } from "@/data/profile";
import { Section } from "./section";

export function Skills() {
  const all = skills.flatMap((g) => g.items);
  return (
    <Section id="skills" label="03 · Skills" title="Tools I use every day">
      <BlurFade>
        <Marquee className="mb-8 py-1">
          {all.map((s) => (
            <span key={s} className="whitespace-nowrap rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-fg/80">
              {s}
            </span>
          ))}
        </Marquee>
      </BlurFade>
      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {skills.map((g, i) => (
          <BlurFade key={g.group} delay={0.03 * i}>
            <div className="border-t border-line pt-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{g.group}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-fg/90">{g.items.join(" · ")}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
