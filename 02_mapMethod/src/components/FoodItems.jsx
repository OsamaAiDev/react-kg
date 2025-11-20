import Item from "./Item";
const FoodItems = ({ foodItems }) => {
  const handleBuyButtonClicked = (event, foodItem) => {
    console.log(event);
    console.log(`Item being bought is ${foodItem}`);
  };
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              handleBuyButton={(event) => handleBuyButtonClicked(event, item)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FoodItems;
