import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebaseConfig";
import "./scss/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, loadingUser, errorUser] = useAuthState(auth);

  if(!user){
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage setLoading={setLoading} />
          </Route>
        </Switch>
    </Router>);
  }else{
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
            <LandingPage setLoading={setLoading} />
          </Route>
        </Switch>
      </Router>);
  }
}

export default App;
