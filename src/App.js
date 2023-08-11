import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TopHero from "./Components/TopHero/TopHero";
import Deals from "./Components/Deals/Deals";
import ProductContainer from "./Components/Products/ProductContainer";

const App = () => {
  return (
    <div>
      <div className="TopSection">
        <Header />
        <TopHero />
      </div>
      <div>
        <Deals />
      </div>
      <ProductContainer />
    </div>
  );
};

export default App;
