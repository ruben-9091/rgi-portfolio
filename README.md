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
│   │   ├── data/        # Contenido tipado (perfil, proyectos, experiencia)
│   │   ├── styles/      # Tokens de diseño y estilos globales
│   │   └── assets/      # Imágenes y CV
│   └── public/
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
npm run build    # comprueba tipos y genera la build de producción
npm run preview  # sirve la build generada
npm run lint     # analiza el código con ESLint
```

## Hoja de ruta

- [x] **Fase 0** — repositorio, estructura, README y proyecto arrancando
- [ ] **Fase 1** — esqueleto de todas las secciones, navegación y responsive
- [ ] **Fase 2** — contenido definitivo, capturas de proyectos y CV
- [ ] **Fase 3** — accesibilidad, rendimiento y SEO
- [ ] **Fase 4** — despliegue en Vercel y enlaces desde LinkedIn y GitHub

## Decisiones de diseño

- El color, la tipografía y el espaciado viven en `web/src/styles/tokens.css`. El modo oscuro se añadirá después como un segundo conjunto de tokens, sin tocar los componentes.
- Una sola página de inicio con todas las secciones, más una página de detalle por proyecto.
- El contenido se escribe en archivos TypeScript dentro de `web/src/data/`. Si falta un campo, el editor avisa.
