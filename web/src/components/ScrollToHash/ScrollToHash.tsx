import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router no hace scroll a los anclajes por sí solo.
 * Este componente lleva al destino de #hash y, si no hay hash, arriba.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 })
      return
    }

    const target = document.getElementById(hash.slice(1))
    if (!target) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [pathname, hash])

  return null
}
