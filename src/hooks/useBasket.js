import { useState, useReducer } from "react";

export const basketActions = {
  GET_BASKET: "GET_BASKET",
  GET_TOTAL: "GET TOTAL",
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  IS_ITEM_IN_BASKET: "IS_ITEM_IN_BASKET",
};

export const useBasket = () => {
  const [total, setTotal] = useState(0);

  const basketReducer = (basket = [], action) => {
    switch (action.type) {
      case basketActions.ADD_TO_BASKET:
        if (!isProductInBasket(action.product, basket)) {
          const newBasket = addToBasket(action.product, basket);
          setTotal(getTotal(newBasket));
          return newBasket;
        }
      case basketActions.REMOVE_FROM_BASKET:
        if (isProductInBasket(action.product, basket)) {
          const newBasket = removeFromBasket(action.product, basket);
          setTotal(getTotal(newBasket));
          return newBasket;
        }
      default:
        return state;
    }
  };

  const addToBasket = (product, basket) => {
    return [...basket, product];
  };

  const removeFromBasket = (product, basket) => {
    return basket.filter((item) => item.id !== product.id);
  };

  const isProductInBasket = (product, basket) => {
    return basket.some((basketProduct) => basketProduct.id === product.id);
  };

  const getTotal = (basket) => {
    return basket.reduce(
      (total, product) => Number(total) + Number(product.price),
      0
    );
  };

  const [state, dispatch] = useReducer(basketReducer, []);

  return {
    state,
    dispatch,
    total,
  };
};
