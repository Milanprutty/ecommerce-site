import React, { useContext, useEffect, useState } from "react";
import "./ShoppingCartList.css";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import cartContext from "../../context/cart";

const ProductList = ({ totalCartPrice }) => {
  const { cart, deleteItem, addQuantity, removeQuantity } =
    useContext(cartContext);

  return (
    <div>
      {cart.map((item) => {
        item.total = item.price * item.count;
        return (
          <div className="CartItem">
            <div className="CartImgContainer">
              <AiOutlineCloseCircle
                style={{ cursor: "pointer" }}
                onClick={() => deleteItem(item.id)}
              />
              <img src={item.img} alt="" />
              {item.name}
            </div>
            <div className="CartInfoContainer">
              <div className="CartPriceContainer">${item.price}</div>
              <div className="itemCount">
                <AiOutlineMinusCircle
                  onClick={() => {
                    if (item.count === 1) {
                      return;
                    } else {
                      removeQuantity(item.id);
                    }
                  }}
                />
                {item.count}
                <AiOutlinePlusCircle
                  onClick={() => {
                    addQuantity(item.id);
                  }}
                />
              </div>

              <div>{item.total}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
