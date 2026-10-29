/**
 * URL pública del sitio.
 *
 * Sin ella no se generan canonical, sitemap ni Open Graph absolutos: publicar
 * un dominio equivocado es peor que no tenerlos. Se define en `.env` (local) o
 * en las variables de entorno del hosting (producción).
 */
const raw = import.meta.env.VITE_SITE_URL?.trim() ?? ''

/** Sin barra final, para concatenar rutas sin duplicarla */
export const siteUrl = raw.replace(/\/+$/, '')

export const hasSiteUrl = siteUrl.length > 0

/** Une el dominio con una ruta interna ("/", "/proyectos/glucofit") */
export function absoluteUrl(path: string): string {
  return hasSiteUrl ? `${siteUrl}${path}` : ''
}
