import { MosaicTile } from '@prisma/client';
import { KeyedMutator } from 'swr/dist/types';
import styles from '../../styles/Mosaic.module.css';
import { TileColor, TILES_API_URL } from './MosaicPage';

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
  tileData: MosaicTile[],
  color: TileColor
}
const Mosaic = ({ mutate, tileData, color }: MosaicProps) => {

  const onTileClicked = async (x: number, y: number) => {
    const tileClicked = { x, y, color }
    await fetch(TILES_API_URL, { method: 'POST', body: JSON.stringify(tileClicked)} )
    mutate()
  }

  return (
    <div className={styles.mosaic}>
      {
        tileData?.map(({ x, y, color }: MosaicTile) => {
          return <Tile key={`${x}${y}`} x={x} y={y} color={color} onClick={async () => onTileClicked(x, y)}/>
        })
      }
    </div>
  )
}

export default Mosaic