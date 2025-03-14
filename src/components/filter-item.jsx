import React, { useState } from "react";

export const FilterItem = () => {
  const products = [
    { id: 1, name: "Iphone 12", price: 1000 },
    { id: 2, name: "Samsung TV", price: 1500 },
    { id: 3, name: "Playstation 5", price: 500 },
    { id: 4, name: "Laptop Dell", price: 800 },
    { id: 5, name: "Nike Air Force", price: 120 },
    { id: 6, name: "Apple Watch", price: 300 },
    { id: 7, name: "Canon Camera", price: 400 },
    { id: 8, name: "Headphones Sony", price: 200 },
    { id: 9, name: "Gaming Chair", price: 250 },
    { id: 10, name: "Xbox Series X", price: 600 },
  ];
  const [data, setData] = useState(products);
  const handleSearchItem = (e) => {
    const searchItem = e.target.value;
    const filteredData = products.filter((product) => {
      return product.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    setData(filteredData);
  };
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex ">
        <input
          onChange={handleSearchItem}
          type="text"
          placeholder="Search here..."
          className="px-4 py-2 bg-amber-200 placeholder:text-black outline-none rounded-tl-lg"
        />
        <button className="px-4 py-2 cursor-pointer bg-amber-300 text-white font-semibold rounded-br-lg">
          Search
        </button>
      </div>
      <div className="mt-5">
        {data.map((product) => {
          return (
            <div key={product.id} className=" flex">
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
