import ImoveisAluguel from './ImoveisAluguel'
import ImoveisVenda from './ImoveisVenda'

const Imoveis = ({ imoveisAluguel, imoveisVenda }) => {
  return (
    <div>
      <ImoveisVenda imoveisVenda={imoveisVenda} />
      <ImoveisAluguel imoveisAluguel={imoveisAluguel} />
    </div>
  )
}

export default Imoveis
