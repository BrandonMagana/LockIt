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
import Navbar from "./components/Navbar";

function App() {
  return (
      <div className="landpage">
        <Navbar/>
        <button>pene</button>
      </div>
      // <Dashboard/> 
  );
}

export default App;
