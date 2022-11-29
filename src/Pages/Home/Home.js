import React from "react";
import { useProducts } from "../../context/ProductProvider";
import Header from "../Shared/Header/Header";
import ProductCart from "../Shared/ProductCart/ProductCart";

const Home = () => {
  const data = useProducts();
  console.log(data);
  return (
    <div>
      <Header></Header>
      <ProductCart></ProductCart>
    </div>
  );
};

export default Home;
