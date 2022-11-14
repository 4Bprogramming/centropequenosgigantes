import { Routes, Route } from "react-router";

import React, { useEffect, useState } from "react";
import { auth } from "./Firebase/Firebase";

import './App.css';



//components
import Footer from "./Components/Footer/Footer";
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Navbar from "./Components/Navbar/Navbar";
import Register from './Components/Register/Register'
import User from "./Components/User/User";



function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App"> 
      <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/user" element={<User name={userName} />} />
  
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
