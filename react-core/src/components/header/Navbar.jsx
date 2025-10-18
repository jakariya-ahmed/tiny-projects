import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MenuIcon } from "lucide-react";
import {
  Smartphone,Laptop,FlaskConical,Heart,ShoppingBag,Home,Sofa,Shirt,Handbag,Watch,Dumbbell,Gamepad,Headphones,Car,ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Category list
  const categories = [
    "Smartphones","Laptops","Fragrances","Skincare","Groceries","Home Decoration","Furniture","Clothing","Shoes","Bags","Watches",
    "Sports","Gaming","Accessories","Automotive",
  ];

    // Icon map by category name
  const iconMap = {
    Smartphones: Smartphone,
    Laptops: Laptop,
    Fragrances: FlaskConical,
    Skincare: Heart,
    Groceries: ShoppingBag,
    "Home Decoration": Home,
    Furniture: Sofa,
    Clothing: Shirt,
    Bags: Handbag,
    Watches: Watch,
    Sports: Dumbbell,
    Gaming: Gamepad,
    Accessories: Headphones,
    Automotive: Car,
  };


  return (
    <div className="flex items-center justify-between">
      {/* Toggle Button for categories */}
        <div className="flex w-[80%] items-center gap-2">
            <div onClick={() => setOpen(!open)} className="relative flex w-[30%] shadow-sm px-4 py-4 bg-white text-black transition cursor-pointer">

                <div className="flex gap-x-3 w-[90%]">
                    <span className="text-gray-400"><MenuIcon /></span>  <span>All Categories</span>
                </div>
                <div className="flex w-[10%]">
                    <span><ChevronDown size={18}
                    className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}/></span>
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {open && (
                    <motion.ul
                        key="dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 w-full top-14 shadow-sm bg-white border border-gray-100 overflow-hidden z-50"
                    >
                        {categories.map((cat, index) => {
                        const Icon = iconMap[cat] || ShoppingBag;
                        return (
                            <motion.li
                            key={cat}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                            >
                            <button
                                onClick={() => {
                                setOpen(false);
                                console.log("Clicked category:", cat);
                                }}
                                className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-amber-400 cursor-pointer transition"
                            >
                                <div className="flex items-center gap-3">
                                <Icon size={18} className="text-amber-500" />
                                <span>{cat}</span>
                                </div>
                                <ChevronRight size={16} className="text-gray-400" />
                            </button>
                            </motion.li>
                        );
                        })}
                    </motion.ul>
                    )}
                </AnimatePresence>

            </div>
            {/* main menu  */}
            <div className="ml-[100px] w-[20%] py-2">
                <nav className="flex gap-x-[50px]">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-800 font-bold"
                    }
                >
                    Home
                </NavLink>

                <NavLink to="/shop" className={({isActive}) => isActive ? 
                "text-blue-600 font-bold" : "text-gray-800 font-bold"  }>Shop</NavLink>
                <NavLink
                    to="/posts"
                    className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-800 font-bold"
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-800 font-bold"
                    }
                >
                    Contact
                </NavLink>
                
                </nav>
            </div>
        </div>




        
        {/* become seller button  */}
        <div className=" py-2 text-right">
                <button className="flex items-center text-lg bg-amber-500 py-2 px-4 rounded-sm text-black font-semi-bold cursor-pointer">
                    Become a seller <span><ChevronRight size={16} /></span>
                </button>
        </div>
    </div>
  );
}
