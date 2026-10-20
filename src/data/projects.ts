import type { Project } from './types'

/**
 * Borrador de la Fase 1, basado en el PLAN_WEB.
 * `repo` y `demo` quedan vacíos hasta confirmar las URLs en la Fase 2:
 * los componentes no pintan enlaces que no existan.
 */
export const projects: Project[] = [
  {
    slug: 'glucofit',
    name: 'GlucoFit',
    tagline: 'Registro y visualización de lecturas de glucosa',
    description:
      'Aplicación full-stack para apuntar las lecturas de glucosa y consultarlas a lo largo del tiempo, con una API propia en Express y Mongoose.',
    role: 'Proyecto final del módulo 3',
    stack: ['React', 'Express', 'Mongoose'],
    highlights: [
      'API propia con Express y Mongoose.',
      'Interfaz en React para registrar y consultar lecturas.',
    ],
  },
  {
    slug: 'react-assemble',
    name: 'React Assemble',
    tagline: 'Proyecto de grupo con temática Marvel',
    description:
      'Web hecha en grupo que reúne personajes, películas y videojuegos de Marvel consumiendo varias APIs.',
    role: 'Proyecto en grupo, con Andreu',
    stack: ['React', 'TMDB API', 'RAWG API', 'Superhero API', 'MSW'],
    highlights: [
      'Consumo de tres APIs externas.',
      'Mocks de red con MSW para trabajar sin depender de las APIs.',
    ],
  },
  {
    slug: 'ironheroes',
    name: 'IronHeroes',
    tagline: 'Proyecto en pareja con React Router y MSW',
    description:
      'Aplicación con varias vistas navegables, construida en pareja para practicar React Router y el trabajo con datos simulados.',
    role: 'Proyecto en pareja',
    stack: ['React', 'React Router', 'MSW'],
    highlights: ['Rutas con React Router.', 'Datos simulados con MSW.'],
  },
  {
    slug: 'spain-fighter',
    name: 'Spain Fighter',
    tagline: 'Juego de lucha en JavaScript y canvas',
    description:
      'Juego tipo Street Fighter en el que colaboré en la lógica: clases, bucle de juego, colisiones, proyectiles y selección de personaje.',
    role: 'Proyecto en equipo',
    stack: ['JavaScript', 'Canvas', 'HTML', 'CSS'],
    highlights: [
      'Game loop y gestión de estados del juego.',
      'Colisiones, proyectiles y selección de personaje.',
    ],
  },
]
