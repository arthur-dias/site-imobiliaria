import Imovel from './Imovel'
import styles from '../styles/ImoveisVenda.module.css'

const ImoveisVenda = ({ imoveisVenda }) => {
  return (
    <div className={styles.imoveisVenda}>
      <div className={styles.imoveisVenda__titulo}>
        <p className={styles.titulo__tipo}>À Venda</p>
        <p className={styles.titulo__vermais}>Ver mais</p>
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
            key={imovel.titulo}
          />
        ))}
      </ul>
    </div>
  )
}

export default ImoveisVenda
