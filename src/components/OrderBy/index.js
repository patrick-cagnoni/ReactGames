import { useDispatch, useSelector } from 'react-redux'

import { MenuItem }from '@material-ui/core'

import { setOrderBy } from 'store/ducks/products'
import orderByValues from 'resources/order-by-values'

import * as S from './styles'

const OrderBy = () => {
    const dispatch = useDispatch()
    const { orderBy } = useSelector((state) => state.products)

    const handleOrder = (value) => {
        dispatch(setOrderBy(value))
    }
    
    return (
        <S.Wrapper>
            <S.Select 
                value={orderBy} 
                onChange={(e) => handleOrder(e.target.value)}
                variant="outlined"
            >
                {orderByValues.map(o => (
                    <MenuItem value={o.value} key={o.value}>{o.label}</MenuItem>
                ))}
            </S.Select>
        </S.Wrapper>
    )
}
export default OrderBy