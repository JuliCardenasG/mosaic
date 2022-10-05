import { MosaicTile } from '@prisma/client';
import styles from '../../styles/Mosaic.module.css'

type TileProps = {
  x: number;
  y: number;
  color: string;
}
const Tile = ({x, y, color}: TileProps) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.tile} onClick={() => tileClicked(x, y)}></div>
  )
}

const tileClicked = (x: number, y: number) => {
  console.log(x, y);
}

type Data = {
  tileData: MosaicTile[]
}
const Mosaic = ({ tileData }: Data) => {

  return (
    <div className={styles.mosaic}>
      {
        tileData.map(({x, y, color}: MosaicTile) => {
          return <Tile key={`${x}${y}`} x={x} y={y} color={color}/>
        })
      }
    </div>
  )
}

export default Mosaic