import Image from "next/image";
import styles from "../styles/CafeCard.module.css";

const CafeCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/card.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>Cafe Latte</h1>
      <span className={styles.price}>$4.50</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default CafeCard;
