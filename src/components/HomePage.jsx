import React from "react";
import Caurosel from "./Caurosel";
import HomePageCard from "./HomePageCard";
import ImgHome from "../assests/home_grid_1.jpg";
import productData from "../data/products.json";

function HomePage() {
  return (
    <div>
      <div className="bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-purple-500">
          testing
          <Caurosel />
          <div className="grid grid-cols-3 xl:grid-cols-4">
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
            <img className="xl:hidden" src={"../../assests/banner_image_2.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
