import React from 'react'
import uno from '../../assets/integracion/sensorial1.jpeg'
import dos from '../../assets/integracion/sensorial1.jpeg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './IntegracionSensorial.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Integración Sensorial:",
  description1: "La integración sensorial es la organización de las sensaciones que recibimos en nuestro cuerpo y del ambiente que nos rodea. Pequeños gigantes cuenta con especialistas tecnologos médicos terapeuta ocupacional con especialidad en integración sensorial y atendemos a niños y adolescentes con todo tipo de diagnóstico.",
  description2: "La integración sensorial no sólo nos permite responder apropiadamente a las sensaciones entrantes, sino que también guía la manera en la que nosotros actuamos en el medio. Por ejemplo, el planteamiento motor (o praxis) es una habilidad importante que depende de la eficiencia de la integración sensorial.",
  image: 1
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

export default Psicologia