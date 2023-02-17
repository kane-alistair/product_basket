import "./app.css";
import { Basket } from "./components/Basket/Basket";
import { ColumnBox } from "./components/ColumnBox/ColumnBox";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { ProductList } from "./components/ProductList/ProductList";
import { Reviews } from "./components/Reviews/Reviews";
import { Row } from "./components/Row/Row";
import { ProductsContext } from "./contexts/ProductsContext";
import { useContext } from "react";

export default function App() {
  const { loading } = useContext(ProductsContext);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="shell">
      <Row>
        <ColumnBox width="20%">
          <ProductList
            addedStyles={{ height: "750px", maxHeight: "750px" }}
          ></ProductList>
        </ColumnBox>
        <ColumnBox width="65%">
          <ProductDetail></ProductDetail>
        </ColumnBox>
        <ColumnBox width="15%" reverse>
          <Basket></Basket>
        </ColumnBox>
      </Row>
      <ColumnBox width="25%">
        <Reviews></Reviews>
      </ColumnBox>
    </div>
  );
}
