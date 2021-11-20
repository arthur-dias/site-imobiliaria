import { imoveis } from '../../lib/data'

const interna = ({ data }) => {
  /* imoveis.aluguel.map((imovel) => {
    const id = imovel.id.toString()
    console.log(id)
  }) */

  console.log(data)

  return (
    <div>
      <p>interna aluguel</p>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const imovel = imoveis.aluguel.filter((p) => p.id.toString() === params.id)

  return {
    props: {
      data: imovel[0],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = imoveis.aluguel.map((imovel) => ({
    params: { id: imovel.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default interna
