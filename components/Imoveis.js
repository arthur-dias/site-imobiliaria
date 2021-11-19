import Image from 'next/image'

const Imoveis = ({ imoveisAluguel, imoveisVenda }) => {
  return (
    <div>
      <h2>Imoveis</h2>

      <h1>Venda</h1>
      <ul>
        {imoveisVenda.map((imovel) => (
          <li key={imovel.titulo}>
            {imovel.titulo}
            <Image
              src={imovel.imagem}
              alt={imovel.titulo}
              width={300}
              height={200}
            />
          </li>
        ))}
      </ul>
      <h1>Aluguel</h1>
      <ul>
        {imoveisAluguel.map((imovel) => (
          <li key={imovel.titulo}>
            {imovel.titulo}
            <Image
              src={imovel.imagem}
              alt={imovel.titulo}
              width={300}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Imoveis
