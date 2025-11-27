import styles from "./Item.module.css";

const Item = ({ item, bought, handleBuyButton }) => {
  return (
    <>
      <li className={`${styles["item"]} list-group-item ${bought && "active"}`}>
        <span>{item.toUpperCase()}</span>
        <button
          onClick={handleBuyButton}
          className={`${styles.button} btn btn-info`}
        >
          {bought ? "Bought" : "Buy Now"}
        </button>
      </li>
    </>
  );
};

export default Item;
