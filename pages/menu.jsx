import axios from "axios";
import styles from "../styles/Menu.module.css";
import CafeCard from "../components/CafeCard";

const Menu = ({ cafeList }) => {
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

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      cafeList: res.data,
    },
  };
};

export default Menu;
