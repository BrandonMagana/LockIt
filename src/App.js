import "./scss/index.scss";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
} from "react-router-dom";
import VisitsMetrics from "./components/VisitsMetrics";
import DoorState from "./components/DoorState";
import Visits from "./components/Visits";
import Toggle from "./components/Toggle";
import Lock from "./components/Lock";
import Alarm from "./components/Alarm";
import Metrics from "./components/Metrics";

function App() {
  return (
    <div className="dashboard">
      <Sidebar/>
      <Metrics/>
    </div>
  );
}

export default App;
