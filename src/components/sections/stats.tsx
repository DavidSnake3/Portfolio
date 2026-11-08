import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/data/profile";

export function Stats() {
  return (
    <BlurFade delay={0.3}>
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 [&>*]:bg-surface" style={{ gap: 1 }}>
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-6">
            <p className="font-mono text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              <NumberTicker value={s.value} />
              <span className="text-accent">{s.suffix}</span>
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </BlurFade>
  );
}
