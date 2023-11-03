import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import CaroselImage1 from "../assests/carousel_1.jpg";
import CaroselImage2 from "../assests/carousel_2.jpg";
import CaroselImage4 from "../assests/carousel_4.jpg";
import CaroselImage5 from "../assests/carousel_5.jpg";


const Caurosel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={CaroselImage1} alt="caroselimage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CaroselImage2} alt="caroselimage" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={"../video/carousel_vid.mp4"} type="video/mp4"/>
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CaroselImage4} alt="caroselimage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CaroselImage5} alt="caroselimage" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900">

      </div>
    </div>
  );
};

export default Caurosel;
