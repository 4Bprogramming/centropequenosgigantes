import React from 'react'
import construccion from '../../assets/construccion.jpeg'
import styles from "./Services.module.css";
import SevicesCard from './SevicesCard';

function Services() {
  return (

    <>
    <br></br>
    <h1 style={{color: 'yellowgreen'}}>Servicios</h1>
    <section className={styles.blog} >
      <p>Acá encontrarás todos los servicios que ofrecemos en el centro Pequeños Gigantes los cuales son:</p>
    <div className={styles.padding} >
      <div className={styles.container}>
      <div className={styles.grid2}>
      <SevicesCard />
      </div>
      </div>
      </div>
    </section>
  </>
   /*  <div>
        <img src={construccion} width="800px" />
        
    </div> */
  )
}

export default Services