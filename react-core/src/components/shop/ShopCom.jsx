import { ArrowBigLeft, ArrowBigRight, CheckIcon, Star } from "lucide-react";
import { useState } from "react";
import usePagination from "../../hooks/usePagination";
import useDummyData from "../../hooks/useDummyData";

import { motion } from "framer-motion";
import CategoriesCom from "./CategoriesCom";
import BrandCom from "./BrandCom";

export default function ShopCom(){
    // Dummy API URL
    const API_URL = `https://dummyjson.com/products?limit=1200&skip=24`;
    const items = 24;

    // Get from custom hook useDummyData.js
    const { products, loading, error } = useDummyData(API_URL);

    // Filter state 
    const [searchKey, setSearchKey] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

     // Filter products by search key
    //  const filteredProducts = searchKey ? 
    //  products.filter((p) => 
    //     p.title.toLowerCase().includes(searchKey.toLowerCase())
    // ) : products;

    
// Handle category change
  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((c) => c !== category)
      );
    }
  };

    const filteredProducts = products.filter((p) => {
        const matchSearch = !searchKey || p.title.toLowerCase().includes(searchKey.toLowerCase());
        // Category filter
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category.toLowerCase());
        return matchSearch, matchCategory;
    });


    // Get and Pass data to custom usePagination.jsx
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        currentProducts,
        pageNumbers,
    } = usePagination(filteredProducts, items);



      // --- Handlers ---
  const goToPage = (p) => setCurrentPage(p);
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));


    // Handle pagination change
    // const handlePagination = (page) => {
    //     setCurrentPage(page);
    // }

    // Filter state 
    const [price, setPrice] = useState(50);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
    <div className="mt-6">
        {/*  search input  */}
        <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex gap-3 top-filter">
            <select name="" id="" className="p-2 border border-gray-200 bg-amber-500 text-white rounded-md mb-4">
                <option value="">Sort Default </option>
                <option value="">Sort by price: Lowest to High</option>
                <option value="">Sort by price: Highest to Lowest</option>
                <option value="">Sort by Latest </option>
                <option value="">Sort by Popularity </option>
            </select>
        </motion.div>
        <div className="lg:flex">
                
            <div className="products">
                <motion.div 
                initial={{x: -50, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 md:mx-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {currentProducts.map((product) => {
                    // Calculate averate rating 
                    // const avgRating = product.reviews?.length ?
                    // product.reviews.reduce((sum, r) => sum + r.rating, 0)
                    // / product.reviews.length : 0;
                    const avgRating = product.reviews?.length?
                    product.reviews.reduce((sum, r) => sum + r.rating, 0) 
                    / product.reviews.length : 0;
                    
                    // console.log(avgRating);
                    // Product card 
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

                </motion.div>
                {/* Pagination buttons  */}
                <div className="flex justify-center gap-2 my-6">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                    className="bg-amber-400 px-3 py-1 rounded-md disabled:opacity-50"
                    >
                        First
                </button>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className="bg-amber-400 px-3 py-1 rounded-md disabled:opcacity-50"
                    >
                        <ArrowBigLeft size={16} />
                </button>

                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded ${currentPage === page ? "bg-blue-500 text-white" : ""}`}
                    >
                        {page}
                    </button>
                ))}
                
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    className="bg-amber-400 px-3 py-1 rounded-md disabled:opcacity-50"
                >
                    <ArrowBigRight size={16} />
                </button>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(totalPages)}
                    className="bg-amber-400 px-3 py-1 rounded-md disabled:opacity-50"
                >
                    Last
                </button>


                </div>
            </div>
                

            <motion.aside
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-2xl p-4 h-fit sticky top-4"
            >
                {/* Search */}
                <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Search</h3>
                <input
                    type="text"
                    value={searchKey}
                    onChange={(e) => {
                        setSearchKey(e.target.value);
                        setCurrentPage(1);
                    }}
                    placeholder="Search products..."
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Price Range</h3>
                <input
                    type="range"
                    min="0"
                    max="5000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full"
                />
                <p className="text-sm mt-2">Up to ${price}</p>
                </div>

                {/* Category */}
                <CategoriesCom 
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}/>

                {/* Brand */}
                
                <BrandCom />

                {/* Color */}
                <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Color</h3>
                <div className="flex gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-500 border cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full bg-blue-500 border cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full bg-green-500 border cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full bg-black border cursor-pointer"></span>
                </div>
                </div>

                {/* Size */}
                <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Size</h3>
                <div className="flex gap-2 flex-wrap">
                    {["S", "M", "L", "XL"].map((s) => (
                    <button
                        key={s}
                        className="px-3 py-1 border rounded-lg hover:bg-violet-100"
                    >
                        {s}
                    </button>
                    ))}
                </div>
                </div>

                {/* Reviews */}
                <div>
                <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                <ul className="space-y-2 text-gray-700">
                    <li>⭐⭐⭐⭐⭐ & Up</li>
                    <li>⭐⭐⭐⭐ & Up</li>
                    <li>⭐⭐⭐ & Up</li>
                </ul>
                </div>
            </motion.aside>


        </div>



    </div>
    );
}