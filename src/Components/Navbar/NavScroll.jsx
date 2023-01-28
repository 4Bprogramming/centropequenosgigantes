import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import Nav from "react-bootstrap/Nav";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sesionActiva } from "../../Redux/Action/Actions";
import { useEffect } from "react";


function NavScroll() {
  
  const dispatch = useDispatch();
  
  const token= JSON.parse(window.localStorage.getItem('token'))
  const sesion = useSelector((state)=> state?.sesionAbierta)

  useEffect(() => {
    //actualizando estado para la navbar
    if(token){
      dispatch(sesionActiva(token));
    }
  }, [])
  
  
    
const logOut = ()=> {
  dispatch(sesionActiva(''));
  window.localStorage.clear(); 
}

  return (
    <Navbar className={styles.navBarContainer} expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} className={styles.LogoNavBar} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={styles.navbarScroll} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            //navbarScroll
          >
            <div className={styles.listNavBar}>
              <div className={styles.navBarLinks}>
                <NavLink to="/">HOME</NavLink>
              </div>
              <div className={styles.navBarLinks}>
                <NavLink to="/nosotros">NOSOTROS</NavLink>
              </div>
              {/* <div className="navBarLinks">
              <NavLink to="/servicios">Servicios</NavLink>
            </div> */}
              <div className={styles.navBarLinks}>
                <NavLink to="/servicios">SERVICIOS</NavLink>
              </div>
              <div className={styles.navBarLinks}>
                <NavLink to="/contacto">CONTACTO</NavLink>
              </div>


          
              {/* Boton inicia / cierra sesion */}
              <div className={styles.navBarLinks}>
               
                  {!sesion ? 
                    <NavLink to="/login">
                      <div>INICIAR SESION</div>
                    </NavLink>
                  : 
                  <NavLink to="/">
                    <div onClick={logOut}>CERRAR SESION</div>
                  </NavLink>
                  }
                  
          
              </div>


              <div className={styles.reservarCitaBoton}>
                <NavLink className={styles.buttonContact} to="/reserva" exact>
                  Reserva tu cita
                </NavLink>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
