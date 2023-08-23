import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const CartHeader = ({ cart }) => {
  return (
    <div className="HeaderTop">
      <ul>
        <div className="PruttyShop">
          <Link style={{ textDecoration: "none" }} to="/">
            <li className="pruttyLi">
              Prutty<span>Shop</span>
            </li>
          </Link>
        </div>

        <div className="MiddleBtns">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <li style={{ cursor: "pointer" }}>Shop</li>
          </Link>
          <li>About</li>
        </div>

        <div>
          <li className="CartLi">
            <AiOutlineShoppingCart />

            <div className="CartCount">{cart.length}</div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default CartHeader;
