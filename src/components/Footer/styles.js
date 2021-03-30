import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.footer`
    height: ${rem(50)};
    background-color: ${({theme}) => theme.color.black};
    color: ${({theme}) => theme.color.white};
    text-align: center;
    display: flex;
    align-items: center;
`;