"use client";

import { cn } from "@/lib/utils";
import { useRef, type MouseEvent, type ReactNode } from "react";

/** Card whose border and surface light up softly under the cursor. */
export function SpotlightCard({ children, className, inner }: { children: ReactNode; className?: string; inner?: string }) {
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
        "group relative overflow-hidden rounded-[1.25rem] border border-line bg-surface p-px shadow-[var(--card-shadow)] transition-colors duration-300",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.25rem] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        "before:bg-[radial-gradient(380px_circle_at_var(--x)_var(--y),color-mix(in_oklab,var(--accent)_45%,transparent),transparent_45%)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full rounded-[calc(1.25rem-1px)] bg-surface [background-image:radial-gradient(520px_circle_at_var(--x)_var(--y),color-mix(in_oklab,var(--accent)_7%,transparent),transparent_45%)]",
          inner,
        )}
      >
        {children}
      </div>
    </div>
  );
}
