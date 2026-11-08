// ─────────────────────────────────────────────────────────────────────────────
//  ALL portfolio content lives here, in English (en) and Spanish (es).
//  Edit the text, then push to `main`: GitHub Actions rebuilds and publishes the site.
//  Images live in /public and are referenced from the site root, e.g. "/projects/lafit/1.webp".
//  Interface texts (buttons, section titles) are in src/data/ui.ts.
// ─────────────────────────────────────────────────────────────────────────────

import type { L } from "@/lib/i18n";

export const profile = {
  name: "David Villegas",
  fullName: "David Josué Villegas Salas",
  initials: "DV",
  role: { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
  headline: {
    en: "I build business software that real teams rely on every day.",
    es: "Construyo software empresarial que equipos reales usan todos los días.",
  },
  intro: {
    en: "Full-stack developer with 2+ years building the in-house ERP of an AS9100D aerospace manufacturer with React, Node.js, TypeScript and SQL. Final-year Software Engineering student at UTN.",
    es: "Desarrollador full-stack con más de 2 años construyendo el ERP propio de una manufacturera aeroespacial AS9100D con React, Node.js, TypeScript y SQL. Estudiante de último año de Ingeniería del Software en la UTN.",
  },
  location: "Alajuela, Costa Rica",
  timezone: "America/Costa_Rica",
  workMode: { en: "Remote · Hybrid in the GAM", es: "Remoto · Híbrido en la GAM" },
  avatar: "/avatar.jpg",
  email: "davidjosuevillegassalas@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/davidsnake-dev",
    github: "https://github.com/DavidSnake3",
  },
  cv: { en: "/cv/David-Villegas-CV-EN.pdf", es: "/cv/David-Villegas-CV-ES.pdf" },
};

/** Card "Currently at" in the hero. */
export const current = {
  company: "TechShop Internacional",
  logo: "/brand/techshop.webp",
  url: "https://tsicr.com",
  role: { en: "Application Developer (Full-Stack)", es: "Desarrollador de Aplicaciones (Full-Stack)" },
  blurb: { en: "Aerospace & precision CNC manufacturing · AS9100D", es: "Manufactura aeroespacial y CNC de precisión · AS9100D" },
  since: { en: "Since Jun 2024", es: "Desde jun. 2024" },
};

export const stats: { value: number; suffix: string; label: L }[] = [
  { value: 100, suffix: "+", label: { en: "ERP modules shipped", es: "módulos del ERP" } },
  { value: 1800, suffix: "+", label: { en: "REST endpoints", es: "endpoints REST" } },
  { value: 440, suffix: "K+", label: { en: "records migrated", es: "registros migrados" } },
  { value: 2900, suffix: "+", label: { en: "automated tests", es: "pruebas automatizadas" } },
];

