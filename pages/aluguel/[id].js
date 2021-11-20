import { imoveis } from '../../lib/data'

const interna = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>interna aluguel</p>
    </div>
  )
}

/* export const getStaticPaths = async () => {
  const paths = imoveis.aluguel.map((imovel) => ({
    params: { id: imovel.id.toString() },
  }))

  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const imovel = imovel.filter((p) => p.id.toString() === params.id)

  return {
    props: {
      data: imovel[0],
    },
  }
} */

export default interna
