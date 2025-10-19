import { h2 } from "framer-motion/client";

export default function BannerCom() {
    return (
        <div className="my-4 lg:my-8">
                <img
                    src="/images/banner/banner.png"
                    alt=""
                    className="w-full h-50 sm:h-60 md:h-70 cursor-pointer bg-cover"
                />

            </div>
    );

}