export type Job = {
  company: string;
  logo: string | null; // null → shows the initials
  initials: string;
  url: string | null;
  role: L;
  period: L;
  location: L;
  badges: L[];
  summary: L;
  points: L[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "TechShop Internacional S.A.",
    logo: "/brand/techshop-mark.webp",
    initials: "TS",
    url: "https://tsicr.com",
    role: { en: "Application Developer (Full-Stack)", es: "Desarrollador de Aplicaciones (Full-Stack)" },
    period: { en: "Jun 2024 — Present", es: "Jun. 2024 — Actualidad" },
    location: { en: "San José, Costa Rica · On-site", es: "San José, Costa Rica · Presencial" },
    badges: [
      { en: "Full-time since May 2026", es: "En planilla desde mayo 2026" },
      { en: "Contractor before", es: "Antes por servicios profesionales" },
    ],
    summary: {
      en: "AS9100D-certified aerospace manufacturer. I'm part of the team that designs and runs the company's custom ERP.",
      es: "Manufacturera aeroespacial certificada AS9100D. Formo parte del equipo que diseña y opera el ERP propio de la empresa.",
    },
    points: [
      {
        en: "Co-built the company ERP in TypeScript: 100+ modules, 1,800+ REST endpoints and 400+ MySQL tables, replacing 14 Power Apps, 10+ Power Automate flows and 9 Power BI dashboards.",
        es: "Co-construí el ERP de la empresa en TypeScript: más de 100 módulos, 1.800 endpoints REST y 400 tablas en MySQL, que reemplazó 14 Power Apps, más de 10 flujos de Power Automate y 9 dashboards de Power BI.",
      },
      {
        en: "Built a bilingual React 19 + Tailwind SPA (400+ routes) on an in-house design system, with BI dashboards, Excel-like grids and real-time updates.",
        es: "Desarrollé una SPA bilingüe en React 19 y Tailwind (más de 400 rutas) sobre un design system propio, con dashboards BI, grids tipo Excel y tiempo real.",
      },
      {
        en: "Migrated 440K+ historical records into MySQL with a Python/PowerShell ETL (99.7% valid rows).",
        es: "Migré más de 440.000 registros históricos a MySQL con un ETL en Python y PowerShell (99,7 % de filas válidas).",
      },
      {
        en: "Integrated Infor SyteLine, Microsoft 365 (Graph API, Entra ID) and Costa Rican services (Hacienda e-invoicing, BCCR, CCSS).",
        es: "Integré Infor SyteLine, Microsoft 365 (Graph API, Entra ID) y servicios de Costa Rica (factura electrónica de Hacienda, BCCR, CCSS).",
      },
      {
        en: "Security built in: JWT with rotating refresh tokens, role-based access with 400+ permissions, audit trail and rate limiting.",
        es: "Seguridad desde el diseño: JWT con refresh rotativo, control de acceso por roles con más de 400 permisos, auditoría y rate limiting.",
      },
      {
        en: "Automated 25 recurring processes with scheduled jobs and added generative AI (Gemini, Whisper) to 15+ workflows with human review.",
        es: "Automaticé 25 procesos recurrentes con jobs programados e integré IA generativa (Gemini, Whisper) en más de 15 procesos con revisión humana.",
      },
      {
        en: "Power Platform stage (2024–2026): Power Apps and Power Automate flows for operator bonus payments, PDF receipts and financial reports.",
        es: "Etapa Power Platform (2024–2026): Power Apps y flujos de Power Automate para pago de bonos, comprobantes en PDF y reportes financieros.",
      },
    ],
    stack: ["TypeScript", "React", "Node.js", "Express", "Prisma", "MySQL", "SQL Server", "Python", "Power Platform"],
  },
  {
    company: "BN Vital OPC",
    logo: null,
    initials: "BN",
    url: null,
    role: { en: "Administrative Assistant (Internship)", es: "Asistente Administrativo (Práctica)" },
    period: { en: "Oct 2022 — Dec 2022", es: "Oct. 2022 — Dic. 2022" },
    location: { en: "San José, Costa Rica", es: "San José, Costa Rica" },
    badges: [{ en: "Supervised internship", es: "Práctica supervisada" }],
    summary: {
      en: "Pension fund operator of Banco Nacional de Costa Rica.",
      es: "Operadora de pensiones del Banco Nacional de Costa Rica.",
    },
    points: [
      {
        en: "Prepared physical and digital legal document packages for the digitization department.",
        es: "Preparé paquetes físicos y digitales de documentación legal para el departamento de digitalización.",
      },
      {
        en: "Tracked user requests with an Excel database and handled day-to-day office tasks.",
        es: "Llevé el control de solicitudes de usuarios con una base de datos en Excel y apoyé tareas administrativas.",
      },
    ],
    stack: ["Excel", "Microsoft Office"],
  },
];

export type ProjectLink = { label: L; href: string; kind: "site" | "code" };

