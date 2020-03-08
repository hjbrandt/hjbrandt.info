import React from 'react'
import Link from 'next/link'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/home">
        <div className={styles.container}>
          <span>Hans-Jakob</span>
          <span>Brandt</span>
        </div>
      </Link>
    </footer>
  )
}
