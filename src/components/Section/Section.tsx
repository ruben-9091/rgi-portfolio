import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  /** id usado por la navegación (#sobre-mi, #proyectos...) */
  id: string
  eyebrow: string
  title: string
  lead?: string
  tone?: 'default' | 'muted'
  /** `split` pone el título a la izquierda y el contenido a la derecha */
  layout?: 'stacked' | 'split'
  children?: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  tone = 'default',
  layout = 'stacked',
  children,
}: SectionProps) {
  const sectionClassName =
    tone === 'muted' ? `${styles.section} ${styles.muted}` : styles.section
  const innerClassName =
    layout === 'split' ? `${styles.inner} ${styles.split}` : styles.inner

  return (
    <section
      id={id}
      className={sectionClassName}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className={innerClassName}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id={`${id}-title`} className={styles.title}>
              {title}
            </h2>
            {lead ? <p className={styles.lead}>{lead}</p> : null}
          </header>
          {children}
        </div>
      </div>
    </section>
  )
}
