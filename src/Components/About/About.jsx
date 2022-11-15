import React from "react";
import styles from "./About.module.css";
import pict from "../../assets/seguimos.jpg";
import Image from "./Image";

function About() {
  return (
    <div>
        <Image />
      <div className={styles.AboutBody}>
        
        <div className={styles.AboutContainer}>
          <div className={styles.StyledHeading}> Nosotros Somos</div>
          <div className={styles.TextSection}>
            Centro de terapias Pequeños Gigantes EIRL. RUC: 20609237024.
            <br />
            <br />
            Somos una institución privada de salud con 10 de experiencia
            tratando a niños, adolescentes, jóvenes y adultos con diversos
            diagnósticos.
            <br />
            <br />
            Contamos con un equipo de profesionales de la salud mental que viene
            trabajando juntos dando respuesta integral a diferentes desafíos que
            intervienen en el proceso de desarrollo y aprendizaje en nuestros
            pacientes.
          </div>
        </div>
        <div className={styles.AboutContainer}>
          <img className={styles.Photo} src={pict} />
        </div>
      </div>
    </div>
  );
}

export default About;
