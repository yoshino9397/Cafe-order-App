import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import CafeList from "../components/CafeList";
import Featured from "../components/Featured";
import Top from "../components/Top";
import styles from "../styles/Home.module.css";

export default function Home({ cafeList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cafe Lynx in NY</title>
        <meta name="description" content="Good coffee makes your day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Featured />
      <CafeList cafeList={cafeList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      cafeList: res.data,
    },
  };
};
