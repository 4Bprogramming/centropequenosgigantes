import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h5 style={{fontStyle: "oblique"}} >La terapia de aprendizaje es un proceso de intervención dedicado a estimular las áreas en las que una persona presenta dificultades, generalmente relacionadas con la motricidad gruesa y fina, habilidades de lectura, escritura y área matemática.</h5><br />
     <p className={styles.sliderDescription} > Tiene como objetivo posibilitar el máximo desarrollo de las capacidades cognitivas de los niños y adolescentes para un aprendizaje significativo y funcional. </p>
         </div>
  )
}

export default Texto