import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MosaicPage from './mosaic/MosaicPage'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mosaic Game</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Mosaic Game
        </h1>

        <MosaicPage />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://diginlab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/diginlab.png" alt="Diginlab Logo" width={60} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
