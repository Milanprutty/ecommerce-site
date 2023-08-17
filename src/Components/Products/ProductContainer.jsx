import React from "react";
import "./ProductContainer.css";
import Products from "./Products";

const ProductContainer = ({ AddCartItem, cart, setCart }) => {
  return (
    <div>
      <div className="ProductHeaderText">Our products</div>
      <div>
        <Products AddCartItem={AddCartItem} cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default ProductContainer;
