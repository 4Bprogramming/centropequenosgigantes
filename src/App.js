import { Routes, Route } from "react-router";

import React, { useEffect, useState } from "react";
import { auth } from "./Firebase/Firebase";

import "./App.css";

//components
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import User from "./Components/User/User";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import NavScroll from "./Components/Navbar/NavScroll";
import Admin from "./Components/Admin/Admin";

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
      {/* <Navbar /> */}
      <NavScroll />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/user" element={<User name={userName} />} />
        <Route exact path="/nosotros" element={<About />} />
        <Route exact path="/servicios" element={<Services />} />
        <Route exact path="/reserva" element={<Services />} />
        <Route exact path="/contacto" element={<Contact />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;