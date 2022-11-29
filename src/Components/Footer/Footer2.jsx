import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {CDBIcon} from "cdbreact";

function Footer2() {
  return (
    <div className={styles.mainFooterContainer}>
      {/* info footer */}
      <div className={styles.infoFooter}>
        <div className={styles.imagenYlogoFooter}>
          <img alt="logo" src={logo} width="50px" />
          <span>Centro de Terapias Pequeños Gigantes EIRL.</span>
        </div>
        <p className={styles.footerParagraph}>
          Av. Riva Agüero 961 El Agustino, Perú.
        </p>
        <p className={styles.footerParagraph}>RUC: 20609237024.</p>
       
        <div className={styles.footerIcons}>
          <a
            href="https://www.instagram.com"
            target="_blank"
          >
            <CDBIcon fab icon="instagram" size="2x" />
          </a>
          <a href="https://m.facebook.com" target="_blank" rel="noreferrer">
            <CDBIcon fab icon="facebook-f" size="2x" />
          </a>
      
        </div>



        <span className={styles.copyRight}>
          &copy; 2022 Pequeños Gigantes. All rights reserved.
        </span>
      </div>

      {/* novedades */}
      <div className={styles.novedades}>
        <span>Novedades</span>
        <div className={styles.linksFooter}>
          <Link to="/">Reserva de Citas</Link>
        </div>
        <div className={styles.linksFooter}>
          <Link to="/">Servicios</Link>
        </div>
        <div className={styles.linksFooter}>
          <Link to="/">Contacto</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
