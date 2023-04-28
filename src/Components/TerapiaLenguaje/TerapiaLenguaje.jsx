import React from "react";
import uno from "../../assets/terapiaLenguaje/lenguaje2.jpeg";
import dos from "../../assets/terapiaLenguaje/lenguaje3.jpeg";
import Caja from "./Caja";
import Image from "./ImageFooter";
import styles from "./TerapiaLenguaje.module.css";
import Texto from "./Texto";

const aboutData = {
  title: "Terapia de Lenguaje:",
  description1:
    "Terapia de Lenguaje consiste en la evaluación, diagnóstico y tratamiento de los trastornos que atañen a la comunicación. Éstos se manifiestan mediante alteraciones en la voz, la capacidad de habla, el lenguaje, la audición y la deglución. El profesional encargado de trabajar estas dificultades es el tecnólogo medico terapeuta de lenguaje.",
  description2:
    "El tecnólogo médico terapeuta de lenguaje puede evaluar y brindar tratamiento a niños adolescentes y adultos que tenga dificultades asociadas al área del lenguaje. Las problemáticas más comunes a tratar con la terapia del lenguaje son:",
};

function TerapiaLenguaje() {
  return (
    <div>
      <Image />
      <div className={styles.about} id="about">
        <div className={styles.lineStyling}>
          <div className={styles.styleCircle}></div>
          <div className={styles.styleCircle}></div>
          <div className={styles.styleLine}></div>
        </div>
        <div className={styles.aboutBody}>
          <div className={styles.aboutDescription}>
            <h2>{aboutData.title}</h2>
            <p style={{ textAlign: "justify" }}>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </p>

            <ul>
              <li>
                Trastornos de articulación y reproducción de sonidos: dislalia,
                disglosia, disartria.
              </li>
              <li>Trastornos en la fluidez del habla: tartamudez.</li>
              <li>Trastornos de la voz: disfonías.</li>
              <li>
                Trastornos de la alimentación: alteraciones de la deglución,
                disfagia.
              </li>
              <li>
                Alteraciones en la lectura y la escritura: dislexia, disgrafía,
                disortografía.
              </li>
              <li>
                Alteraciones en la comprensión y/o expresión del lenguaje:
                Retraso del lenguaje, trastorno del lenguaje, trastornos
                neurodegenerativos, demencias.
              </li>
              <li>
                Problemas del lenguaje pragmático: dificultad para elegir el
                lenguaje socialmente adecuado.
              </li>
            </ul>

            <img src={dos} alt="" width="250px" style={{margin:"10px"}} />
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
  );
}

export default TerapiaLenguaje;
