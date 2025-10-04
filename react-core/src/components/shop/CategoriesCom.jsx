import { useEffect, useState } from "react";

export default function CategoriesCom() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const API_URL = `https://dummyjson.com/products/categories`

    // Fetch categories from dummyjson.com
    useEffect(() => { 
        fetch(API_URL)
        .then((res) => {
            // show error msg
            if(!res.ok) throw new Error('Network response was not fine')
            return res.json();
        })
        .then((data) => {
            setCategories(data);
            setLoading(false);
        })
        .catch((err) => {
            setError("Error fetching categories:", err);
            setLoading(false);
        })
    }, []);

    if (loading) return <p> Loading Categories...</p>
    if (error) return <p> Error : {error}</p>

    return (
        <>
            
        {/* Category */}
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <ul className="space-y-2 text-gray-700">
                {categories.map((cat) => (
                <li key={cat.slug}>
                    <input type="checkbox" value={cat}
                        onCanPlay={(e) => onCatgoryChange(e.target.value, e.target.checked)}
                    /> <span className="pl-2">{cat.name}</span>
                 </li>
                ))}

            </ul>
        </div>
        </>
    );

}