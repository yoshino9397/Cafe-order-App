import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/footer.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.title}>DO YOU HAVE A QUESTIONS?</h2>
          <h3 className={styles.phone}>noreply@yoshino.com</h3>
          <div className={styles.media}>
            <AiFillInstagram />
            <AiFillTwitterCircle />
            <BsFacebook />
          </div>
        </div>
        <div className={styles.card}>
          <h2 className={styles.motto}>FIND OUR RESTAURANTS</h2>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>BOOK A TABLE</h2>
          <p className={styles.text}>+61 (0) 383 766 284</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
