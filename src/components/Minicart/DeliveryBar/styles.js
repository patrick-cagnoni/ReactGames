import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 ${rem(6)};
  flex-direction: column;
  padding: ${rem(14)} ${rem(12)} ${rem(13)} ${rem(12)};
  background-color: ${({theme}) => theme.color.lightGray};
  border-radius: ${rem(4)};
`;

export const Message = styled.div`
  font-size: ${rem(14)};
  color: #424242;
  margin-bottom: ${rem(16)};
  text-align: center;

  span {
    font-weight: 800;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: ${rem(12)};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    white-space: nowrap;
  }
`;

export const Progress = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 ${rem(11)};
  background-color: ${({theme}) => theme.color.white};
  height: ${rem(5)};
  border-radius: ${rem(4)};
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: ${rem(4)};
  background-color: ${({theme}) => theme.color.red};
  will-change: width;
  transition: width 225ms ease-in-out;
`;
