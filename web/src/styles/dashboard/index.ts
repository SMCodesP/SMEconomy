import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  gap: 15px;
`;

export const ContainerDash = styled.main`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.currentLine};
  border-radius: 35px;
  width: 100%;
  padding: 15px 30px;
  margin-left: 70px;
  margin-bottom: 10px;
`;

export const ContainerSavings = styled.div`
  display: grid;
  grid-template-columns: 5fr 6fr;
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
