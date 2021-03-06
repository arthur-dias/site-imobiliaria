import Imovel from './Imovel'
import Link from 'next/link'
import styles from '../styles/ImoveisAluguel.module.css'

const ImoveisAluguel = ({ imoveisAluguel }) => {
  return (
    <div className={styles.imoveisAluguel}>
      <div className={styles.imoveisAluguel__content}>
        <div className={styles.imoveisAluguel__titulo}>
          <p className={styles.titulo__tipo}>Para Alugar</p>
          <Link href='#' passHref>
            <a>
              <p className={styles.titulo__vermais}>Ver mais</p>
            </a>
          </Link>
        </div>
        <ul className={styles.imoveisAluguel__itens}>
          {imoveisAluguel.map((imovel) => (
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
              link={`/aluguel/${imovel.id}`}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ImoveisAluguel
