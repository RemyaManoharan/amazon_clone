import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CategoryImg1 from "../assests/category_0.jpg";
import CategoryImg2 from "../assests/category_1.jpg";
import CategoryImg3 from "../assests/category_2.jpg";
import CategoryImg4 from "../assests/category_3.jpg";
import CategoryImg5 from "../assests/category_4.jpg";
import CategoryImg6 from "../assests/category_5.jpg";
import { useNavigate , createSearchParams} from "react-router-dom";


const CauroselCategory = () => {

  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${
          createSearchParams({
              category: `${category}`,
              searchTerm: ``
          })
      }`
  })

  }





  return (
    <div className="bg-white mt-3">
      <div className="text-2xl font-semibold p-3">Shop By category</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide onClick={() => searchCategory("Deals")} className="cursor-pointer"> 
          <img src={CategoryImg1} alt="category1" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Amazon")} className="cursor-pointer">
          <img src={CategoryImg2} alt="category2" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Fashion")} className="cursor-pointer">
          <img src={CategoryImg3} alt="category3" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Computers")} className="cursor-pointer">
          <img src={CategoryImg4} alt="category4" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Home")} className="cursor-pointer">
          <img src={CategoryImg5} alt="category5" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Mobiles")} className="cursor-pointer">
          <img src={CategoryImg6} alt="category6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CauroselCategory;
