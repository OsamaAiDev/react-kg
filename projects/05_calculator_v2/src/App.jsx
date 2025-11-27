import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const handleOnClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      setCalVal(calVal + buttonText);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <Buttons handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
