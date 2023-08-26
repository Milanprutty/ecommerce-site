import React, { useContext } from "react";
import "./ShoppingCartList.css";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import cartContext from "../../context/cart";

const ProductList = () => {
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
              <div className="itemName">
                {item.name}
                <p>
                  {item.count} * ${item.price}
                </p>
              </div>
            </div>

            <div className="CartInfoContainer">
              <div className="CartPriceContainer">${item.price}</div>
              <div className="itemCount">
                <AiOutlineMinusCircle
                  style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    addQuantity(item.id);
                  }}
                />
              </div>

              <div className="totalPrice">{item.total}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
