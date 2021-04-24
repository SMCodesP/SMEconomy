import { useContext } from 'react';

import { HiDotsVertical } from 'react-icons/hi';
import { ThemeContext } from 'styled-components';

import Chart from './Chart';

import { Container, Header, Menu, Title, SubTitle } from './styles';

const PrimaryMoneyCard: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <Title>$ 17.6 B</Title>
        <Menu>
          <HiDotsVertical size={20} color={theme.currentLine} />
        </Menu>
      </Header>
      <SubTitle>Transações</SubTitle>
      <Chart />
    </Container>
  );
};

export default PrimaryMoneyCard;
