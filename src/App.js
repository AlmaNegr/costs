import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/contato" element={<Contact />}></Route>
        <Route path="newproject" element={<NewProject />}></Route>
      </Routes>
    </Router>
  )
}

export default App