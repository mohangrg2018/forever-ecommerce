import { products } from "@/assets/assets";
import StoreContext from "./StoreContext";
import { useState } from "react";
import { toast } from "react-toastify";

const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Please select a size");
    }

    if (!cartData[itemId]) {
      cartData[itemId] = {}; // Initialize an empty object for this itemId
    }
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartTotal = () => {
    let total = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        try {
          total += cartItems[item][size];
        } catch (error) {
          toast.error(error);
        }
      }
    }
    return total;
  };

  const StoreValue = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    getCartTotal,
  };

  return (
    <StoreContext.Provider value={StoreValue}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
