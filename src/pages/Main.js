import React from "react";
import Secondmain from "./Secondmain";
import styles from "./if.module.css";

const Main = (props) => {
  return (
    <div>
      <Secondmain user={props.user} email={props.email} />
    </div>
  );
};

export default Main;
