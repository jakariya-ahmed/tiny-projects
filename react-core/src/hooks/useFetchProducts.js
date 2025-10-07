import { useEffect, useState } from "react";

export default function useFetchProducts() {
  
  const API_URL = "https://dummyjson.com/products?limit=100"; // fetch 100 products  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not fine");
        return res.json();
      })
      .then((data) => {
        const enrichedProducts = data.products.map((p) => ({
          ...p,
          colors: ["red","blue","green","yellow","black","pink"]
            .sort(() => 0.5 - Math.random()).slice(0, 2),
          sizes: ["S","M","L","XL"].sort(() => 0.5 - Math.random()).slice(0, 2),
          popularity: Math.floor(Math.random() * 100),
          createdAt: Date.now() - Math.floor(Math.random() * 1000000000),
        }));
        setProducts(enrichedProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  return { products, loading, error };
}
