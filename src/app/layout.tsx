import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
  metadataBase: new URL("https://davidsnake3.github.io"),
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
    url: "https://davidsnake3.github.io/Portfolio/",
    type: "profile",
    images: [{ url: "/Portfolio/avatar.jpg", width: 420, height: 420 }],
  },
  icons: { icon: "/Portfolio/avatar.jpg" },
};

export const viewport: Viewport = { themeColor: "#07090d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
