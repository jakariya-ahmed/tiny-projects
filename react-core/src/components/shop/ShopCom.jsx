import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import usePagination from "../../hooks/usePagination";
import useDummyData from "../../hooks/useDummyData";

export default function ShopCom(){
    // Dummy API URL
    const API_URL = `https://dummyjson.com/products?limit=120&skip=12`;
    const items = 12;

    // Get from custom hook useDummyData.js
    const { products, loading, error } = useDummyData(API_URL);

    // Search products
    const [searchKey, setSearchKey] = useState("");
   
     // Filter products by search key
     const filteredProducts = searchKey ? 
     products.filter((p) => 
        p.title.toLowerCase().includes(searchKey.toLowerCase())
    ) : products;

    // Get and Pass data to custom usePagination.jsx
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        currentProducts,
    } = usePagination(filteredProducts, items);


    // Handle pagination change
    const handlePagination = (page) => {
        setCurrentPage(page);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
    <div className="mt-6">
        {/*  search input  */}
        <div className="mb-4 flex gap-3">
            <input  value={searchKey} placeholder="Search products..."
            onChange={(e) => {
                setSearchKey(e.target.value);
                setCurrentPage(1);
            }}
             className="w-100 p-2 border rounded mb-4"
            type="text" />
            <select name="" id="" className="p-2 border rounded mb-4">
                <option value="">Default</option>
                <option value="">Lowest Price</option>
                <option value="">Highest Price</option>
            </select>
        </div>
        <div className="grid sm:grid-cols-2 md:mx-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {currentProducts.map((product) => {
            // Calculate averate rating 
            // const avgRating = product.reviews?.length ?
            // product.reviews.reduce((sum, r) => sum + r.rating, 0)
            // / product.reviews.length : 0;
            const avgRating = product.reviews?.length?
            product.reviews.reduce((sum, r) => sum + r.rating, 0) 
            / product.reviews.length : 0;
            
            // console.log(avgRating);
            
            return(
                <div key={product.id} className="rounded-md shadow-md bg-amber-500">
                    <img src={product.thumbnail} alt="t-shirt" />
                    <div className="px-3 py-4">
                        <h2>{product.title} </h2>
                        <p><strong className="line-through text-red-500">3450 tk </strong> 
                        <strong>{product.price} tk</strong> </p>
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {Array.from({ length: 5}).map((_, i) => (
                                    <Star key={i} size={16} 
                                    className={i < Math.round(avgRating) ? 
                                        "text-black-500 fill-white" : "text-black-500"}/>
                                    
                                    
                                ))}
                            </div>

                            
                            <button className="bg-white text-gray-700 px-4 py-1 rounded-md mt-2 hover:bg-amber-400 hover:text-white cursor-pointer">Add to cart</button >
                        </div>
                    </div>
                </div>
                );
            })}

            </div>
        
            <div className="flex justify-center gap-2 my-6">
                {Array.from({ length: totalPages }, (_, i) => i+1).map((page) => (
                <button 
                key={page}
                onClick={() => handlePagination(page)}
                className="bg-amber-500 text-white px-4 py-1 rounded-md hover:bg-amber-400 cursor-pointer">
                    {page}
                </button>
                ))}
            </div>
        </div>
    );
}