import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ShoppingCart, Star, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import RelatedProducts from "./RelatedProducts";

export default function SingleProductCom() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const { cart, addToCart, updateQty } = useCart();
  // Find product in cart
    const cartItem = cart.find((item) => item.id === product.id);
    const qty = cartItem ? cartItem.quantity : 1;


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const avgRating = product.rating || 4.5; // fallback rating

  return (
    <section className="px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-x-15">
      {/* Left: Product Image with Zoom */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center"
        
      >
        {/* <Zoom
            zoomImg={{
            src: product.thumbnail, // Large image source
            alt: product.title,
            }}
            overlayBgColorEnd="rgba(0,0,0,0.8)" // background during zoom
        >
        
      </Zoom> */}
      <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto rounded-lg object-cover shadow-md cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
        />
      </motion.div>

      {/* Right: Product Details */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
          <Link to="/" className="hover:text-amber-500">Home</Link> /{" "}
          <span className="text-gray-800">{product.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < Math.round(avgRating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500 text-sm">({avgRating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 text-lg font-semibold mt-2">
          <span className="line-through text-gray-400">{product.price + 500} tk</span>
          <span className="text-amber-500 text-2xl">{product.price} tk</span>
        </div>

        {/* Product Meta Info */}
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
        </div>

        {/* Colors & Sizes */}
        <div className="mt-3 flex gap-6">
          <div>
            <p className="font-semibold text-gray-700 mb-1">Colors:</p>
            <div className="flex gap-2">
              {["red", "blue", "green", "amber"].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full bg-${color}-500 border-2 border-gray-200 hover:border-amber-500 transition`}
                ></button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-1">Size:</p>
            <select className="border rounded-md px-2 py-1">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
      {/* Quantity Controller */}
      <div className="flex items-center border rounded-md">
        <button
          onClick={() => {
            if (cartItem) updateQty(product.id, qty - 1);
          }}
          className="px-3 py-2 text-lg font-semibold border-r hover:bg-gray-100 transition"
        >
          −
        </button>
        <span className="px-4 select-none">{qty}</span>
        <button
          onClick={() => {
            if (cartItem) updateQty(product.id, qty + 1);
          }}
          className="px-3 py-2 text-lg font-semibold border-l hover:bg-gray-100 transition"
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="flex items-center gap-2 bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition"
      >
        <ShoppingCart size={18} /> Add to Cart
      </button>

      {/* Order Now */}
      <button className="border border-amber-500 text-amber-500 px-6 py-2 rounded-md hover:bg-amber-500 hover:text-white transition">
        Order Now
      </button>
    </div>

        {/* Share */}
        <div className="mt-6">
          
          <div className="flex gap-3">
            <p className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Share2 size={16} /> Share:
            </p>
            <a href="#" className="text-blue-600 hover:text-amber-500"><Facebook /></a>
            <a href="#" className="text-sky-500 hover:text-amber-500"><Twitter /></a>
            <a href="#" className="text-blue-700 hover:text-amber-500"><Linkedin /></a>
          </div>
        </div>
      </motion.div>


      {/* Related products  */}
      <RelatedProducts currentProduct={product} />
    </section>
  );
}
