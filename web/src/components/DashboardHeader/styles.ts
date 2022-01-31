import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 800;
    font-size: 38px;
  }
`;

export const ContainerOptionsHeader = styled.div`
  display: flex;
  gap: 15px;
  padding: 5px 0;
  align-items: center;
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
  align-items: center;
  gap: 8px;
  border-radius: 20px !important;

  & p {
    font-size: 17px;
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
