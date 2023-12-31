import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Cauroselproduct = () => {
  return (
    <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Best Selleres</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
             <Link to={`/product/${i}`}>
            <img src={`../images/product_${i}_small.jpg`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cauroselproduct;
