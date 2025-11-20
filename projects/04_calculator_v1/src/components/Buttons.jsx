import styles from "./Buttons.module.css";

const Buttons = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonNames, index) => {
        return (
          <button className={styles.button} key={index}>
            {buttonNames}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
