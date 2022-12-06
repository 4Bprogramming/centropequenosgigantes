import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from '../../assets/logo.png'
import Nav from "react-bootstrap/Nav";
import styles from './Navbar.module.css'

function NavScroll() {
/*     const navigate = useNavigate(); */

  return (
    <Navbar className={styles.navBarContainer} expand="lg">
    <Container fluid>
      <Navbar.Brand>
        <img src={logo} className={styles.LogoNavBar} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls={styles.navbarScroll}  />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "200px" }}
        //navbarScroll
        >
          <div className={styles.listNavBar} >
            <div className={styles.navBarLinks} >
              <NavLink to="/">HOME</NavLink>
            </div>
            <div className={styles.navBarLinks} >
              <NavLink to="/nosotros">NOSOTROS</NavLink>
            </div>
            {/* <div className="navBarLinks">
              <NavLink to="/servicios">Servicios</NavLink>
            </div> */}
            <div className={styles.navBarLinks} >
              <NavLink to="/servicios">SERVICIOS</NavLink>
            </div>
            <div className={styles.navBarLinks} >
              <NavLink  to="/contacto">CONTACTO</NavLink>
            </div>
            <div>
            <NavLink className={styles.buttonContact} to="/reserva" exact>Reserva tu cita</NavLink>
            </div>
            <div className={styles.navBarLinks} >
              <NavLink to="/administrador">ADMIN</NavLink>
            </div>
            
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavScroll