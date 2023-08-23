import React, { useEffect, useState } from "react";
import "./ProductContainer.css";
import PopupItem from "../PopupItem/PopupItem";

import { data } from "./ProductArray";

const Products = ({ AddCartItem, cart }) => {
  const getRandomId = () => {
    return crypto.randomUUID();
  };

  const [products, setProducts] = useState(data);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (id, product, i) => {
    if (cart.length === 0) {
      AddCartItem(product);
    }

    if (products[i].id === id && products[i].clicked === true) {
      alert("Already In Cart");
    } else {
      AddCartItem(product);

      setIsOpen(true);
    }

    const updatedproducts = products.map((product) => {
      if (id === product.id) {
        return { ...product, clicked: true, id: getRandomId() };
      }

      return product;
    });

    setProducts(updatedproducts);
  };

  const handleRemoveClick = (id) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  let popUp = "";
  if (isOpen) {
    popUp = <PopupItem handleRemoveClick={handleRemoveClick} />;
  }

  return (
    <div className="TopProductContainer">
      {products.map((product, i) => {
        return (
          <div className="ProductsContainer" key={product.id}>
            <div className="ProductImgContainer">
              <img alt="" src={product.img} />
            </div>
            <div className="ProductListInfo">
              <div className="productCategory">{product.category}</div>
              <div className="productName">{product.name}</div>
              <div className="productPrice">{product.price}</div>
              <div className="productButton">
                <button onClick={() => handleClick(product.id, product, i)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="PopupContainer">{isOpen === true ? popUp : ""}</div>
    </div>
  );
};

export default Products;
