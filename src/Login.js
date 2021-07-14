import "./App.css";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Parentpage from "./pages/Parentpage";
import styles from "./login.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Login() {
  const [luser, setuser] = useState("");
  const [lpassword, setpassword] = useState("");
  const [check, setcheck] = useState(false);
  const [button, setbutton] = useState(false);

  const lsetuser = (e) => {
    setuser(e.target.value);
  };

  const lsetpassword = (e) => {
    setpassword(e.target.value);
  };

  const checkdata = () => {
    setbutton(true);
    let userlist = JSON.parse(localStorage.getItem("userlist"));

    console.log("sd");

    let t, i;
    for (i = 0; i < userlist.length; i++) {
      console.log("as");

      if (userlist[i].username == luser) {
        if (userlist[i].userpassword == lpassword) {
          setcheck(true);
          console.log(check);

          break;
        } else {
          console.log(check);
          setcheck(false);

          break;
        }
      } else {
        console.log(check);
        setcheck(false);

        break;
      }
    }

    //  if (t==true){
    //   console.log(check)

    //    setcheck(false)
    //    console.log("login suddess")
    //  }

    //  else{
    //    console.log(check)
    //    setcheck(true);
    //  }
  };
  const Ab = () => {
    if (button == true) {
      if (check == true) {
        console.log("asdfcxccvc");

        return <h2> login sucess</h2>;
      }
    } else {
      console.log("iunniuni");
      return <h2> unsucess </h2>;
    }
  };

  //   }

  // const redirect =  () =>{
  //   checkdata()
  //   if(check){
  //     console.log(check);
  //     <Redirect to="/parentpage" />
  //   }
  //   else{

  //   }
  // }

  //   const a = () => {

  //     if(button){if(check){return

  //   <Switch><Route path="/" exact>
  //     {console.log(check)};
  //     {check?<Redirect to="/parentpage" />:<Login />}
  //  </Route></Switch>
  //     }
  //   }}

  return (
    <div>
      <Switch>
        <div className={styles.login}>
          <Route path="/" exact>
            <div className={styles.title}> Login </div>
            <Input
              type="text"
              name="Username"
              value={luser}
              change={lsetuser}
            />
            <Input
              type="password"
              name="Password"
              value={lpassword}
              change={lsetpassword}
            />
            <Button button_name="Log-in" storedata={checkdata} />
          </Route>
        </div>
      </Switch>
      <Switch>
        <Route path="/" exact>
          {check && <Redirect to="/parentpage" />}
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
