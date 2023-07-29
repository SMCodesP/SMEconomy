import styled from 'styled-components';

export const Container = styled.div<{
  width: number;
}>`
  display: flex;
  align-items: center;

  & .select {
    width: ${({ width }) => width}px;
  }

  & * {
    border-radius: 5px;
  }
`;
