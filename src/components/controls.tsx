"use client";

import { langPath, type Lang } from "@/lib/i18n";
import { asset, cn } from "@/lib/utils";
import { Check, ChevronRight, Copy, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Section menu for phones and small tablets (the desktop bar shows the links inline). */
export function MobileMenu({ links, label }: { links: { href: string; label: string }[]; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid size-8 place-items-center rounded-full border border-line bg-surface-2/70 text-fg/80 transition-colors hover:text-fg"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute inset-x-0 top-full mt-2 origin-top rounded-3xl border border-line-strong bg-surface p-2 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.6)]"
          >
            <ul className="grid gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-fg/90 transition-colors hover:bg-surface-2 active:bg-surface-2"
                  >
                    {l.label}
                    <ChevronRight className="size-4 text-muted" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** EN | ES switch. Keeps the section you were reading (#hash) when changing language. */
export function LangToggle({ lang, label }: { lang: Lang; label: string }) {
  const go = (to: Lang) => (e: React.MouseEvent) => {
    e.preventDefault();
    try { localStorage.setItem("lang", to); } catch {}
    window.location.href = asset(langPath[to]) + window.location.hash;
  };
  return (
    <div role="group" aria-label={label} className="flex items-center rounded-full border border-line bg-surface-2/70 p-0.5 font-mono text-[11px]">
      {(["en", "es"] as const).map((l) => (
        <a
          key={l}
          href={asset(langPath[l])}
          onClick={go(l)}
          aria-current={l === lang ? "true" : undefined}
          hrefLang={l}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            l === lang ? "bg-fg text-bg" : "text-muted hover:text-fg",
          )}
        >
          {l}
        </a>
      ))}
    </div>
  );
}

/** Light / dark switch, remembered in this browser. */
export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("pf-theme", next); } catch {}
    setTheme(next);
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-8 place-items-center rounded-full border border-line bg-surface-2/70 text-muted transition-colors hover:text-fg"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

/** Copies the email address and confirms it for two seconds. */
export function CopyEmail({ email, copy, copied }: { email: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/60"
    >
      {done ? <Check className="size-4 text-ok" /> : <Copy className="size-4 text-muted" />}
      {done ? copied : copy}
    </button>
  );
}
