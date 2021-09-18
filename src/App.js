import "./App.css";
import MainScreen from "./screens/MainScreen";
import { Route, Link, BrowserRouter } from "react-router-dom";
import NewScreen from "./screens/NewScreen";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      {/* <Route exact path="/" component={MainScreen} /> */}
      <Route exact path="/" component={NewScreen} />
    </BrowserRouter>
  );
}

export default App;
