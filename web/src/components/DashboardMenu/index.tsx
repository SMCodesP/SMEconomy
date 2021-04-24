import Link from 'next/link';

import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { HiUserGroup } from 'react-icons/hi';
import { BiWallet } from 'react-icons/bi';
import { GoGraph } from 'react-icons/go';
import { CgArrowsExchange } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';

import {
  Ball,
  Container,
  OptionHome,
  Option,
} from '@/components/DashboardMenu/styles';
import { darken } from 'polished';

const DashboardMenu: React.FC<{
  location: string;
}> = ({ location }) => {
  const theme = useContext(ThemeContext);

  const pages: {
    name: string;
    IconEnabled: React.FC;
    IconDisabled: React.FC;
    options?: any;
  }[] = [
    {
      name: 'home',
      IconEnabled: () => (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1364 1.5H23.5V9.86364H15.1364V1.5Z"
            stroke={theme.cyan}
            strokeWidth="2"
          />
          <rect
            x="15.1364"
            y="15.1364"
            width="8.36364"
            height="8.36364"
            stroke={theme.cyan}
            strokeWidth="2"
          />
          <rect
            x="1.5"
            y="15.1364"
            width="8.36364"
            height="8.36364"
            stroke={theme.cyan}
            strokeWidth="2"
          />
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H11.3636V11.3636H0V8Z"
            fill={theme.cyan}
          />
        </svg>
      ),
      IconDisabled: () => (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1364 1.5H23.5V9.86364H15.1364V1.5Z"
            stroke={theme.selection}
            strokeWidth="2"
          />
          <rect
            x="15.1364"
            y="15.1364"
            width="8.36364"
            height="8.36364"
            stroke={theme.selection}
            strokeWidth="2"
          />
          <rect
            x="1.5"
            y="15.1364"
            width="8.36364"
            height="8.36364"
            stroke={theme.selection}
            strokeWidth="2"
          />
          <path
            d="M1.5 1.5H9.86364V9.86364H1.5V1.5Z"
            stroke={theme.selection}
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      name: 'wallet',
      IconEnabled: () => <BiWallet size={26} color={theme.cyan} />,
      IconDisabled: () => <BiWallet size={26} color={theme.selection} />,
    },
    {
      name: 'graph',
      IconEnabled: () => <GoGraph size={26} color={theme.cyan} />,
      IconDisabled: () => <GoGraph size={26} color={theme.selection} />,
    },
    {
      name: 'exchange',
      IconEnabled: () => <CgArrowsExchange size={32} color={theme.cyan} />,
      IconDisabled: () => (
        <CgArrowsExchange size={32} color={theme.selection} />
      ),
    },
    {
      name: 'users',
      IconEnabled: () => <HiUserGroup size={26} color={theme.cyan} />,
      IconDisabled: () => <HiUserGroup size={26} color={theme.selection} />,
    },
  ];

  return (
    <Container>
      <OptionHome
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${darken(
            0.25,
            theme.yellow,
          )}, ${theme.yellow})`,
          padding: 8,
          marginBottom: 10,
        }}
      >
        <img
          style={{
            width: 32,
            height: 32,
          }}
          src="/favicon.ico"
        />
      </OptionHome>
      {pages.map(({ name, IconEnabled, IconDisabled, options = {} }, index) => (
        <Option key={name + index} {...options}>
          {name === location ? <IconEnabled /> : <IconDisabled />}
          {name === location && <Ball />}
        </Option>
      ))}
      <div
        style={{
          marginBottom: 25,
          marginTop: 'auto',
        }}
      >
        <Link href="/">
          <a>
            <OptionHome>
              <FiLogOut size={26} color={theme.red} />
            </OptionHome>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default DashboardMenu;
