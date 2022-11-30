import React from "react";
import styles from "./Ideales.module.css";

function Ideales() {
  return (
    <>
      <div className={styles.mainQuienesSOmos}>
        {/* <div className={styles.usMainTitle}>
        <span>Somos</span>
        <span>Grupo Águila</span>
      </div> */}
        <div className={styles.mainAboustUs}>
          <div className={styles.first}>
            <div className={styles.aboutUsContainer}>
              <h5 className={styles.usTitle}>Visión</h5>
              <p className={styles.usBody}>
                Ser centro de referencia local y departamental en Rehabilitación
                integral y especializada, con gran reconocimiento de nuestros
                pacientes, superando sus expectativas de recuperación.
              </p>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.aboutUsContainer}>
              <h5 className={styles.usTitle}>Misión</h5>
              <p className={styles.usBody}>
                Contribuir a la salud integral y calidad de vida de nuestros
                usuarios mediante la prestación de servicios de Rehabilitación
                integral y especializada de primer nivel, ofreciendo el mejor de
                los resultados, cumpliendo con nuestro compromiso de atención y
                calidad.
              </p>
            </div>
          </div>
          <div className={styles.third}>
            <div className={styles.aboutUsContainer}>
              <h5 className={styles.usTitle}>Filosofía</h5>
              <p className={styles.usBody}>
                Comprometidos con el bienestar y la satisfacción total de
                nuestros pacientes. Dirigimos nuestro trabajo para entregar el
                mejor resultado posible en recuperación y restablecimiento de la
                salud de nuestros usuarios en todo momento.
              </p>
            </div>
          </div>
          <div className={styles.fourth}>
            <div className={styles.aboutUsContainer}>
              <h5 className={styles.usTitle}>Garantía De Calidad</h5>
              <p className={styles.usBody}>
                En “Pequeños Gigantes” garantizamos atención altamente
                especializada con profesionales de alto nivel, dentro de una
                experiencia confortable y en un ambiente seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ideales;
