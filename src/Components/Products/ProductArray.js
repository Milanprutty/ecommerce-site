const getRandomId = () => {
  return crypto.randomUUID();
};

export const data = [
  {
    category: "test",
    name: "bluetooth headphones",

    id: getRandomId(),
    clicked: false,
    count: 1,
    img: "https://m.media-amazon.com/images/I/61iY7WIkP3L._AC_UL400_.jpg",
    price: 100,
    total: 0,
  },
  {
    category: "Microphone",
    name: "Blue Yeti USB",

    id: getRandomId(),
    clicked: false,
    count: 1,
    img: "https://m.media-amazon.com/images/I/61egnO8q6ZL._AC_SX569_.jpg",
    price: 67,
    total: 0,
  },
  {
    category: "Microphone",
    name: "Blue Yeti USB Mic",

    id: getRandomId(),
    clicked: false,
    count: 1,
    img: "https://m.media-amazon.com/images/I/61vI0Zii07L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    price: 107,
    total: 0,
  },
  {
    category: "Laptop",
    name: "Lenovo Legion Pro 5 ",

    id: getRandomId(),
    clicked: false,
    count: 1,
    img: "https://m.media-amazon.com/images/I/71fAan2wOQL._AC_UY218_.jpg",
    price: 1799,
    total: 0,
  },
  {
    category: "Phone",
    name: "Apple iPhone 11, 128gb",

    id: getRandomId(),
    clicked: false,
    count: 1,
    img: "https://m.media-amazon.com/images/I/51jBEgTTCiL._AC_UY218_.jpg",
    price: 429,
    total: 0,
  },
  {
    category: "Earbuds",
    name: "Xiami Redmi Buds 4 Pro",

    id: getRandomId(),
    clicked: false,
    count: 1,
    img: "https://m.media-amazon.com/images/I/51+A6AO3QkL._AC_SY300_SX300_.jpg",
    price: 87,
    total: 0,
  },
  {
    category: "Phone",
    name: "iPhone 13 Pro, 256GB",

    id: getRandomId(),
    clicked: false,
    count: 1,
    img: "https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_UY218_.jpg",
    price: 877.3,
    total: 0,
  },
];
