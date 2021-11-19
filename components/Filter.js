import styles from '../styles/Filter.module.css'
import { AiOutlineArrowDown, AiOutlineSearch } from 'react-icons/ai'

const Filter = () => {
  return (
    <div className={styles.filter}>
      <ul className={styles.filter__items}>
        <li className={styles.item}>
          <label>
            <strong>Comprar ou Alugar?</strong>
          </label>
          <select name='operacao' id=''>
            <option value='' disabled selected>
              Escolha...
            </option>
            <option value='comprar'>Comprar</option>
            <option value='alugar'>Alugar</option>
          </select>
        </li>
        <li className={styles.item}>
          <label>
            <strong>O que você quer?</strong>
          </label>
          <select name='opcao' id=''>
            <option value='' disabled selected>
              Escolha...
            </option>
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
          </select>
        </li>
        <li className={styles.item}>
          <label>
            <strong>Qual o tipo do imóvel?</strong>
          </label>
          <select name='opcao' id=''>
            <option value='' disabled selected>
              Escolha...
            </option>
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
          </select>
        </li>
        <li className={styles.item}>
          <label>
            <strong>Qual o tipo do imóvel?</strong>
          </label>
          <select name='opcao' id=''>
            <option value='' disabled selected>
              Escolha...
            </option>
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
          </select>
        </li>
      </ul>
      <div className={styles.filter__options}>
        <p className={styles.option__avancado}>
          Filtro avançado
          <AiOutlineArrowDown />
        </p>

        <button className={styles.option__search}>
          <AiOutlineSearch />
          Pesquisar
        </button>
      </div>
    </div>
  )
}

export default Filter
