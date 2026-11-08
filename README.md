# Portafolio — David Villegas

- Inglés: **https://davidsnake3.github.io/Portfolio/**
- Español: **https://davidsnake3.github.io/Portfolio/es/**

Next.js 15 (exportación estática) + Tailwind CSS 4 + Motion. Tema claro/oscuro y selector EN/ES en la barra superior; el sitio recuerda la elección en cada navegador.

## Cambiar contenido (sin tocar diseño)
- **`src/data/profile.ts`**: todo el contenido (perfil, experiencia, proyectos, habilidades, educación y certificaciones). Cada texto tiene su versión `en` y `es`, una al lado de la otra.
- **`src/data/ui.ts`**: textos de la interfaz (menú, botones, títulos de sección).

Después: `git add . && git commit -m "Actualizar contenido" && git push`. GitHub Actions publica el sitio solo en unos 2 minutos.

## Imágenes
| Carpeta | Qué hay |
|---|---|
| `public/avatar.jpg` | Foto de perfil (la de LinkedIn) |
| `public/cv/` | CVs descargables `David-Villegas-CV-EN.pdf` y `-ES.pdf` |
| `public/brand/` | Logo de TechShop (`techshop.webp`) y su ícono (`techshop-mark.webp`) |
| `public/projects/<proyecto>/` | `1.webp`, `2.webp`… = galería de pantallas; la primera es la portada |
| `public/projects/snfinance/` | Pantallas de la ficha v3 de Google Play, imagen del sitio snfinance.app y logo cobre |
| `public/projects/erp/` | Imágenes **públicas** de tsicr.com (las pantallas del ERP son internas y confidenciales) |
| `public/og.png` | Imagen que se ve al compartir el enlace (1200×630) |

## Agregar un proyecto
Copiá un bloque dentro de `projects` en `profile.ts`, poné las capturas en `public/projects/<slug>/` y listalas en `gallery`. Si no tiene capturas, dejá `cover: null` y `gallery: []`.

## Correr en local (opcional)
```bash
npm install
npm run dev      # http://localhost:3000/Portfolio  y  /Portfolio/es
```

## Estructura
```
src/data/profile.ts        ← CONTENIDO en inglés y español
src/data/ui.ts             ← textos de la interfaz
src/app/page.tsx           ← versión en inglés  (/)
src/app/es/page.tsx        ← versión en español (/es/)
src/components/            ← secciones: hero (bento), experiencia, proyectos + galería, habilidades, educación, contacto
src/components/ui/         ← efectos: aparición con desenfoque, contador, marquesina, tarjeta con foco de luz
.github/workflows/deploy.yml ← publicación automática en GitHub Pages
```
La versión anterior del sitio (Once UI) quedó respaldada en la rama `legacy-v1`.
