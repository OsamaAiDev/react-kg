import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <Buttons />
    </div>
  );
}

export default App;
