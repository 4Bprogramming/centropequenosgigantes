import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styles from "./CardProfesionales.module.css";

function CardsProfesionales() {
  //traigo profesionales
  const profesionales = useSelector((state) => state.allProfessional);

  console.log("profesionales desde cartas profesionales", profesionales);

  return (
    <>
      <h1 className={styles.tituloProfesionalesH1}>Profesionales</h1>
      <div className={styles.galeriaDeProfesionales}>
        {profesionales.map((element) => (


          <div className={styles.mainCardContainer}>
            <div className={styles.imagenProfesional}>
              <img src={element.imagenProfesional} alt="Imagen profesional" />
            </div>
            <div className={styles.nombreProfesional}>
              <Link to={`/detalleProfesional/${element.idProfesional}`}>{element.fullName}</Link>  
            </div>
            <div className={styles.commonProLabel}>{element.email}</div>
            <div className={styles.commonProLabel}><strong>Matricula:</strong> {element.matricula?element.matricula : 'no disponible'}</div>
            <div className={styles.especialidad}>{element.especialidad}</div>

          </div>
        ))}
      </div>
    </>
  );
}

export default CardsProfesionales;
