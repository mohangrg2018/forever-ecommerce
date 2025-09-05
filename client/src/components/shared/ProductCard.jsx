import StoreContext from "@/context/StoreContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price }) => {
  const { currency } = useContext(StoreContext);
  return (
    <Link to={`/product/${id}`} className="flex flex-col gap-2">
      <div className="overflow-hidden">
        <img
          src={image}
          className="hover:scale-105 transition-all duration-700"
          alt=""
        />
      </div>
      <p className="text-sm font-semibold">{name}</p>
      <p className="font-bold">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductCard;
