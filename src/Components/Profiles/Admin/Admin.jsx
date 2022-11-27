import React, { useState } from 'react'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container"
import AddProfessional from './Components/AddProfessional/AddProfessional';

function Admin() { 
    const [select, setSelect]=useState("hola")
    const handleClick=(value)=>{
        console.log('value',value)
        if(value==='profesional'){
            setSelect(value)
        }
    }
  return (
    <div>Admin
         <Navbar >
    <Container fluid>

      <Navbar.Toggle  />
      <Navbar.Collapse id="navbarScroll">
        <Nav
         
        //navbarScroll
        >
          <div  >
            
            <div  >
              <button onClick={()=>handleClick('profesional')} >Añadir Profesional</button>
            </div>
            <div  >
              <NavLink to="/Turnos">Todos Los turnos</NavLink>
            </div>
            {/* <div className="navBarLinks">
              <NavLink to="/servicios">Servicios</NavLink>
            </div> */}
            <div  >
              <NavLink to="/reserva">Reservar Turnos</NavLink>
            </div>
            <div  >
              <NavLink  to="/pending">Turnos Pendientes</NavLink>
            </div>
            <div>
            <NavLink  to="/avaibles" exact>Turnos Disponibles</NavLink>
            </div>
            <div  >
              <NavLink to="/cancel">Turnos cancelados</NavLink>
            </div>

            
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {
    select==="profesional" &&
  <AddProfessional/>
  }
    </div>
  )
}

export default Admin