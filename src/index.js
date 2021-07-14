import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import styles from "./login.module.css";
import Parentpage from "./pages/Parentpage";
import Signin from "./Signin";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.root}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <div className={styles.main}>
                <Login />

                <Link to="/signin" style={{ textDecoration: "none" }}>
                  {" "}
                  <button>SIGN-IN</button>
                </Link>
              </div>
            </Route>

            <Route path="/signin" exact>
              <div className={styles.main}>
                <Signin />

                <Link to="/" style={{ textDecoration: "none" }}>
                  <button>LOG-IN</button>
                </Link>
              </div>
            </Route>

            <Route path="/parentpage" exact>
              <Parentpage />
            </Route>
          </Switch>
        </div>

        {/* <Route path="/parentpage" exact>
          <Parentpage />
        </Route> */}
      </Router>
    </div>
    {/* <Parentpage/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