export type Project = {
  slug: string;
  title: string;
  tag: L;
  year: string;
  description: L;
  highlights: L[];
  stack: string[];
  cover: string | null;
  /** Extra screenshots shown in the gallery (portrait = phone screens). */
  gallery: string[];
  portrait?: boolean;
  logo?: string;
  status?: L;
  note?: L;
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "erp",
    title: "Enterprise ERP",
    tag: { en: "TechShop · Internal system", es: "TechShop · Sistema interno" },
    year: "2026",
    description: {
      en: "Modular monolith that runs an aerospace plant: finance, procurement, payroll, production scheduling, AS9100D quality and HR, with role-based access, audit trail and 25 scheduled jobs.",
      es: "Monolito modular que opera una planta aeroespacial: finanzas, compras, planilla, programación de producción, calidad AS9100D y RR. HH., con control de acceso por roles, auditoría y 25 jobs programados.",
    },
    highlights: [
      { en: "100+ modules · 1,800+ REST endpoints", es: "100+ módulos · 1.800+ endpoints REST" },
      { en: "Gantt production scheduler + SPC quality (Cp/Cpk)", es: "Programador de producción Gantt + calidad SPC (Cp/Cpk)" },
      { en: "Infor SyteLine, Microsoft 365 and Hacienda integrations", es: "Integraciones con Infor SyteLine, Microsoft 365 y Hacienda" },
    ],
    stack: ["React 19", "Node.js", "Prisma", "MySQL", "SQL Server", "Microsoft Graph", "Gemini"],
    cover: "/projects/erp/cover.webp",
    gallery: [],
    note: {
      en: "Internal system — its screens are confidential, so this card shows the company's public imagery.",
      es: "Sistema interno: sus pantallas son confidenciales, por eso esta tarjeta usa imágenes públicas de la empresa.",
    },
    links: [{ label: { en: "Company site", es: "Sitio de la empresa" }, href: "https://tsicr.com", kind: "site" }],
    featured: true,
  },
  {
    slug: "snfinance",
    title: "SNFinance",
    tag: { en: "Personal product · Android", es: "Producto propio · Android" },
    year: "2026",
    description: {
      en: "Local-first personal finance app with Snake, an AI assistant that answers questions about your own numbers. Accounts, cards, debts, monthly plan and analytics in one place.",
      es: "App de finanzas personales local-first con Snake, un asistente con IA que responde sobre tus propios números. Cuentas, tarjetas, deudas, plan del mes y análisis en un solo lugar.",
    },
    highlights: [
      { en: "~2,900 automated tests · hexagonal architecture", es: "~2.900 pruebas automatizadas · arquitectura hexagonal" },
      { en: "Gemini assistant with function calling over 45 actions", es: "Asistente Gemini con function calling sobre 45 acciones" },
      { en: "Lossless multi-device sync · 15 currencies", es: "Sincronización multi-dispositivo sin pérdida · 15 monedas" },
    ],
    stack: ["React 19", "TypeScript", "Capacitor", "Firebase", "Gemini API", "ML Kit"],
    cover: "/projects/snfinance/cover.webp",
    gallery: [
      "/projects/snfinance/1.webp",
      "/projects/snfinance/2.webp",
      "/projects/snfinance/3.webp",
      "/projects/snfinance/4.webp",
      "/projects/snfinance/5.webp",
    ],
    portrait: true,
    logo: "/projects/snfinance/logo.webp",
    status: { en: "Google Play · internal testing", es: "Google Play · prueba interna" },
    links: [{ label: { en: "Website", es: "Sitio web" }, href: "https://snfinance.app", kind: "site" }],
    featured: true,
  },
  {
    slug: "techacademy",
    title: "TechAcademy",
    tag: { en: "Training & certification platform", es: "Plataforma de capacitación y certificación" },
    year: "2025",
    description: {
      en: "Internal training system: courses with dynamic materials, timed exams with automatic grading, PDF certificates and sync with Power Automate / Dataverse.",
      es: "Sistema interno de capacitación: cursos con material dinámico, exámenes con tiempo y calificación automática, certificados en PDF y sincronización con Power Automate / Dataverse.",
    },
    highlights: [
      { en: "Exam engine with partial saves and attempt history", es: "Motor de exámenes con guardado parcial e historial de intentos" },
      { en: "Automatic PDF certificates", es: "Certificados PDF automáticos" },
      { en: "Roles: admin, instructor, employee", es: "Roles: administrador, instructor, colaborador" },
    ],
    stack: ["C#", "ASP.NET Core", "SQL Server", "Power Automate", "Dataverse"],
    cover: "/projects/techacademy/1.webp",
    gallery: ["/projects/techacademy/1.webp", "/projects/techacademy/2.webp", "/projects/techacademy/3.webp", "/projects/techacademy/4.webp", "/projects/techacademy/5.webp", "/projects/techacademy/6.webp"],
    links: [{ label: { en: "Code", es: "Código" }, href: "https://github.com/DavidSnake3/TechsopAcademy", kind: "code" }],
  },
  {
    slug: "bearfix",
    title: "BearFix",
    tag: { en: "Help desk · incident tracking", es: "Mesa de ayuda · incidencias" },
    year: "2025",
    description: {
      en: "Incident tracking with SLA-based auto-assignment by specialty and workload, ratings, a metrics dashboard and full Spanish/English support.",
      es: "Gestión de incidencias con autoasignación por especialidad, carga y SLA, calificación del servicio, dashboard de métricas y soporte completo en español e inglés.",
    },
    highlights: [
      { en: "Autotriage by specialty, workload and SLA", es: "Autotriage por especialidad, carga y SLA" },
      { en: "Role-based access with JWT", es: "Acceso por roles con JWT" },
      { en: "Dashboard with compliance reports", es: "Dashboard con reportes de cumplimiento" },
    ],
    stack: ["Angular", "TypeScript", "Node.js", "Express", "Prisma", "MySQL"],
    cover: "/projects/bearfix/1.webp",
    gallery: ["/projects/bearfix/1.webp", "/projects/bearfix/2.webp", "/projects/bearfix/3.webp", "/projects/bearfix/4.webp", "/projects/bearfix/5.webp"],
    links: [{ label: { en: "Code", es: "Código" }, href: "https://github.com/DavidSnake3/BearFix", kind: "code" }],
  },
  {
    slug: "sunrise",
    title: "Sunrise",
    tag: { en: "Cruise booking platform", es: "Plataforma de reservas de cruceros" },
    year: "2025",
    description: {
      en: "End-to-end cruise booking: itineraries, cabins and availability, payments, PDF invoices and an admin dashboard with revenue reports.",
      es: "Reservas de cruceros de punta a punta: itinerarios, cabinas y disponibilidad, pagos, facturas en PDF y un dashboard administrativo con reportes de ingresos.",
    },
    highlights: [
      { en: "Search-to-payment reservation flow", es: "Flujo de reserva de la búsqueda al pago" },
      { en: "PDF confirmations and invoices", es: "Confirmaciones y facturas en PDF" },
      { en: "Admin analytics and inventory", es: "Analítica e inventario para administración" },
    ],
    stack: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
    cover: "/projects/sunrise/1.webp",
    gallery: ["/projects/sunrise/1.webp", "/projects/sunrise/2.webp", "/projects/sunrise/3.webp", "/projects/sunrise/4.webp", "/projects/sunrise/5.webp", "/projects/sunrise/6.webp"],
    links: [{ label: { en: "Code", es: "Código" }, href: "https://github.com/DavidSnake3/Sunrise", kind: "code" }],
  },
  {
    slug: "lafit",
    title: "LAFIT",
    tag: { en: "Fitness courses e-commerce", es: "E-commerce de cursos de fitness" },
    year: "2024",
    description: {
      en: "Web platform for the Latin American Fitness Institute: course catalog, shopping cart, invoices with taxes and PDF download, blog and FAQ — built with vanilla HTML, CSS and JavaScript.",
      es: "Plataforma web del Latin American Fitness Institute: catálogo de cursos, carrito, facturas con impuestos y descarga en PDF, blog y preguntas frecuentes, hecha con HTML, CSS y JavaScript puros.",
    },
    highlights: [
      { en: "Cart with local persistence", es: "Carrito con persistencia local" },
      { en: "Automatic VAT and PDF invoices", es: "IVA automático y facturas PDF" },
      { en: "Responsive layout with CSS Grid", es: "Diseño responsive con CSS Grid" },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    cover: "/projects/lafit/1.webp",
    gallery: ["/projects/lafit/1.webp", "/projects/lafit/2.webp", "/projects/lafit/3.webp", "/projects/lafit/4.webp", "/projects/lafit/5.webp"],
    links: [{ label: { en: "Code", es: "Código" }, href: "https://github.com/DavidSnake3/LatinAmericanFitnessInstitute", kind: "code" }],
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { en: "Languages", es: "Lenguajes" }, items: ["TypeScript", "JavaScript", "SQL", "Python", "Java", "PowerShell"] },
  { group: { en: "Frontend", es: "Frontend" }, items: ["React", "Tailwind CSS", "Vite", "Zustand", "React Router", "Recharts"] },
  { group: { en: "Backend", es: "Backend" }, items: ["Node.js", "Express", "REST APIs", "Prisma", "Zod", "JWT / OAuth 2.0"] },
  { group: { en: "Data", es: "Datos" }, items: ["MySQL", "SQL Server", "Firestore", "ETL", "Power BI (DAX)"] },
  { group: { en: "Cloud & DevOps", es: "Nube y DevOps" }, items: ["Azure (Entra ID)", "Firebase", "Google Cloud", "GitHub Actions", "Git"] },
  { group: { en: "Power Platform", es: "Power Platform" }, items: ["Power Apps", "Power Automate", "Dataverse", "SharePoint"] },
  { group: { en: "AI", es: "IA" }, items: ["Gemini API", "Whisper", "Claude Code"] },
  { group: { en: "Academic", es: "Académico" }, items: ["C# / .NET", "PHP / Laravel", "Angular", "Next.js", "Flutter", "Docker"] },
];

