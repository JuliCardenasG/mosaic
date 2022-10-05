import { MosaicTile } from '@prisma/client';
import { KeyedMutator } from 'swr/dist/types';
import { TILES_API_URL } from '..';
import styles from '../../styles/Mosaic.module.css'

type TileProps = {
  x: number;
  y: number;
  color: string;
  onClick: (x: number, y: number) => Promise<void>
}
const Tile = ({x, y, color, onClick}: TileProps) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.tile} onClick={async () => onClick(x, y)}></div>
  )
}


type MosaicProps = {
  mutate: KeyedMutator<any>,
  tileData: MosaicTile[]
}
const Mosaic = ({ mutate, tileData }: MosaicProps) => {

  const onTileClicked = async (x: number, y: number) => {
    const tileClicked = {
      x, y, color: 'blue'
    }
    await (await fetch(TILES_API_URL, { method: 'POST', body: JSON.stringify(tileClicked)} )).json
    mutate()
  }

  return (
    <div className={styles.mosaic}>
      {
        tileData.map(({x, y, color}: MosaicTile) => {
          return <Tile key={`${x}${y}`} x={x} y={y} color={color} onClick={async () => onTileClicked(x, y)}/>
        })
      }
    </div>
  )
}

export default Mosaic