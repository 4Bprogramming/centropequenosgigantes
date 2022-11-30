import React from 'react'
import uno from '../../assets/terapiaOcupacional/ocupacional1.jpeg'
import dos from '../../assets/terapiaOcupacional/ocupacional2.jpeg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './TerapiaOcupacional.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Terapia Ocupacional:",
  description1: "La terapia ocupacional (OT, por sus siglas en inglés) ayuda a aquellas personas a las que se les dificultan las actividades diarias. Esta terapia es un tratamiento para mejorar las habilidades motoras, el equilibrio y la coordinación.",
  description2: "La terapia ocupacional es el uso terapéutico de las actividades de cuidado, trabajo y juego para incrementar la independencia funcional, aumentar el desarrollo y prevenir la incapacidad; puede incluir la adaptación de tareas o del entorno para alcanzar la máxima independencia y para aumentar la calidad de vida.",
}

function TerapiaOcupacional() {
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
            <p style={{textAlign:"justify"}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
           
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
<Texto />
</div>
  )
}

export default TerapiaOcupacional