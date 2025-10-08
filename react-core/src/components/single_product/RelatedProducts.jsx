import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


import useDummyData from "../../hooks/useDummyData"; // your hook for products

export default function RelatedProducts({ currentProduct }) {

const { products } = useDummyData();


  const related = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  if (!related.length) return null;

  
  return (
    <section className="mt-12 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {related.map((product) => (
          <SwiperSlide key={product.id}>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
