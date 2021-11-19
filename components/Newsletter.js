import styles from '../styles/Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter__text}>
        <p className={styles.text__title}>
          Quer ficar por dentro das novidades?
        </p>
        <p className={styles.text__description}>
          Deixe o seu nome e seu melhor e-mail nos campos abaixo e nós vamos lhe
          informar sobre os melhores negócios e todos os lançamentos do sul da
          ilha
        </p>
      </div>
      <form className={styles.newsletter__form}>
        <input type='text' placeholder='Digite seu nome' />
        <input type='email' placeholder='Digite seu melhor e-mail' />
        <button className={styles.form__button}>Me avise!</button>
      </form>
    </div>
  )
}

export default Newsletter
