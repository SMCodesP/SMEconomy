import styled from "styled-components";

export const ListDays = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  border-radius: 15px;
  padding: 20px;
  justify-content: space-between;
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(50%);
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  gap: 15px;
`;

export const UserAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const DayDateText = styled.p`
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
`;

export const ResumeDay = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoneyText = styled.p`
  color: ${({ theme }) => theme.cyan};
  font-weight: bold;
`;

export const CashText = styled.p`
  color: ${({ theme }) => theme.yellow};
  font-weight: bold;
`;
