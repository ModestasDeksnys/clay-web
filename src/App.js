import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import { Route, Routes, } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudApp from "./crudComponents/CrudApp";

function App() {
  return (
    <div className="App">
       <Navbar /> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/crup" element={<CrudApp />}/>
      </Routes>
         <Navbar /> 
        

        </div>
  );
}

export default App;
