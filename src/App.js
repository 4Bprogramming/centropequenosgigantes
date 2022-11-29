import { Routes, Route } from "react-router";

import React, { useEffect, useState } from "react";
import { auth } from "./Firebase/Firebase";

import "./App.css";

//components
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import User from "./Components/User/User";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import NavScroll from "./Components/Navbar/NavScroll";
import Admin from "./Components/Profiles/Admin/Admin";
import Psicologia from "./Components/Psicologia/Psicologia";
import TerapiaLenguaje from "./Components/TerapiaLenguaje/TerapiaLenguaje";
import TerapiAprendizaje from "./Components/TerapiAprendizaje/TerapiAprendizaje";
import AsesoramientoPsicologico from "./Components/AsesoramientoPsicologico/AsesoramientoPsicologico";
import TerapiaOcupacional from "./Components/TerapiaOcupacional/TerapiaOcupacional";
import ModificacionConducta from './Components/ModificacionConducta/ModificacionConducta'
import TerapiaFisica from './Components/TerapiaFisica/TerapiaFisica'
import IntegracionSensorial from './Components/IntegracionSensorial/IntegracionSensorial'
import TerapiaFamiliar from './Components/TerapiaFamiliar/TerapiaFamiliar'
import Psicomotricidad from './Components/Psicomotricidad/Psicomotricidad'
import EstimulacionTemprana from './Components/EstimulacionTemprana/EstimulacionTemprana'
import Footer2 from "./Components/Footer/Footer2";

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
          
        <Route exact path="/Psicología" element={<Psicologia />} />
        <Route exact path="/Terapia de lenguaje" element={<TerapiaLenguaje />} />
        <Route exact path="/Terapia de aprendizaje" element={<TerapiAprendizaje />} />
        <Route exact path="/Asesoramiento psicológico en el aula" element={<AsesoramientoPsicologico />} />
        <Route exact path="/Terapia ocupacional" element={<TerapiaOcupacional />} />
        <Route exact path="/Modificación de conducta" element={<ModificacionConducta />} />
        <Route exact path="/Terapia física" element={<TerapiaFisica />} />
        <Route exact path="/Integración sensorial" element={<IntegracionSensorial />} />
        <Route exact path="/Terapia de familia" element={<TerapiaFamiliar />} />
        <Route exact path="/Psicomotricidad" element={<Psicomotricidad />} />
        <Route exact path="/Estimulación temprana" element={<EstimulacionTemprana/>} />
      </Routes>
      <Footer2 />
    </div>
  );
}

export default App;
