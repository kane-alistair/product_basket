export const getProducts = async () => {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query AllProducts {
                allProducts {
                    id, sku, price, images, title, description, stock
                }
            }`,
    }),
  })
    .then((response) => response.json())
    .then((res) => res.data.allProducts);
};
