// Retrieves reviews based on the selected products
//
// Path: src/hooks/useReviews.js
// Compare this snippet from src/hooks/useProducts.js:
import { useState, useEffect, useContext } from "react";
import { getReviews } from "../requests/getReviews";
import { SelectedProductContext } from "../contexts/SelectedProductContext";

export const useReviews = () => {
  const [selectedProduct] = useContext(SelectedProductContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getReviewsForSelectedProduct = (reviews) => {
    const reviewsForSelectedProduct = reviews.filter(
      (review) => review.productID == selectedProduct.id
    );
    return reviewsForSelectedProduct;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviews();
        setReviews(getReviewsForSelectedProduct(response));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchReviews();
  }, [selectedProduct]);

  return {
    reviews,
    loading,
    error,
  };
};
