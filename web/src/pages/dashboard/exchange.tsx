import Head from 'next/head';

import DashboardMenu from '@/components/DashboardMenu';
import DashboardHeader from '@/components/DashboardHeader';

import { Container, ContainerDash } from '@/styles/dashboard';

import { ContainerUsersExchange, TitleCard } from '@/styles/dashboard/exchange';
import ExchangeCardUserPayer from '@/components/ExchangeCardUser/ExchangeCardUserPayer';
import ExchangeCardUserReceiver from '@/components/ExchangeCardUser/ExchangeCardUserReceiver';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { Triangle } from 'react-loader-spinner';
import { useState } from 'react';

const Exchange: React.FC = () => {
  const [moneySended, setMoneySended] = useState(0);
  const [sending, setSending] = useState(false);

  return (
    <>
      <Head>
        <title>Dashboard - SpetacularNetwork</title>
      </Head>
      <Container>
        <DashboardMenu location="exchange" />

        <ContainerDash>
          <DashboardHeader title="Transferência" />
          <ContainerUsersExchange>
            <ExchangeCardUserPayer
              player={{
                name: 'SMCodes',
                skin: 'RIkKaY_',
                money: 5.0435025711562096e22,
              }}
              setMoneySended={setMoneySended}
              moneySended={moneySended}
              setSending={setSending}
              sending={sending}
            />
            <div>
              {sending ? (
                <Triangle color="#a8a8a8" height={72} width={72} />
              ) : (
                <RiArrowLeftRightFill size={72} color="#a8a8a8" />
              )}
            </div>
            <ExchangeCardUserReceiver
              player={{
                name: 'breze',
                skin: 'breze',
                money: 7.552886149907141e21,
              }}
              moneySended={moneySended}
            />
          </ContainerUsersExchange>
        </ContainerDash>
      </Container>
    </>
  );
};

export default Exchange;
