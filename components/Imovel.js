import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Imovel.module.css'
import { TiLocationArrow } from 'react-icons/ti'
import {
  MdOutlineBed,
  MdOutlineGarage,
  MdOutlineOtherHouses,
} from 'react-icons/md'

const Imovel = ({
  id,
  titulo,
  imagem,
  detalhe,
  tipo,
  local,
  valor,
  dormitorios,
  garagem,
  areaTotal,
  link,
}) => {
  return (
    <div className={styles.imovel}>
      <Image src={imagem} alt={titulo} width={350} height={200} />
      <div className={styles.imovel__description}>
        <p className={styles.imovel__titulo}>{titulo}</p>
        <p className={styles.imovel__detalhe}>{detalhe}</p>
        <p className={styles.imovel__tipo}>
          {tipo} - {local} <TiLocationArrow />
        </p>
        <p className={styles.imovel__valor}>
          <strong> R$ {valor} </strong>
        </p>

        <Link href={link} passHref>
          <a>
            <button>Ver Imóvel</button>
          </a>
        </Link>
      </div>
      <div className={styles.imovel__itens}>
        <span>
          <MdOutlineBed className={styles.icon} />
          {dormitorios}
        </span>
        <span>
          <MdOutlineGarage className={styles.icon} />
          {garagem}
        </span>
        <span>
          <MdOutlineOtherHouses className={styles.icon} />
          {areaTotal}
        </span>
      </div>
    </div>
  )
}

export default Imovel
