"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/** Bullet list that shows the first `visible` items and expands to show the rest. */
export function Points({ items, visible, more, less }: { items: string[]; visible: number; more: string; less: string }) {
  const [open, setOpen] = useState(false);
  const head = items.slice(0, visible);
  const tail = items.slice(visible);

  const Item = ({ text }: { text: string }) => (
    <li className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-gradient-to-br before:from-accent before:to-accent-2">
      {text}
    </li>
  );

  return (
    <div className="mt-4">
      <ul className="space-y-2.5">
        {head.map((p) => (
          <Item key={p} text={p} />
        ))}
      </ul>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-2.5 overflow-hidden pt-2.5"
          >
            {tail.map((p) => (
              <Item key={p} text={p} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {tail.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
        >
          {open ? less : `${more} (+${tail.length})`}
          <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
