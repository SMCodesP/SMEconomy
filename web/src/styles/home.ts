import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.currentLine};
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const ContainerLogin = styled.form`
  background: ${({ theme }) => theme.background};
  box-shadow: 0 0 15px ${({ theme }) => theme.comment};
  border-radius: 20px;
  padding: 25px 30px 40px 30px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.yellow};
    margin: 0 0 25px 0;
    padding: 0;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 300px;

  & svg {
    opacity: 0.5;
    position: absolute;
    left: 0;
    margin: 0 10px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  outline: 0;
  border: 0;
  padding: 15px 0;
  padding-left: 50px;
  border-radius: 10px;
  transition: box-shadow 0.4s, background 0.4s;
  color: ${({ theme }) => theme.foreground};
  background: ${({ theme }) => theme.currentLine};
  box-shadow: 0 0 2px ${({ theme }) => theme.selection};
  border: 1px solid ${({ theme }) => theme.currentLine};

  &:focus {
    color: ${({ theme }) => darken(0.2, theme.foreground)};
    background: ${({ theme }) => darken(0.075, theme.currentLine)};
    border: 1px solid ${({ theme }) => darken(0.075, theme.currentLine)};
    box-shadow: 0 0 5px ${({ theme }) => darken(0.3, theme.selection)};
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.comment};
  font-size: 18px;
  font-weight: bold;
  border: 0;
  box-shadow: 0 0 2px ${({ theme }) => theme.purple};
  border-radius: 10px;
  padding: 8px 30%;
  margin-top: 45px;
  cursor: pointer;
  transition: box-shadow 0.4s, filter 0.4s;

  &:hover {
    box-shadow: 0 0 4px ${({ theme }) => theme.purple};
    filter: brightness(50%);
  }

  ::selection {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
  }
`;

export const ContainerSocial = styled.section`
  display: flex;
  align-items: center;
  gap: 15px;

  & a {
    width: 32px;
    height: 32px;
  }

  & a svg {
    transition: filter 0.4s;
  }

  & a svg path {
    box-shadow: 0 0 5px ${({ theme }) => theme.foreground};
  }

  & a:hover svg {
    filter: brightness(0%);
  }

  hr {
    border: 0;
    background: #191622;
    width: 2px;
    height: 75%;
    border-radius: 3px;
  }
`;
