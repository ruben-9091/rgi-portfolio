import rgi820 from '../assets/rgi-820.webp'
import rgi1026 from '../assets/rgi-1026.webp'
import type { NavItem, Profile } from './types'

export const profile: Profile = {
  name: 'Ruben Gómez Ibáñez',
  shortName: 'Ruben',
  role: 'Desarrollador Front-End',
  location: 'Alicante, España',
  tagline:
    'Vengo del retail, donde aprendí a escuchar, vender y coordinar equipos. Ahora construyo interfaces con React y TypeScript.',
  availability: 'Abierto a puestos Front-End y a un contrato en prácticas full-stack.',
  email: 'ruben_9091@hotmail.com',
  github: 'https://github.com/ruben-9091',
  linkedin: 'https://www.linkedin.com/in/ruben-gomez-dev',
  cv: '/cv/ruben-gomez-cv.pdf',
  photo: {
    alt: 'Retrato de Ruben Gómez Ibáñez',
    sources: [
      { src: rgi820, width: 820, height: 599 },
      { src: rgi1026, width: 1026, height: 750 },
    ],
  },
}

export const navItems: NavItem[] = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contacto', label: 'Contacto' },
]
