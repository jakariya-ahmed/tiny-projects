import { Star } from "lucide-react";
import { useEffect, useState } from "react";
export default function ShopCom(){
    // Dummy API URL
    const API_URL = `https://dummyjson.com/products?limit=120&skip=12`;

    // State for products, loading, and error
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    // Fetch porducts using Fetch Api from dummyjson.com
    useEffect(() => {
        fetch(API_URL)
        .then((res) => {
            if(!res.ok) throw new Error("Network response was not fine");
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
    });
    
    // Normal pagination
    // CURRENTPAGE,PERPAGEITEM,LASTINDEX,FIRSTINDEX,TOTALPAGE

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Index of last item on the current page
    const lastIndex = currentPage * itemsPerPage;

    // Index of first item on the current page
    const firstIndex = lastIndex - itemsPerPage;
    // Get total pages
    const totalPage = Math.ceil(products.length / itemsPerPage);
    // Get current page products 
    const currentProducts = products.slice(firstIndex, lastIndex);

    // Handle pagination change
    const handlePagination = (page) => {
        setCurrentPage(page);
    }
    // console.log(totalPage);

    return (
        <div className="mt-6">
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
                {Array.from({ length: totalPage }, (_, i) => i+1).map((page) => (
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