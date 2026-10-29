# rgi-portfolio

Web personal de **Ruben Gómez Ibáñez**, desarrollador Front-End con once años de experiencia en retail y dirección de equipo.

El objetivo es doble: que un reclutador entienda mi perfil en menos de un minuto y que el código sirva como muestra real de cómo trabajo.

## Stack

- **React 19** + **Vite 8**
- **TypeScript** en modo estricto
- **CSS propio** con custom properties y CSS Modules (sin frameworks de UI)
- Contenido en archivos locales tipados, sin backend en esta versión

## Estructura

```
my-web/
├── web/                 # Aplicación React + Vite
│   ├── src/
│   │   ├── components/  # Piezas reutilizables (Header, Button, ProjectCard...)
│   │   ├── sections/    # Secciones de la página de inicio
│   │   ├── pages/       # Vistas con ruta propia
│   │   ├── hooks/       # usePageMeta: metadatos del <head> por ruta
│   │   ├── lib/         # pageMeta y configuración del sitio
│   │   ├── data/        # Contenido tipado (perfil, proyectos, experiencia)
│   │   ├── styles/      # Tokens de diseño y estilos globales
│   │   └── assets/      # Foto y portadas de proyectos
│   ├── public/          # Favicon, og.png y CV descargable
│   └── scripts/         # generate-seo.mjs: sitemap y robots en el build
└── api/                 # Reservado para un futuro backend (ver api/README.md)
```

## Cómo arrancar

Requisitos: Node 20.19+ (probado con Node 24).

```bash
cd web
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
VITE_SITE_URL=https://tu-dominio.com
```

## Hoja de ruta

- [x] **Fase 0** — repositorio, estructura, README y proyecto arrancando
- [x] **Fase 1** — esqueleto de todas las secciones, navegación y responsive
- [x] **Fase 2** — contenido definitivo, capturas de proyectos y CV
- [x] **Fase 3** — accesibilidad, rendimiento y SEO
- [ ] **Fase 4** — despliegue en Vercel y enlaces desde LinkedIn y GitHub

## Contenido

- El CV descargable vive en `web/public/cv/ruben-gomez-cv.pdf`.
- Cada proyecto tiene una ficha en `/proyectos/:slug` con su portada, stack, aportación y aprendizajes.
- Los enlaces de demo y repositorio se definen en `web/src/data/projects.ts`. Si un proyecto no tiene URL pública, el enlace no aparece.
- Las portadas están en `web/src/assets/projects/` en WebP, con variantes de 480 y 800 px para el `srcSet`.

## SEO

- `web/src/lib/pageMeta.ts` define título, descripción y canónica de cada ruta. `usePageMeta` los escribe en el `<head>` al navegar, y `index.html` guarda una copia estática como respaldo para los crawlers que no ejecutan JavaScript.
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

- El color, la tipografía y el espaciado viven en `web/src/styles/tokens.css`. El modo oscuro se añadirá después como un segundo conjunto de tokens, sin tocar los componentes.
- La paleta base es vino, negro cálido y blanco rosado, con el foco en el mismo vino del acento. Se eligió tras descartar el azul cobalto y una variante beige.
- Una sola página de inicio con todas las secciones, más una página de detalle por proyecto.
- El contenido se escribe en archivos TypeScript dentro de `web/src/data/`. Si falta un campo, el editor avisa.
- Las portadas se generaron a partir de capturas reales y materiales de cada proyecto, y se sirven en WebP para no cargar imágenes de más.
