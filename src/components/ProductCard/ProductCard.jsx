import styles from "./ProductCard.module.css";
import { Row } from "../Row/Row";
import { cloneElement } from "react";
import "../../app.css";

/**
 * Responsible for displaying the information for an individual product based on props
 * @param {Object} product - The product to display
 * @param {string} product.title - The name of the product
 * @param {string} product.image - The images of the product
 * @param {string} product.price - The price of the product
 */
export const ProductCard = ({ product, onClick }) => {
  const imageJsx = cloneElement(product.images[0], {
    className: styles.image,
    alt: product.title,
  });

  return (
    <div
      className={`${styles.card} border`}
      key={product.id}
      onClick={() => onClick(product.id)}
    >
      {imageJsx}
      <Row space="between">
        <span>{product.title}</span>
      </Row>
    </div>
  );
};
