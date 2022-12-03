import React from 'react'
import uno from '../../assets/terapiafisica/fisica1.jpeg'
import dos from '../../assets/terapiafisica/fisica1.jpeg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './TerapiaFisica.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Terapia Física:",
  description1: "Es una carrera de ciencias de la salud, que aborda el conocimiento del cuerpo y el movimiento del ser humano en su ciclo vital, en situación de salud y condición de enfermedad, con base en los conocimientos científicos y tecnológicos de los diferentes sistemas que influyen en el movimiento corporal humano.",
}

function Psicologia() {
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
            <li>Participar, cuando se le pida, en el equipo multidisciplinar del Centro para la realización de pruebas o valoraciones relacionadas con su especialidad profesional.</li>
            <li>Realizar los tratamientos y técnicas rehabilitadoras que se prescriban.</li>
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

export default Psicologia