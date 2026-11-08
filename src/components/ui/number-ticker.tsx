"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const fmt = (v: number) => Intl.NumberFormat("en-US").format(Math.round(v));

/** Counts up to `value` once visible and always lands exactly on it. */
export function NumberTicker({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = fmt(v);
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {fmt(value)}
    </span>
  );
}
