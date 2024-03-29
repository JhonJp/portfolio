import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes';

import '../styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
