import { MosaicTile } from '@prisma/client';
import { useState } from 'react';
import useSWR  from 'swr';
import Mosaic from './Mosaic';
import styles from '../../styles/Mosaic.module.css'

export enum TileColor {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
}

export const TILES_API_URL = '/api/tiles'

type ColorSelectProps = {
  tileColor: TileColor,
  setTileColor: Function,
}
const ColorSelect = ({ tileColor, setTileColor }: ColorSelectProps) => {
  return (
    <div className={styles.colorSelect}>
      <label>Choose your color</label>
      <select name='color' value={tileColor} onChange={(e) => {setTileColor(e.target.value as TileColor)}}>
        <option value={TileColor.RED}>Red</option>
        <option value={TileColor.BLUE}>Blue</option>
        <option value={TileColor.GREEN}>Green</option>
        <option value={TileColor.YELLOW}>Yellow</option>
      </select>
    </div>
  )
}

const MosaicPage = () => {
  const fetcher: (url: RequestInfo) => Promise<any> = url => fetch(url).then(r => r.json())

  const { data, error, mutate } = useSWR<MosaicTile[]>(TILES_API_URL, fetcher)

  const [tileColor, setTileColor] = useState(TileColor.RED)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  

  return (
    <div className={styles.mosaicPage}>
      <ColorSelect tileColor={tileColor} setTileColor={setTileColor} />
      <Mosaic tileData={data} color={tileColor} mutate={mutate} />
    </div>
    
  )
}

export default MosaicPage