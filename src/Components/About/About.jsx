import React from "react";
import styles from "./About.module.css";
import pict from "../../assets/seguimos.jpg";
import Image from "./Image";
import AbouText from "./AbouText";
import ImageFooter from "./ImageFooter";
import Ideales from "./Ideales";

function About() {
  return (
    <div>
        <Image />
      <div className={styles.AboutBody}>
        
        <div className={styles.AboutContainer}>
          <div className={styles.StyledHeading}> Nosotros Somos</div>
          <div className={styles.TextSection}>
          Somos el centro de terapias “Pequeños Gigantes” estamos ubicados en la ciudad de Lima. 
          Ofrecemos un servicio profesional de primer nivel, desarrollado por un grupo de especialistas 
          en rehabilitación y otros profesionales de la salud. 
            <br />
            <br />
            Contamos con más de 10 años de experiencia. En nuestros primeros años nos hemos fortalecido 
            en el distrito de El Agustino con la aplicación de procesos terapéuticos planificados y monitoreados 
            con el trabajo en equipo de nuestros especialistas con la finalidad de entregar un servicio de calidad.
            <br />
            <br />
            Inicialmente nos consolidamos la atención exclusiva para niños y adolescentes en etapa escolar, 
            luego incluimos el servicio de psicoterapia para adultos con resultados positivos reflejándose en 
            nuestro crecimiento.
          </div>
        </div>
        <div className={styles.AboutContainer}>
          <img className={styles.Photo} src={pict} />
        </div>
      </div>
      <Ideales />
    {/*   <AbouText /> */}
      <ImageFooter />
    </div>
  );
}

export default About;
