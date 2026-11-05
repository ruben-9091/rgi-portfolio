import { useEffect, useMemo, useRef, useState } from 'react'
import WebThreads from '../WebThreads/WebThreads'
import styles from './WebThreadsBackground.module.css'

type Tone = 'default' | 'muted'

type WebThreadsBackgroundProps = {
  /** Tono de la sección: claro por defecto, oscuro en las secciones `muted`. */
  tone?: Tone
}

type Palette = {
  background: string
  colors: string[]
  core: string
}

/** Lee un token de color de `:root`; si no existe, usa el valor de respaldo. */
function readToken(name: string, fallback: string) {
  if (typeof window === 'undefined') return fallback

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()

  return value || fallback
}

/*
 * Los colores salen de los tokens para que el fondo siga la paleta de cada
 * sección sin duplicar valores. En claro dibujamos tinta sobre gris; en oscuro,
 * líneas lima con glow sobre el negro de los bloques `muted`.
 */
function readPalette(tone: Tone): Palette {
  if (tone === 'muted') {
    return {
      background: readToken('--color-dark', '#111110'),
      colors: [
        readToken('--color-line-bright', '#c8f52c'),
        readToken('--color-line', '#9dc400'),
        readToken('--color-on-dark', '#f2f2ec'),
      ],
      core: readToken('--color-line-bright', '#c8f52c'),
    }
  }

  return {
    background: readToken('--color-bg', '#d8d8d2'),
    colors: [
      readToken('--color-ink', '#0a0a0a'),
      readToken('--color-ink-soft', '#2b2b27'),
      readToken('--color-line', '#9dc400'),
    ],
    core: readToken('--color-ink', '#0a0a0a'),
  }
}

export function WebThreadsBackground({
  tone = 'default',
}: WebThreadsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const everActive = useRef(false)
  const [active, setActive] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )
  const [introPlayed, setIntroPlayed] = useState(false)

  const palette = useMemo(() => readPalette(tone), [tone])
  const isDark = tone === 'muted'

  useEffect(() => {
    const container = containerRef.current
    if (!container || typeof IntersectionObserver === 'undefined') return

    // Monta el canvas 300 px antes de entrar en pantalla y lo destruye al
    // salir: nunca hay más de uno o dos contextos WebGL vivos a la vez.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting)
        setActive(visible)

        if (visible) {
          everActive.current = true
        } else if (everActive.current) {
          // El canvas ya está desmontado: la próxima vez se muestra sin intro.
          setIntroPlayed(true)
        }
      },
      { rootMargin: '300px 0px' },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={styles.layer} aria-hidden="true">
      {active ? (
        <WebThreads
          colors={palette.colors}
          coreColor={palette.core}
          backgroundColor={palette.background}
          lightMode={!isDark}
          threadCount={6}
          spread={isDark ? 0.22 : 0.2}
          opacity={isDark ? 0.62 : 0.35}
          thickness={0.9}
          glow={0.02}
          brightness={isDark ? 0.55 : 0.6}
          grain={0.05}
          fade={0.15}
          dpr={1.5}
          intro={!introPlayed}
        />
      ) : null}
    </div>
  )
}
