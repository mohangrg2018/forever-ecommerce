import StoreContext from "@/context/StoreContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image }) => {
  const { currency } = useContext(StoreContext);
  return (
    <Link to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image}
          className="hover:scale-105 transition-all duration-500 ease-in-out"
          alt=""
        />
      </div>
      <p className="text-sm mt-4">{name}</p>
      <p className="font-semibold mt-1">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductCard;
