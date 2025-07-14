import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import NavBar from "./components/pages/NavBar";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/newproject" element={<NewProject />} ></Route>
        </Routes>
        </Container>
      </div>
      <p>Footer</p>
    </Router>
  );
}

export default App;
