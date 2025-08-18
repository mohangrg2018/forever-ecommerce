import StoreContext from "@/context/StoreContext";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(StoreContext);
  const [relatedProducts, setRelatedProducts] = React.useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const productsCopy = products.slice();
      const filteredProducts = productsCopy.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelatedProducts(filteredProducts.slice(0, 5));
    }
  }, [products, category, subCategory]);
  return (
    <div className="flex flex-col gap-8">
      <Title title1={"Related"} title2={"Products"} />
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {relatedProducts.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
