import styled from 'styled-components';
import { rgba } from 'polished';

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
  margin-bottom: 10px;
`;

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 800;
    font-size: 38px;
  }
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
  gap: 8px;
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

export const ContainerSavings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const ContainerEconomy = styled.div`
  margin-top: 15px;

  h2 {
    font-size: 28px;
    font-weight: 600;
  }
`;

export const ContainerThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export const ContainerTransaction = styled.div`
  width: 100%;
`;

export const HeaderTransaction = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 28px;
    font-weight: 600;
  }
`;

export const ContainerSelections = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const TableTransaction = styled.table`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 25px;

  tr {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

export const UserTransaction = styled.div`
  display: flex;
  gap: 10px;
`;

export const AvatarTransaction = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const ContainerUserTransaction = styled.div``;

export const UsernameTransaction = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

export const ClanNameTransaction = styled.p`
  font-size: 14px;
  opacity: 0.2;
  font-weight: 600;
  color: ${({ theme }) => theme.foreground};
`;

export const ValueTransaction = styled.p<{
  color: string;
}>`
  color: ${({ color }) => color};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const DateTransaction = styled.p`
  text-align: end;
  font-size: 14px;
  color: ${({ theme }) => theme.foreground};
  opacity: 0.75;
  font-weight: 500;
`;

export const ContainerPayUser = styled.div`
  background-image: url('/images/payUser.svg');
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 15px;
  width: 475px;
  padding: 65px 30px;
`;

export const TitlePayUser = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const AboutPayUser = styled.p`
  font-size: 16px;
  padding: 15px 15px 15px 0;
`;

export const ButtonPayUser = styled.button`
  padding: 10px 30px;
  margin-top: 30px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  background-image: linear-gradient(
    ${({ theme }) => theme.cyan},
    ${({ theme }) => rgba(theme.cyan, 0.75)}
  );
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(55%);
  }
`;
