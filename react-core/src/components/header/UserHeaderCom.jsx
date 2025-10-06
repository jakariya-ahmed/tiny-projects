import { UserIcon, ShoppingBagIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
export default function UserHeaderCom() {

    const { cart } = useCart();
    
    const totalItems = cart.reduce((sum, item) => 
        sum + item.quantity, 0
    ); 

    return (
        <>
        <div className="flex gap-x-2">
            <NavLink>
            <span><UserIcon size={26} /></span>
            </NavLink>
            <NavLink className="relative">
            <span><ShoppingBagIcon size={26} /> </span>
            <div className="flex">
                <span className="absolute top-[-15px] left-[-10px] bg-amber-500 text-center rounded-xl px-[8px] ">{ totalItems}</span>
            </div>
            </NavLink>
        </div>
        </>
    );
}