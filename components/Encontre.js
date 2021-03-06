import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Encontre.module.css'
import altoPadrao from '../public/images/alto-padrao.jpg'
import cobertura from '../public/images/cobertura.jpg'
import compacto from '../public/images/compacto.jpg'
import condominioFechado from '../public/images/condominio-fechado.jpg'
import frenteParaOMar from '../public/images/frente-para-o-mar.jpg'
import lojasESalas from '../public/images/lojas-e-salas.jpg'

const Encontre = () => {
  return (
    <div className={styles.encontre}>
      <div className={styles.encontre__texto}>
        <p className={styles.texto__titulo}>
          Ambiente no seu <span className={styles.titulo__estilo}>estilo</span>
        </p>
        <p className={styles.texto__subtitulo}>
          Encontre o imóvel com a experiência que você quer viver
        </p>
      </div>
      <ul className={styles.encontre__items}>
        <Link href='#' passHref>
          <a>
            <li className={styles.item}>
              <Image src={cobertura} alt='cobertura' />
              <p className={styles.item__link}>Cobertura</p>
            </li>
          </a>
        </Link>
        <Link href='#' passHref>
          <a>
            <li className={styles.item}>
              <Image src={altoPadrao} alt='casa alto padrão' />
              <p className={styles.item__link}>Alto Padrão</p>
            </li>
          </a>
        </Link>
        <Link href='#' passHref>
          <a>
            <li className={styles.item}>
              <Image src={frenteParaOMar} alt='janela para o mar' />
              <p className={styles.item__link}>De frente para o Mar</p>
            </li>
          </a>
        </Link>

        <Link href='#' passHref>
          <a>
            <li className={styles.item}>
              <Image src={condominioFechado} alt='condominio fechado' />
              <p className={styles.item__link}>Condomínio Fechado</p>
            </li>
          </a>
        </Link>
        <Link href='#' passHref>
          <a>
            <li className={styles.item}>
              <Image src={compacto} alt='duplex' />
              <p className={styles.item__link}>Compacto</p>
            </li>
          </a>
        </Link>
        <Link href='#' passHref>
          <a>
            <li className={styles.item}>
              <Image src={lojasESalas} alt='escritorio' />
              <p className={styles.item__link}>Lojas e Salas</p>
            </li>
          </a>
        </Link>
      </ul>
    </div>
  )
}

export default Encontre
