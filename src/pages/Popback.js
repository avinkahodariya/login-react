import React from "react";
import Popup from "./Popup";
import styles from "./if.module.css";

const Popback = (props) => {
  return (
    <div>
      <Popup user={props.user} email={props.email} />
    </div>
  );
};

export default Popback;
