import React from "react";
import styles from "./login.module.css";
const Button = (props) => {
  return (
    <div className={styles.labelinput}>
      <div className={styles.label}>{props.name}</div>
      <input type={props.type} value={props.value} onChange={props.change} />
    </div>
  );
};

export default Button;
