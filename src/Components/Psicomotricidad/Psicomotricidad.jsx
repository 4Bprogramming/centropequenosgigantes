import React from 'react'
import uno from '../../assets/Psicomotricidad/psicomotricidad3.jpg'
import dos from '../../assets/Psicomotricidad/psicomotricidad4.jpg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './Psicomotricidad.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Psicomotricidad:",
  description1: "La psicomotricidad infantil hace referencia al nivel de desarrollo del sistema nervioso central como principal regulador de los movimientos y el funcionamiento cognitivo y emocional. En práctica, la psicomotricidad en el niño engloba todos los factores físicos y psicológicos implicados en el desarrollo infantil, que pautan la evolución y el crecimiento en el pequeño.",
  description2: "Sin embargo, como el desarrollo infantil es un proceso complejo, existen diversos trastornos que pueden afectar la psicomotricidad. Afortunadamente, también hay diferentes técnicas que pueden atenuar o incluso eliminar estos problemas, sobre todo si se aplican a edades tempranas.",
}

function Psicomotricidad() {
  return (
    <div>
      <Image />
    <div className={styles.about} id="about" >
    <div className={styles.lineStyling}>
      <div className={styles.styleCircle}></div>
      <div className={styles.styleCircle}></div>
      <div className={styles.styleLine}></div>
    </div>
    <div className={styles.aboutBody}>
        <div className={styles.aboutDescription}>
            <h2 >{aboutData.title}</h2>
            <p >{aboutData.description1}<br/><br/>{aboutData.description2}</p>
           
             <img 
                src={dos}  
                alt="" 
                width='250px'
            />
        </div>
        
        <div className={styles.aboutImg}>
           {/*  <img 
                src={uno}  
                alt="" 
                width='600px'
                height='300px'
            /> */}
            
            <Caja />
        </div>
    </div>
</div>
{/* <Texto /> */}
</div>
  )
}

export default Psicomotricidad