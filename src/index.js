import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BasketProvider } from "./providers/BasketProvider";
import { ProductsProvider } from "./providers/ProductsProvider";
import { SelectedProductProvider } from "./providers/SelectedProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <SelectedProductProvider autoSelectFirst={true}>
      <BasketProvider>
        <App />
      </BasketProvider>
    </SelectedProductProvider>
  </ProductsProvider>
);
