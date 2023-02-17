import { cloneElement, useContext } from "react";
import "../../app.css";
import { AddToBasketButton } from "../AddToBasketButton/AddToBasketButton";
import { ColumnBox } from "../ColumnBox/ColumnBox";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { SelectedProductContext } from "../../contexts/SelectedProductContext";
import { StockDisplay } from "../StockDisplay/StockDisplay";
import styles from "./ProductDetail.module.css";
/**
 * Responsible for displaying the information for an individual product based on props
 * @param {Object} product - The product to display
 * @param {string} product.title - The name of the product
 * @param {string} product.images - The image of the product
 * @param {string} product.price - The price of the product
 * @param {string} product.description - The description of the product
 * @param {string} product.stock - The stock of the product
 **/

export const ProductDetail = ({ product }) => {
  const [selectedProduct] = useContext(SelectedProductContext);

  if (!selectedProduct && !product) {
    return null;
  }

  return (
    <div className={`${styles.detail}`}>
      <ColumnBox>
        <div className={styles.info}>
          <h1>{selectedProduct.title}</h1>
          <p>{selectedProduct.description}</p>
          <span>£{selectedProduct.price}</span>
        </div>
        <ColumnBox>
          <ImageCarousel
            extraButtons={
              <AddToBasketButton product={selectedProduct}></AddToBasketButton>
            }
          >
            {selectedProduct.images.map((image) =>
              cloneElement(image, {
                className: styles.image,
                alt: selectedProduct.title,
                key: image.key,
              })
            )}
          </ImageCarousel>
          <ColumnBox size="small">
            <StockDisplay stock={selectedProduct.stock}></StockDisplay>
          </ColumnBox>
        </ColumnBox>
      </ColumnBox>
    </div>
  );
};
