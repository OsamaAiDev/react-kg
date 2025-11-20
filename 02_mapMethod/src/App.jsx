import { useState } from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

const App = () => {
  // let foodItems = [];
  let foodItems = ["daal", "sabzi", "roti", "biryani"];
  let textToShow = "Food item entered by user";
  let [textState, updateTextState] = useState();
  // let textStateValue = textState[0];
  // let textStateUpdater = textState[1];
  const handleInputChange = (e) => {
    console.log(e.target.value);
    textToShow = e.target.value;
    console.log(textToShow);
    updateTextState(e.target.value);
  };

  return (
    <Container>
      <ErrorMessage foodItems={foodItems} />
      <FoodInput handleInputChange={handleInputChange} />
      <p>{textState}</p>
      <FoodItems foodItems={foodItems} />
    </Container>
  );
};

export default App;
