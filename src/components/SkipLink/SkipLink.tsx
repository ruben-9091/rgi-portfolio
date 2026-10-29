import styles from './SkipLink.module.css'

export function SkipLink() {
  /*
   * El ancla ya lleva el scroll hasta #contenido, pero no siempre mueve el
   * foco. Lo movemos nosotros para que el siguiente Tab empiece dentro del
   * contenido y no vuelva a la cabecera.
   */
  function focusMain() {
    document.getElementById('contenido')?.focus({ preventScroll: true })
  }

  return (
    <a className={styles.skip} href="#contenido" onClick={focusMain}>
      Saltar al contenido
    </a>
  )
}
