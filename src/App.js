import React, { useState } from "react";
import "./App.css";

import HomePage from "./Components/Pages/HomePage";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddCartItem = (item) => {
    const newCartItem = [...cart, item];

    setCart(newCartItem);
  };

  return (
    <div>
      <HomePage AddCartItem={handleAddCartItem} cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
