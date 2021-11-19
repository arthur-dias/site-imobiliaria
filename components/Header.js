import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { FiClock, FiMail } from 'react-icons/fi'
import logo from '../public/images/logo.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <section className={styles.header__info}>
        <ul className={styles.header__items}>
          <li className={styles.item}>
            <TiLocationArrowOutline className={styles.icon} />
            <div className={styles.item__info}>
              <p>Avenida Pequeno Príncipe, 0 - Campeche</p>
              <p>Florianópolis/SC</p>
            </div>
          </li>
          <li className={styles.item}>
            <FiClock className={styles.icon} />
            <div className={styles.item__info}>
              <p>Seg/Sex: 09:00h - 18:00h</p>
              <p>Sáb/Dom: Plantão</p>
            </div>
          </li>
          <li className={styles.item}>
            <FiMail className={styles.icon} />
            <div className={styles.item__info}>
              <p>contato@minhaimob.com.br</p>
              <p>+55 (48) 3322-1234</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.header__nav}>
        <Image src={logo} alt='Logo' />
        <nav className={styles.nav__links}>
          <Link href='#'>Home</Link>
          <Link href='#'>Destaque</Link>
          <Link href='#'>Alugar</Link>
          <Link href='#'>Comprar</Link>
          <Link href='#'>Contato</Link>
        </nav>
      </section>
    </div>
  )
}

export default Header
