import { div } from "framer-motion/client";
import SubscribeCom from "./footer/SubscribeCom";
import FooterCom from "./footer/FooterCom";

export default function Footer() {
    return (
        <div className="">
            <div className="max-w-[70%] mx-auto">
                <SubscribeCom />
            </div>
                <FooterCom />
        </div>

    );
}