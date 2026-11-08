# Portafolio — David Villegas

Sitio: **https://davidsnake3.github.io/Portfolio/** · Next.js 15 (exportación estática) + Tailwind CSS 4 + Motion.

## Cambiar contenido (sin tocar diseño)
Todo el texto está en **`src/data/profile.ts`**: titular, experiencia, proyectos, habilidades, educación y certificaciones.
1. Editá ese archivo.
2. `git add . && git commit -m "Actualizar contenido" && git push`
3. GitHub Actions publica el sitio solo, en unos 2 minutos.

## Imágenes y archivos
- Foto de perfil: `public/avatar.jpg` (la misma de LinkedIn).
- CVs descargables: `public/cv/David-Villegas-CV-EN.pdf` y `-ES.pdf`. Al regenerar los CVs en `Busqueda-Empleo/cv`, se copian aquí con el mismo nombre.
- Capturas de proyectos: `public/projects/*.webp` (1200 px de ancho), referenciadas en `profile.ts` como `"/projects/nombre.webp"`.

## Agregar un proyecto
Copiá un bloque dentro de `projects` en `profile.ts`. Si no tiene captura, poné `image: null`.

## Correr en local (opcional)
```bash
npm install
npm run dev      # http://localhost:3000/Portfolio
```

## Estructura
```
src/data/profile.ts         ← CONTENIDO (lo único que se edita normalmente)
src/components/sections/    ← secciones (hero, experiencia, proyectos…)
src/components/ui/          ← efectos: aparición con desenfoque, contador, marquesina, tarjeta con foco de luz
.github/workflows/deploy.yml← publicación automática en GitHub Pages
```
La versión anterior del sitio (Once UI) quedó respaldada en la rama `legacy-v1`.
