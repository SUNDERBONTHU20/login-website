import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Signup from "../login-out/Signup.jsx";
import Login from '../login-out/Login.jsx'

function Routers() {
  return (
    <Router>
      <Navbar />
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
