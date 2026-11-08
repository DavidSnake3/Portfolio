import { BlurFade } from "@/components/ui/blur-fade";
import type { ReactNode } from "react";

/** Section wrapper with a small mono label and a title. */
export function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <BlurFade>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      </BlurFade>
      <div className="mt-10">{children}</div>
    </section>
  );
}
