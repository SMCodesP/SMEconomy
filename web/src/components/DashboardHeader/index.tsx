import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { ImSearch } from 'react-icons/im';
import { VscBellDot } from 'react-icons/vsc';
import { useTheme } from 'styled-components';

import { ContainerHeader, ContainerOptionsHeader, Option, OptionUser } from './styles';

const DashboardHeader: React.FC<{
  title: string;
}> = ({
  title
}) => {
  const theme = useTheme();

  return (
    <ContainerHeader>
      <h1>{title}</h1>
      <ContainerOptionsHeader>
        <Option>
          <ImSearch size={20} color={theme.foreground} />
        </Option>
        <Option>
          <VscBellDot size={20} color={theme.foreground} />
        </Option>
        <OptionUser>
          <img src="https://minotar.net/avatar/Verdize" />
          <p>SMCodes</p>
          <FiChevronDown size={20} color={theme.foreground} />
        </OptionUser>
      </ContainerOptionsHeader>
    </ContainerHeader>
  );
}

export default DashboardHeader;
