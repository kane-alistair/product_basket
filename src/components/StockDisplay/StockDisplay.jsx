import styles from "./StockDisplay.module.css";

/**
 * Responsible for displaying the stock of a product
 * @param {string} product.stock - The stock of the product
 ***/
export const StockDisplay = ({ stock }) => {
  const inStock = () => stock > 0;
  const isUrgent = () => inStock() && stock < 50;

  const stockNotifier = inStock() ? "In Stock" : "Out of Stock";
  const urgentDisplay = isUrgent() ? (
    <span className={styles.urgent}>Hurry, only a few left!</span>
  ) : (
    ""
  );

  return (
    <div className={styles.stock}>
      <p className={inStock() ? styles["in-stock"] : styles["out-of-stock"]}>
        {stockNotifier}
      </p>
      <p>{urgentDisplay}</p>
    </div>
  );
};
