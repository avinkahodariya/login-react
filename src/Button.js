import React from "react";
import Styles from "./login.module.css";
const Button = (props) => {
  return (
    <div>
      <button onClick={props.storedata}> {props.button_name} </button>
    </div>
  );
};

export default Button;
