import React from "react";
import "./ShoppingCartList.css";
import ProductList from "./ProductList";
import { useState } from "react";

const ShoppingCartList = () => {
  const [total, setTotal] = useState(0);

  const addToTotal = (price) => {
    setTotal(total + price);
  };

  const removeFromTotal = (price) => {
    setTotal(total - price);
  };

  return (
    <div>
      <div className="ShoppingCartHeader">Shopping Cart</div>
      <div className="leftRightContainer">
        <div className="leftSide">
          <div className="descriptionList">
            <ul>
              <li>product</li>
              <li>
                <div>price</div>
                <div>quantity</div>
                <div>total</div>
              </li>
            </ul>
          </div>
          <ProductList addToTotal={addToTotal} total={total} />
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartList;
