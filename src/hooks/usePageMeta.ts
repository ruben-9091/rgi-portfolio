import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageMeta } from '../lib/pageMeta'
import { absoluteUrl, hasSiteUrl } from '../lib/site'

/**
 * Mantiene el <head> al día en cada ruta.
 *
 * Se actualizan las etiquetas que ya existen en index.html en lugar de crear
 * otras nuevas: duplicar `description` u `og:title` confunde a los crawlers.
 * El HTML estático queda como respaldo para los que no ejecutan JavaScript.
 */

function setMeta(attribute: 'name' | 'property', key: string, content: string | null) {
  const selector = `meta[${attribute}="${key}"]`
  const existing = document.head.querySelector<HTMLMetaElement>(selector)

  if (content === null) {
    existing?.remove()
    return
  }

  if (existing) {
    existing.setAttribute('content', content)
    return
  }

  const tag = document.createElement('meta')
  tag.setAttribute(attribute, key)
  tag.setAttribute('content', content)
  document.head.append(tag)
}

function setCanonical(href: string | null) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (href === null) {
    existing?.remove()
    return
  }

  if (existing) {
    existing.href = href
    return
  }

  const link = document.createElement('link')
  link.rel = 'canonical'
  link.href = href
  document.head.append(link)
}

export function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getPageMeta(pathname)
    document.title = meta.title

    setMeta('name', 'description', meta.description)
    setMeta('name', 'robots', meta.noindex ? 'noindex, follow' : null)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)

    // En una página noindex no tiene sentido declarar canónica
    const canonical = hasSiteUrl && !meta.noindex ? absoluteUrl(meta.path) : null
    setCanonical(canonical)
    setMeta('property', 'og:url', canonical)
  }, [pathname])
}
