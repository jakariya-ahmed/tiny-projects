import { useEffect, useState } from "react";

export default function useDummyData() {
    // Dummy API URL
    const API_URL = `https://dummyjson.com/products?limit=1200&skip=24`;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not fine");
                return res.json();
            })
            .then((data) => {
                // Fake color & size attributes
                const productsWithAttributes = data.products.map((p) => (
                    {
                    ...p,
                    colors: ["red","blue","green","yellow","black","pink"]
                    .sort(() => 0.5 - Math.random()).slice(0, 2), //pick 2 random colors
                    sizes: ['S','M','L','XL']
                    .sort(() => 0.5 - Math.random()).slice(0,2)// Pick 2 random sizes
                }))

                setProducts(productsWithAttributes);
                
                // Find max Price 
                const maxP = Math.ceil(Math.max(...productsWithAttributes.map((p) => p.price)));
                setMaxPrice(maxP);
                
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [API_URL]);

    return { products, loading, error, maxPrice };
}
