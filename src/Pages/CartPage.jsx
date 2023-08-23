import React from "react";
import Header from "../Components/Header/Header";
import CartHeader from "../Components/Header/CartHeader";
import ShoppingCartList from "../Components/ShoppingCartList/ShoppingCartList";

const CartPage = ({ cart, deleteItem }) => {
  return (
    <div>
      <CartHeader cart={cart} />
      <ShoppingCartList cart={cart} deleteItem={deleteItem} />
    </div>
  );
};

export default CartPage;
