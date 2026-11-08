"use client";

import { Section } from "@/components/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { projects, type Project } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";
import { asset, cn } from "@/lib/utils";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Images, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const ERP_MODULES = {
  en: ["Finance", "Procurement", "Payroll", "Production", "Quality", "HR"],
  es: ["Finanzas", "Compras", "Planilla", "Producción", "Calidad", "RR. HH."],
};

export function Projects({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<{ project: Project; index: number } | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" label={t(ui.sections.projects.label, lang)} title={t(ui.sections.projects.title, lang)}>
      <div className="space-y-4">
        {featured.map((p, i) => (
          <BlurFade key={p.slug} delay={0.05 * i}>
            <FeaturedCard project={p} lang={lang} reverse={i % 2 === 1} onOpen={(index) => setOpen({ project: p, index })} />
          </BlurFade>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((p, i) => (
          <BlurFade key={p.slug} delay={0.05 * (i % 2)}>
            <ProjectCard project={p} lang={lang} onOpen={(index) => setOpen({ project: p, index })} />
          </BlurFade>
        ))}
      </div>

      <AnimatePresence>
        {open && <Gallery project={open.project} start={open.index} lang={lang} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg/75">
          {s}
        </span>
      ))}
    </div>
  );
}

function Links({ project, lang, onOpen }: { project: Project; lang: Lang; onOpen: (i: number) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.gallery.length > 0 && (
        <button
          type="button"
          onClick={() => onOpen(0)}
          className="inline-flex items-center gap-1.5 rounded-full bg-fg px-3.5 py-1.5 text-xs font-semibold text-bg transition-opacity hover:opacity-85"
        >
          <Images className="size-3.5" />
          {t(ui.projects.viewScreens, lang)}
        </button>
      )}
      {project.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-1.5 text-xs font-medium text-fg transition-colors hover:bg-surface-2"
        >
          {l.kind === "code" ? <Github className="size-3.5" /> : <ArrowUpRight className="size-3.5" />}
          {t(l.label, lang)}
        </a>
      ))}
    </div>
  );
}

function FeaturedCard({ project: p, lang, reverse, onOpen }: { project: Project; lang: Lang; reverse: boolean; onOpen: (i: number) => void }) {
  return (
    <SpotlightCard inner="grid grid-cols-1 overflow-hidden lg:grid-cols-[1.05fr_1fr]">
      <div className={cn("flex min-w-0 flex-col p-5 sm:p-8", reverse && "lg:order-2")}>
        <div className="flex items-center gap-3">
          {p.logo && <img src={asset(p.logo)} alt="" aria-hidden className="h-7 w-auto" />}
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
            {t(ui.projects.featured, lang)}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg">{p.title}</h3>
        <p className="font-mono text-xs text-muted">
          {t(p.tag, lang)} · {p.year}
        </p>
        <p className="mt-4 leading-relaxed text-muted">{t(p.description, lang)}</p>
        <ul className="mt-4 space-y-2">
          {p.highlights.map((h) => (
            <li key={h.en} className="flex gap-2 text-sm text-fg/90">
              <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
              {t(h, lang)}
            </li>
          ))}
        </ul>
        {p.status && <p className="mt-4 text-xs font-medium text-ok">● {t(p.status, lang)}</p>}
        <div className="mt-6">
          <Stack items={p.stack} />
        </div>
        <div className="mt-6">
          <Links project={p} lang={lang} onOpen={onOpen} />
        </div>
        {p.note && <p className="mt-4 text-[11px] leading-relaxed text-muted/80">{t(p.note, lang)}</p>}
      </div>

      <div className={cn("relative min-h-[300px] overflow-hidden border-t border-line sm:min-h-[420px] lg:min-h-[280px] lg:border-t-0", reverse ? "lg:order-1 lg:border-r" : "lg:border-l")}>
        {p.slug === "erp" ? <ErpVisual project={p} lang={lang} /> : <PhonesVisual project={p} onOpen={onOpen} />}
      </div>
    </SpotlightCard>
  );
}

