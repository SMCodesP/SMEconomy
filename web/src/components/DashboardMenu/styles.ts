import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.nav`
  width: 70px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  gap: 18px;
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.background}, ${rgba(theme.comment, 0.3)}, ${
      theme.background
    })`};
  border-bottom-left-radius: 45px;
  border-top-left-radius: 45px;
`;

export const OptionHome = styled.li`
  width: fit-content;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  transition: filter 0.4s, border-radius 0.4s;

  &:hover {
    filter: brightness(75%);
    border-radius: 40%;
  }
`;

export const Option = styled(OptionHome)`
  & * {
    transition: color 0.4s;
  }
  &:hover {
    filter: brightness(100%);
    border-radius: 0;
  }

  &:hover * {
    color: ${({ theme }) => theme.cyan};
  }
`;

export const Ball = styled.div`
  background: ${({ theme }) => theme.cyan};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;
