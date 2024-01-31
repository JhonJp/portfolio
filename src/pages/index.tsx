import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ColorPallete from "./component/color-picker";
import { Providers } from "./component/providers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Providers>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="A personalized portfolio of John Paeldin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <script src="/js/color-modes.js"></script>
          <link href="/css/bootstrap.min.css" rel="stylesheet"></link>
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
          <ColorPallete />
        </main>
      </Providers>
      <script src="/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
