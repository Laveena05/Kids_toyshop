/**
 * SSR/ISR Component
 * Renders server-side data passed as props
 * Used with getServerSideProps (SSR) or getStaticProps with revalidate (ISR)
 * Content is fetched on the server before rendering
 */
import styles from '../styles/home.module.scss'

interface DailyAdviceProps {
  advice: string[]
}

export default function DailyAdvice({ advice }: DailyAdviceProps) {
  return (
    <section className={styles.section3}>
      <h1 className={styles.sectionHeading}>Daily Advice</h1>
      {advice.map((text, index) => (
        <p key={index} className={styles.advice}>
          {text}
        </p>
      ))}
    </section>
  )
}

