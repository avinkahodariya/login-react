import React from "react";
import Image from "./Image";
import Username from "./Username";
import { Email } from "./Email";
import styles from "./if.module.css";

const Popup = (props) => {
  return (
    <div>
      <div>
        <Image />
      </div>
      <div>
        <Username user={props.user} />
        <Email email={props.email} />
      </div>
    </div>
  );
};

export default Popup;
