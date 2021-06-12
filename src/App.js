import "./App.css";
import MainScreen from "./screens/MainScreen";
import { Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Route exact path="/" component={MainScreen} />
    </BrowserRouter>
  );
}

export default App;
