import React from 'react'
import uno from '../../assets/Familiar/familia1.jpeg'
import dos from '../../assets/Familiar/familia2.jpeg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './TerapiaFamiliar.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Terapia de Familia:",
  description1: "La terapia familiar es un tipo de terapia psicológica (psicoterapia) que puede ayudar a los miembros de la familia a mejorar la comunicación y resolver conflictos. La terapia familiar, por lo general, es proporcionada por un psicólogo, un asistente social clínico o un terapeuta acreditado.",
  description2: "Tipos de técnicas de terapia sistémica familiar:",
}

function TerapiaFamiliar() {
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
           <ul>
            <li>Terapia estratégica.</li>
            <li>Terapia estructural.</li>
            <li>Terapia narrativa.</li>
            <li>Terapia cognitivo-conductual.</li>
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

export default TerapiaFamiliar