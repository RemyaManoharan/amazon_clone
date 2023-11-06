import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CategoryImg1 from "../assests/category_0.jpg";
import CategoryImg2 from "../assests/category_1.jpg";
import CategoryImg3 from "../assests/category_2.jpg";
import CategoryImg4 from "../assests/category_3.jpg";
import CategoryImg5 from "../assests/category_5.jpg";

const CauroselCategory = () => {
  return (
    <div className="bg-white mt-3">
      <div className="text-2xl font-semibold p-3">Shop By category</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={CategoryImg1} alt="category1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CategoryImg2} alt="category2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CategoryImg3} alt="category3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CategoryImg4} alt="category4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CategoryImg5} alt="category5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CauroselCategory;
