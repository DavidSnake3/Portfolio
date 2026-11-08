import { LangToggle, ThemeToggle } from "@/components/controls";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";
import { asset } from "@/lib/utils";
import { FileDown } from "lucide-react";

export function Nav({ lang }: { lang: Lang }) {
  const links = [
    { href: "#experience", label: t(ui.nav.experience, lang) },
    { href: "#projects", label: t(ui.nav.projects, lang) },
    { href: "#skills", label: t(ui.nav.skills, lang) },
    { href: "#contact", label: t(ui.nav.contact, lang) },
  ];
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full border border-line bg-surface/75 py-1.5 pl-4 pr-1.5 shadow-[var(--card-shadow)] backdrop-blur-xl">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg">
          {profile.initials}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-1 text-[13px] text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 transition-colors hover:bg-surface-2 hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1.5">
          <LangToggle lang={lang} label={t(ui.nav.language, lang)} />
          <ThemeToggle label={t(ui.nav.theme, lang)} />
          <a
            href={asset(profile.cv[lang])}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-fg px-3.5 py-1.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-85"
          >
            <FileDown className="size-3.5" />
            {t(ui.nav.resume, lang)}
          </a>
        </div>
      </nav>
    </header>
  );
}
