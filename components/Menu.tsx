/**
 * CSR (Client-Side Rendering) Component
 * This component uses 'use client' directive to enable client-side interactivity
 * The menu state is managed on the client using React hooks
 */
'use client'

import { useState } from 'react'
import styles from '../styles/home.module.scss'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div 
        className={`${styles.menu} ${isOpen ? styles.change : ''}`} 
        onClick={handleClick}
      >
        <div className={styles.menuLine}></div>
        <div className={`${styles.menuLine} ${styles.menuLine2}`}></div>
        <div className={styles.menuLine}></div>
      </div>
      
      <nav className={`${styles.navbar} ${isOpen ? styles.change : ''}`}>
        <div className={styles.navList}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter-square"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-square"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram-square"></i></a>
        </div>
        <p className={styles.copyrightText}>
          Copyright &copy; Laveena Maharshi. All Rights Reserved
        </p>
      </nav>
    </>
  )
}

