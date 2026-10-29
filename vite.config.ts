import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const SITE_URL_PATTERN = /^https?:\/\/[^\s/]+\/?$/

/**
 * Normaliza VITE_SITE_URL y falla si no es un dominio.
 *
 * Al copiar el dominio desde un chat se cuelan el formato de enlace markdown
 * ([url](url)) o los ángulos de un autolink (<url>). Sin limpiarlos, el
 * canonical deja de ser una URL absoluta y el Sitemap: de robots.txt se
 * invalida, que es justo lo que pasó en el primer despliegue.
 */
function normalizeSiteUrl(raw: string) {
  const trimmed = raw.trim().replace(/^<(.*)>$/, '$1')
  const markdown = /^\[([^\]]+)\]\([^)]*\)$/.exec(trimmed)
  const value = (markdown?.[1] ?? trimmed).trim()

  if (!value) return ''

  if (!SITE_URL_PATTERN.test(value)) {
    throw new Error(
      `VITE_SITE_URL no es un dominio válido ("${raw}"). Escribe solo el origen, por ejemplo: https://tu-dominio.com`,
    )
  }

  return value.replace(/\/+$/, '')
}

/**
 * Rellena las URLs absolutas de index.html con VITE_SITE_URL.
 * Si la variable no existe, elimina esas líneas: una URL relativa en
 * og:image no la lee ningún crawler.
 */
function siteUrlInHtml(siteUrl: string) {
  return {
    name: 'rgi-site-url',
    transformIndexHtml(html: string) {
      if (!siteUrl) {
        return html.replace(/^.*%VITE_SITE_URL%.*\r?\n/gm, '')
      }
      return html.replaceAll('%VITE_SITE_URL%', siteUrl)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL ?? '')

  // Vite resuelve import.meta.env leyendo process.env después de esto: así
  // site.ts recibe el valor limpio y no el que se pegó con formato.
  process.env.VITE_SITE_URL = siteUrl

  return {
    plugins: [react(), siteUrlInHtml(siteUrl)],
  }
})
