import { useDispatch } from 'react-redux'
import { useCounter } from 'react-use'

import { incQuantity, decQuantity, removeProduct } from 'store/ducks/minicart'
import format from 'utils/currencyFormat'

import Counter from '../Counter'

import * as S from './styles'

const Product = ({id, name, price, image, quantity}) => {
  const dispatch = useDispatch()
  const [value, { inc, dec }] = useCounter(quantity, null, 1)

  const handleInc = () => {
    inc()
    dispatch(incQuantity(id))
  }
  
  const handleDec = () => {
    dec()
    dispatch(decQuantity(id))
  }
  
  const handleRemove = () => {
    dispatch(removeProduct(id))
  }

  return (
    <S.Wrapper>
      <S.Image width={60}>
        <img src={`images/${image}`} alt={name} />
      </S.Image>
      <S.Info>
        <S.Name>
              {name}
        </S.Name>
        <S.Price>
          {format(price)}
        </S.Price>
        <Counter
          quantity={value}
          onInc={handleInc}
          onDec={handleDec}
        />
      </S.Info>
      <S.Remove onClick={handleRemove}>
          excluir
      </S.Remove>
    </S.Wrapper>
  )
}

export default Product