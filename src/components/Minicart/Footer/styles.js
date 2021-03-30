import styled from 'styled-components';
import { rem } from 'polished';
import { Button } from '@material-ui/core'

export const Wrapper = styled.div`
  flex: 0 1 auto;
  padding: ${rem(23)} ${rem(12)} ${rem(9)} ${rem(12)};
  margin-top: auto;
  box-shadow: 0 ${rem(-4)} ${rem(4)} 0 rgba(0, 0, 0, 0.21);
  position: relative;
  z-index: 2;
`;

export const Info= styled.div`
  margin-bottom: ${rem(24)};

  >div {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${rem(5)};

    &:last-child {
      p {
        font-weight: 900;
        font-size: ${rem(20)};
      }
    }

    p {
      font-size: ${rem(14)};
      font-weight: 500;
      margin: 0;
    } 
  }
`;

export const MinicartButton = styled(Button)`
  width: 100%;
  border-radius: ${rem(15)} !important;
  font-size: ${rem(14)};
  margin-bottom: ${rem(11)} !important;
`;