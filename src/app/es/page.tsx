import type { Metadata } from "next";
import { Home } from "@/components/home";
import { ui } from "@/data/ui";

const SITE = "https://davidsnake3.github.io/Portfolio/";

export const metadata: Metadata = {
  title: ui.meta.title.es,
  description: ui.meta.description.es,
  alternates: { canonical: `${SITE}es/`, languages: { en: SITE, es: `${SITE}es/` } },
  openGraph: {
    title: ui.meta.title.es,
    description: ui.meta.description.es,
    url: `${SITE}es/`,
    type: "profile",
    locale: "es_CR",
    images: [{ url: "/Portfolio/og.png", width: 1200, height: 630, alt: ui.meta.title.es }],
  },
};

// Versión en español — https://davidsnake3.github.io/Portfolio/es/
export default function Page() {
  return <Home lang="es" />;
}
