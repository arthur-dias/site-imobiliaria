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
      <div className={styles.footer__nav}>
        <p className={styles.nav__text}>Navegue Aqui!</p>
        <nav className={styles.nav__links}>
          <Link href='#'>Home</Link>
          <Link href='#'>Destaque</Link>
          <Link href='#'>Alugar</Link>
          <Link href='#'>Comprar</Link>
          <Link href='#'>Contato</Link>
        </nav>
      </div>
      <div className={styles.footer__text}>
        <p>Nos Conheça!</p>
        <p>
          Nossa maior satisfação é lhe ajudar a encontrar seu imóvel dos sonhos
          nos bairros do Sul da Ilha da Magia, em Florianópolis
        </p>
        <p>Quer Investir?</p>
        <p>
          Entre em contato com a nossa equipe e vamos lhe informar sempre sobre
          os melhores negócios.
        </p>
      </div>
      <div className={styles.footer__midia}>
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
      </div>
    </div>
  )
}

export default Footer
