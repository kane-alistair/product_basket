import { useState, useEffect } from "react";
import { getProducts } from "../requests/getProducts";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This function was originally created to try to solve the problem of duplicate images being fetched from the API
  // However it seems that the problem is more related to the API itself as it seems to return the same image multiple times
  // This still ensures the image is consistent across each product though, as a new image was being fetched for each image element previously
  const getImages = async (products) => {
    const fetchProductImages = async (product) => {
      const promises = product.images.map((image) =>
        fetch(image).then((res) => res.blob())
      );
      product.images = [];
      return Promise.all(promises).then((responses) => {
        responses.forEach(async (response) => {
          const url = URL.createObjectURL(response);
          const img = <img src={url} />;
          product.images.push(img);
        });
      });
    };

    return Promise.all(
      products.map(async (product) => await fetchProductImages(product))
    );
  };

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      await getImages(response);
      setProducts(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
};
