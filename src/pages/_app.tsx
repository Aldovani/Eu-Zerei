import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { Theme } from "../styles/theme/default";
import { GlobalStyles } from "../styles/global";
import Header from "@/components/Header";

import "../styles/swipper.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
