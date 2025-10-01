import { useEffect, useState } from "react";

export default function useDummyData(API_URL) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not fine");
                return res.json();
            })
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [API_URL]);

    return { products, loading, error };
}
