/**
 * SSG (Static Site Generation) Component
 * Pre-rendered at build time with static data
 * No server-side data fetching required
 */
import ToyCard from './ToyCard'
import styles from '../styles/home.module.scss'

// Static data for SSG - embedded at build time
const toys = [
  {
    heading: 'Puzzle',
    image: '/images/toy-1.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur animi omnis ea error! Ipsam, quasi.'
  },
  {
    heading: 'Bear',
    image: '/images/toy-2.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur animi omnis ea error! Ipsam, quasi.'
  },
  {
    heading: 'Lego',
    image: '/images/toy-3.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur animi omnis ea error! Ipsam, quasi.'
  }
]

export default function PopularToys() {
  return (
    <section className={styles.section2} id="about">
      <h1 className={styles.sectionHeading}>popular toys</h1>
      <div className={styles.cardsWrapper}>
        {toys.map((toy, index) => (
          <ToyCard
            key={index}
            heading={toy.heading}
            image={toy.image}
            description={toy.description}
          />
        ))}
      </div>
    </section>
  )
}

