import React from "react";
import styles from "./Home2.module.css";
import pict from "../../assets/pequenos_gigantes.jpg";

function Home2() {
  return (
    <div className={styles.AboutBody}>

      <div className={styles.AboutContainer}>
        <h1 className={styles.StyledHeading}>¡BIENVENIDOS!</h1>

        <div className={styles.TextSection}>
          Bienvenido a “Pequeños Gigantes” Nos especializamos en brindar
          atención a pacientes con diversos diagnósticos contamos con
          profesionales tecnólogos médicos y psicólogos los cuales tienen por
          misión brindar la mejor atención de calidad.
        </div>

      </div>

      <div className={styles.PhotoContainer}>
        
      </div>

    </div>
  );
}

export default Home2;
