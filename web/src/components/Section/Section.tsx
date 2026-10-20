import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  /** id usado por la navegación (#sobre-mi, #proyectos...) */
  id: string
  eyebrow: string
  title: string
  lead?: string
  tone?: 'default' | 'muted'
  children?: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  tone = 'default',
  children,
}: SectionProps) {
  const className =
    tone === 'muted' ? `${styles.section} ${styles.muted}` : styles.section

  return (
    <section id={id} className={className} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
