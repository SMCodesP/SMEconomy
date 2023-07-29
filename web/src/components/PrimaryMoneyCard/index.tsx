import { useContext } from 'react';

import { HiDotsVertical } from 'react-icons/hi';
import { ThemeContext } from 'styled-components';

import Chart from './Chart';

import { Container, Header, Menu, Title, SubTitle } from './styles';

const PrimaryMoneyCard: React.FC<{
  value: string;
  subTitle: string;
  color?: string;
  days: any[];
  chartId: string;
}> = ({ value, days, subTitle, color, chartId }) => {
  const theme = useContext(ThemeContext);

  if (!color) {
    color = theme.cyan;
  }

  return (
    <Container color={color}>
      <Header>
        <Title>{value}</Title>
        <Menu>
          <HiDotsVertical size={20} color={theme.currentLine} />
        </Menu>
      </Header>
      <SubTitle>{subTitle}</SubTitle>
      <Chart color={color} days={days} id={chartId} />
    </Container>
  );
};

export default PrimaryMoneyCard;
