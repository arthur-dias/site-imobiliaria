import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/DetalheImovel.module.css'
import { GoCheck } from 'react-icons/go'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const DetalheImovel = ({ imovel }) => {
  return (
    <div className={styles.imovel}>
      <div className={styles.imovel__nome}>
        <p className={styles.nome__titulo}>{imovel.titulo}</p>
        <p className={styles.nome__subtitulo}>
          {imovel.detalhe} - {imovel.tipo} - {imovel.local}
        </p>
      </div>
      <div className={styles.conteudo}>
        <div className={styles.imovel__info}>
          <div className={styles.carousel}>
            <Image
              src={imovel.imagem}
              width={350}
              height={200}
              alt={imovel.titulo}
            />
          </div>
          {imovel.iptu ? (
            <div className={styles.valor}>
              <p className={styles.valor__iptu}>IPTU: R$ {imovel.iptu}</p>
              <p className={styles.valor__imovel}>
                Valor do Aluguel: R$ {imovel.valor}/mês
              </p>
            </div>
          ) : (
            <p className={styles.valor__imovel}>
              Valor do Imóvel: R$ {imovel.valor}
            </p>
          )}
          <div className={styles.info__descricao}>
            <p className={styles.info__titulo}>Conheça mais o imóvel</p>
            <p className={styles.info__texto}>Imóvel de Teste</p>
          </div>
          <div className={styles.info__caracteristicas}>
            <p className={styles.caracteristicas__titulo}>Características</p>
            <ul className={styles.caracteristicas__itens}>
              <li className={styles.caracteristicas__item}>
                <p>Dormitórios</p>
                <p>{imovel.dormitorios}</p>
              </li>
              <li className={styles.caracteristicas__item}>
                <p>Suítes</p>
                <p>{imovel.suites}</p>
              </li>
              <li className={styles.caracteristicas__item}>
                <p>Banheiros</p>
                <p>{imovel.banheiros}</p>
              </li>
              <li className={styles.caracteristicas__item}>
                <p>Salas</p>
                <p>{imovel.salas}</p>
              </li>
              <li className={styles.caracteristicas__item}>
                <p>Garagem</p>
                <p>{imovel.garagem}</p>
              </li>
              <li className={styles.caracteristicas__item}>
                <p>Garagem Coberta</p>
                <p>{imovel.garagem_coberta}</p>
              </li>
              <li className={styles.caracteristicas__item}>
                <p>Área Total</p>
                <p>{imovel.area_total}m²</p>
              </li>
              <li className={styles.caracteristicas__item}>
                <p>Área Útil</p>
                <p>{imovel.area_util}m²</p>
              </li>
            </ul>
          </div>
          <div className={styles.info__estrutura}>
            <p className={styles.estrutura__titulo}>Estrutura</p>
            <ul className={styles.estrutura__itens}>
              {imovel.estrutura.map((estrutura) => {
                return (
                  <li key={estrutura} className={styles.estrutura__item}>
                    <GoCheck /> {estrutura}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.info__mapa}>
            <p className={styles.mapa__titulo}>Localização</p>
            <iframe
              className={styles.mapa__iframe}
              src={imovel.mapa}
              width='auto'
              height='auto'
              allowFullScreen=''
              loading='lazy'></iframe>
          </div>
        </div>
        <div className={styles.contato}>
          <Link href='https://www.whatsapp.com/' passHref>
            <a target='_blank' rel='noreferrer'>
              <button className={styles.contato__whats__btn}>
                <FaWhatsapp /> Converse com o Corretor!
              </button>
            </a>
          </Link>
          <form action='#' className={styles.contato__form}>
            <p className={styles.form__title}>Entre em contato</p>
            <div className={styles.form__fields}>
              <label htmlFor=''>Seu nome:</label>
              <input type='text' placeholder='Informe seu nome completo' />
              <label htmlFor=''>Seu telefone:</label>
              <input type='text' placeholder='Informe seu telefone com DDD' />
              <label htmlFor=''>Seu e-mail:</label>
              <input type='text' placeholder='Informe seu melhor e-mail' />
              <label htmlFor=''>Sua Mensagem:</label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='5'
                defaultValue={`Quero ter mais informações sobre esse imóvel. ${imovel.detalhe}, ${imovel.tipo}, ${imovel.local}! (${imovel.id})`}></textarea>
            </div>
            <button className={styles.form__button}>Enviar</button>
            <Link href='#'>(48) 3322-1234</Link>
          </form>
          <div className={styles.contato__share}>
            <Link href='#' passHref>
              <a target='_blank' rel='noreferrer'>
                <button className={styles.btn__facebook}>
                  <AiOutlineFacebook /> Compartilhar 0
                </button>
              </a>
            </Link>
            <Link href='#' passHref>
              <a target='_blank' rel='noreferrer'>
                <button className={styles.btn__twitter}>
                  <FiTwitter />
                  Tweetar
                </button>
              </a>
            </Link>

            <Link href='#' passHref>
              <a target='_blank' rel='noreferrer'>
                <button className={styles.btn__instagram}>
                  <AiOutlineInstagram />
                  Instagram
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalheImovel
