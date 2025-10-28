/**
 * SSG (Static Site Generation) Component
 * Static footer content that is pre-rendered at build time
 * No dynamic data fetching required
 */
import styles from '../styles/home.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div>
        <h2>Contact Us</h2>
        <p>Kids Website - Laveena Maharshi © 2025</p>
      </div>
    </footer>
  )
}

