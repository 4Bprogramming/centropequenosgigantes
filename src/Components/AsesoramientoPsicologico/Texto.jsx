import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h5 style={{fontStyle: "oblique"}} >La psicología dentro de la educación busca entender la conducta, comportamiento y el proceso de aprendizaje de cada estudiante respetando su individualidad y enfoque como un ser bio-psico-social; así como el ritmo, estilo de aprendizaje, entorno sociocultural donde se desenvuelve y de qué manera influyen estos factores.</h5><br />
     <p className={styles.sliderDescription} >La Orientación Psicológica es un proceso sistemático de asistencia a personas en proceso formativo sea en el ámbito personal como profesional, cuyo objetivo es desarrollar conductas vocacionales que los auxilien en su vida adulta.</p>
        
    </div>
  )
}

export default Texto