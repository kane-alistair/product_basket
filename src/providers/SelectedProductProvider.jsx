import { useContext, useEffect, useReducer } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { SelectedProductContext } from "../contexts/SelectedProductContext";

const selectedProductActions = {
  SELECT_PRODUCT: "SELECT_PRODUCT",
  SELECT_FIRST: "SELECT_FIRST",
};

const selectFirstProduct = (products) => {
  if (products.length > 0) {
    return products[0];
  }
};

const getProductById = (products, id) => {
  return products.find((product) => product.id === id);
};

export const SelectedProductProvider = ({ children, autoSelectFirst }) => {
  const { products } = useContext(ProductsContext);

  const selectedProductReducer = (prev = [], action) => {
    if (!selectedProductActions[action.type]) {
      throw new Error(`${action.type} is not an accepted action.`);
    }

    switch (action.type) {
      case selectedProductActions.SELECT_PRODUCT:
        return getProductById(products, action.id);
      case selectedProductActions.SELECT_FIRST:
        return selectFirstProduct(products);
      default:
        return prev;
    }
  };

  const [state, dispatch] = useReducer(selectedProductReducer);

  useEffect(() => {
    if (autoSelectFirst) {
      dispatch({
        type: selectedProductActions.SELECT_FIRST,
      });
    }
  }, [products]);

  return (
    <SelectedProductContext.Provider value={[state, dispatch]}>
      {children}
    </SelectedProductContext.Provider>
  );
};
