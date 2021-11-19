import Image from 'next/image'
import banner from '../public/images/banner.jpg'
import styles from '../styles/Banner.module.css'

const Banner = () => {
  return (
    <div>
      <Image src={banner} alt='banner' />
      <div className={styles.box}>
        <p className={styles.box__text}>
          ENCONTRE O IMÓVEL IDEAL PARA VOCÊ E SUA FAMILIA MORAR NA PRAIA!
        </p>

        <div className={styles.box__buttons}>
          <button className={styles.button}>
            Quero <strong>Comprar</strong>!
          </button>
          <button className={styles.button}>
            Quero <strong>Alugar</strong>!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
