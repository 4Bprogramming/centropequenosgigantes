import React from 'react'
import uno from '../../assets/psicologia/psicologia1.jpg'
import dos from '../../assets/psicologia/psicologia2.jpg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './ModificacionConducta.module.css'
import Redes from './Redes'
import Texto from './Texto'


const aboutData = {
  title: "Modificación de Conducta:",
  description1: "La modificación de conducta podría definirse, de manera sencilla, como la aplicación sistemática de principios del aprendizaje y de la psicología experimental con el objetivo de eliminar, disminuir o cambiar conductas que no son adaptativas. Por conductas no adaptativas entendemos aquellas que conllevan insatisfacción, malestar o problemas a la persona, que le impiden alcanzar los objetivos. Estos problemas no son considerados como normales o anormales, sino como déficits o excesos comportamentales.",
  description2: "Hay muchas técnicas de modificación de conducta:",
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
           <ul>
            <li>El tiempo fuera.</li>
            <li>La economía de fichas.</li>
            <li>La extinción y otros sistemas de manejo de contingencias.</li>
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