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
  height: number
}

export type ImageSource = {
  src: string
  width: number
}

export type ImageAsset = {
  /** Fallback y variante mayor; el navegador elegirá de `sources` */
  src: string
  width: number
  height: number
  /** Variantes para srcSet, ordenadas de menor a mayor */
  sources: ImageSource[]
  alt: string
}

export type Profile = {
  name: string
  shortName: string
  role: string
  location: string
  /** Frase corta que resume el perfil */
  tagline: string
  availability: string
  email: string
  github: string
  linkedin: string
  /** Ruta pública del CV en PDF */
  cv: string
  photo: {
    alt: string
    sources: PhotoSource[]
  }
}

export type AboutContent = {
  title: string
  paragraphs: string[]
}

export type ExperienceKind = 'Trabajo' | 'Formación'

export type ExperienceItem = {
  id: string
  role: string
  organisation: string
  /** Periodo visible en la línea de tiempo. Omitir si no aplica. */
  period?: string
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
  /** Qué hice yo en el proyecto */
  highlights: string[]
  /** Qué aprendí con él */
  learnings: string[]
  image: ImageAsset
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
