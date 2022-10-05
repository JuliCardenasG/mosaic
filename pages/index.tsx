import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR, { Fetcher } from 'swr'
import { MosaicTile } from '@prisma/client'
import Mosaic from './mosaic/mosaic'

export const TILES_API_URL = '/api/tiles'

const Home: NextPage = () => {


  const fetcher: (url: RequestInfo) => Promise<any> = url => fetch(url).then(r => r.json())

  const { data, error, mutate } = useSWR<MosaicTile[]>(TILES_API_URL, fetcher)


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Mosaic Game</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Mosaic Game
        </h1>

        <Mosaic tileData={data} mutate={mutate}/>
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
