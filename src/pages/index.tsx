import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "./component/layout/Layout";
import { Providers } from "./component/providers";
import { Inter } from "next/font/google";
import Script from "next/script";

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
          <Script src="/js/custom.js" defer/>
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
          <Layout className="main-container"/>
        </main>
      </Providers>
      <Script src="/js/bootstrap.bundle.min.js" />
    </>
  );
}
