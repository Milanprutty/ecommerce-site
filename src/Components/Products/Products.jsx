import React, { useState } from "react";

const Products = () => {
  const getRandomId = () => {
    return crypto.randomUUID();
  };

  const products = [
    {
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
    },
    {
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
    },
    {
      name: "bluetooth headphones",
      price: 20000,
      id: getRandomId(),
    },
  ];

  const [test, setTest] = useState(products);
  console.log(test);

  return (
    <div>
      {test.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default Products;
