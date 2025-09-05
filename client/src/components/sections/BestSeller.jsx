import React, { useContext, useEffect, useState } from "react";
import Title from "../shared/Title";
import StoreContext from "@/context/StoreContext";
import ProductCard from "../shared/ProductCard";

const BestSeller = () => {
  const { products } = useContext(StoreContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const productData = products.slice();
    const bestProducts = productData.filter((item) => item.bestseller === true);
    setBestSeller(bestProducts);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <section className="container__width">
      <div className="flex flex-col items-center gap-2">
        <Title title1="best" title2="sellers" />
        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
          {bestSeller.map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              image={item.image[0]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
