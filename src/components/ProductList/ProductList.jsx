import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { SelectedProductContext } from "../../contexts/SelectedProductContext";

/**
 * Responsible for fetching and returning a list of ProductCards
 * @returns a list of products
 */
export const ProductList = ({ products: productsProp, addedStyles }) => {
  const { products, err } = useContext(ProductsContext);
  const [_, dispatch] = useContext(SelectedProductContext);

  const productsList = productsProp || products;

  if (err) {
    return <div>Beep boop, Something went wrong {err.message}</div>;
  }

  const onClick = (id) => {
    dispatch({
      type: "SELECT_PRODUCT",
      id,
    });
  };

  return (
    <div className={`${styles.list}`} style={addedStyles}>
      {productsList?.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onClick={onClick}
        ></ProductCard>
      ))}
    </div>
  );
};
