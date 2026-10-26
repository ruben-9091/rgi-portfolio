import glucofitCover from '../assets/projects/glucofit.webp'
import ironheroesCover from '../assets/projects/ironheroes.webp'
import reactAssembleCover from '../assets/projects/react-assemble.webp'
import spainFighterCover from '../assets/projects/spain-fighter.webp'
import type { Project } from './types'

/**
 * Proyectos de la Fase 2.
 *
 * `repo` y `demo` solo se rellenan cuando la URL existe y es pública.
 * Los enlaces que faltan no se pintan.
 */
export const projects: Project[] = [
  {
    slug: 'glucofit',
    name: 'GlucoFit',
    tagline: 'Registro y visualización de lecturas de glucosa',
    description:
      'Aplicación full-stack para apuntar las lecturas de glucosa y consultarlas a lo largo del tiempo, con contenido de apoyo sobre ejercicio y nutrición. Incluye autenticación, rutas protegidas y una API propia.',
    role: 'Proyecto final del módulo 3 · IronHack',
    stack: [
      'React',
      'Vite',
      'React Router',
      'React Hook Form',
      'Axios',
      'Recharts',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
    ],
    highlights: [
      'Registro de controles con valor, momento del día, insulina y notas.',
      'Gráficos de evolución semanal y mensual de glucosa e insulina.',
      'Autenticación por sesión y rutas protegidas por usuario.',
      'Ejercicios y recetas organizados por categorías.',
    ],
    learnings: [
      'Autenticación con sesiones y cookies.',
      'Modelado de datos con Mongoose.',
      'Visualización de datos con Recharts.',
      'Despliegue separado del frontend en Netlify y la API en Fly.io.',
    ],
    image: {
      src: glucofitCover,
      width: 1200,
      height: 675,
      alt: 'Móvil con la pantalla de GlucoFit mostrando el gráfico de glucosa de los últimos días.',
    },
    repo: 'https://github.com/ruben-9091/GlucoFit',
    demo: 'https://gluco-fit.netlify.app',
  },
  {
    slug: 'react-assemble',
    name: 'React Assemble',
    tagline: 'Proyecto de grupo con temática Marvel',
    description:
      'Web hecha en grupo que reúne personajes, películas y videojuegos de Marvel. El contenido se compone a partir de tres APIs externas y se puede desarrollar sin conexión gracias a los mocks de red.',
    role: 'Proyecto en grupo · Con Andreu',
    stack: ['React', 'TMDB API', 'RAWG API', 'Superhero API', 'MSW'],
    highlights: [
      'Consumo de TMDB, RAWG y Superhero API.',
      'Mocks de red con MSW para trabajar sin depender de las APIs.',
      'Interfaz temática de Marvel construida en equipo.',
    ],
    learnings: [
      'Consumo y composición de varias APIs externas.',
      'Datos simulados con MSW.',
      'Coordinación con otro desarrollador.',
    ],
    image: {
      src: reactAssembleCover,
      width: 1200,
      height: 675,
      alt: 'Portada de React Assemble, proyecto de grupo sobre Marvel.',
    },
  },
  {
    slug: 'ironheroes',
    name: 'IronHeroes',
    tagline: 'Proyecto en pareja con React Router y MSW',
    description:
      'Aplicación con varias vistas navegables, construida en pareja para practicar React Router y el trabajo con datos simulados.',
    role: 'Proyecto en pareja',
    stack: ['React', 'React Router', 'MSW'],
    highlights: [
      'Rutas y vistas con React Router.',
      'Datos simulados con MSW.',
      'Trabajo en pareja sobre una base común.',
    ],
    learnings: [
      'Diseño de rutas y navegación.',
      'Separación entre vistas y servicios de datos.',
      'Trabajo coordinado en pareja.',
    ],
    image: {
      src: ironheroesCover,
      width: 1200,
      height: 675,
      alt: 'Portada de IronHeroes, proyecto en pareja con React Router y MSW.',
    },
  },
  {
    slug: 'spain-fighter',
    name: 'Spain Fighter',
    tagline: 'Juego de lucha en JavaScript y canvas',
    description:
      'Juego tipo Street Fighter en el que colaboré en la lógica: clases, bucle de juego, colisiones, proyectiles y selección de personaje. Los escenarios están inspirados en localizaciones de España.',
    role: 'Proyecto en equipo',
    stack: ['JavaScript', 'Canvas', 'HTML', 'CSS'],
    highlights: [
      'Game loop y gestión de estados del juego.',
      'Colisiones, proyectiles y selección de personaje.',
      'Escenarios y personajes inspirados en España.',
    ],
    learnings: [
      'Programación orientada a objetos en JavaScript.',
      'Canvas, sprites y animación.',
      'Trabajo en equipo sobre un código común.',
    ],
    image: {
      src: spainFighterCover,
      width: 1200,
      height: 675,
      alt: 'Portada de Spain Fighter con el logotipo del juego sobre fondo arcade.',
    },
    repo: 'https://github.com/ruben-9091/Project-js-streetfighter',
  },
]
