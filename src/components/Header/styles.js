import styled from 'styled-components'
import { Toolbar as ToolbarBase } from '@material-ui/core'
import { rem } from 'polished'

export const Toolbar = styled(ToolbarBase)`
    justify-content: space-between;
`

export const Logo = styled.div`
    font-size: ${rem(36)};
    color: ${({theme}) => theme.color.black};
    font-family: 'Impact';

    span {
        color: ${({theme}) => theme.color.red};
    }
`;

export const MinicartButton = styled.div`
    position: relative;
    height: ${rem(40)};
    font-size: ${rem(40)};
    color: ${({theme}) => theme.color.black};
    cursor: pointer;
`;