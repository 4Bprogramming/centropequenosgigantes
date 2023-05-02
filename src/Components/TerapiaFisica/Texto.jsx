import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h5 style={{fontStyle: "oblique", textAlign:"justify",padding:"10px",width:"98%",margin:"0 auto"}} className={styles.sliderDescription}>La terapia física (conocida comúnmente por sus siglas en inglés “PT”) es tratamiento que ayuda a mantener sus coyunturas y músculos trabajando como deben. La terapia física también se usa después de un accidente, cirugía o sangrado para volver a poner los músculos y coyunturas en forma.</h5><br />
     <p className={styles.sliderDescription} style={{textAlign:"justify"}}>
En algunos países, en lugar se emplea el término terapia física en lugar de fisioterapia, aunque en realidad la terapia física hace referencia únicamente al programa terapéutico para ayudar al paciente a mantener o mejorar sus capacidades funcionales.</p>
        
    </div>
  )
}

export default Texto