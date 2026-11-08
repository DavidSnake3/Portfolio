import { LangToggle, MobileMenu, ThemeToggle } from "@/components/controls";
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
    { href: "#education", label: t(ui.nav.education, lang) },
    { href: "#contact", label: t(ui.nav.contact, lang) },
  ];
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full border border-line bg-surface/75 py-1.5 pl-4 pr-1.5 shadow-[var(--card-shadow)] backdrop-blur-xl">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg">
          {profile.initials}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center text-[13px] text-muted md:flex lg:gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-2.5 py-1.5 transition-colors hover:bg-surface-2 hover:text-fg lg:px-3">
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
            aria-label={`${t(ui.nav.resume, lang)} (PDF)`}
            className="inline-flex h-8 items-center gap-1.5 rounded-full bg-fg px-2.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-85 min-[360px]:px-3.5"
          >
            <FileDown className="size-3.5" />
            <span className="hidden min-[360px]:inline">{t(ui.nav.resume, lang)}</span>
          </a>
          <MobileMenu links={links} label={t(ui.nav.menu, lang)} />
        </div>
      </nav>
    </header>
  );
}
