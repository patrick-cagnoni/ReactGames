import styled from 'styled-components';
import { Box }from '@material-ui/core';
import { rem } from 'polished';

export const Wrapper = styled(Box)`
    flex: 0 1 auto;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${rem(14)};
  padding: ${rem(5)} 0 ${rem(5)} ${rem(16)};

  h3 {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
  }

  >div {
    display: flex;
    align-items: center;
  }
`
export const TotalItems = styled.span`
  padding-left: ${rem(9)};
  margin-left: ${rem(9)};
  position: relative;

  &::before {
    content: '';
    background-color: #424242;
    width: 1px;
    height: ${rem(16)};
    position: absolute;
    left: 0;
  }
`

export const CartIconWrapper = styled(Box)`
  margin-right: 15px;
`

