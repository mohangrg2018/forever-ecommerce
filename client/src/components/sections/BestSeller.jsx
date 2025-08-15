import React, { useContext } from "react";
import Title from "../shared/Title";
import StoreContext from "@/context/StoreContext";
import ProductCard from "../shared/ProductCard";

const BestSeller = () => {
  const { products } = useContext(StoreContext);
  const [bestSeller, setBestSeller] = React.useState([]);

  React.useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);
  return (
    <section className="flex flex-col gap-4">
      <Title title1={"Best"} title2={"Sellers"} />
      <p className="text-center text-gray-400 w-[80%] mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-4">
        {bestSeller.map((item) => (
          <ProductCard
            key={item._id}
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

export default BestSeller;
