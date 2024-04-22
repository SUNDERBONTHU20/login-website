import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../login-out/Signup.jsx";
import Login from '../login-out/Login.jsx'

function Routers() {
  return (
    <Router>
    
      <Routes>
      <Route index element={<Login/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default Routers;
