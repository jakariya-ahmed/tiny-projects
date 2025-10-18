import { div } from "framer-motion/client"
import CartCom from "../components/cart/CartCom";

export default function Cart() {
    return(
        <div className="sm:max-w-[90%] md:max-w-[90%] xl:max-w-[70%] mx-auto px-4 sm:px-0">
            <CartCom />
        </div>

    );
}