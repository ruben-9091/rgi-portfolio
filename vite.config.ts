import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

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
  const siteUrl = (env.VITE_SITE_URL ?? '').trim().replace(/\/+$/, '')

  return {
    plugins: [react(), siteUrlInHtml(siteUrl)],
  }
})
