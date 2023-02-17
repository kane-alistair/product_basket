import { useProducts } from "../hooks/useProducts";
import { ProductsContext } from "../contexts/ProductsContext";

export const ProductsProvider = ({ children }) => {
  const { products, error, loading } = useProducts();

  return (
    <ProductsContext.Provider value={{ products, error, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};
