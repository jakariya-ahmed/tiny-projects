import { NavLink } from "react-router-dom";
import HeaderSearchCom from "./header/HeaderSearchCom";
import useDummyData from "../hooks/useDummyData";
import UserHeaderCom from "./header/UserHeaderCom";
import HeaderTop from "./header/HeaderTop";
import Navbar from "./header/Navbar";



export default function Header() {
// use custom hook
const { products, loading, error, maxPrice } = useDummyData();

  return (
    <header className="">

      <HeaderTop />
      <div className="max-w-[70%] mx-auto">
          <div className="flex justify-between items-center py-6 px-5 ">

            <div >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-gray-800"
                }
              >
                <img src="/public/images/logo.svg" className="" alt="shpping" />
              </NavLink>
            </div>
            {/* Header search  */}
            <HeaderSearchCom 
            products={products}
            />


            {/* user section  */}
            <UserHeaderCom />

            
          </div>

      </div>

      <div className="bg-amber-100">
        <div className="max-w-[70%] mx-auto">
          <Navbar />
        </div>  
      </div>
    </header>

  );
}
