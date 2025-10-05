import { UserIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import HeaderSearchCom from "./header/HeaderSearchCom";
import useDummyData from "../hooks/useDummyData";


export default function Navbar() {
// use custom hook
const { products, loading, error, maxPrice } = useDummyData();

  return (
    <header className="flex justify-between max-w-[80%] mx-auto bg-gray-100 py-4 px-5 mt-6 rounded-xl">
      <div >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          <img src="/public/images/logo.png" className="w-10 h-10" alt="shpping" />
        </NavLink>
      </div>
      {/* Header search  */}
      <HeaderSearchCom 
      products={products}
      />

      <div>
        <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Posts
        </NavLink>

        <NavLink to="/products" className={({ isActive }) =>isActive ? 
        "text-blue-600 font-bold" : "text-gray-800"}>Products</NavLink>

        <NavLink to="/shop" className={({isActive}) => isActive ? 
        "text-blue-600 font-bold" : "text-gray-800"  }>Shop</NavLink>
      
        </nav>
      </div>
      <div>
        <NavLink>
          <span><UserIcon size={26} /></span>
        </NavLink>
      </div>
    </header>
  );
}
