import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ShoppingBag, User, Grid, ShoppingBasketIcon } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const categoriesData = {
  Electronics: ["Phones", "Laptops", "Headphones"],
  Fashion: ["Men", "Women", "Kids"],
  "Home & Kitchen": ["Furniture", "Decor", "Appliances"],
};

export default function MobileNav() {

  const { cart, removeFromCart } = useCart();
   const totalItems = cart.reduce((sum, item) => 
        sum + item.quantity, 0
    ); 


  const [activeTab, setActiveTab] = useState("home");
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="">
      {/* Bottom Navigation */}
      <div className="flex justify-around py-2">
        <Link to="/" >
            <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center text-sm ${
                activeTab === "home" ? "text-amber-600" : "text-gray-500"
            }`}
            >
            <Home className="w-6 h-6" />
            <span>Home</span>
            </button>
        </Link>

        <Link to="/shop">
            <button
            onClick={() => setActiveTab("shop")}
            className={`flex flex-col items-center text-sm ${
                activeTab === "shop" ? "text-amber-600" : "text-gray-500"
            }`}
            >
            <ShoppingBag className="w-6 h-6" />
            <span>Shop</span>
            </button>
        </Link>

        <button
          onClick={() => setShowCategories(!showCategories)}
          className={`flex flex-col items-center text-sm ${
            showCategories ? "text-amber-600" : "text-gray-500"
          }`}
        >
          <Grid className="w-6 h-6" />
          <span>Category</span>
        </button>

        <div className="relative">
            <NavLink to="/cart" onClick={() => setActiveTab("cart")}
            className={`flex flex-col items-center text-sm ${
                activeTab === "cart" ? "text-amber-600" : "text-gray-500"
            }`}>
              <ShoppingBasketIcon size={22} />
              <span className="text-xs">Cart</span>
            </NavLink>
            {totalItems > 0 && (
              <span className="absolute text-[10px] top-[-2px] right-[-5px] bg-amber-500 text-white rounded-full px-[5px]">
                {totalItems}
              </span>
            )}
          </div>

        <Link to="/login">
            <button
            onClick={() => setActiveTab("user")}
            className={`flex flex-col items-center text-sm ${
              activeTab === "user" ? "text-amber-600" : "text-gray-500"
            }`}
          >
            <User className="w-6 h-6" />
            <span>Account</span>
          </button>
        </Link>
      </div>

      {/* Category Drawer */}
      <AnimatePresence>
        {showCategories && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-12 left-0 right-0 bg-white border-t border-gray-300 max-h-[60vh] overflow-y-auto"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                Categories
              </h2>

              {/* Categories List */}
              {Object.keys(categoriesData).map((category) => (
                <div key={category} className="mb-3">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="w-full flex justify-between items-center py-2 text-gray-700 font-medium border-b"
                  >
                    <span>{category}</span>
                    <span>
                      {selectedCategory === category ? "−" : "+"}
                    </span>
                  </button>

                  {/* Subcategories */}
                  <AnimatePresence>
                    {selectedCategory === category && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-2 text-gray-600"
                      >
                        {categoriesData[category].map((sub) => (
                          <div
                            key={sub}
                            className="py-1 border-b text-sm cursor-pointer hover:text-blue-600"
                          >
                            {sub}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
