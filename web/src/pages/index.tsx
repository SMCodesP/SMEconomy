import Head from 'next/head';
import { useRouter } from 'next/router';

import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { FaUser, FaLock, FaDiscord, FaGithub } from 'react-icons/fa';

import { rgba } from 'polished';

import {
  Container,
  ContainerLogin,
  ContainerInput,
  Input,
  Button,
  ContainerSocial,
} from '@/styles/home';

export default function Home() {
  const router = useRouter();
  const theme = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Início - SpetacularNetwork</title>
      </Head>

      <Container>
        <ContainerLogin onSubmit={handleSubmit}>
          <h1>Acesse sua conta</h1>
          <ContainerInput>
            <FaUser size={28} color={rgba(theme.background, 0.75)} />
            <Input
              type="text"
              name="username"
              placeholder="Digite seu nickname"
            />
          </ContainerInput>
          <ContainerInput>
            <FaLock size={28} color={rgba(theme.background, 0.75)} />
            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </ContainerInput>
          <Button type="submit">Entrar</Button>
        </ContainerLogin>
        <ContainerSocial>
          <a href="https://github.com/SMCodesP/SMEconomy" target="_blank">
            <FaGithub size={32} color={theme.background} />
          </a>
          <hr />
          <a
            href="https://discord.com/users/520311747098312725"
            target="_blank"
          >
            <FaDiscord size={32} color={theme.background} />
          </a>
        </ContainerSocial>
      </Container>
    </>
  );
}
