import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ui } from "@/data/ui";
import "./globals.css";

const SITE = "https://davidsnake3.github.io/Portfolio/";

export const metadata: Metadata = {
  title: ui.meta.title.en,
  description: ui.meta.description.en,
  metadataBase: new URL("https://davidsnake3.github.io"),
  alternates: { canonical: SITE, languages: { en: SITE, es: `${SITE}es/` } },
  openGraph: {
    title: ui.meta.title.en,
    description: ui.meta.description.en,
    url: SITE,
    type: "profile",
    images: [{ url: "/Portfolio/og.png", width: 1200, height: 630, alt: ui.meta.title.en }],
  },
  twitter: { card: "summary_large_image", images: ["/Portfolio/og.png"] },
  icons: { icon: "/Portfolio/avatar.jpg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05080f" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
  ],
};

// Sets the theme before the first paint (saved choice, otherwise the system preference).
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
