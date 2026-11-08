import { BlurFade } from "@/components/ui/blur-fade";
import type { ReactNode } from "react";

export function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <BlurFade>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{title}</h2>
      </BlurFade>
      <div className="mt-8">{children}</div>
    </section>
  );
}
