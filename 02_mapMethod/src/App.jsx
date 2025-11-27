import { useState } from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

const App = () => {
  let [foodItems, setFoodItems] = useState([]);
  let [textState, updateTextState] = useState();

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      setFoodItems([...foodItems, newFoodItem]);
      e.target.value = "";
    }
  };

  return (
    <Container>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage foodItems={foodItems} />
      <p>{textState}</p>
      <FoodItems foodItems={foodItems} />
    </Container>
  );
};

export default App;
