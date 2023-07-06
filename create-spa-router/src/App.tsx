import "./App.css";
import { Routes, Route } from "./routes";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
      </Routes>
    </div>
  );
}

export default App;
