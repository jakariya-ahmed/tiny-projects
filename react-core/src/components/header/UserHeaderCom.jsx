import { UserIcon, ShoppingBagIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
export default function UserHeaderCom() {

    const { cart, removeFromCart } = useCart();
    
    const totalItems = cart.reduce((sum, item) => 
        sum + item.quantity, 0
    ); 

    return (
        <>
        <div className="flex gap-x-2 relative group">
            <NavLink>
            <span><UserIcon size={26} /></span>
            </NavLink>
            <div className="relative">
                <span><NavLink to="/cart"><ShoppingBagIcon size={26} /> </NavLink></span>
                <div className="flex">
                    <NavLink ><span className="absolute top-[-15px] left-[-10px] bg-amber-500 text-center rounded-xl px-[8px] ">{ totalItems}</span> </NavLink>
                </div>
            </div>
            
            

            {/* Dropdown */}
            <div className="absolute right-0 top-[20px] mt-2 w-72 bg-white shadow-lg rounded-lg hidden group-hover:block z-50 py-6 px-4  max-h-100 overflow-y-auto">
                <h4 className="font-semibold border-b pb-2">Cart</h4>
                {cart.length === 0 ? (
                    <p className="text-gray-500 py-2">Cart is empty</p>
                ) : (
                    <ul className="divide-y">
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between items-center py-2">
                        <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1 px-2">
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                        >
                            ✕
                        </button>
                        </li>
                    ))}
                    </ul>
                )}
                <div className="mt-3 text-center">
                    <NavLink
                    to="/cart"
                    className="bg-violet-600 text-white px-4 py-2 rounded-lg w-full block"
                    >
                    View Cart
                    </NavLink>
                </div>
            </div>

        </div>
        </>
    );
}