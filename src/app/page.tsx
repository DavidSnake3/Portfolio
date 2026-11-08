import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Nav } from "@/components/sections/nav";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 h-[38rem]">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -top-24 left-[62%] h-64 w-96 rounded-full bg-accent-2/15 blur-[110px]" />
      </div>
      <Nav />
      <main className="relative mx-auto max-w-3xl px-5 sm:px-6">
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