export const education: { title: L; place: string; period: L; note?: L }[] = [
  {
    title: { en: "B.Sc. in Software Engineering", es: "Bachillerato en Ingeniería del Software" },
    place: "Universidad Técnica Nacional (UTN)",
    period: { en: "2023 — Apr 2027", es: "2023 — abr. 2027" },
    note: { en: "Final year", es: "Último año" },
  },
  {
    title: { en: "Technical diploma, Service Center Executive", es: "Técnico Medio en Ejecutivo para Centros de Servicio" },
    place: "CTP Rosario de Naranjo",
    period: { en: "2019 — 2022", es: "2019 — 2022" },
  },
];

export const certifications: { name: string; issuer: string; year: string }[] = [
  { name: "Claude Code in Action", issuer: "Anthropic", year: "2026" },
  { name: "Building with the Claude API", issuer: "Anthropic", year: "2026" },
  { name: "Model Context Protocol: Advanced Topics", issuer: "Anthropic", year: "2026" },
  { name: "JavaScript Essentials 2", issuer: "Cisco", year: "2025" },
  { name: "Data Analytics Essentials", issuer: "Cisco", year: "2024" },
  { name: "Celonis Foundations", issuer: "Celonis", year: "2024" },
  { name: "Python Essentials 1", issuer: "Cisco", year: "2023" },
  { name: "Introduction to Data Science", issuer: "Cisco", year: "2023" },
];

export const languages: L[] = [
  { en: "Spanish — native", es: "Español — nativo" },
  { en: "English — B2 (professional)", es: "Inglés — B2 (profesional)" },
];
