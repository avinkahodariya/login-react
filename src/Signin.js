import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import styles from "./login.module.css";

const Signin = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [check, setcheck] = useState(false);

  const setsuser = (e) => {
    setuser(e.target.value);
  };

  const setspassword = (e) => {
    setpassword(e.target.value);
  };

  const setsemail = (e) => {
    setemail(e.target.value);
  };

  const storedata = () => {
    let userlist = JSON.parse(localStorage.getItem("userlist"));
    console.log(typeof userlist);

    if (userlist == undefined) {
      userlist = [];
    }

    let username = user;
    let userpassword = password;
    let useremail = email;
    console.log(user, email);
    let t;

    t = userlist.some(function (obj) {
      if (obj.username == user) {
        return true;
      } else if (obj.useremail == email) {
        return true;
      } else {
        console.log(obj.username, user);
        return false;
      }
    });

    console.log(t);
    if (t == false) {
      console.log({ username, useremail, userpassword });
      userlist.push({ username, useremail, userpassword });
      console.log(userlist);
      localStorage.setItem("userlist", JSON.stringify(userlist));
      setcheck(false);
    } else {
      console.log("asd");
      setcheck(true);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.title}>Sign-in</div>
      <Input type="text" name="Username" value={user} change={setsuser} />
      <Input type="email" name="Email" value={email} change={setsemail} />
      <Input
        type="password"
        name="Password"
        value={password}
        change={setspassword}
      />

      <Button button_name="Sign-in" storedata={storedata} />
      {check && <h2>please enter differant username or email</h2>}
    </div>
  );
};

export default Signin;
