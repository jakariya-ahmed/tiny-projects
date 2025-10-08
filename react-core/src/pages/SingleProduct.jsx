import { div } from "framer-motion/client"
import SingleProductCom from "../components/single_product/SingleProductCom";

export default function SingleProduct() {
    return (
        <div className="sm:max-w-[90%] md:max-w-[90%] xl:max-w-[70%] mx-auto"> 
            <SingleProductCom />
        </div>

    );
}