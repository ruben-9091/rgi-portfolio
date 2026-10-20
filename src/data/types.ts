/**
 * Tipos del contenido del portfolio.
 *
 * Todo lo que se escribe en la web pasa por aquí. Si falta un campo,
 * TypeScript avisa antes de llegar al navegador.
 */

export type NavItem = {
  /** id de la sección dentro de la página de inicio */
  id: string
  label: string
}

export type PhotoSource = {
  src: string
  width: number
}

export type Profile = {
  name: string
  shortName: string
  role: string
  location: string
  /** Frase corta que resume el perfil */
  tagline: string
  /** Texto de presentación, en primera persona */
  intro: string
  availability: string
  email: string
  github: string
  linkedin: string
  photo: {
    alt: string
    sources: PhotoSource[]
  }
}

export type ExperienceKind = 'Trabajo' | 'Formación'

export type ExperienceItem = {
  id: string
  role: string
  organisation: string
  /** Periodo visible en la línea de tiempo */
  period: string
  kind: ExperienceKind
  summary: string
  highlights: string[]
}

export type Project = {
  /** Identificador usado en la URL /proyectos/:slug */
  slug: string
  name: string
  tagline: string
  description: string
  role: string
  stack: string[]
  highlights: string[]
  /** Opcionales: si no existen, el enlace no se pinta */
  repo?: string
  demo?: string
}

export type SkillGroup = {
  id: string
  title: string
  summary: string
  skills: string[]
}
