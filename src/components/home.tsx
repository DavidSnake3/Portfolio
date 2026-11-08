import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { t, type Lang } from "@/lib/i18n";

/** The whole one-page site, rendered in English ("/") or Spanish ("/es/"). */
export function Home({ lang }: { lang: Lang }) {
  return (
    <>
      {lang !== "en" && <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="${lang}"` }} />}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="backdrop-aurora absolute inset-0" />
        <div className="bg-grid absolute inset-0" />
      </div>
      <Nav lang={lang} />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="mx-auto mt-8 max-w-5xl border-t border-line px-4 py-8 text-xs text-muted sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p>{t(ui.footer.built, lang)}</p>
        </div>
      </footer>
    </>
  );
}
