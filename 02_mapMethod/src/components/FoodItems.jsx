import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ foodItems }) => {
  let [activeItems, setActiveItems] = useState([]);
  // const handleBuyButtonClicked = (event, foodItem) => {
  //   console.log(event);
  //   console.log(`Item being bought is ${foodItem}`);
  // };
  const onBuyButtonClicked = (event, item) => {
    if (!activeItems.includes(item)) {
      setActiveItems([...activeItems, item]);
    }
  };
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              bought={activeItems.includes(item)}
              handleBuyButton={(event) => onBuyButtonClicked(event, item)}
              // handleBuyButton={(event) => handleBuyButtonClicked(event, item)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FoodItems;
