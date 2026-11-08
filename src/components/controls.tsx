"use client";

import { langPath, type Lang } from "@/lib/i18n";
import { asset, cn } from "@/lib/utils";
import { Check, Copy, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
    try { localStorage.setItem("theme", next); } catch {}
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
