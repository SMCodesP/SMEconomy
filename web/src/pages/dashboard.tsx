import Head from 'next/head';
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { ImSearch, ImDiamonds } from 'react-icons/im';
import { BsFillXDiamondFill } from 'react-icons/bs';
import { VscBellDot } from 'react-icons/vsc';
import { FiChevronDown } from 'react-icons/fi';
import { FaDollarSign } from 'react-icons/fa';

import DashboardMenu from '@/components/DashboardMenu';
import PrimaryMoneyCard from '@/components/PrimaryMoneyCard';
import SecundaryMoneyCard from '@/components/SecundaryMoneyCard';

import {
  Container,
  ContainerDash,
  ContainerHeader,
  ContainerOptionsHeader,
  ContainerSavings,
  ContainerEconomy,
  ContainerThree,
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
          <ContainerSavings>
            <ContainerEconomy>
              <h2>Saldo</h2>
              <PrimaryMoneyCard />
            </ContainerEconomy>
            <ContainerEconomy>
              <h2>Economias secundárias</h2>
              <ContainerThree>
                <SecundaryMoneyCard
                  name="Safiras"
                  title="$ 293 K"
                  Icon={FaDollarSign}
                  color={theme.pink}
                />
                <SecundaryMoneyCard
                  name="Safiras"
                  title="$ 13 B"
                  Icon={ImDiamonds}
                  color={theme.yellow}
                />
                <SecundaryMoneyCard
                  name="Safiras"
                  title="$ 129.3 M"
                  Icon={BsFillXDiamondFill}
                  color={theme.green}
                />
              </ContainerThree>
            </ContainerEconomy>
          </ContainerSavings>
        </ContainerDash>
      </Container>
    </>
  );
};

export default Dashboard;
