import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCartOutlined as CartIcon, Close as CloseIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

import { closeMinicart } from '../../../store/ducks/minicart'
import DeliveryBar from '../DeliveryBar'

import * as S from './styles'

const Header = () => {
    const dispatch = useDispatch()
    const { totalItems } = useSelector((state) => state.minicart)
    const handleClose = () => dispatch(closeMinicart())
    return (
        <S.Wrapper>
            <S.Info>
                <div>
                    <S.CartIconWrapper><CartIcon /></S.CartIconWrapper>
                    Carrinho <S.TotalItems>{ totalItems } itens</S.TotalItems> 
                </div>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </S.Info>
            {totalItems > 0 ? (
                <DeliveryBar />
            ) : null}
        </S.Wrapper>
    )
}

export default Header