import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  border-radius: ${rem(45)};
  display: flex;
  align-items: center;
  margin-top: auto;
  padding: ${rem(11)} 0;
  font-size: ${rem(12)};
  font-weight: 700;
  width: fit-content;

  button {
    height: ${rem(16)};
    width: ${rem(16)};
  }
`

export const CounterQuantity = styled.p`
  text-align: center;
  padding: 0 ${rem(25)};
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  transition: opacity 175ms ease-in-out;
`
