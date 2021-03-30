import { useSelector, useDispatch } from 'react-redux'

import { closeMinicart } from '../../../store/ducks/minicart'
import format from '../../../utils/currencyFormat'

import * as S from './styles'

const Footer = () => {
    const dispatch = useDispatch()
    const {isFreeShipping, totalShipping, totalValue} = useSelector(state => state.minicart)
    const handleClose = () => {
        dispatch(closeMinicart())
    }
    const handleFinish = () => {
        alert("Obrigado por comprar na ReactGames!")
        dispatch(closeMinicart())
    }
    return (
        <S.Wrapper>
            <S.Info>
                <div>
                    <p>Frete</p>
                    <p>{isFreeShipping? 'Grátis': format(totalShipping) }</p>
                </div>
                <div>
                    <p>Subtotal</p>
                    <p>{format(totalValue)}</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>{format(totalValue + (isFreeShipping? 0: totalShipping))}</p>
                </div>
            </S.Info>
            {totalValue?
                <S.MinicartButton
                    variant="contained" 
                    color="secondary"
                    title="Finalizar compra"
                    onClick={handleFinish}
                >
                    Finalizar compra
                </S.MinicartButton>
                :null
            }
            <S.MinicartButton
                variant="contained"
                title="Continuar comprando"
                onClick={handleClose}
            >
                Continuar comprando
            </S.MinicartButton>
        </S.Wrapper>
    )
}
export default Footer