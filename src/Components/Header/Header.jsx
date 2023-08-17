import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
        <div className="PruttyShop">
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
          <li className="CartLi" onClick={() => console.log(cart)}>
            <AiOutlineShoppingCart />
            <div className="CartCount">{cart.length}</div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
