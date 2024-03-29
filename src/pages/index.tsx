import Head from "next/head";
import Script from "next/script";
import styles from "@/styles/Home.module.css";
import Layout from "./component/layout/Layout";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="A personalized portfolio of John Paeldin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="/js/custom.js" defer/>
        <main className={`${styles.main} ${inter.className}`}>
          <Layout className="main-container"/>
          <Analytics />
        </main>
      <Script src="/js/bootstrap.bundle.min.js" />
    </>
  );
}
