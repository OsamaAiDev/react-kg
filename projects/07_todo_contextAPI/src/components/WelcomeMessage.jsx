import React from "react";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = ({ todoItems }) => {
  return (
    todoItems.length === 0 && <p className={styles.message}>Enjoy your day</p>
  );
};

export default WelcomeMessage;
