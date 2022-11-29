import React, { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const value = {
    data,
  };

  console.log(value);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductProvider);
  return context;
};

export default ProductProvider;
