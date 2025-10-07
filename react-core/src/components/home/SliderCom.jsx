import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Summer Collection 2025",
    subtitle: "Up to 50% Off",
    desc: "Discover the latest trends with our vibrant summer outfits.",
    img: "public/images/slider/slider-1.jpg",
    button: "Shop Now",
  },
  {
    title: "New Arrivals",
    subtitle: "Stylish & Modern",
    desc: "Explore the freshest looks curated just for you.",
    img: "public/images/slider/slider-2.jpg",
    button: "Explore",
  },
  {
    title: "Exclusive Deals",
    subtitle: "Limited Time Offer",
    desc: "Get your favorite items at unbeatable prices!",
    img: "public/images/slider/slider-3.jpg",
    button: "Grab Now",
  },
];

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-12 gap-4 p-4">
      {/* Left Slider (70%) */}
      <div className="col-span-8 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${s.img})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start text-white p-10 space-y-3">
                  <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold"
                  >
                    {s.title}
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-semibold text-yellow-400"
                  >
                    {s.subtitle}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-md"
                  >
                    {s.desc}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-400 transition"
                  >
                    {s.button}
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side Banners (30%) */}
      <div className="col-span-4 flex flex-col gap-4">
        {/* Top Banner */}
        <div
          className="relative h-[240px] bg-cover bg-center rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h3 className="text-lg font-semibold">New Shoes Arrivals</h3>
            <button className="mt-2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-400 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className="relative h-[240px] bg-cover bg-center rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h3 className="text-lg font-semibold">Men’s Jacket Offer</h3>
            <button className="mt-2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-400 transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
