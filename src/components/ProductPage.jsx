import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallApi } from "../Utils/CallApi";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "../Utils/Constants";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProducts = () => {
    CallApi(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
     
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!product?.title) return <h1>Loding...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10">
            {/* left */}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} />
            </div>
            {/* middle */}
            <div className="col-span-5 p-4 rounded  bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-4 p-3">
                {product.description}
              </div>
            </div>
            {/* right */}
            <div className="col-span-2 rounded p-4  bg-white">
              <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
                RRP:{" "}
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>

              <div className="text-sm xl:text-base text-blue-500  font-semibold mt-3">
                FREE RETURNS
              </div>
              <div className="text-sm xl:text-base text-blue-500  font-semibold mt-1 ">
                FREE Delivery
              </div>
              <div className="text-sm xl:text-base text-green-700 font-semibold mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg">
                Quantity:
                <select className="p-2 bg-white border rounded-md focus:border-indigo-600">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <button className="bg-yellow-300 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
