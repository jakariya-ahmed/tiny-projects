// RelatedProducts.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // v12 modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import useDummyData from "../../hooks/useDummyData"; // your hook for products
import ProductCard from "../product/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";


export default function RelatedProducts({ currentProduct }) {
  const { products } = useDummyData();

  // Filter related products by same category excluding current product
  const related = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  if (!related.length) return null;

  return (
    <section className="relative mt-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>

       {/* Custom navigation buttons */}
      <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
        <button className="button-prev w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
        <button className="button-next w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
          <ArrowRight size={20} />
        </button>
      </div>

    <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {related.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      
    </section>
  );
}
