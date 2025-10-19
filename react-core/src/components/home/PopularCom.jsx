import { ShoppingBag, Heart, Eye, ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";
import useHomeProducts from "../../hooks/useHomeProducts";
import { useCart } from "../../context/CartContext";
import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";

export default function PopularCom() {
const [hovered, setHovered] = useState(false);
const {getPopularProducts} = useHomeProducts();

const products = getPopularProducts();

  return (
    <section className=" mx-auto py-10 px-2 sm:px-0 md:px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Products </h2>
        <button className="flex items-center gap-1 text-amber-600 font-medium hover:underline">
          View More <ArrowRight size={16} />
        </button>
      </div>

{/* Products Grid Section */}
<div className="flex flex-col md:flex-row gap-6">
  
  {/* Banner Section */}
  <div className="w-full md:w-[30%] flex flex-col gap-6">
    
    <div className="relative bg-white overflow-hidden group">
      <img
        src="/images/banner/ads-2.jpg"
        alt="Ad Banner 1"
        className="w-full transition-transform duration-300 group-hover:scale-105 cursor-pointer rounded-xl"
      />
    </div>

    <div className="relative bg-white overflow-hidden group">
      <img
        src="/images/banner/ads-3.webp"
        alt="Ad Banner 2"
        className="w-full transition-transform duration-300 group-hover:scale-105 cursor-pointer rounded-xl"
      />
    </div>
  </div>

  {/* Product Cards Section */}
  <div className="w-full md:w-[70%] grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5">
    {products.map((product) => (
      <Link key={product.id} to={`/product/${product.id}`}>
        <ProductCard product={product} />
      </Link>
    ))}
  </div>

</div>

    </section>
  );
}

