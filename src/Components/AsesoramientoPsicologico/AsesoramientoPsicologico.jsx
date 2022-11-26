import React from 'react'
import uno from '../../assets/psicologoAula/aula1.jpeg'
import dos from '../../assets/psicologoAula/aula2.jpeg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './AsesoramientoPsicologico.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Asesoramiento Psicológico en el aula:",
  description1: "El Psicólogo/a de la Educación es el profesional de la psicología cuyo objetivo de trabajo es la reflexión e intervención sobre el comportamiento humano, en situaciones educativas, mediante el desarrollo de las capacidades de las personas, grupos e instituciones.",
  description2: "Los psicólogos educativos proporcionan estrategias para el desarrollo de las habilidades sociales y de comunicación de los niños, la resolución de problemas, el manejo de la ira, la auto-control, la auto-determinación y el optimismo.",
 
}

function AsesoramientoPsicologico() {
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
<Texto />
</div>
  )
}

export default AsesoramientoPsicologico