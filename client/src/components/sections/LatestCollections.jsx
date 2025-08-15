import React, { useContext } from "react";
import Title from "../shared/Title";
import ProductCard from "../shared/ProductCard";
import StoreContext from "@/context/StoreContext";

const LatestCollections = () => {
  const { products } = useContext(StoreContext);
  return (
    <section className="my-14 sm:my-24 flex flex-col gap-4">
      <Title title1={"Latest"} title2={"Collections"} />
      <p className="text-center text-gray-400 w-[80%] mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-4">
        {products.slice(0, 10).map((item, index) => (
          <ProductCard
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollections;
