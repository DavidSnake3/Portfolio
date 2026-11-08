// Lightweight illustrations for projects that have no public screenshots.

export function ErpVisual() {
  const modules = ["Finance", "Procurement", "Payroll", "Production", "Quality", "HR"];
  return (
    <div className="grid w-[78%] grid-cols-3 gap-2">
      {modules.map((m, i) => (
        <div
          key={m}
          className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-2.5 text-center font-mono text-[10px] text-fg/75 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] transition-colors group-hover:border-accent/30"
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <span className="mb-1.5 block h-1 w-6 rounded-full bg-gradient-to-r from-accent to-accent-2 opacity-70 mx-auto" />
          {m}
        </div>
      ))}
    </div>
  );
}

export function FinanceVisual() {
  const bars = [38, 62, 45, 80, 56, 92, 70];
  return (
    <div className="w-[40%] translate-y-3 rounded-[1.4rem] border border-white/15 bg-bg/80 p-3 shadow-[0_20px_50px_-20px_rgb(110_168_255/0.5)]">
      <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/15" />
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted">Balance</p>
      <p className="mt-0.5 font-mono text-sm font-semibold text-fg">₡ 482,350</p>
      <div className="mt-3 flex h-12 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent-2/80 transition-all duration-500 group-hover:opacity-100"
            style={{ height: `${h}%`, opacity: 0.55 + i * 0.06 }}
          />
        ))}
      </div>
      <p className="mt-2 rounded-md bg-white/[0.05] px-2 py-1 text-[9px] text-fg/70">✦ “Spent 12% less on food this month”</p>
    </div>
  );
}
