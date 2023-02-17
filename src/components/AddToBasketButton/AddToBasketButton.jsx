import { useContext } from "react";
import { basketActions } from "../../hooks/useBasket";
import { Button } from "../Button/Button";
import { BasketContext } from "../../contexts/BasketContext";
import styles from "./AddToBasketButton.module.css";

const isProductInBasket = (basket, product) =>
  basket.find((item) => item.id === product.id);

export const AddToBasketButton = ({ product }) => {
  const [state, dispatch] = useContext(BasketContext);

  const addToBasket = (product) =>
    dispatch({ type: basketActions.ADD_TO_BASKET, product });

  const removeFromBasket = (product) =>
    dispatch({ type: basketActions.REMOVE_FROM_BASKET, product });

  const isInBasket = isProductInBasket(state, product);
  const basketAction = isInBasket ? removeFromBasket : addToBasket;
  const textAction = isInBasket ? "Remove from" : "Add to";
  const className = isInBasket ? styles.remove : styles.add;

  return (
    <Button className={className} onClick={() => basketAction(product)}>
      {textAction} Basket
    </Button>
  );
};
