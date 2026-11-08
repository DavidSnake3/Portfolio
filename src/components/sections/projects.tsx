import { BlurFade } from "@/components/ui/blur-fade";
import { ErpVisual, FinanceVisual } from "@/components/ui/project-visuals";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { projects } from "@/data/profile";
import { asset, cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Section } from "./section";

// Illustrations for projects without public screenshots (key = project title).
const visuals: Record<string, ReactNode> = { "Enterprise ERP": <ErpVisual />, SNFinance: <FinanceVisual /> };

export function Projects() {
  const oddLast = projects.length % 2 === 1;
  return (
    <Section id="projects" label="02 · Projects" title="Selected work">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => {
          const wide = oddLast && i === projects.length - 1; // last card spans both columns
          const Wrapper = p.href ? "a" : "div";
          return (
            <BlurFade key={p.title} delay={0.05 * (i % 2)} className={cn(wide && "sm:col-span-2")}>
              <SpotlightCard className="h-full">
                <Wrapper
                  {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                  className={cn("flex h-full flex-col", wide && "sm:flex-row")}
                >
                  <div
                    className={cn(
                      "relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-t-[15px] border-b border-line",
                      wide && "sm:aspect-auto sm:min-h-[230px] sm:w-1/2 sm:rounded-l-[15px] sm:rounded-tr-none sm:border-b-0 sm:border-r",
                      !p.image &&
                        "bg-[radial-gradient(circle_at_25%_15%,rgb(110_168_255/0.22),transparent_55%),radial-gradient(circle_at_85%_85%,rgb(167_139_250/0.2),transparent_50%)]",
                    )}
                  >
                    {p.image ? (
                      <>
                        <img
                          src={asset(p.image)}
                          alt={`${p.title} screenshot`}
                          loading="lazy"
                          className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
                      </>
                    ) : (
                      visuals[p.title]
                    )}
                  </div>
                  <div className={cn("flex flex-1 flex-col p-5", wide && "sm:p-6")}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-fg">{p.title}</h3>
                        <p className="font-mono text-xs text-muted">{p.tag}</p>
                      </div>
                      {p.href && (
                        <ArrowUpRight className="size-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                      )}
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-fg/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </SpotlightCard>
            </BlurFade>
          );
        })}
      </div>
    </Section>
  );
}
