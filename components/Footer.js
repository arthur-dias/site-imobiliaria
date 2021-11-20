import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__nav}>
          <p className={styles.nav__text}>
            Navegue <span className={styles.nav__text__estilo}>Aqui!</span>
          </p>
          <nav className={styles.nav__links}>
            <Link href='#'>Home</Link>
            <Link href='#'>Destaque</Link>
            <Link href='#'>Alugar</Link>
            <Link href='#'>Comprar</Link>
            <Link href='#'>Contato</Link>
          </nav>
        </div>
        <div className={styles.footer__text}>
          <p className={styles.text__title}>
            Nos <span className={styles.nav__text__estilo}>Conheça!</span>
          </p>
          <p className={styles.text__description}>
            Nossa maior satisfação é lhe ajudar a encontrar seu imóvel dos
            sonhos nos bairros do Sul da Ilha da Magia, em Florianópolis
          </p>
          <p className={styles.text__title}>
            Quer <span className={styles.nav__text__estilo}>Investir?</span>
          </p>
          <p className={styles.text__description}>
            Entre em contato com a nossa equipe e vamos lhe informar sempre
            sobre os melhores negócios.
          </p>
        </div>
        <div className={styles.footer__midia}>
          <Link href='https://facebook.com/' passHref>
            <a target='_blank' rel='noreferrer'>
              <FaFacebookSquare />
            </a>
          </Link>
          <Link href='https://twitter.com/' passHref>
            <a target='_blank' rel='noreferrer'>
              <FaTwitterSquare />
            </a>
          </Link>
          <Link href='https://instagram.com/' passHref>
            <a target='_blank' rel='noreferrer'>
              <FaInstagramSquare />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.footer__info}>
        <p>
          Imobiliária | CRECI 1234 | Avenida Pequeno Príncipe, 0 - Campeche
          Floripa/SC
        </p>
      </div>
    </div>
  )
}

export default Footer
