import React from "react";
import { useProducts } from "../../context/ProductProvider";
import Header from "../Shared/Header/Header";
import ProductCart from "../Shared/ProductCart/ProductCart";

const Home = () => {
  const {
    state: { products },
  } = useProducts();
  return (
    <div>
      <Header></Header>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProductCart key={product._id} product={product}></ProductCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
