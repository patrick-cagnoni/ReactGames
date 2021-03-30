import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Container, Badge } from '@material-ui/core'
import CartIcon from '@material-ui/icons/ShoppingCartOutlined'

import { openMinicart } from 'store/ducks/minicart'

import * as S from './styles'

const Header = () => {
    const dispatch = useDispatch();
    const { totalItems } = useSelector(state => state.minicart);
    const handleOpen = () => {
        dispatch(openMinicart())
    }
    return (
        <AppBar color="transparent" position="static">
            <Container maxWidth="md">
                <S.Toolbar>
                    <S.Logo>React<span>Games</span></S.Logo>
                    <S.MinicartButton onClick={handleOpen}>
                        <Badge badgeContent={totalItems} color="secondary">
                            <CartIcon fontSize="large"/>
                        </Badge>
                    </S.MinicartButton>
                </S.Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header