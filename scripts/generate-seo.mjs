import fs from 'node:fs'
import path from 'node:path'

/**
 * Genera sitemap.xml y robots.txt en dist/ a partir del dominio público.
 *
 * Sin VITE_SITE_URL no escribe nada: un sitemap con el dominio equivocado
 * indexa mal y tarda semanas en corregirse. Se ejecuta al final de `npm run
 * build`, así que en Vercel basta con definir la variable en el proyecto.
 */

const root = process.cwd()
const dist = path.join(root, 'dist')

function readEnvFile(file) {
  if (!fs.existsSync(file)) return {}
  const env = {}
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = /^\s*([A-Z0-9_]+)\s*=\s*(.*)$/.exec(line)
    if (!match) continue
    env[match[1]] = match[2].replace(/^['"]|['"]$/g, '').trim()
  }
  return env
}

const fileEnv = {
  ...readEnvFile(path.join(root, '.env')),
  ...readEnvFile(path.join(root, '.env.local')),
  ...readEnvFile(path.join(root, '.env.production')),
  ...readEnvFile(path.join(root, '.env.production.local')),
}

const SITE_URL_PATTERN = /^https?:\/\/[^\s/]+\/?$/

/**
 * Misma limpieza que en vite.config.ts: acepta [url](url) y <url> porque es lo
 * que se cuela al copiar el dominio, y rechaza cualquier otra cosa. Repetida
 * aquí porque este script corre en un proceso de Node aparte.
 */
function normalizeSiteUrl(raw) {
  const trimmed = (raw ?? '').trim().replace(/^<(.*)>$/, '$1')
  const markdown = /^\[([^\]]+)\]\([^)]*\)$/.exec(trimmed)
  const value = (markdown?.[1] ?? trimmed).trim()

  if (!value) return ''

  if (!SITE_URL_PATTERN.test(value)) {
    console.error(
      `[seo] VITE_SITE_URL no es un dominio válido ("${raw}"). Escribe solo el origen, por ejemplo: https://tu-dominio.com`,
    )
    process.exit(1)
  }

  return value.replace(/\/+$/, '')
}

const siteUrl = normalizeSiteUrl(
  process.env.VITE_SITE_URL || fileEnv.VITE_SITE_URL || '',
)

if (!siteUrl) {
  console.warn(
    '[seo] VITE_SITE_URL no definida: no se generan sitemap.xml ni robots.txt.',
  )
  process.exit(0)
}

if (/localhost|127\.0\.0\.1/.test(siteUrl)) {
  console.warn(
    '[seo] VITE_SITE_URL apunta a local: no se generan sitemap.xml ni robots.txt.',
  )
  process.exit(0)
}

if (!fs.existsSync(dist)) {
  console.error('[seo] No existe dist/. Ejecuta este script después de vite build.')
  process.exit(1)
}

// Los slugs viven en el contenido tipado; se leen del fuente para no mantener
// una segunda lista. Si algún día se mueven a JSON, este es el único punto.
const projectsSource = fs.readFileSync(
  path.join(root, 'src/data/projects.ts'),
  'utf8',
)
const slugs = [...projectsSource.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(
  (match) => match[1],
)

if (slugs.length === 0) {
  console.error('[seo] No se ha encontrado ningún slug en src/data/projects.ts')
  process.exit(1)
}

const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: '/', priority: '1.0' },
  ...slugs.map((slug) => ({ loc: `/proyectos/${slug}`, priority: '0.8' })),
]

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.flatMap((url) => [
    '  <url>',
    `    <loc>${siteUrl}${url.loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <priority>${url.priority}</priority>`,
    '  </url>',
  ]),
  '</urlset>',
  '',
].join('\n')

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  '',
].join('\n')

fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap, 'utf8')
fs.writeFileSync(path.join(dist, 'robots.txt'), robots, 'utf8')

console.log(`[seo] sitemap.xml y robots.txt generados para ${siteUrl} (${urls.length} URLs)`)
