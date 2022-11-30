import React from 'react'
import uno from '../../assets/psicologia/psicologia1.jpg'
import dos from '../../assets/psicologia/psicologia2.jpg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './Psicologia.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Psicología:",
  description1: "Es la ciencia que estudia la conducta humana y los procesos mentales. Al ser bastante amplia, para su estudio y aplicación se divide en dos vertientes: la psicología básica y la psicología aplicada.",
  description2: "Ofrecemos una mirada distinta y sensible a nuestros pacientes y los acompañamos en el camino de construir su bienestar.",
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

export default Psicologia