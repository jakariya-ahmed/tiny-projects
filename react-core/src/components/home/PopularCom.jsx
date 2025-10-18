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
    <section className=" mx-auto py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Products </h2>
        <button className="flex items-center gap-1 text-amber-600 font-medium hover:underline">
          View More <ArrowRight size={16} />
        </button>
      </div>

      {/* Products Grid */}
      <div className="flex gap-x-6">
        <div className="w-[30%]">
            <div
                className="relative bg-white overflow-hidden group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                >
                {/* Product Image */}
                <img
                    src="public/images/banner/ads-2.jpg"
                    alt=""
                    className="w-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />

            </div>

            <div
                className="relative bg-white overflow-hidden group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                >
                {/* Product Image */}
                <img
                    src="public/images/banner/ads-3.webp"
                    alt=""
                    className="w-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />

            </div>

        </div>

        <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} >
              <ProductCard product={product} />
            </Link>
            ))}
        </div>
        
      </div>
    </section>
  );
}

