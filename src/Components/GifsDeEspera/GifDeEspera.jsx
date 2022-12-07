import React from "react";
import styles from './GifDeEspera.module.css'

// recibe por PROPS, --> titulo, gif, alt. 

function GifDeEspera({titulo,gif,alt}) {
  return (
    <div className={styles.selectSinElegir}>
      <div className={styles.tituloSnoopy}>{titulo}</div>
      <div className={styles.gifContainer}>
        <img src={gif} alt={alt}/>
      </div>
    </div>
  );
}

export default GifDeEspera;
