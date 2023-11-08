import React from "react";
import Caurosel from "./Caurosel";
import HomePageCard from "./HomePageCard";
import CauroselCategory from "./CauroselCategory";
import ImgHome from "../assests/banner_image_2.jpg";
import BannerImg from "../assests/banner_image.jpg";
import productData from "../data/products.json";
import Cauroselproduct from "./Cauroselproduct";


// import { HomePageCard, Caurosel, CauroselCategory } from "./";

function HomePage() {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto ">
        <Caurosel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {productData.map((item, index) => (
            <HomePageCard
              key={index}
              title={item.title}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
        <div className="m-3 pt-8">
          <img className="xl:hidden" src={ImgHome} />
        </div>
        <Cauroselproduct />
        <CauroselCategory />
        <div className="h-[200px]">
         
            <img className="h-[100%] m-auto" src={BannerImg} />
        
        </div>
      </div>
    </div>
  );
}

export default HomePage;
{
  /* <div className="m-3 pt-8">
            <img className="xl:hidden" src={ImgHome} />
          </div> */
}