function ErpVisual({ project: p, lang }: { project: Project; lang: Lang }) {
  return (
    <div className="absolute inset-0">
      {p.cover && (
        <img src={asset(p.cover)} alt="" aria-hidden className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/70 to-[#05080f]/20" />
      <div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-2 sm:inset-x-8 sm:bottom-8">
        {ERP_MODULES[lang].map((m, i) => (
          <div
            key={m}
            className="rounded-xl border border-white/15 bg-white/[0.07] px-2 py-3 text-center text-[11px] font-medium text-white/90 backdrop-blur-md transition-colors group-hover:border-white/25"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <span className="mx-auto mb-2 block h-1 w-6 rounded-full bg-gradient-to-r from-[#5b9dff] to-[#34d3a6]" />
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}

function PhonesVisual({ project: p, onOpen }: { project: Project; onOpen: (i: number) => void }) {
  const shots = [p.gallery[3], p.gallery[0], p.gallery[4]].filter(Boolean);
  return (
    <button type="button" onClick={() => onOpen(0)} className="absolute inset-0 cursor-zoom-in bg-[#081221]" aria-label={p.title}>
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,rgb(52_211_166/0.35),transparent_70%),radial-gradient(60%_50%_at_20%_0%,rgb(91_157_255/0.25),transparent_70%)]" />
      <div className="absolute inset-0 flex items-center justify-center gap-3 px-6 pt-8 sm:gap-4">
        {shots.map((src, i) => (
          <img
            key={src}
            src={asset(src)}
            alt=""
            aria-hidden
            className={cn(
              "w-[31%] max-w-[205px] rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500",
              i === 1 ? "z-10 -translate-y-6 group-hover:-translate-y-9" : "translate-y-2 opacity-90 group-hover:-translate-y-1",
            )}
          />
        ))}
      </div>
    </button>
  );
}

function ProjectCard({ project: p, lang, onOpen }: { project: Project; lang: Lang; onOpen: (i: number) => void }) {
  return (
    <SpotlightCard className="h-full" inner="flex h-full flex-col">
      <button type="button" onClick={() => onOpen(0)} className="relative aspect-[16/9] cursor-zoom-in overflow-hidden rounded-t-[calc(1.25rem-1px)] border-b border-line" aria-label={`${t(ui.projects.viewScreens, lang)}: ${p.title}`}>
        {p.cover && (
          <img src={asset(p.cover)} alt={p.title} loading="lazy" className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
        )}
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white/90 backdrop-blur">
          {p.gallery.length} <Images className="ml-0.5 inline size-3" />
        </span>
      </button>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-fg">{p.title}</h3>
            <p className="font-mono text-xs text-muted">
              {t(p.tag, lang)} · {p.year}
            </p>
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t(p.description, lang)}</p>
        <div className="mt-4">
          <Stack items={p.stack} />
        </div>
        <div className="mt-5">
          <Links project={p} lang={lang} onOpen={onOpen} />
        </div>
      </div>
    </SpotlightCard>
  );
}

function Gallery({ project: p, start, lang, onClose }: { project: Project; start: number; lang: Lang; onClose: () => void }) {
  const [i, setI] = useState(start);
  const n = p.gallery.length;
  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);
  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col bg-black/85 p-3 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 text-white" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="font-semibold">{p.title}</p>
          <p className="font-mono text-xs text-white/60">
            {i + 1} {t(ui.projects.of, lang)} {n}
          </p>
        </div>
        <button type="button" onClick={onClose} aria-label={t(ui.projects.close, lang)} className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
          <X className="size-5" />
        </button>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center justify-center py-4" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={p.gallery[i]}
            src={asset(p.gallery[i])}
            alt={`${p.title} — ${i + 1}`}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.2 }}
            drag={n > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.35}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -500) next();
              else if (info.offset.x > 60 || info.velocity.x > 500) prev();
            }}
            draggable={false}
            className={cn(
              "max-h-[72dvh] max-w-full touch-pan-y select-none rounded-xl border border-white/10 object-contain shadow-2xl",
              p.portrait ? "w-auto" : "w-full",
              n > 1 && "cursor-grab active:cursor-grabbing",
            )}
          />
        </AnimatePresence>
        {n > 1 && (
          <>
            <button type="button" onClick={prev} aria-label={t(ui.projects.previous, lang)} className="absolute left-0 grid size-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-white/20 sm:-left-2 sm:size-11 sm:bg-white/10">
              <ChevronLeft className="size-5" />
            </button>
            <button type="button" onClick={next} aria-label={t(ui.projects.next, lang)} className="absolute right-0 grid size-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-white/20 sm:-right-2 sm:size-11 sm:bg-white/10">
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      <div className="mx-auto flex max-w-full gap-2 overflow-x-auto pb-1" onClick={(e) => e.stopPropagation()}>
        {p.gallery.map((src, k) => (
          <button
            key={src}
            type="button"
            onClick={() => setI(k)}
            aria-label={`${k + 1}`}
            className={cn(
              "shrink-0 overflow-hidden rounded-lg border-2 transition-opacity",
              k === i ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-80",
              p.portrait ? "h-16 w-9" : "h-12 w-20",
            )}
          >
            <img src={asset(src)} alt="" className="size-full object-cover object-top" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
