import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  gap: 15px;
`;

export const ContainerDash = styled.main`
  background: ${({ theme }) => theme.currentLine};
  border-radius: 35px;
  width: 100%;
  padding: 15px;
  margin-left: 70px;
`;

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContainerOptionsHeader = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 0;
`;

export const Option = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 12px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  cursor: pointer;
  transition: filter 0.4s;

  * {
    margin: 0;
    padding: 0;
  }

  &:hover {
    filter: brightness(50%);
  }
`;

export const OptionUser = styled(Option)`
  position: relative;
  padding: 12px 30px 12px 70px !important;
  justify-content: space-around;
  gap: 6px;
  border-radius: 20px !important;

  & p {
    font-weight: 600;
  }

  & img {
    width: 52px;
    border-radius: 52px;
    top: -15px;
    left: 10px;
    position: absolute;
  }

  & svg * {
    stroke-width: 3px;
  }
`;
