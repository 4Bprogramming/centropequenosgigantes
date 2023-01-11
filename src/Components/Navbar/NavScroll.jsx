import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import Nav from "react-bootstrap/Nav";
import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function NavScroll() {
  //funcion para que aparezca el OVERLAY

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Iniciar Sesión / Registrarse
    </Tooltip>
  );

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
              <div className={styles.navBarLinks}>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                  style={{backgroundColor: 'red'}}
                >
                  <NavLink to="/login">
                    <CgProfile color="#0d6efd" />
                  </NavLink>
                </OverlayTrigger>
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
