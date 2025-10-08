import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8">
      {/* Top Section - Logo */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-wide">ShopEase</h2>
        <div className="w-24 h-[2px] bg-amber-500 mx-auto mt-3 mb-6"></div>
        <p className="text-sm text-[#a3a3a3] max-w-xl mx-auto">
          Bringing you the best deals and quality products every day.  
          Your one-stop destination for everything you love.
        </p>
      </div>

      {/* Bottom Section - Links */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
          <ul className="space-y-2 text-[#a3a3a3]">
            <li><a href="#" className="hover:text-amber-500 transition">Our Story</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Careers</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Press</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#a3a3a3]">
            <li><a href="#" className="hover:text-amber-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Shop</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Blog</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop Links</h3>
          <ul className="space-y-2 text-[#a3a3a3]">
            <li><a href="#" className="hover:text-amber-500 transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Best Sellers</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Discounts</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Gift Cards</a></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Helpful</h3>
          <ul className="space-y-2 text-[#a3a3a3]">
            <li><a href="#" className="hover:text-amber-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Support</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Track Order</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-200 pt-6 text-center text-sm text-[#a3a3a3]">
        <p>
          © {new Date().getFullYear()} 
          <span className="text-amber-500 font-semibold"> ShopEase</span>. 
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
