import { useDispatch } from 'react-redux'
import { addProduct, openMinicart } from '../../store/ducks/minicart'
import format from '../../utils/currencyFormat'

import * as S from './styles'

const Product = ({id, image, name, price, score}) => {
    const dispatch = useDispatch()
    const handleBuy = () => {
        const product = {
            id,
            image, 
            name, 
            price, 
            score,
            quantity: 1,
        }
        dispatch(addProduct(product))
        dispatch(openMinicart())
    }
    return (
        <S.Wrapper>
            <S.Image src={`images/${image}`} />
            <S.Score><span>Score</span> {score}</S.Score>
            <S.Name>{name}</S.Name>
            <S.Price>{format(price)}</S.Price>
            <S.BuyButton 
                variant="contained" 
                color="secondary"
                onClick={handleBuy}
            >
                Comprar
            </S.BuyButton>
        </S.Wrapper>
    )
}

export default Product

