import { ArrowBigLeft, ArrowBigRight, CheckIcon, Star } from "lucide-react";
import {useEffect, useState } from "react";
import usePagination from "../../hooks/usePagination";
import useDummyData from "../../hooks/useDummyData";

import { motion } from "framer-motion";
import CategoriesCom from "./CategoriesCom";
import BrandCom from "./BrandCom";
import ColorCom from "./ColorCom";
import SizeCom from "./SizeCom";
import PriceCom from "./PriceCom";
import SortComp from "./SortCom";
import RatingCom from "./RatingCom";

export default function ShopCom(){
    const items = 24;

    // Get from custom hook useDummyData.js
    const { products, loading, error, maxPrice } = useDummyData();

    // Filter state 
    const [searchKey, setSearchKey] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedColors, setSelectedColor] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [priceRange, setPriceRange] = useState([0, maxPrice])
    const [sortOption, setSortOption] = useState("default");
    const [selectedRating, setSelectedRating] = useState(0);
    


    
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

 // ✅ Brand change handler
  const handleBrandChange = (brand, isChecked) => {
    setSelectedBrands((prev) =>
      isChecked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  // Color change handler
  const handleColorChange = (color) => {
    setSelectedColor((prev) =>
    prev.includes(color)
      ? prev.filter((c) => c !== color) // remove if already selected
      : [...prev, color] // add if not selected
  ); // toggle
  }

  // Multi size change handle 
const handleSizeChange = (size) => {
  setSelectedSizes((prev) =>
    prev.includes(size)
      ? prev.filter((s) => s !== size) // remove if already selected
      : [...prev, size] // add if not selected
  );
};

// Handle price filter
useEffect(() => {
  if (maxPrice > 0) {
    setPriceRange([0, maxPrice]);
  }
}, [maxPrice]);

const handlePriceChange = (e) => {
  const { name, value } = e.target;
  setPriceRange((prev) =>
    name === "min"
      ? [Number(value), prev[1]]
      : [prev[0], Number(value)]
  );
};

// Handle change rating
const handleRatingChange  = (rating) => {
    setSelectedRating(rating);
    setCurrentPage(1);
}


    const filteredProducts = products.filter((p) => {
        // Search Key by Filter
        const matchSearch = !searchKey || p.title.toLowerCase().includes(searchKey.toLowerCase());
        // Category filter
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category.toLowerCase());
        // Brand by filter
        const matchBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(p.brand?.toLowerCase());
        // Color by filter
        const matchColor =
        selectedColors.length === 0 ||
        p.colors?.some((c) => selectedColors.includes(c.toLowerCase()));
        // Size by filter
        const matchSize =
            selectedSizes.length === 0 ||
            p.sizes?.some((s) => selectedSizes.includes(s.toLowerCase()));
        // ✅ Price filter
        const matchPrice = p.price >= priceRange[0] 
        && p.price <= priceRange[1];
        // Filter by Rating
        const matchRating = selectedRating === 0 
        || Math.floor(p.rating) >= selectedRating;

        return (
            matchSearch &&
            matchCategory &&
            matchBrand && 
            matchColor && 
            matchSize && 
            matchPrice && 
            matchRating
        );

    });

    // ✅ Sorting
    if (sortOption === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "popular") {
    filteredProducts.sort((a, b) => b.rating - a.rating); // using rating as popularity
    }


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
            <SortComp 
            sortOption={sortOption}
            setSortOption={setSortOption}
            />
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
                <PriceCom 
                handlePriceChange={handlePriceChange}
                priceRange={priceRange}

                />

                {/* Category */}
                <CategoriesCom 
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}/>

                {/* Brand */}
                
                <BrandCom 
                handleBrandChange={handleBrandChange}
                selectedBrands={selectedBrands}/>

                {/* Color */}
                <ColorCom 
                handleColorChange={handleColorChange}
                selectedColors={selectedColors}/>
                {/* Size */}
                <SizeCom 
                selectedSizes={selectedSizes}
                handleSizeChange={handleSizeChange}
                />

                {/* Reviews */}
                <RatingCom 
                selectedRating={selectedRating}
                handleRatingChange={handleRatingChange}
                />
            </motion.aside>


        </div>



    </div>
    );
}