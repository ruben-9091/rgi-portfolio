import type { SkillGroup } from './types'

/** Borrador de la Fase 1, limitado a lo que aparece en el PLAN_WEB. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Front-End',
    summary: 'Lo que uso para construir interfaces.',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React Router'],
  },
  {
    id: 'backend',
    title: 'Back-End',
    summary: 'Lo que he trabajado en el bootcamp.',
    skills: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    summary: 'El día a día del proyecto.',
    skills: ['Git', 'GitHub', 'Vite', 'MSW', 'APIs REST'],
  },
  {
    id: 'gestion',
    title: 'Gestión y ventas',
    summary: 'Once años de retail, resumidos.',
    skills: [
      'Coordinación de equipos',
      'Horarios y vacaciones',
      'Atención al cliente',
      'Ventas',
    ],
  },
]
