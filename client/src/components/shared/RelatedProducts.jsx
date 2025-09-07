import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import StoreContext from "@/context/StoreContext";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(StoreContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    let productData = products.slice();
    if (category) {
      productData = productData.filter((item) => item.category === category);
    }
    if (subCategory) {
      productData = productData.filter(
        (item) => item.subCategory === subCategory
      );
    }
    setRelatedProducts(productData.slice(0, 5));
  }, [category, products, subCategory]);

  return (
    <div className="my-12 sm:my-20">
      <div className="flex justify-center">
        <Title title1="related" title2="products" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {relatedProducts.map((item) => (
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
  );
};

export default RelatedProducts;
