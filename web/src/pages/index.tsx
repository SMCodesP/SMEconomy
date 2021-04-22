import Head from 'next/head';

import { FaUser, FaLock } from 'react-icons/fa';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}
