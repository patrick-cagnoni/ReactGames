import { useSelector, useDispatch } from 'react-redux'
import { closeMinicart } from '../../store/ducks/minicart'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import * as S from './styles'

const Minicart = () => {
    const {isOpen} = useSelector(state => state.minicart)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(closeMinicart())
    }
    return (
        <S.Drawer 
            open={isOpen}
            variant="temporary"
            anchor="right"
            onClose={handleClose}
        >
            <Header />
            <Content />
            <Footer />
        </S.Drawer>
    )
}
export default Minicart
