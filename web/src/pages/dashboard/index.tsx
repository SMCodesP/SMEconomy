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
import Select from '@/components/Select';

import {
  Container,
  ContainerDash,
  ContainerSavings,
  ContainerEconomy,
  ContainerThree,
  ContainerTransaction,
  ContainerSelections,
  HeaderTransaction,
  TableTransaction,
  UserTransaction,
  AvatarTransaction,
  ContainerUserTransaction,
  UsernameTransaction,
  ClanNameTransaction,
  ValueTransaction,
  DateTransaction,
  ContainerPayUser,
  TitlePayUser,
  AboutPayUser,
  ButtonPayUser,
} from '@/styles/dashboard';
import DashboardHeader from '@/components/DashboardHeader';

const options = [
  { value: '1 days', label: 'Hoje' },
  { value: '7 days', label: 'Semana' },
  { value: '30 days', label: 'Mês' },
  { value: '365 days', label: 'Ano' },
];

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
          <DashboardHeader title="Visão Geral" />
          <ContainerSavings>
            <ContainerEconomy>
              <h2>Saldo</h2>
              <PrimaryMoneyCard
                value="$ 17.6 B"
                subTitle="Transações"
                chartId="money"
                days={[
                  {
                    name: 'DOM',
                    uv: 28.0,
                  },
                  {
                    name: 'SEG',
                    uv: 0,
                  },
                  {
                    name: 'TERÇ',
                    uv: 29.0,
                  },
                  {
                    name: 'QUA',
                    uv: 30.8,
                  },
                  {
                    name: 'QUI',
                    uv: 16.4,
                  },
                  {
                    name: 'SEX',
                    uv: 35.3,
                  },
                  {
                    name: 'SÁB',
                    uv: 40,
                  },
                ]}
                color={theme.cyan}
              />
            </ContainerEconomy>
            <ContainerEconomy>
              <ContainerThree>
                <SecundaryMoneyCard
                  name="Safiras"
                  title="$ 293 K"
                  Icon={FaDollarSign}
                  color={theme.pink}
                />
                <SecundaryMoneyCard
                  name="Tokens"
                  title="$ 13 B"
                  Icon={ImDiamonds}
                  color={theme.yellow}
                />
                <SecundaryMoneyCard
                  name="Blocos"
                  title="$ 129.3 M"
                  Icon={BsFillXDiamondFill}
                  color={theme.green}
                />
              </ContainerThree>
            </ContainerEconomy>
          </ContainerSavings>
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '5fr 3fr',
              margin: '15px 0',
              gap: '65px',
            }}
          >
            <ContainerTransaction>
              <HeaderTransaction>
                <h2>Transferências</h2>
                <ContainerSelections>
                  <Select
                    width={125}
                    defaultV={{ value: 1, label: '1 Dia' }}
                    options={[
                      { value: 1, label: '1 Dia' },
                      { value: 7, label: '7 Dias' },
                      { value: 30, label: '1 Mês' },
                      { value: 365, label: '1 Ano' },
                    ]}
                  />
                  <Select
                    width={160}
                    defaultV={{ value: 'latest', label: 'Recentes' }}
                    options={[
                      { value: 'latest', label: 'Recentes' },
                      { value: 'highest', label: 'Maiores' },
                      { value: 'lower', label: 'Menores' },
                      { value: 'clan', label: 'Seu clan' },
                    ]}
                  />
                </ContainerSelections>
              </HeaderTransaction>
              <TableTransaction>
                <tr>
                  <th>Nome</th>
                  <th>Valor</th>
                  <th>Data</th>
                </tr>
                <tr>
                  <UserTransaction>
                    <AvatarTransaction src="https://minotar.net/avatar/breze" />
                    <ContainerUserTransaction>
                      <UsernameTransaction>breze</UsernameTransaction>
                      <ClanNameTransaction>Sem clan</ClanNameTransaction>
                    </ContainerUserTransaction>
                  </UserTransaction>
                  <ValueTransaction color={theme.red}>
                    $ - 19.00 B
                  </ValueTransaction>
                  <DateTransaction>Hoje às 13H30</DateTransaction>
                </tr>
                <tr>
                  <UserTransaction>
                    <AvatarTransaction src="https://minotar.net/avatar/Console" />
                    <ContainerUserTransaction>
                      <UsernameTransaction>Console</UsernameTransaction>
                      <ClanNameTransaction>Sem clan</ClanNameTransaction>
                    </ContainerUserTransaction>
                  </UserTransaction>
                  <ValueTransaction color={theme.green}>
                    $ 22.00 B
                  </ValueTransaction>
                  <DateTransaction>Hoje às 6H30</DateTransaction>
                </tr>
                <tr>
                  <UserTransaction>
                    <AvatarTransaction src="https://minotar.net/avatar/MisterSevent_" />
                    <ContainerUserTransaction>
                      <UsernameTransaction>MisterSevent_</UsernameTransaction>
                      <ClanNameTransaction>Sem clan</ClanNameTransaction>
                    </ContainerUserTransaction>
                  </UserTransaction>
                  <ValueTransaction color={theme.red}>
                    $ - 7.00 M
                  </ValueTransaction>
                  <DateTransaction>Ontem às 12H</DateTransaction>
                </tr>
                <tr>
                  <UserTransaction>
                    <AvatarTransaction src="https://minotar.net/avatar/breze" />
                    <ContainerUserTransaction>
                      <UsernameTransaction>breze</UsernameTransaction>
                      <ClanNameTransaction>Sem clan</ClanNameTransaction>
                    </ContainerUserTransaction>
                  </UserTransaction>
                  <ValueTransaction color={theme.red}>
                    $ - 17.00 B
                  </ValueTransaction>
                  <DateTransaction>Ontem às 22H20</DateTransaction>
                </tr>
                <tr>
                  <UserTransaction>
                    <AvatarTransaction src="https://minotar.net/avatar/Console" />
                    <ContainerUserTransaction>
                      <UsernameTransaction>Console</UsernameTransaction>
                      <ClanNameTransaction>Sem clan</ClanNameTransaction>
                    </ContainerUserTransaction>
                  </UserTransaction>
                  <ValueTransaction color={theme.green}>
                    $ 17.00 B
                  </ValueTransaction>
                  <DateTransaction>Ontem às 23H00</DateTransaction>
                </tr>
              </TableTransaction>
            </ContainerTransaction>
            <ContainerPayUser>
              <TitlePayUser>Envie dinheiro para amigos</TitlePayUser>
              <AboutPayUser>
                Acesse aqui para enviar dinheiro para outros jogadores.
              </AboutPayUser>
              <ButtonPayUser>Clique aqui</ButtonPayUser>
            </ContainerPayUser>
          </div>
        </ContainerDash>
      </Container>
    </>
  );
};

export default Dashboard;
