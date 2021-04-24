import { useContext } from 'react';

import { HiDotsVertical } from 'react-icons/hi';
import { IconType } from 'react-icons';

import { ThemeContext } from 'styled-components';

import {
  Container,
  Footer,
  ContainerIcon,
  Header,
  Menu,
  Title,
  SubTitle,
} from './styles';

const SecundaryMoneyCard: React.FC<{
  name: string;
  title: string;
  color: string;
  Icon: IconType;
}> = ({ name, title, color, Icon }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container color={color}>
      <Header>
        <Title>{title}</Title>
        <Menu>
          <HiDotsVertical size={20} color={theme.currentLine} />
        </Menu>
      </Header>
      <Footer>
        <ContainerIcon color={color}>
          <Icon color={theme.background} size={28} />
        </ContainerIcon>
        <SubTitle color={color}>{name}</SubTitle>
      </Footer>
    </Container>
  );
};

export default SecundaryMoneyCard;
