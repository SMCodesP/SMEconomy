import "react-toastify/dist/ReactToastify.min.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/global";
import themes from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ThemeProvider theme={themes["dark"]}>
        <Component {...pageProps} />

        <GlobalStyle />

        <ToastContainer />
      </ThemeProvider>
    </>
  );
}
