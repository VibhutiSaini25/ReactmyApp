import React from "react";
import './App.css';
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { HashRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
  
   <HashRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Project" element={<Project/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   

   </HashRouter>
   
  );
}

export default App;
