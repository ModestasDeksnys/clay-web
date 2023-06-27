import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import { Route, Routes, } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import ServicePage from "./SearchPage/Search";
import ContactPage from "./CrudComponentTable/Table.js";


function App() {
  return (
    <div className="App">
       <Navbar /> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path='/service/:id' element={<ServicePage />} />
        <Route path='/contact/:id' element={<ContactPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
         <Navbar /> 
        </div>
  );
}

export default App;
