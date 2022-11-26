import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h5 style={{fontStyle: "oblique"}} >La modificación de conducta podría definirse, de manera sencilla, como la aplicación sistemática de principios del aprendizaje y de la psicología experimental con el objetivo de eliminar, disminuir o cambiar conductas que no son adaptativas.</h5><br />
     <p className={styles.sliderDescription} >
Las técnicas de modificación de conducta son útiles para crear conductas nuevas que nunca se habían observado en el repertorio conductual del paciente, mantener o incrementar conductas deseables y reducir conductas que entorpezcan el desempeño en la clínica odontológica.</p>
        
    </div>
  )
}

export default Texto