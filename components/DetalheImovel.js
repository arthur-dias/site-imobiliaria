import Image from 'next/image'
import styles from '../styles/DetalheImovel.module.css'

const DetalheImovel = ({ imovel }) => {
  return (
    <div>
      <div>
        <p className={styles.imoveisAluguel}>{imovel.titulo}</p>
        <p>
          {imovel.tipo} - {imovel.detalhe} - {imovel.local}
        </p>
      </div>
      <div>
        <div>
          <div>
            <Image
              src={imovel.imagem}
              width={350}
              height={200}
              alt={imovel.titulo}
            />
            {imovel.iptu ? (
              <div>
                <p>IPTU: R$ {imovel.iptu}</p>
                <p>Valor do Aluguel: R$ {imovel.valor}</p>
              </div>
            ) : (
              <p>Valor do Imóvel: R$ {imovel.valor}</p>
            )}
          </div>
          <div>
            <p>Conheça mais o imóvel</p>
            <p>Imóvel de Teste</p>
          </div>
          <div>
            <p>Características</p>
            <ul>
              <li>Dormitórios {imovel.dormitorios}</li>
              <li>Suítes {imovel.suites}</li>
              <li>Banheiros {imovel.banheiros}</li>
              <li>Salas {imovel.salas}</li>
              <li>Garagem {imovel.garagem}</li>
              <li>Garagem Coberta {imovel.garagem_coberta}</li>
              <li>Área Total {imovel.area_total}m²</li>
              <li>Área Útil {imovel.area_util}m²</li>
            </ul>
          </div>
          <div>
            <p>Estrutura</p>
            <ul>
              {imovel.estrutura.map((estrutura) => {
                return <li key={estrutura}>{estrutura}</li>
              })}
            </ul>
          </div>
          <div>
            <p>{imovel.local}</p>
            <p>{imovel.mapa}</p>
          </div>
        </div>
        <div>
          <button>Whatsapp</button>
          <p>Form</p>
          <div>
            <button>Face</button>
            <button>Twiiter</button>
            <button>Insta</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalheImovel
