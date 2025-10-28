/**
 * CSR (Client-Side Rendering) Component
 * Interactive toy card with flip animation
 * Uses client-side state to handle the card interaction
 */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/home.module.scss'

interface ToyCardProps {
  heading: string
  image: string
  description: string
}

export default function ToyCard({ heading, image, description }: ToyCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const buttonLetters = ['Learn', 'More']
  const headingLetters = heading.split('')

  return (
    <div className={`${styles.card} ${isOpen ? styles.change : ''}`}>
      <h2 className={styles.cardHeading}>
        {headingLetters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
      <Image 
        src={image}
        alt={heading}
        width={250}
        height={250}
        className={styles.cardImg}
        priority={false}
      />
      <button className={styles.cardBtn} onClick={handleClick}>
        {buttonLetters.join(' ').split('').map((letter, index) => (
          <span key={index}>{letter === ' ' ? '\u00A0' : letter}</span>
        ))}
      </button>
      <div className={styles.circle}>
        <div className={styles.circleContent}>
          <h3 className={styles.circleHeading}>{heading}</h3>
          <p className={styles.circleParagraph}>{description}</p>
          <a href="#" className={styles.circleBtn}>Buy now</a>
        </div>
      </div>
    </div>
  )
}

