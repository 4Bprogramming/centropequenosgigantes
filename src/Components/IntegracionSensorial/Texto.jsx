import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h5 style={{fontStyle: "oblique", textAlign:"justify"}} >La terapia de integración sensorial (conocida en inglés como "SI therapy") debería ser proporcionada por un terapeuta ocupacional (OT, por sus siglas en inglés) con entrenamiento. El terapeuta ocupacional determina a través de una evaluación exhaustiva si su hijo se beneficiará con esta terapia.</h5><br />
     <p className={styles.sliderDescription} style={{textAlign:"justify"}}>Los terapeutas ocupacionales pueden ayudar a que los niños aprendan a manejar sus retos sensoriales. Entender las reacciones y los detonadores de su hijo es clave para ayudarlo a manejar los desafíos sensoriales.</p>
        
    </div>
  )
}

export default Texto