import React, { createContext, useState } from "react";

const cartContext = createContext();

function Provider({ children }) {
  const [cart, setCart] = useState([]);

  const handleAddCartItem = (item) => {
    const newCartItem = [...cart, item];

    setCart(newCartItem);
  };

  const deleteItem = (id) => {
    const mappedItems = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(mappedItems);
  };

  const addQuantity = (id) => {
    const mappedItems = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setCart(mappedItems);
  };

  const removeQuantity = (id) => {
    const mappedItems = cart.map((item) => {
      if (item.id === id && item.count !== 1) {
        return {
          ...item,

          count: item.count - 1,
        };
      }

      return item;
    });
    setCart(mappedItems);
  };

  const cartValues = {
    cart,
    setCart,
    handleAddCartItem,
    deleteItem,
    addQuantity,
    removeQuantity,
  };

  return (
    <cartContext.Provider value={cartValues}>{children}</cartContext.Provider>
  );
}
export { Provider };
export default cartContext;
