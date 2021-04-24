import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => rgba(theme.cyan, 0.75)};
  border-radius: 25px;
  padding: 15px 25px;
  color: ${({ theme }) => theme.background};
  position: relative;
  padding-bottom: 245px;
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
  font-size: 14px;
`;

export const Card = styled.div`
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 90%;
  border-radius: 10px;
  margin-top: 15px;
  height: 220px;
  overflow: hidden;

  .axis {
    position: absolute;
    color: ${({ theme }) => theme.foreground};
    z-index: 1;
    text-transform: uppercase;
    display: flex;
    width: 100%;
    bottom: 0;
    height: 100%;
  }

  .axis .tick {
    flex: 1;
    position: relative;
    overflow: hidden;
    opacity: 0.2;
    font-size: 12px;
    text-align: center;
    line-height: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 35px 0 15px 0;
    transition: background-color 0.1s;
  }

  .axis .tick:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .axis .tick .value {
    transform: translateY(-50px);
    transition: transform 0.4s, opacity 0.4s;
    top: 50px;
    color: ${({ theme }) => theme.comment};
    border-radius: 2px;
    width: 100%;
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    opacity: 0;
  }

  .axis .tick:hover .value.value--this {
    opacity: 1;
    transform: translateY(0);
  }
`;
