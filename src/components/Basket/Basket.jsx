import { useContext } from "react";
import "../../app.css";
import { BasketContext } from "../../contexts/BasketContext";
import { ProductList } from "../ProductList/ProductList";
import styles from "./Basket.module.css";

export const Basket = ({ products }) => {
  const [basket, _, total] = useContext(BasketContext);

  const productsList = products ?? basket;

  if (!productsList || productsList.length === 0) {
    return null;
  }

  const displayTotal = () => total.toFixed(2);

  return (
    <div className={`${styles.basket} border`}>
      <h3>Basket</h3>
      <ProductList
        products={productsList}
        addedStyles={{ height: "100%", maxHeight: "500px" }}
      ></ProductList>
      {total > 0 && (
        <div className={styles["total-box"]}>
          <span>Total:</span>
          <span className={styles["total-amount"]}>{`£${displayTotal()}`}</span>
        </div>
      )}
    </div>
  );
};
