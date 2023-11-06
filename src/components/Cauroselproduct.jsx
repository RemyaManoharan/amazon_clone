import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
            <img src={`../images/product_${i}_small.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cauroselproduct;
