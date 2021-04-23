import Head from 'next/head';
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { ImSearch } from 'react-icons/im';
import { VscBellDot } from 'react-icons/vsc';
import { FiChevronDown } from 'react-icons/fi';

import DashboardMenu from '@/components/DashboardMenu';

import {
  Container,
  ContainerDash,
  ContainerHeader,
  ContainerOptionsHeader,
  Option,
  OptionUser,
} from '@/styles/dashboard';

const Dashboard: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Dashboard - SpetacularNetwork</title>
      </Head>
      <Container>
        <DashboardMenu location="home" />

        <ContainerDash>
          <ContainerHeader>
            <h1>Visão Geral</h1>
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
        </ContainerDash>
      </Container>
    </>
  );
};

export default Dashboard;
