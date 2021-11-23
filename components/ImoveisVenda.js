import Imovel from './Imovel'
import Link from 'next/link'
import styles from '../styles/ImoveisVenda.module.css'

const ImoveisVenda = ({ imoveisVenda }) => {
  return (
    <div className={styles.imoveisVenda}>
      <div className={styles.imoveisVenda__titulo}>
        <p className={styles.titulo__tipo}>À Venda</p>
        <Link href='#' passHref>
          <a>
            <p className={styles.titulo__vermais}>Ver mais</p>
          </a>
        </Link>
      </div>
      <ul className={styles.imoveisVenda__itens}>
        {imoveisVenda.map((imovel) => (
          <Imovel
            titulo={imovel.titulo}
            imagem={imovel.imagem}
            detalhe={imovel.detalhe}
            tipo={imovel.tipo}
            local={imovel.local}
            valor={imovel.valor}
            dormitorios={imovel.dormitorios}
            garagem={imovel.garagem}
            areaTotal={imovel.area_total}
            key={imovel.id}
            id={imovel.id}
            link={`/venda/${imovel.id}`}
          />
        ))}
      </ul>
    </div>
  )
}

export default ImoveisVenda
