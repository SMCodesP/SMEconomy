import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.selection};
  padding: 42px 32px 24px 32px;
  border-radius: 30px;
  gap: 25px;
  position: relative;

  & fieldset {
    display: flex;
    flex-direction: column;
    border: 0;
  }

  & hr {
    border: 0;
    width: 80%;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.currentLine};
    align-self: center;
  }
`;

export const AvatarUser = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 32px;
  position: absolute;
  top: -80px;
`;

export const Caption = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => lighten(0.05, theme.currentLine)};
  color: ${({ theme }) => theme.pink};
  border: 0;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const LabelMoney = styled.p`
  font-size: 16px;
  color: ${({ theme, color }) => color || lighten(0.05, theme.currentLine)};
  font-weight: bold;
`;

export const ContainerGridPreset = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

export const ItemPreset = styled.div`
  background-color: ${({ theme }) => theme.background};
  white-space: nowrap;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  transition: border-color 0.4s, color 0.4s;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.pink};
  }
`;

export const ButtonExchange = styled.button`
  background-color: transparent;
  width: 65%;
  align-self: center;
  border: 2px solid ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.foreground};
  border-radius: 25px;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => lighten(0.05, theme.currentLine)};
    background-color: ${({ theme }) => theme.foreground};
  }
`;

export const Toast = styled.p`
  & span {
    color: ${({ theme }) => theme.green} !important;
    font-weight: bold;
  }
`;
