import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import { SiBuymeacoffee } from "react-icons/si";

const Product = () => {
  const [size, setSize] = useState(0);
  const americano = {
    id: 1,
    img: "/img/americano.jpg",
    name: "Americano",
    price: [3.5, 4.5, 5],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint amet numquam blanditiis aut earum dolorum sunt quod eaque rem consequatur maiores, fugiat hic dicta repellendus illo molestias magni, ut pariatur?",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={americano.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{americano.name}</h1>
        <span className={styles.price}>${americano.price[size]}</span>
        <p className={styles.desc}>{americano.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <SiBuymeacoffee fontSize="35px" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <SiBuymeacoffee fontSize="45px" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <SiBuymeacoffee fontSize="52px" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
