import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { GoogleFonts } from 'next-google-fonts';

import { GlobalStyle } from '@/styles/global';
import themes from '@/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={themes['dark']}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
