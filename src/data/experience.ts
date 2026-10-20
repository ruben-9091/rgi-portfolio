import type { ExperienceItem } from './types'

/**
 * Borrador de la Fase 1. Los textos definitivos se revisan en la Fase 2.
 * No se añaden fechas ni cargos que no estén en el PLAN_WEB.
 */
export const experience: ExperienceItem[] = [
  {
    id: 'el-corte-ingles',
    role: 'Responsable de planta',
    organisation: 'El Corte Inglés',
    period: 'Once años',
    kind: 'Trabajo',
    summary: 'Pasé de vender en planta a coordinar al equipo.',
    highlights: [
      'Coordinaba horarios, vacaciones e incidencias de 16 personas repartidas en dos turnos.',
      'Cuatro años seguidos fui la persona con más ventas de mi planta.',
      'Reconocimientos internos por mi trabajo y por mi compañerismo.',
    ],
  },
  {
    id: 'ironhack',
    role: 'Bootcamp Full-Stack',
    organisation: 'IronHack',
    kind: 'Formación',
    summary:
      'Formación full-stack con React, Node, Express y MongoDB, y proyectos en equipo.',
    highlights: [
      'Proyecto final de módulo: GlucoFit, una app full-stack para registrar lecturas de glucosa.',
      'Proyectos en grupo con React, consumo de varias APIs y mocks de red con MSW.',
    ],
  },
]
