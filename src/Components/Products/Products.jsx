import React, { useEffect, useState } from "react";
import "./ProductContainer.css";

const Products = ({ AddCartItem, cart, setCart }) => {
  const getRandomId = () => {
    return crypto.randomUUID();
  };

  const [products, setProducts] = useState([
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
    {
      category: "test",
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
      clicked: false,
    },
  ]);

  const handleClick = (id, product, i) => {
    if (cart.length === 0) {
      AddCartItem(product);
    }

    if (products[i].id === id && products[i].clicked === true) {
      alert("Already In Cart");
    } else {
      AddCartItem(product);
    }

    const updatedproducts = products.map((product) => {
      if (id === product.id) {
        return { ...product, clicked: true };
      }

      return product;
    });

    setProducts(updatedproducts);
  };

  return (
    <div className="TopProductContainer">
      {products.map((product, i) => {
        return (
          <div className="ProductsContainer" key={product.id}>
            <div className="ProductImgContainer">
              <img
                alt=""
                src="https://m.media-amazon.com/images/I/61iY7WIkP3L._AC_UL400_.jpg"
              />
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
    </div>
  );
};

export default Products;
