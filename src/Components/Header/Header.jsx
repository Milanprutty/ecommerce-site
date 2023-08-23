import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = ({ cart }) => {
  const goToShop = () => {
    window.scrollTo({
      top: 670,
      behavior: "smooth",
    });
  };

  return (
    <div className="HeaderTop">
      <ul>
        <div
          className="PruttyShop"
          style={{ cursor: "pointer", color: "black" }}
        >
          <li>
            Prutty<span>Shop</span>
          </li>
        </div>

        <div>
          <li onClick={goToShop} style={{ cursor: "pointer" }}>
            Shop
          </li>
          <li>About</li>
        </div>

        <div>
          <Link to={"cart"}>
            <li className="CartLi">
              <AiOutlineShoppingCart />

              <div className="CartCount">{cart.length}</div>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Header;
