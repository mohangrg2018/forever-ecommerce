import React, { useContext } from "react";
import Title from "../shared/Title";
import StoreContext from "@/context/StoreContext";
import ProductCard from "../shared/ProductCard";

const LatestCollection = () => {
  const { products } = useContext(StoreContext);

  return (
    <section className="container__width">
      <div className="my-12 sm:my-20 flex flex-col items-center gap-2">
        <Title title1="latest" title2="collections" />
        <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
          {products.slice(0, 10).map((item) => (
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

export default LatestCollection;
