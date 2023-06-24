import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
//  import Service from "./routes/Service";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
        <Navbar />
      <Home />
      
    </div>
  );
}

export default App;
