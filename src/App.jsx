import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Service from "./Components/Service.jsx";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About/>}/>

          <Route path="/service" element={<Service/>}/>

          <Route path="/project" element={<Project/>}/>

          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
