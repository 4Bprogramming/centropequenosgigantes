import React from 'react'
import styles from "./Home2.module.css";
import pict from "../../assets/pequenos_gigantes.jpg";


function Home2() {
  return (
    <div className={styles.AboutBody}>
       
        
        <div className={styles.AboutContainer}>
          <h1 className={styles.StyledHeading}> Pequeños Gigantes</h1>
          <div className={styles.TextSection}>
          Centro de Terapias Pequeños Gigantes Rehabilitación Integral para el niño y la familia, 
          atendemos a niños adolescentes y adultos en diversos diagnósticos.
            <br />
            <br />
            
            tiene como objetivo la promoción del bienestar físico, mental y social de los 
            trabajadores de todas las profesiones promoviendo la adaptación del trabajo al 
            hombre y del hombre a su trabajo.
          </div>
        </div>
        <div className={styles.AboutContainer}>
          <img className={styles.Photo} src={pict} />
        </div>
      </div>
  )
}

export default Home2