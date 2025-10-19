import { ShoppingBag, Heart, Eye, ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";
import useHomeProducts from "../../hooks/useHomeProducts";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";

export default function NewCollectionCom() {

    const {getNewCollection} = useHomeProducts();

    const products = getNewCollection();

  return (
    <section className="mx-auto py-10 px-4 sm:px-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">New Collection</h2>
        <button className="flex items-center gap-1 text-amber-600 font-medium hover:underline">
          View More <ArrowRight size={16} />
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}
