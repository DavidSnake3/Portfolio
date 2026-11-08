"use client";

import { cn } from "@/lib/utils";
import { useRef, type ReactNode, type MouseEvent } from "react";

/** Card whose border and surface light up under the cursor. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-surface/80 p-px transition-colors duration-300",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        "before:bg-[radial-gradient(420px_circle_at_var(--x)_var(--y),rgb(110_168_255/0.35),transparent_45%)]",
        className,
      )}
    >
      <div className="relative h-full rounded-[15px] bg-surface [background-image:radial-gradient(500px_circle_at_var(--x)_var(--y),rgb(110_168_255/0.07),transparent_45%)]">
        {children}
      </div>
    </div>
  );
}
