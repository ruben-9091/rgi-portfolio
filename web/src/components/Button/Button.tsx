import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  /** Añade target y rel para enlaces que salen de la web */
  external?: boolean
}

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  )
}
