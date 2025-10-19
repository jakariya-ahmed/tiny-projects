import { NavLink } from "react-router-dom";
import HeaderSearchCom from "./header/HeaderSearchCom";
import useDummyData from "../hooks/useDummyData";
import UserHeaderCom from "./header/UserHeaderCom";
import HeaderTop from "./header/HeaderTop";
import Navbar from "./header/Navbar";
import MobileNav from "./header/MobileNav";



export default function Header() {
// use custom hook
const { products, loading, error, maxPrice } = useDummyData();

  return (
    <header >

      <div className="hidden sm:block">
        <HeaderTop />
        <div className="sm:max-w-[90%] md:max-w-[90%] xl:max-w-[70%] mx-auto">
            <div className="flex justify-between items-center py-6">

              <div >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-800"
                  }
                >
                  <img src="images/logo.png" className="" alt="shpping" />
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
        

      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 block sm:hidden">

      <MobileNav />
      </div>



    </header>

  );
}
