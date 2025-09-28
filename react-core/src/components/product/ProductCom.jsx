import { useState } from "react";

export default function ProductCom() {
    // State fro products, loading, and error
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products using Fetch Api form dummyjson.com
    
    return(
        <section className="my-6 grid sm:grid-cols-2 md:px-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="shadow-md rounded-md">
                <img src="/images/product2.jpg" alt="skin-product" />
            <div className="p-4">
                <h2 className="text-lg">Best skin care crime for women</h2>
                <p><del>3450tk </del> <strong>300tk</strong></p>
                <button className="bg-amber-500 text-white px-4 py-1 rounded-md mt-2 hover:bg-amber-600 cursor-pointer">Add to cart</button>
            </div>
            </div>
            
        </section>
    );
}