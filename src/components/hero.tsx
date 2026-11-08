import { BlurFade } from "@/components/ui/blur-fade";
import { LocalTime } from "@/components/ui/local-time";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { current, profile, projects, stats } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";
import { asset } from "@/lib/utils";
import { ArrowUpRight, Clock, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Fragment } from "react";

export function Hero({ lang }: { lang: Lang }) {
  const other: Lang = lang === "en" ? "es" : "en";
  const snf = projects.find((p) => p.slug === "snfinance");

  return (
    <section id="top" className="pt-28 pb-6 sm:pt-32">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Profile */}
        <BlurFade className="sm:col-span-2 lg:row-span-2">
          <SpotlightCard className="h-full" inner="flex h-full flex-col p-5 min-[400px]:p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-accent-2 to-accent opacity-60 blur-[6px]" />
                <img
                  src={asset(profile.avatar)}
                  alt={profile.fullName}
                  width={76}
                  height={76}
                  className="relative size-16 rounded-full border border-line-strong object-cover min-[400px]:size-[76px]"
                />
              </div>
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ok/25 bg-ok/10 px-3 py-1 text-xs font-medium text-ok">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-ok" />
                  <span className="relative inline-flex size-2 rounded-full bg-ok" />
                </span>
                {t(ui.hero.available, lang)}
              </span>
            </div>

            <h1 className="mt-7 text-[2rem] font-semibold leading-[1.1] tracking-tight text-fg min-[400px]:text-4xl sm:text-5xl">
              {profile.name}
              <span className="mt-1 block text-gradient">
                {t(profile.role, lang)
                  .split(" ")
                  .map((w, k) => (
                    <Fragment key={k}>
                      {k > 0 && " "}
                      <span className={w.includes("-") ? "whitespace-nowrap" : undefined}>{w}</span>
                    </Fragment>
                  ))}
              </span>
            </h1>
            <p className="mt-5 text-base font-medium text-fg/90 min-[400px]:text-lg">{t(profile.headline, lang)}</p>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">{t(profile.intro, lang)}</p>

            <div className="mt-auto pt-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={asset(profile.cv[lang])}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--accent)] transition-transform hover:-translate-y-0.5"
                >
                  <Download className="size-4" />
                  {t(ui.hero.downloadCv, lang)}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
                >
                  {t(ui.hero.contact, lang)}
                  <ArrowUpRight className="size-4" />
                </a>
                <div className="ml-1 flex items-center gap-1">
                  {[
                    { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
                    { href: profile.links.github, label: "GitHub", Icon: Github },
                    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
              <a
                href={asset(profile.cv[other])}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs text-muted underline-offset-4 hover:text-fg hover:underline"
              >
                {t(ui.hero.otherCv, lang)} ↗
              </a>
            </div>
          </SpotlightCard>
        </BlurFade>

        {/* Currently at */}
        <BlurFade delay={0.05} className="sm:col-span-2">
          <a href={current.url} target="_blank" rel="noreferrer" className="block h-full">
            <SpotlightCard className="h-full" inner="relative flex h-full flex-col justify-between overflow-hidden p-6">
              <img
                src={asset("/projects/erp/cnc.webp")}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 object-cover opacity-25 [mask-image:linear-gradient(to_left,black,transparent)] transition-opacity duration-500 group-hover:opacity-40"
              />
              <div className="relative flex items-start justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{t(ui.hero.currently, lang)}</p>
                <ArrowUpRight className="size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
              <div className="relative mt-6">
                <img src={asset(current.logo)} alt={current.company} className="logo-on-dark h-6 w-auto sm:h-7" />
                <p className="mt-4 font-semibold text-fg">{t(current.role, lang)}</p>
                <p className="mt-1 text-sm text-muted">
                  {t(current.blurb, lang)} · {t(current.since, lang)}
                </p>
              </div>
            </SpotlightCard>
          </a>
        </BlurFade>

        {/* Based in */}
        <BlurFade delay={0.1}>
          <SpotlightCard className="h-full" inner="flex h-full flex-col justify-between p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{t(ui.hero.basedIn, lang)}</p>
            <div className="mt-6">
              <p className="flex items-center gap-2 font-semibold text-fg">
                <MapPin className="size-4 text-accent" />
                {profile.location}
              </p>
              <p className="mt-1 text-sm text-muted">{t(profile.workMode, lang)}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-fg/90">
                <Clock className="size-4 text-accent-2" />
                <span className="text-muted">{t(ui.hero.localTime, lang)}:</span>
                <LocalTime timezone={profile.timezone} locale={lang === "es" ? "es-CR" : "en-US"} />
              </p>
            </div>
          </SpotlightCard>
        </BlurFade>

        {/* Side project */}
        {snf && (
          <BlurFade delay={0.15}>
            <a href={snf.links[0]?.href} target="_blank" rel="noreferrer" className="block h-full">
              <SpotlightCard className="h-full" inner="relative flex h-full min-h-[210px] flex-col overflow-hidden p-6">
                <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_100%_100%,color-mix(in_oklab,var(--accent-2)_22%,transparent),transparent_70%)]" />
                <img
                  src={asset(snf.gallery[0])}
                  alt=""
                  aria-hidden
                  className="absolute -bottom-20 -right-2 w-[46%] max-w-[170px] rotate-[8deg] rounded-xl border border-line shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[4deg]"
                />
                <p className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{t(ui.hero.building, lang)}</p>
                <div className="relative mt-auto max-w-[56%] pt-6">
                  {snf.logo && <img src={asset(snf.logo)} alt="" aria-hidden className="h-6 w-auto" />}
                  <p className="mt-2 font-semibold text-fg">{snf.title}</p>
                  <p className="text-xs text-muted">{snf.status ? t(snf.status, lang) : ""}</p>
                </div>
              </SpotlightCard>
            </a>
          </BlurFade>
        )}

        {/* Stats */}
        <BlurFade delay={0.2} className="sm:col-span-2 lg:col-span-4">
          <div className="card grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
            {stats.map((s) => (
              <div key={s.value} className="px-4 py-4 sm:px-6 sm:py-5">
                <p className="text-[1.65rem] font-semibold tracking-tight text-fg min-[400px]:text-3xl sm:text-[2rem]">
                  <NumberTicker value={s.value} locale={lang === "es" ? "es-CR" : "en-US"} />
                  <span className="text-accent">{s.suffix}</span>
                </p>
                <p className="mt-1 text-sm text-muted">{t(s.label, lang)}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
