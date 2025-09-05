import { products } from "@/assets/assets";

import StoreContext from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const StoreValue = {
    products,
    currency,
  };
  return (
    <StoreContext.Provider value={StoreValue}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
