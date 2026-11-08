// ─────────────────────────────────────────────────────────────────────────────
//  ALL portfolio content lives in this file. Edit text here and push to `main`:
//  GitHub Actions rebuilds and publishes the site automatically.
//  Images go in /public (e.g. /public/projects/name.webp) and are referenced as "/projects/name.webp".
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "David Villegas",
  fullName: "David Josué Villegas Salas",
  role: "Full-Stack Developer",
  location: "Alajuela, Costa Rica",
  timezone: "America/Costa_Rica",
  available: true,
  avatar: "/avatar.jpg",
  headline: "I build business software that real teams rely on every day.",
  intro:
    "Full-stack developer with 2+ years shipping an in-house ERP for an AS9100D aerospace manufacturer — React, Node.js, TypeScript and SQL. Final-year Software Engineering student at UTN.",
  email: "davidjosuevillegassalas@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/davidsnake-dev",
    github: "https://github.com/DavidSnake3",
    cvEn: "/cv/David-Villegas-CV-EN.pdf",
    cvEs: "/cv/David-Villegas-CV-ES.pdf",
  },
};

export const stats = [
  { value: 100, suffix: "+", label: "ERP modules shipped" },
  { value: 1800, suffix: "+", label: "REST endpoints" },
  { value: 440, suffix: "K+", label: "records migrated" },
  { value: 2900, suffix: "+", label: "automated tests" },
];

export const experience = [
  {
    company: "TechShop Internacional",
    role: "Application Developer (Full-Stack)",
    period: "Jun 2024 — Present",
    note: "AS9100D aerospace manufacturer · full-time since May 2026, contractor before",
    points: [
      "Co-built the company ERP in TypeScript — 100+ modules that replaced 14 Power Apps, 10+ Power Automate flows and 9 Power BI dashboards.",
      "Bilingual React 19 + Tailwind SPA with BI dashboards, Excel-like grids and real-time updates.",
      "Integrations with Infor SyteLine, Microsoft 365 (Graph, Entra ID) and Costa Rican e-invoicing.",
      "Generative AI (Gemini, Whisper) in 15+ workflows, with schema validation and human review.",
    ],
    stack: ["TypeScript", "React", "Node.js", "Prisma", "MySQL", "SQL Server", "Power Platform"],
  },
];

export const projects = [
  {
    title: "Enterprise ERP",
    tag: "TechShop · 2026",
    description:
      "Modular monolith covering finance, procurement, payroll, production scheduling, AS9100D quality and HR — with RBAC, audit trail and 25 scheduled jobs.",
    stack: ["React", "Node.js", "Prisma", "MySQL", "Microsoft Graph"],
    image: null as string | null,
    href: null as string | null,
    featured: true,
  },
  {
    title: "SNFinance",
    tag: "Personal product · 2026",
    description:
      "Local-first personal finance Android app with an AI assistant, multi-device sync and ~2,900 automated tests.",
    stack: ["React", "Capacitor", "Firebase", "Gemini API"],
    image: null,
    href: "https://snfinance.app",
    featured: true,
  },
  {
    title: "TechAcademy",
    tag: "Training platform · 2025",
    description:
      "Employee training and certification system: dynamic exams, automatic PDF certificates and Power Automate / Dataverse sync.",
    stack: ["JavaScript", "Power Automate", "Dataverse"],
    image: "/projects/techacademy.webp",
    href: "https://github.com/DavidSnake3/TechsopAcademy",
    featured: false,
  },
  {
    title: "BearFix",
    tag: "Help desk · 2025",
    description: "Incident tracking with SLA-based auto-assignment, role-based access and a metrics dashboard.",
    stack: ["Angular", "Node.js", "Prisma", "MySQL"],
    image: "/projects/bearfix.webp",
    href: "https://github.com/DavidSnake3/BearFix",
    featured: false,
  },
  {
    title: "Sunrise",
    tag: "Booking platform · 2025",
    description: "Cruise booking platform with itineraries, payments, invoices in PDF and an admin dashboard.",
    stack: ["React", "Laravel", "MySQL"],
    image: "/projects/sunrise.webp",
    href: "https://github.com/DavidSnake3/Sunrise",
    featured: false,
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Python", "Java", "PowerShell"] },
  { group: "Frontend", items: ["React", "Tailwind CSS", "Vite", "Zustand", "Recharts"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma", "JWT / OAuth 2.0"] },
  { group: "Data", items: ["MySQL", "SQL Server", "Firestore", "ETL", "Power BI"] },
  { group: "Cloud & tools", items: ["Azure (Entra ID)", "Firebase", "GitHub Actions", "Vercel", "Git"] },
  { group: "Power Platform", items: ["Power Apps", "Power Automate", "Dataverse", "SharePoint"] },
  { group: "AI", items: ["Gemini API", "Whisper", "Claude Code"] },
];

export const education = [
  { title: "B.Sc. Software Engineering (final year)", place: "Universidad Técnica Nacional", period: "2023 — Apr 2027" },
  { title: "Technical diploma, Service Center Executive", place: "CTP Rosario de Naranjo", period: "Graduated 2022" },
];

export const certifications = [
  "Claude 101 & Claude Code 101 — Anthropic (2026)",
  "JavaScript Essentials 2 — Cisco (2025)",
  "Data Analytics Essentials — Cisco (2024)",
  "Process Mining Foundations — Celonis (2024)",
  "Python Essentials 1 — Cisco (2023)",
];

export const languages = ["Spanish — native", "English — B2"];
