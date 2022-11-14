import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";
import logo from "../../assets/logo.png";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <CDBFooter className="shadow" style={{ backgroundColor: "#0d6efd" }}>
      <CDBBox
        display="flex"
        flex="column"
        className=" mx-auto py-5"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="50px" />
              <span className="ml-3 h5 font-weight-bold">
                Centro de Terapias Pequeños Gigantes EIRL.
              </span>
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              Av. Riva Agüero 961 El Agustino, Perù.
            </p>
            <p className="my-3" style={{ width: "250px" }}>
              RUC: 20609237024.
            </p>
          </CDBBox>
          <CDBBox
            display="flex"
            style={{ width: "50%" }}
            justifyContent="between"
          >
          {/*  {<CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Información
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBFooterLink href="/">Nosotros</CDBFooterLink>
                <CDBFooterLink href="/">Servicios</CDBFooterLink>
                <CDBFooterLink href="/">Contacto</CDBFooterLink>
                  <CDBFooterLink href="/">Blog</CDBFooterLink>
              </CDBBox>
            </CDBBox> } */}
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Novedades
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBFooterLink href="/">Reserva de Citas</CDBFooterLink>
                <CDBFooterLink href="/">Servicios</CDBFooterLink>
                <CDBFooterLink href="/">Contacto</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">
            &copy; 2022 Pequeños Gigantes. All rights reserved.
            <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
      >
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>

      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
          </small>
        </CDBBox>
      </CDBBox>
     
    </CDBFooter>
  );
}

export default Footer;
