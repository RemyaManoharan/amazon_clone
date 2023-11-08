import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallApi } from "../Utils/CallApi";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProducts = () => {
    CallApi(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
      console.log(productResults);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if(!product?.title) return <h1>Loding...</h1>

  return ( product &&  
  <div>
    product page {product.title}
    </div>)
 
};

export default ProductPage;
