import { profile } from "@/data/profile";
import { asset } from "@/lib/utils";

const items = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-line bg-bg/70 py-2 pl-4 pr-2 shadow-[0_8px_30px_rgb(0_0_0/0.35)] backdrop-blur-xl">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg">
          DV<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-fg">
              {i.label}
            </a>
          ))}
        </div>
        <a
          href={asset(profile.links.cvEn)}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
