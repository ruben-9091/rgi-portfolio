import { profile } from '../data/profile'
import { projects } from '../data/projects'

/**
 * Metadatos de cada ruta en un único sitio.
 *
 * Lo consumen el anuncio de navegación (lectores de pantalla) y el hook que
 * escribe title, description, canonical y Open Graph en el <head>. Así no hay
 * dos fuentes de verdad para el nombre de la página.
 */

export type PageMeta = {
  title: string
  description: string
  /** Ruta canónica, siempre empezando por "/" */
  path: string
  /** true en 404: no debe indexarse */
  noindex: boolean
}

const HOME: PageMeta = {
  title: `${profile.name} · ${profile.role}`,
  description:
    'Portfolio de Ruben Gómez Ibáñez, desarrollador Front-End con base en retail y dirección de equipo. Proyectos, experiencia y contacto.',
  path: '/',
  noindex: false,
}

const NOT_FOUND: PageMeta = {
  title: `Página no encontrada · ${profile.name}`,
  description: 'La página que buscas no existe o ha cambiado de sitio.',
  path: '/404',
  noindex: true,
}

function truncate(text: string, max = 155): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : cut.length)}…`
}

/** Normaliza "/proyectos/x/" a "/proyectos/x" y "" a "/" */
export function normalizePath(pathname: string): string {
  const withoutTrailing = pathname.replace(/\/+$/, '')
  return withoutTrailing === '' ? '/' : withoutTrailing
}

export function getPageMeta(pathname: string): PageMeta {
  const path = normalizePath(pathname)

  if (path === '/') return HOME

  const match = /^\/proyectos\/([^/]+)$/.exec(path)
  const project = match ? projects.find((item) => item.slug === match[1]) : undefined

  if (project) {
    return {
      title: `${project.name} · ${profile.name}`,
      description: truncate(`${project.tagline}. ${project.description}`),
      path,
      noindex: false,
    }
  }

  return { ...NOT_FOUND, path }
}
