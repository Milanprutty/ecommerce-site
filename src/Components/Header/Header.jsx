import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderTop">
      <ul>
        <div>
          <li>PruttyShop</li>
        </div>
        <div>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
        </div>
        <div>
          <li>cart</li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
