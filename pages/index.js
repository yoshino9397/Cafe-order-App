import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import Top from "../components/Top";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cafe Lynx in NY</title>
        <meta name="description" content="Good coffee makes your day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Featured />
    </div>
  );
}
