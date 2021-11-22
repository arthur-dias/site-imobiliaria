import Head from 'next/head'
import DetalheImovel from '../../components/DetalheImovel'
import { imoveis } from '../../lib/data'

const interna = ({ imovel }) => {
  return (
    <div>
      <Head>
        <title>{imovel.titulo}</title>
      </Head>
      <DetalheImovel imovel={imovel} />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const imovel = await imoveis.venda.filter(
    (p) => p.id.toString() === params.id
  )

  return {
    props: {
      imovel: imovel[0],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await imoveis.venda.map((imovel) => ({
    params: { id: imovel.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default interna
