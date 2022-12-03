import React from 'react'
import styles from "./Texto.module.css";

function Texto() {
  return (
    <div>
     <h5 style={{fontStyle: "oblique" ,textAlign:"justify"}}>Tal y como se subraya desde la Universidad Internacional de Valencia en la psicología familiar se estudian las familias como sistemas y se analizan los comportamientos, patrones de comunicación y respuestas emocionales entre los miembros del grupo familiar.</h5><br />
     <p className={styles.sliderDescription} style={{textAlign:"justify"}}>La terapia familiar suele servir en los siguientes casos: conflicto entre los miembros de la familia, problemas en la comunicación, trastornos mentales de algún miembro de la familia, problemas de conducta en los hijos, problemas escolares, abuso de sustancias o adicción de algún miembro de la familia.</p>
        
    </div>
  )
}

export default Texto