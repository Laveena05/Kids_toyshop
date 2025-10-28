/**
 * SSG (Static Site Generation) Component
 * Pre-rendered at build time with static image list
 * Uses Next.js Image component for optimization
 * No server-side data fetching required
 */
import Image from 'next/image'
import styles from '../styles/home.module.scss'

// Static data for SSG - embedded at build time
const galleryImages = [
  '/images/gallery-img-1.jpg',
  '/images/gallery-img-2.jpg',
  '/images/gallery-img-3.jpg',
  '/images/gallery-img-4.jpg',
  '/images/gallery-img-5.jpg',
  '/images/gallery-img-6.jpg',
  '/images/gallery-img-7.jpg',
  '/images/gallery-img-8.jpg',
  '/images/gallery-img-9.jpg',
  '/images/gallery-img-10.jpg',
  '/images/gallery-img-11.jpg',
  '/images/gallery-img-12.jpg'
]

export default function Gallery() {
  return (
    <section className={styles.section4} id="projects">
      <h1 className={styles.sectionHeading}>Gallery</h1>
      <div className={styles.gallery}>
        {galleryImages.map((image, index) => (
          <a key={index} href="#" className={styles.galleryLink}>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
