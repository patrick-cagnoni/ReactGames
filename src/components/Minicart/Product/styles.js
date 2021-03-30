import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  padding: ${rem(16)} 0;
  margin: ${rem(4)} ${rem(20)};
  position: relative;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'fill')};
  transition: opacity 175ms ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid #b7b7b7;
  }
`

export const Image = styled.div`
  width: ${({ width }) => rem(width)};
  flex-shrink: 0;

  img {
    width: 100%;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-left: ${rem(12)};
`

export const Name = styled.h2`
  font-size: ${rem(12)};
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: ${rem(8)};
`

export const Description = styled.p`
  font-size: ${rem(12)};
  margin-bottom: ${rem(14)};
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontSecondary};

  del {
    font-size: ${rem(10)};
    text-decoration: line-through;
    opacity: 0.35;
  }

  ins {
    font-size: ${rem(12)};
    font-weight: 700;
    text-decoration: none;
  }
`

export const Remove = styled.div`
  font-size: ${rem(12)};
  font-weight: 700;
  position: absolute;
  bottom: ${rem(27)};
  right: 0;
  text-decoration: underline;
  cursor: pointer;
`
