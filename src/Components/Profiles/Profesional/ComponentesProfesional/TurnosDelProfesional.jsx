import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from './TurnoDelProfesional.module.css';

function TurnosDelProfesional({ selectTurnos }) {
  const profesionalPorId = useSelector((state) => state.profesionalPorID);
  const mensajeError = useSelector((state) => state.message);
  

  let arrayDeTurnos = null;

  if (selectTurnos === "todosTurnos") {
    //todos los turnos
    arrayDeTurnos = profesionalPorId.turnos;
  } else if (selectTurnos === "disponible") {
    //solo los disponibles
    arrayDeTurnos = profesionalPorId?.turnos?.filter(
      (element) => element.estado === selectTurnos
    );
  } else if (selectTurnos === "pendiente") {
    //los penientes de atencion
    arrayDeTurnos = profesionalPorId?.turnos?.filter(
      (element) => element.estado === selectTurnos
    );
  }



  return (
    <>
    {/* si turnos no está  o hubo error buscando en el servidor*/}
      {!profesionalPorId?.turnos?.length || mensajeError ? (
        <div className={styles.profesionalPorIdError}> <span>Oops!</span> No se encontraron los turnos. <strong>:S</strong></div>
      ) : (
        // si se encontró la info renderizo todo.
        <div className={styles.TurnoProfesionalMainContainer}>
          <h3>Tus Turnos</h3>

          {arrayDeTurnos.map((turno) => (

            <div key={turno.id} className={styles.turnosMapContainer}>
              <div><strong>Fecha:</strong> <span>{turno.date}</span></div>
              <div><strong>Estado:</strong> <span>{turno.estado}</span></div>
              <div><strong>Comienza:</strong> <span>{turno.startTime}</span></div>
              <div><strong>Termina:</strong> <span>{turno.endTime}</span></div>
              {turno.usuarioEmail && 
                <div><strong>Email del paciente:</strong> <span>{turno.usuarioEmail}</span></div>  
              }
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TurnosDelProfesional;
