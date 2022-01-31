import Head from 'next/head';
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import DashboardMenu from '@/components/DashboardMenu';
import PrimaryMoneyCard from '@/components/PrimaryMoneyCard';

import {
  Container,
  ContainerDash,
} from '@/styles/dashboard';

import { ContainerSavings } from '@/styles/dashboard/wallet';
import DashboardHeader from '@/components/DashboardHeader';

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
          <DashboardHeader title="Sua carteira" />
          <ContainerSavings>
            <div>
              <h2>Money</h2>
              <PrimaryMoneyCard
                value="$ 829.28 B"
                subTitle="Transações"
                chartId="money"
                days={[
                  {
                    name: "DOM",
                    uv: 148.0,
                  },
                  {
                    name: "SEG",
                    uv: 148.0,
                  },
                  {
                    name: "TERÇ",
                    uv: 189.0,
                  },
                  {
                    name: "QUA",
                    uv: 64.0,
                  },
                  {
                    name: "QUI",
                    uv: 132.0,
                  },
                  {
                    name: "SEX",
                    uv: 165.0,
                  },
                  {
                    name: "SÁB",
                    uv: 52.0,
                  },
                ]}
                color={theme.cyan}
              />
            </div>
            <div>
              <h2>Tokens</h2>
              <PrimaryMoneyCard
                value="$ 701.90 M"
                subTitle="Transações"
                chartId="tokens"
                days={[
                  {
                    name: "DOM",
                    uv: 119.0,
                  },
                  {
                    name: "SEG",
                    uv: 79.0,
                  },
                  {
                    name: "TERÇ",
                    uv: 97.0,
                  },
                  {
                    name: "QUA",
                    uv: 77.0,
                  },
                  {
                    name: "QUI",
                    uv: 55.0,
                  },
                  {
                    name: "SEX",
                    uv: 88.0,
                  },
                  {
                    name: "SÁB",
                    uv: 78.0,
                  },
                ]}
                color={theme.green}
              />
            </div>
            <div>
              <h2>Blocos</h2>
              <PrimaryMoneyCard
                value="$ 668.17 K"
                subTitle="Transações"
                chartId="blocks"
                days={[
                  {
                    name: "DOM",
                    uv: 80.0,
                  },
                  {
                    name: "SEG",
                    uv: 70.0,
                  },
                  {
                    name: "TERÇ",
                    uv: 137.0,
                  },
                  {
                    name: "QUA",
                    uv: 153.0,
                  },
                  {
                    name: "QUI",
                    uv: 55.0,
                  },
                  {
                    name: "SEX",
                    uv: 58.0,
                  },
                  {
                    name: "SÁB",
                    uv: 53.0,
                  },
                ]}
                color={theme.red}
              />
            </div>
            <div>
              <h2>Safiras</h2>
              <PrimaryMoneyCard
                value="$ 673.20 T"
                subTitle="Transações"
                chartId="sapphires"
                days={[
                  {
                    name: "DOM",
                    uv: 192.0,
                  },
                  {
                    name: "SEG",
                    uv: 112.0,
                  },
                  {
                    name: "TERÇ",
                    uv: 66.0,
                  },
                  {
                    name: "QUA",
                    uv: 99.0,
                  },
                  {
                    name: "QUI",
                    uv: 50.0,
                  },
                  {
                    name: "SEX",
                    uv: 180.0,
                  },
                  {
                    name: "SÁB",
                    uv: 126.0,
                  },
                ]}
                color={theme.yellow}
              />
            </div>
            <div>
              <h2>Cash</h2>
              <PrimaryMoneyCard
                value="$ 45.0 K"
                subTitle="Transações"
                chartId="cash"
                days={[
                  {
                    name: "DOM",
                    uv: 131.0,
                  },
                  {
                    name: "SEG",
                    uv: 55.0,
                  },
                  {
                    name: "TERÇ",
                    uv: 63.0,
                  },
                  {
                    name: "QUA",
                    uv: 139.0,
                  },
                  {
                    name: "QUI",
                    uv: 57.0,
                  },
                  {
                    name: "SEX",
                    uv: 128.0,
                  },
                  {
                    name: "SÁB",
                    uv: 122.0,
                  },
                ]}
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
