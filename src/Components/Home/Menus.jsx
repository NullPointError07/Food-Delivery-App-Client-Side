import Minus from "../../assets/Images/minus.svg";

import { useState } from "react";

const Menus = ({ restaurant }) => {
  const [quantities, setQuantities] = useState({
    breakfast: restaurant.menus.breakfast
      ? new Array(restaurant.menus.breakfast.items.length).fill(0)
      : [],
    lunch: restaurant.menus.lunch
      ? new Array(restaurant.menus.lunch.items.length).fill(0)
      : [],
    dinner: restaurant.menus.dinner
      ? new Array(restaurant.menus.dinner.items.length).fill(0)
      : [],
  });

  const handleIncrement = (index, menuType) => {
    const newQuantities = { ...quantities };
    newQuantities[menuType][index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index, menuType) => {
    const newQuantities = { ...quantities };
    if (newQuantities[menuType][index] > 0) {
      newQuantities[menuType][index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const Breakfast = restaurant.menus.breakfast
    ? restaurant.menus.breakfast
    : null;
  const Lunch = restaurant.menus.lunch ? restaurant.menus.lunch : null;
  const Dinner = restaurant.menus.dinner ? restaurant.menus.dinner : null;

  const getPrice = (item, quantity) => {
    // return item.price * quantity;
    return quantity <= 0 ? item.price : item.price * quantity;
  };

  return (
    <div className="flex flex-col text-left ">
      {Breakfast && (
        <>
          <h1 className="font-bold text-3xl my-4">Breakfast</h1>
          <ul className="flex justify-between lg:flex-row md:flex-col sm:flex-col ">
            {Breakfast.items.map((item, index) => (
              <li key={index} className="card border p-4 border-orange-500">
                <img
                  style={{ width: 300, height: 200 }}
                  src={item.image}
                  alt={item.name}
                />
                <h1 className="font-bold text-2xl my-4">{item.name}</h1>
                <span className="border-b-2"></span>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-3xl my-4">
                    ${getPrice(item, quantities.breakfast[index])}
                  </h1>
                  <p className="flex">
                    <button onClick={() => handleDecrement(index, "breakfast")}>
                      <img
                        src={Minus}
                        alt="Minus Icon"
                        className="ml-2 w-8 h-8 border border-orange-400 rounded-md"
                      />
                    </button>
                    <p className="text-center ml-2 w-8 h-8 border border-gray-50 rounded-lg">
                      {quantities.breakfast[index]}
                    </p>
                    <button
                      onClick={() => handleIncrement(index, "breakfast")}
                      className="text-center text-2xl ml-2 w-8 h-8 border border-orange-400 rounded-lg"
                    >
                      +
                    </button>
                  </p>
                </div>
                <button className="btn">Add to Basket</button>
              </li>
            ))}
          </ul>
        </>
      )}
      {Lunch && (
        <>
          <h1 className="font-bold text-3xl mb-4 mt-10">Lunch</h1>
          <ul className="flex justify-between lg:flex-row md:flex-col sm:flex-col ">
            {Lunch.items.map((item, index) => (
              <li key={index} className="card border p-4 border-orange-500">
                <img
                  style={{ width: 300, height: 200 }}
                  src={item.image}
                  alt={item.name}
                />
                <h1 className="font-bold text-2xl my-4">{item.name}</h1>
                <span className="border-b-2"></span>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-3xl my-4">
                    ${getPrice(item, quantities.lunch[index])}
                  </h1>
                  <p className="flex items-center">
                    <button onClick={() => handleDecrement(index, "lunch")}>
                      <img
                        src={Minus}
                        alt="Minus Icon"
                        className="ml-2 w-8 h-8 border border-orange-400 rounded-md"
                      />
                    </button>
                    <p className="text-center ml-2 w-8 h-8 border border-gray-50 rounded-lg">
                      {quantities.lunch[index]}
                    </p>
                    <button
                      onClick={() => handleIncrement(index, "lunch")}
                      className="text-center text-2xl ml-2 w-8 h-8 border border-orange-400 rounded-lg"
                    >
                      +
                    </button>
                  </p>
                </div>
                <button className="btn">Add to Basket</button>
              </li>
            ))}
          </ul>
        </>
      )}
      {Dinner && (
        <>
          <h1 className="font-bold text-3xl mb-4 mt-10">Dinner</h1>
          <ul className="flex justify-between lg:flex-row md:flex-col sm:flex-col ">
            {Dinner.items.map((item, index) => (
              <li key={index} className="card border p-4 border-orange-500">
                <img
                  style={{ width: 300, height: 200 }}
                  src={item.image}
                  alt={item.name}
                />
                <h1 className="font-bold text-2xl my-4">{item.name}</h1>
                <span className="border-b-2"></span>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-3xl my-4">
                    ${getPrice(item, quantities.dinner[index])}
                  </h1>
                  <p className="flex items-center">
                    <button onClick={() => handleDecrement(index, "dinner")}>
                      <img
                        src={Minus}
                        alt="Minus Icon"
                        className="ml-2 w-8 h-8 border border-orange-400 rounded-md"
                      />
                    </button>
                    <p className="text-center ml-2 w-8 h-8 border border-gray-50 rounded-lg">
                      {quantities.dinner[index]}
                    </p>
                    <button
                      onClick={() => handleIncrement(index, "dinner")}
                      className="text-center text-2xl ml-2 w-8 h-8 border border-orange-400 rounded-lg"
                    >
                      +
                    </button>
                  </p>
                </div>
                <button className="btn">Add to Basket</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Menus;
