# rgi-portfolio

Web personal de **Ruben Gómez Ibáñez**, desarrollador Front-End con once años de experiencia en retail y dirección de equipo.

El objetivo es doble: que un reclutador entienda mi perfil en menos de un minuto y que el código sirva como muestra real de cómo trabajo.

**En producción:** <https://rgi-portfolio.vercel.app>

## Stack

- **React 19** + **Vite 8**
- **TypeScript** en modo estricto
- **CSS propio** con custom properties y CSS Modules (sin frameworks de UI)
- Contenido en archivos locales tipados, sin backend en esta versión

## Estructura

Este repositorio **es** la aplicación: la raíz contiene el proyecto de Vite.

```
.
├── src/
│   ├── components/  # Piezas reutilizables (Header, Button, ProjectCard...)
│   ├── sections/    # Secciones de la página de inicio
│   ├── pages/       # Vistas con ruta propia
│   ├── hooks/       # usePageMeta: metadatos del <head> por ruta
│   ├── lib/         # pageMeta y configuración del sitio
│   ├── data/        # Contenido tipado (perfil, proyectos, experiencia)
│   ├── styles/      # Tokens de diseño y estilos globales
│   └── assets/      # Foto y portadas de proyectos
├── public/          # Favicon, og.png y CV descargable
├── scripts/         # generate-seo.mjs: sitemap y robots en el build
├── api/             # Reservado para un futuro backend (ver api/README.md)
├── index.html
└── vercel.json
```

## Cómo arrancar

Requisitos: Node 20.19+ (probado con Node 24).

```bash
npm install
npm run dev
```

Otros comandos:

```bash
npm run build    # tipos + build de producción + sitemap/robots
npm run preview  # sirve la build generada
npm run lint     # analiza el código con ESLint
```

Para que el build publique `canonical`, Open Graph absoluto, `sitemap.xml` y `robots.txt` hace falta el dominio. Cópialo de `.env.example` a `.env`:

```bash
VITE_SITE_URL=https://rgi-portfolio.vercel.app
```

## Despliegue

Desplegado en Vercel y conectado a `main`: cada push publica en producción.

- **Root Directory**: vacío. La raíz del repositorio ya es la app; no hay subcarpeta que seleccionar.
- **Framework**: Vite · **Build**: `npm run build` · **Output**: `dist`.
- **Variable de entorno** (solo Production): `VITE_SITE_URL=https://rgi-portfolio.vercel.app`.

`VITE_SITE_URL` no es opcional en producción: sin ella el build omite `sitemap.xml`, `robots.txt`, la canónica y el Open Graph absoluto. Cambiarla no relanza el build por sí sola, hace falta un redeploy.

El valor tiene que ser el origen pelado, sin barra final ni ruta. El build tolera el formato de enlace que se cuela al copiar (`[url](url)`) porque invalida igualmente el `canonical` y el sitemap, y falla con un mensaje claro si lo que llega no es un dominio.

`vercel.json` define el rewrite de SPA (para que `/proyectos/:slug` funcione al refrescar), la caché inmutable de `/assets/*` y cabeceras de seguridad básicas.

## Hoja de ruta

- [x] **Fase 0** — repositorio, estructura, README y proyecto arrancando
- [x] **Fase 1** — esqueleto de todas las secciones, navegación y responsive
- [x] **Fase 2** — contenido definitivo, capturas de proyectos y CV
- [x] **Fase 3** — accesibilidad, rendimiento y SEO
- [x] **Fase 4** — despliegue en Vercel y enlaces desde LinkedIn y GitHub
  - Desplegado y verificado el 31/10/2026: producción sirve el último commit de `main`; `sitemap.xml`, `robots.txt`, canónica y Open Graph responden con el dominio correcto.
  - React Assemble enlaza su demo y su repositorio público; IronHeroes se queda sin enlaces porque no tiene URL pública.
  - Los enlaces desde LinkedIn y GitHub son manuales: sitio web en el perfil, repositorio fijado y README de perfil.

## Contenido

- El CV descargable vive en `public/cv/ruben-gomez-cv.pdf`.
- Cada proyecto tiene una ficha en `/proyectos/:slug` con su portada, stack, aportación y aprendizajes.
- Los enlaces de demo y repositorio se definen en `src/data/projects.ts`. Si un proyecto no tiene URL pública, el enlace no aparece.
- Las portadas están en `src/assets/projects/` en WebP, con variantes de 480 y 800 px para el `srcSet`.

## SEO

- `src/lib/pageMeta.ts` define título, descripción y canónica de cada ruta. `usePageMeta` los escribe en el `<head>` al navegar, y `index.html` guarda una copia estática como respaldo para los crawlers que no ejecutan JavaScript.
- `index.html` incluye Open Graph, Twitter Cards y JSON-LD de `Person`; cada ficha añade un `CreativeWork`.
- `public/og.png` (1200×630) es la imagen que se ve al compartir el enlace. Está generada con la paleta del sitio, no depende del dominio.
- `scripts/generate-seo.mjs` escribe `sitemap.xml` y `robots.txt` al final del build leyendo los slugs de `projects.ts`. Si `VITE_SITE_URL` falta o apunta a local, no genera nada y avisa: un sitemap con el dominio equivocado tarda semanas en corregirse.
- El 404 se marca `noindex` y no declara canónica.

## Accesibilidad

- «Saltar al contenido» mueve el foco a `main`, no solo el scroll.
- Al cambiar de ruta el foco pasa al contenido y una región `role="status"` anuncia el título de la página. No se aplica en la carga inicial ni al navegar a un ancla, donde el destino es una sección.
- `aria-current` en «Proyectos» mientras se está dentro de una ficha. El menú móvil cierra con Escape y devuelve el foco al botón.
- Contraste comprobado sobre los tokens: blanco sobre el acento 8,0:1, texto secundario sobre el fondo 5,5:1, anillo de foco 7,5:1.
- `prefers-reduced-motion` desactiva animaciones y scroll suave.
- Al tocar componentes hay que repetir el recorrido con teclado y pasar axe DevTools por la home, las fichas y el 404.

## Rendimiento

- Fuentes del sistema: cero peticiones y nada que bloquee el render.
- Portadas con `srcSet` (480/800/1200) y `sizes` según la rejilla. En móvil, `spain-fighter` baja de 98 KB a 24 KB.
- La foto del hero usa `srcSet`, `fetchPriority="high"` y las dimensiones reales de cada fuente para no mover el layout.
- Se midió dividir las rutas con `React.lazy`: ahorraba 0,7 KB gzip a cambio de un estado de carga y una petición extra, así que se descartó.
- Objetivo con Lighthouse móvil: rendimiento ≥ 95, accesibilidad 100, buenas prácticas 100, SEO 100.

## Decisiones de diseño

- El color, la tipografía y el espaciado viven en `src/styles/tokens.css`. El modo oscuro se añadirá después como un segundo conjunto de tokens, sin tocar los componentes.
- La paleta base es vino, negro cálido y blanco rosado, con el foco en el mismo vino del acento. Se eligió tras descartar el azul cobalto y una variante beige.
- Una sola página de inicio con todas las secciones, más una página de detalle por proyecto.
- El contenido se escribe en archivos TypeScript dentro de `src/data/`. Si falta un campo, el editor avisa.
- Las portadas se generaron a partir de capturas reales y materiales de cada proyecto, y se sirven en WebP para no cargar imágenes de más.
