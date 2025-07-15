import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
