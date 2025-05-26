import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<First />} />
        <Route path="/first" element={<First/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;