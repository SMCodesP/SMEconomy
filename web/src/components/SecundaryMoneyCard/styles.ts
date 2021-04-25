import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div<{
  color: string;
}>`
  background: ${({ color }) => rgba(color, 0.5)};
  border-radius: 25px;
  padding: 15px 25px;
  color: ${({ theme }) => theme.background};
  position: relative;
  box-shadow: 0 0 5px ${({ theme }) => rgba(theme.background, 0.5)};
  transition: box-shadow 0.4s, transform 0.4s;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => rgba(theme.background, 0.5)};
    transform: scale(1.025);
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

export const Footer = styled.footer`
  display: flex;
  gap: 10px;
  margin-top: 75px;
`;

export const ContainerIcon = styled.div<{
  color: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(65%);
  }
`;
