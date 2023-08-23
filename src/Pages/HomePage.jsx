import React from "react";
import Header from "../Components/Header/Header";
import TopHero from "../Components/TopHero/TopHero";
import ProductContainer from "../Components/Products/ProductContainer";
import "../App.css";

const HomePage = ({ AddCartItem, cart, setCart }) => {
  return (
    <div>
      <div className="TopImgDiv">
        <div className="TopImg">
          <img
            alt=""
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-finish-select-202207-product-red_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662150079101"
          />
        </div>
      </div>
      <div className="TopSection">
        <Header cart={cart} />
        <TopHero />
      </div>

      <ProductContainer
        AddCartItem={AddCartItem}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default HomePage;
