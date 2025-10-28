/**
 * SSG (Static Site Generation) Component
 * Static hero section that is pre-rendered at build time
 * No dynamic data fetching - pure static content
 */
import styles from '../styles/home.module.scss'

export default function Hero() {
  const letters = ['K', 'i', 'd', 's']
  
  return (
    <section className={styles.section1} id="home">
      <h1 className={styles.section1Heading}>
        {letters.map((letter, index) => (
          <span key={index} data-letter={letter}>
            {letter}
          </span>
        ))}
      </h1>
    </section>
  )
}

