import React from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from '../../assets/logo.png'


function Navbar() {
  return (
    <div className="header"> 
    <div className="contuner">
       <div className="logo-box">
         <a href="#">
         <img src={logo} width="110px" />
            </a>
       </div>
       <nav>
       <ul>
         <li><NavLink className="a" to="/" exact>home</NavLink></li>
         <li><NavLink className="a" to="/nosotros" exact>Nosotros</NavLink></li>
         <li><NavLink className="a" to="/servicios" exact>Servicios</NavLink></li>
         <li><NavLink className="a" to="/user" exact>Blog</NavLink></li>
         <li><NavLink className="a" to="/contacto" exact>contacto</NavLink></li>
         <li><NavLink className="button-contact" to="/reserva" exact>Reserva tu cita</NavLink></li>
      </ul>
     </nav>
     </div> 
   
       </div>
  )
}

export default Navbar