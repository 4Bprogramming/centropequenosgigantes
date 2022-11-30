import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h1>Centro de Terapias Pequeños Gigantes</h1><br /><br />
     <p className={styles.sliderDescription} style={{textAlign:"justify"}}>Nos comprometemos en brindar los servicios de evaluación de salud ocupacional y 
        chequeo preventivo de forma oportuna, segura y profesional, que satisfagan las 
        necesidades y expectativas de nuestras partes interesadas, mediante un equipo de 
        talento humano calificado y comprometido, basado en un proceso de mejora continua 
        y gestión de riesgos, incrementando la eficiencia y eficacia del sistema de gestión 
        de calidad y cumpliendo con los requisitos legales pertinentes.</p>
        
    </div>
  )
}

export default Texto