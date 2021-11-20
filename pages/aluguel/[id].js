import DetalheImovel from '../../components/DetalheImovel'
import { imoveis } from '../../lib/data'
import { styles } from '../../styles/[id].module.css'

const interna = ({ imovel }) => {
  return (
    <div>
      <DetalheImovel imovel={imovel} />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const imovel = await imoveis.aluguel.filter(
    (p) => p.id.toString() === params.id
  )

  return {
    props: {
      imovel: imovel[0],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await imoveis.aluguel.map((imovel) => ({
    params: { id: imovel.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default interna
