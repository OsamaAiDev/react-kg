import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        className={styles.foodInput}
        placeholder="Enter Food Item"
      />
    </>
  );
};

export default FoodInput;
