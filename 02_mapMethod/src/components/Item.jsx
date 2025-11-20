import styles from "./Item.module.css";

const Item = ({ item, handleBuyButton }) => {
  return (
    <>
      <li className={`${styles["item"]} list-group-item`}>
        <span>{item.toUpperCase()}</span>
        <button
          onClick={handleBuyButton}
          className={`${styles.button} btn btn-info`}
        >
          Buy Now
        </button>
      </li>
    </>
  );
};

export default Item;
