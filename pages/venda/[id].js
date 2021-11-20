import { imoveis } from '../../lib/data'

const interna = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>interna venda</p>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const imovel = imoveis.venda.filter((p) => p.id.toString() === params.id)

  return {
    props: {
      data: imovel[0],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = imoveis.venda.map((imovel) => ({
    params: { id: imovel.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default interna
