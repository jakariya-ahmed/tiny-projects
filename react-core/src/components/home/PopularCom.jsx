import { ShoppingBag, Heart, Eye, ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";
import useHomeProducts from "../../hooks/useHomeProducts";
import { useCart } from "../../context/CartContext";

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
            
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
    const { addToCart } = useCart();

  const avgRating = product.reviews?.length
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0;

  return (
    <div
      className="relative bg-white overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Product Info */}
      <div className="px-4 py-3">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="line-through text-red-500 font-medium">{product.price + 500} tk</span>
          <span className="text-gray-900 font-bold">{product.price} tk</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-yellow-400 ${i < Math.round(avgRating) ? "opacity-100" : "opacity-30"}`}>
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className={`absolute bottom-[-50px] cursor-pointer left-1/2 -translate-x-1/2 w-full bg-amber-600 text-white py-2 flex items-center justify-center gap-2 transition-all duration-300
          ${hovered ? "bottom-[0px]" : ""}
        `}
      >
        <ShoppingBag size={20} /> Add to Cart
      </button>

      {/* Side Quick Actions */}
      <div
        className={`absolute top-1/3 -right-12 flex flex-col gap-2 transition-all duration-300
          ${hovered ? "right-2" : ""}
        `}
      >
        <button className="bg-white shadow-md p-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors">
          <Heart size={16} />
        </button>
        <button className="bg-white shadow-md p-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors">
          <Eye size={16} />
        </button>
        <button 
        onClick={() => addToCart(product)}
        className="bg-white shadow-md p-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors">
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}
