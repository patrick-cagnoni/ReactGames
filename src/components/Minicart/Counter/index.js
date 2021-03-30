import { IconButton } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

import * as S from './styled'

const Counter = ({quantity, onInc, onDec}) => {

    return (
        <S.Wrapper>
            <IconButton 
                onClick={onDec}
                disabled={(quantity === 1)}
                title="Retirar quantidade"
            >
                <RemoveIcon />
            </IconButton>
            <S.CounterQuantity>
                {quantity}
            </S.CounterQuantity>
            <IconButton 
                onClick={onInc}
                title="Adicionar quantidade"
            >
                <AddIcon />
            </IconButton>
        </S.Wrapper>
    )
}

export default Counter;