import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { CgShoppingCart, CgMenu } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src="/img/logo.jpg" alt="" width="150px" height="130px" />
          </div>
          <div className={styles.menuIcon}>
            <CgMenu color="white" fontSize="40px"/>
          </div>

          <div className={styles.texts}>
            <div className={styles.text}>Cafe Lynx</div>
            <div className={styles.text}>In New York</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <CgShoppingCart fontSize="45px" color="white" />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.cartMobile}>
            <CgShoppingCart fontSize="35px" color="white" />
            <div className={styles.counterMobile}>2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
