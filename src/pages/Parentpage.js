import React from "react";
import Main from "./Main";
import styles from "./if.module.css";

const Parentpage = () => {
  // let main;
  // let i;
  var userlist = JSON.parse(localStorage.getItem("userlist"));
  console.log(userlist);
  // for(i=0;i<userlist.length;i++){
  //     main = main + <Main id={i} user={userlist[i].username} email={userlist[i].useremail}/>;
  // }

  return (
    <div>
      {userlist.map((i) => {
        return <Main id={i} user={i.username} email={i.useremail} />;
      })}
    </div>
  );
};

export default Parentpage;
