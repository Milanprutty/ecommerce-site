import React from "react";
import "./ProductContainer.css";
import Products from "./Products";

const ProductContainer = () => {
  return (
    <div>
      <div className="ProductHeaderText">Our products</div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default ProductContainer;
