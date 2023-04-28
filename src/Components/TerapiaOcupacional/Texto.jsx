import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h5 style={{fontStyle: "oblique", textAlign:"justify",padding:"10px",width:"98%",margin:"0 auto"}}  className={styles.sliderDescription}>Psicólogos. Te ayudamos en el camino a la solución de los problemas que no te dejan vivir. Psicólogos Profesionales. Te acompañamos en este proceso de cambio hasta que lo superes. Reserva Online. Horarios Flexibles. Servicios: Terapia Individual, Terapia Online.</h5><br />
     <p className={styles.sliderDescription} style={{textAlign:"justify"}}>Si la distribución de letras y 'palabras' es aleatoria, Consultas, evaluaciones y tratamientos psicológicos para niños, adolescentes y adultos. Especialistas Capacitados. Horarios Flexibles. Presencial y Virtual. Opciones: Virtual, Atención Presencial.</p>
        
    </div>
  )
}

export default Texto
