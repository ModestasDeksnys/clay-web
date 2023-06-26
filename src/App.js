import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import { Route, Routes, } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './crudComponents/Create'
import CrudHome from './crudComponents/CrudHome'
import Read from './crudComponents/Read'
import Update from './crudComponents/Update'

function App() {
  return (
    <div className="App">
       <Navbar /> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path='/crud' element={<CrudHome />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/update/:id' element={<Update />}/>
        <Route path='/read/:id' element={<Read />}/>
      </Routes>
         <Navbar /> 
        </div>
  );
}

export default App;
