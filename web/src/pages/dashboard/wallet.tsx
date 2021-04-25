import Head from 'next/head';
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { ImSearch } from 'react-icons/im';
import { VscBellDot } from 'react-icons/vsc';
import { FiChevronDown } from 'react-icons/fi';

import DashboardMenu from '@/components/DashboardMenu';
import PrimaryMoneyCard from '@/components/PrimaryMoneyCard';

import {
  Container,
  ContainerDash,
  ContainerHeader,
  ContainerOptionsHeader,
  Option,
  OptionUser,
} from '@/styles/dashboard';

import { ContainerSavings } from '@/styles/dashboard/wallet';

const Wallet: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Dashboard - SpetacularNetwork</title>
      </Head>
      <Container>
        <DashboardMenu location="wallet" />

        <ContainerDash>
          <ContainerHeader>
            <h1>Sua carteira</h1>
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
            <div>
              <h2>Money</h2>
              <PrimaryMoneyCard
                value="$ 829.28 B"
                subTitle="Transações"
                days={{
                  DOM: 976.74,
                  SEG: 156.12,
                  TERÇ: 823.76,
                  QUA: 356.41,
                  QUI: 613.59,
                  SEX: 738.71,
                  SÁB: 568.73,
                }}
                color={theme.cyan}
              />
            </div>
            <div>
              <h2>Tokens</h2>
              <PrimaryMoneyCard
                value="$ 701.90 M"
                subTitle="Transações"
                days={{
                  DOM: 859.98,
                  SEG: 20.68,
                  TERÇ: 812.71,
                  QUA: 722.72,
                  QUI: 584.73,
                  SEX: 191.92,
                  SÁB: 594.89,
                }}
                color={theme.green}
              />
            </div>
            <div>
              <h2>Blocos</h2>
              <PrimaryMoneyCard
                value="$ 668.17 K"
                subTitle="Transações"
                days={{
                  DOM: 15.26,
                  SEG: 567.16,
                  TERÇ: 356.42,
                  QUA: 23.46,
                  QUI: 175.85,
                  SEX: 560.18,
                  SÁB: 687.73,
                }}
                color={theme.red}
              />
            </div>
            <div>
              <h2>Safiras</h2>
              <PrimaryMoneyCard
                value="$ 673.20 T"
                subTitle="Transações"
                days={{
                  DOM: 115.25,
                  SEG: 942.46,
                  TERÇ: 545.33,
                  QUA: 28.87,
                  QUI: 18.27,
                  SEX: 621.34,
                  SÁB: 620.34,
                }}
                color={theme.yellow}
              />
            </div>
            <div>
              <h2>Cash</h2>
              <PrimaryMoneyCard
                value="$ 45.0 K"
                subTitle="Transações"
                days={{
                  DOM: 491.67,
                  SEG: 563.38,
                  TERÇ: 609.46,
                  QUA: 29.39,
                  QUI: 614.48,
                  SEX: 680.51,
                  SÁB: 263.71,
                }}
                color={theme.purple}
              />
            </div>
          </ContainerSavings>
        </ContainerDash>
      </Container>
    </>
  );
};

export default Wallet;
