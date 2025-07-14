import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
