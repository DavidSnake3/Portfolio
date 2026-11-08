import { BlurFade } from "@/components/ui/blur-fade";
import { profile } from "@/data/profile";
import { asset } from "@/lib/utils";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-12 sm:pt-44">
      <BlurFade>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-accent-2 to-accent opacity-70 blur-[6px]" />
            <img
              src={asset(profile.avatar)}
              alt={profile.fullName}
              width={72}
              height={72}
              className="relative size-[72px] rounded-full border border-white/15 object-cover"
            />
          </div>
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to new roles
            </span>
          )}
        </div>
      </BlurFade>

      <BlurFade delay={0.08}>
        <h1 className="mt-8 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
          <span className="text-fg">{profile.name}</span>
          <br />
          <span className="text-gradient">{profile.role}</span>
        </h1>
      </BlurFade>

      <BlurFade delay={0.16}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg/90 sm:text-xl">{profile.headline}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{profile.intro}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-4" /> {profile.location} · UTC-6 · Remote or hybrid
        </p>
      </BlurFade>

      <BlurFade delay={0.24}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={asset(profile.links.cvEn)}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-[0_0_0_1px_rgb(110_168_255/0.4),0_8px_30px_-6px_rgb(110_168_255/0.6)] transition-transform hover:scale-[1.03]"
          >
            <Download className="size-4" /> Download resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-white/[0.07]"
          >
            Get in touch <ArrowUpRight className="size-4" />
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: profile.links.github, icon: Github, label: "GitHub" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full p-2.5 text-muted transition-colors hover:bg-white/5 hover:text-fg"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <a href={asset(profile.links.cvEs)} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs text-muted underline-offset-4 hover:text-fg hover:underline">
          CV en español
        </a>
      </BlurFade>
    </section>
  );
}
