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
  intro:
    'Once años en El Corte Inglés me enseñaron cómo funciona un equipo cuando hay prisa, cómo se atiende a alguien que no sabe lo que busca y cómo se sostienen las ventas mes a mes. Ahora quiero llevar esa misma cabeza a los productos digitales, con React como herramienta principal.',
  availability: 'Abierto a puestos Front-End y a un contrato en prácticas full-stack.',
  email: 'ruben_9091@hotmail.com',
  github: 'https://github.com/ruben-9091',
  linkedin: 'https://www.linkedin.com/in/ruben-gomez-dev',
  photo: {
    alt: 'Retrato de Ruben Gómez Ibáñez',
    sources: [
      { src: rgi820, width: 820 },
      { src: rgi1026, width: 1026 },
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
