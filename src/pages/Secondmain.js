import React from "react";
import Info from "./Info";
import Popback from "./Popback";
import styles from "./if.module.css";

const Secondmain = (props) => {
  return (
    <div>
      <Popback user={props.user} email={props.email} />
      <Info />
    </div>
  );
};

export default Secondmain;
