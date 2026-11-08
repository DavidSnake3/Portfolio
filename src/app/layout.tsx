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
  themeColor: "#05080f",
};

// Dark by default for everyone. Light only if the visitor picked it with the toggle (saved in this browser).
const themeScript = `(function(){var t='dark';try{if(localStorage.getItem('pf-theme')==='light'){t='light'}}catch(e){}document.documentElement.dataset.theme=t})();`;

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
