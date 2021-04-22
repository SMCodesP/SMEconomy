import Head from 'next/head';

import { FaUser, FaLock, FaDiscord, FaGithub } from 'react-icons/fa';
import { GoogleFonts } from 'next-google-fonts';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
      <Head>
        <title>Início - SpetacularNetwork</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={styles.containerLogin}>
          <h1>Acesse sua conta</h1>
          <div className={styles.containerInput}>
            <FaUser size={28} color="#7A899A" />
            <input
              type="text"
              name="username"
              placeholder="Digite seu nickname"
            />
          </div>
          <div className={styles.containerInput}>
            <FaLock size={28} color="#7A899A" />
            <input
              type="password"
              name="username"
              placeholder="Digite sua senha"
            />
          </div>
          <button className={styles.button}>Entrar</button>
        </section>
        <div className={styles.containerSocial}>
          <a href="https://github.com/SMCodesP/SMEconomy" target="_blank">
            <FaGithub size={32} color="#191622" />
          </a>
          <hr />
          <a
            href="https://discord.com/users/520311747098312725"
            target="_blank"
          >
            <FaDiscord size={32} color="#191622" />
          </a>
        </div>
      </main>
    </>
  );
}
