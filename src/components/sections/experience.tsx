import { BlurFade } from "@/components/ui/blur-fade";
import { experience } from "@/data/profile";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" label="01 · Experience" title="Where I work">
      <div className="space-y-6">
        {experience.map((job, i) => (
          <BlurFade key={job.company} delay={0.05 * i}>
            <div className="relative rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-fg">
                  {job.role} <span className="text-muted">·</span> <span className="text-accent">{job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{job.note}</p>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg/85">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent/80" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span key={s} className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-xs text-muted">
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
