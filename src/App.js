import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebaseConfig";
import "./scss/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";

function App() {
  //Getting user with react-firebase-hook for authetication, if valid returns user
  const [user, loadingUser, errorUser] = useAuthState(auth);
  //If user not valid, keep on LandingPage
  if(!user){
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage/>
          </Route>
        </Switch>
    </Router>);
  }else{
    //Go to main Dashboard once the user is authenticated
    return(
      <Router>
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard/>
          </Route>
          <Route path="/reports" exact>
            <Logs/>
          </Route>
          <Route path="/" exact>
            <LandingPage/>
          </Route>
        </Switch>
      </Router>);
  }
}

export default App;
