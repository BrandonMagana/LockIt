import "./scss/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <SignUp/>
  );
}

export default App;
