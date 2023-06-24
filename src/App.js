import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />  
    </div>
  );
}

export default App;
