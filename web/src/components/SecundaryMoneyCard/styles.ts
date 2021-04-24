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
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  z-index: 9999;
`;

export const Menu = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 99999;
  transition: background-color 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  z-index: 999999;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${({ color }) => color};
  z-index: 9999999;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 10px;
  margin-top: 150px;
  z-index: 99999999;
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
  z-index: 999999999;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(75%);
  }
`;
