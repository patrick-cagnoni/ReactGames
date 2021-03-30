import styled from 'styled-components'
import { rem } from 'polished'

import { Box, Button } from '@material-ui/core'

export const Wrapper = styled(Box)`
    border: 1px dashed ${({theme}) => theme.color.gray};
    padding: 20px;
    width: 220px;
    position: relative;

    @media (max-width: ${({theme}) => theme.mq.notebook}) {
        margin: 0 auto;
        width: 100%;
    }

    @media (max-width: ${({theme}) => theme.mq.mobile}) {
        margin: 0 auto;
        width: 100%;
    }
`

export const Image = styled.img`
    width: 100%;
`

export const Score = styled.div`
    position: absolute;
    width: ${rem(65)};
    height: ${rem(65)};
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.blue};
    top: ${rem(5)};
    right: ${rem(5)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${rem(16)};
    color: ${({theme}) => theme.color.white};
    font-family: 'Press Start 2P', cursive;

    span {
        position: absolute;
        font-size: ${rem(6)};
        top: ${rem(14)};
    }
`

export const Name = styled.h3`
    display: inline-block;
    height: ${rem(46)};
`

export const Price = styled.div`
    font-size: ${rem(28)};
    font-weight: 900;
    margin-bottom: ${rem(15)};
`

export const BuyButton = styled(Button)`
    width: 100%;
    text-align: center;
    border-radius: 15px !important;
`