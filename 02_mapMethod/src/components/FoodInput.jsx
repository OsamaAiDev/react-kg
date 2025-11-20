import styles from "./FoodInput.module.css";

const FoodInput = ({ handleInputChange }) => {
  return (
    <>
      <input
        type="text"
        onChange={handleInputChange}
        className={styles.foodInput}
        placeholder="Enter Food Item"
      />
    </>
  );
};

export default FoodInput;
