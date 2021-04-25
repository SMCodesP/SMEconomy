import styled from 'styled-components';

export const ContainerSavings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 25px;
  margin-top: 20px;

  & h2 {
    margin: 5px 0;
    font-size: 28px;
    font-weight: 800;
  }
`;
