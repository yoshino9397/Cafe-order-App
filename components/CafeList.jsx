import styles from "../styles/CafeList.module.css";
import CafeCard from "./CafeCard";

const CafeList = ({ cafeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST COFFEE IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {cafeList.map((cafe) => (
          <CafeCard key={cafe._id} cafe={cafe} />
        ))}
      </div>
    </div>
  );
};

export default CafeList;
