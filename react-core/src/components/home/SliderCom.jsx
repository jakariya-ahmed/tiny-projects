import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Collection 2025",
    subtitle: "Up to 50% Off",
    desc: "Discover the latest trends with our vibrant summer outfits. Discover the latest trends with our vibrant summer outfits.",
    img: "public/images/slider/slider-1.jpg",
    button: "Shop Now",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Stylish & Modern",
    desc: "Explore the freshest looks curated just for you. Discover the latest trends with our vibrant summer outfits.",
    img: "public/images/slider/slider-2.jpg",
    button: "Explore",
  },
  {
    id: 3,
    title: "Exclusive Deals",
    subtitle: "Limited Time Offer",
    desc: "Get your favorite items at unbeatable prices! Discover the latest trends with our vibrant summer outfits.",
    img: "public/images/slider/slider-1.jpg",
    button: "Grab Now",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 py-8 gap-x-4">
      {/* Slider Section */}
      <div className="lg:col-span-8 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={s.id}>
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${s.img})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start text-white px-6 sm:px-12 space-y-3">
                  {/* Animate only when slide is active */}
                  {activeIndex === i && (
                    <>
                      <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-xl lg:text-xl font-bold"
                      >
                        {s.title}
                      </motion.h2>

                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-6xl sm:text-6xl font-bold text-amber-500"
                      >
                        {s.subtitle}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-md text-sm sm:text-base"
                      >
                        {s.desc}
                      </motion.p>

                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        className="mt-4 bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-400 transition"
                      >
                        {s.button}
                      </motion.button>
                    </>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Banner Section */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        {/* Top Banner */}
        <div
          className="relative h-[180px] sm:h-[200px] lg:h-[240px] bg-cover bg-center shadow-sm overflow-hidden p-4"
          style={{
            backgroundImage:
              "url('/images/slider/banner-2.png')",
          }}
        >
          {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
            <h3 className="text-base sm:text-lg font-semibold">
              New Shoes Arrivals
            </h3>
            <button className="mt-2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-400 transition">
              Shop Now
            </button>
          </div> */}
        </div>

        {/* Bottom Banner */}
        <div
          className="relative h-[180px] sm:h-[200px] lg:h-[240px] bg-cover bg-center shadow-sm overflow-hidden"
          style={{
            backgroundImage:
              "url('/images/slider/banner-1.png')",
          }}
        >
          {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
            <h3 className="text-base sm:text-lg font-semibold">
              Men’s Jacket Offer
            </h3>
            <button className="mt-2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-400 transition">
              Explore
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
