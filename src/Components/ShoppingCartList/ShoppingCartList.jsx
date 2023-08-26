import React, { useContext } from "react";
import "./ShoppingCartList.css";
import ProductList from "./ProductList";

import cartContext from "../../context/cart";

const ShoppingCartList = () => {
  const { cart } = useContext(cartContext);

  let totalCartPrice = 0;

  return (
    <div>
      <div className="ShoppingCartHeader">Shopping Cart</div>

      {cart.length > 0 ? (
        <div className="leftRightContainer">
          <div className="leftSide">
            <div className="descriptionList">
              <ul>
                <li>product</li>
                <li>
                  <div id="price">price</div>
                  <div>quantity</div>
                  <div id="total">total</div>
                </li>
              </ul>
            </div>
            <ProductList totalCartPrice={totalCartPrice} />
          </div>
          <div className="rightSide">
            <table>
              <thead>
                <tr className="SumRow">
                  <th className="cartTotals">Cart Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr className="shippingDetails">
                  <td>Shipping</td>
                  <td>Free</td>
                </tr>
                <tr className="shippingDetails">
                  <td>Tax</td>
                  <td>$0.00</td>
                </tr>
                <hr></hr>
                <tr className="shippingDetails">
                  <td>TOTAL</td>
                  <td>
                    {cart.map((item) => {
                      totalCartPrice += item.price * item.count;
                      return "";
                    })}
                    {totalCartPrice}
                  </td>
                </tr>
                <tr className="tableBtn">
                  <button>Checkout</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="EmptyCart">Cart Is Empty</div>
      )}
    </div>
  );
};

export default ShoppingCartList;
