import styled from 'styled-components'
import { rem } from 'polished';

export const Wrapper = styled.div`
    margin-top: ${rem(30)};
`;

export const Title = styled.div`
    width: 100%;
    font-size: ${rem(24)};
    padding-bottom: ${rem(10)};
    border-bottom: 2px solid ${({theme}) => theme.color.black};
    margin-bottom: ${rem(15)};
`

export const Shelf = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 220px);
    grid-gap: 7px;
    padding: 20px;
    justify-content: center;

    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }

    @media (max-width: 460px) {
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
    }
`