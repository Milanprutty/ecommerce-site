import React, { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import cartContext from "./context/cart";

const App = () => {
  const { cart, setCart, handleAddCartItem, deleteItem } =
    useContext(cartContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            AddCartItem={handleAddCartItem}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/cart"
        element={<CartPage deleteItem={deleteItem} cart={cart} />}
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
