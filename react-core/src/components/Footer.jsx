import { div } from "framer-motion/client";
import SubscribeCom from "./footer/SubscribeCom";
import FooterCom from "./footer/FooterCom";

export default function Footer() {
    return (
        <div className="">
            <div className="sm:max-w-[90%] md:max-w-[90%] xl:max-w-[70%] mx-auto mt-20 px-4 sm:px-0">
                <SubscribeCom />
            </div>
                <FooterCom />
        </div>

    );
}