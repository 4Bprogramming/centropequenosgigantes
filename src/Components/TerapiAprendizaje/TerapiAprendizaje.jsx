import React from 'react'
import uno from '../../assets/TerapiAprendizaje/aprendizaje1.jpeg'
import dos from '../../assets/TerapiAprendizaje/aprendizaje2.jpeg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './TerapiAprendizaje.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Terapia de Aprendizaje:",
  description1: "Este tipo de terapia va dirigida a niños y adolescentes que presentan dificultades específicas de aprendizaje. A través de la terapia, se busca desarrollar habilidades cognitivas de atención, concentración, memoria y discernimiento.",
  
}

function TerapiAprendizaje() {
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
            <p style={{textAlign:"justify"}}>{aboutData.description1}<br/></p>
           <ul>
            <li>Evaluación diagnóstica.</li>
            <li>Programa de atención personalizado.</li>
            <li>Trabajo terapéutico.</li>
            <li>Visita a los Centros escolares involucrados.</li>
           </ul>

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

export default TerapiAprendizaje