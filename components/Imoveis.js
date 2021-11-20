import ImoveisAluguel from './ImoveisAluguel'
import ImoveisVenda from './ImoveisVenda'
import Image from 'next/image'

const Imoveis = ({ imoveisAluguel, imoveisVenda }) => {
  return (
    <div>
      <ImoveisVenda imoveisVenda={imoveisVenda} />
      <ImoveisAluguel imoveisAluguel={imoveisAluguel} />
    </div>
  )
}

export default Imoveis
