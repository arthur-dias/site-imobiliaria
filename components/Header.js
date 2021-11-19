import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { FiClock, FiMail } from 'react-icons/fi'
import logo from '../public/images/logo.png'

const Header = () => {
  return (
    <div>
      <section>
        <ul>
          <li>
            <TiLocationArrowOutline />
            <p>Avenida Pequeno Príncipe, 0 - Campeche</p>
            <p>Florianópolis/SC</p>
          </li>
          <li>
            <FiClock />
            <p>Seg/Sex: 09:00h - 18:00h</p>
            <p>Sáb/Dom: Plantão</p>
          </li>
          <li>
            <FiMail />
            <p>contato@minhaimob.com.br</p>
            <p>+55 (48) 3322-1234</p>
          </li>
        </ul>
      </section>
      <section>
        <Image src={logo} alt='Logo' />
        <nav>
          <Link href='/'>Home</Link>
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
