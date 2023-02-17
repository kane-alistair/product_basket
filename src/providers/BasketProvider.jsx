import { useBasket } from "../hooks/useBasket";
import { BasketContext } from "../contexts/BasketContext";

export const BasketProvider = ({ children }) => {
  const { state, dispatch, total } = useBasket();

  return (
    <BasketContext.Provider value={[state, dispatch, total]}>
      {children}
    </BasketContext.Provider>
  );
};
