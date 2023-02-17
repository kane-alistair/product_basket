export const getReviews = async () => {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query AllReviews {
                  allReviews {
                    id, date, productID, rating, username, comment
                  }
              }`,
    }),
  })
    .then((response) => response.json())
    .then((res) => res.data.allReviews);
};
