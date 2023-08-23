import React, { useContext } from "react";
import "./ShoppingCartList.css";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import cartContext from "../../context/cart";

const ProductList = ({ addToTotal, total }) => {
  const { cart, deleteItem, addQuantity, removeQuantity } =
    useContext(cartContext);

  return (
    <div>
      {cart.map((item) => {
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
                <AiOutlineMinusCircle onClick={() => removeQuantity(item.id)} />
                {item.count}
                <AiOutlinePlusCircle
                  onClick={() => {
                    addQuantity(item.id);
                    addToTotal(item.price);
                  }}
                />
              </div>
              <div>{item.price * item.count}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
