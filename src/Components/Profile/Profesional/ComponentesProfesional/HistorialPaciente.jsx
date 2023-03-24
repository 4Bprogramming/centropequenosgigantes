import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./HistoriaPaciente.module.css";

function HistorialPaciente() {
  const { idTurno } = useParams();
  const turnos = useSelector((state) => state.profesionalPorID.turnos);
  const usuarios = useSelector((state) => state.todosUsuarios);
  const pacienteEmail = turnos.filter((e) => e.id === idTurno)[0].usuarioEmail;
  const paciente = usuarios.filter((e) => e.email === pacienteEmail);
  console.log("paciente==>", paciente);

  return (
    <>
      <div className={styles.paciente} >Paciente: {paciente[0].fullName}</div>
      {paciente.length > 0 && !paciente[0].historiaclinica ? (
        <div className={styles.profesionalPorIdError}><span>Oops!</span> No posee historia clínica</div>
      ) : (
        <div>
          {paciente &&
            paciente.map((e) => {
              return (
                <div className={styles.continer}>
                  <div className={styles.fecha}>
                    Fecha: {e.historiaclinica.fecha}
                  </div>
                  <div className={styles.evaluacion}>{e.historiaclinica.mensaje}</div>
                  <div className={styles.title}>
                    {/* Profesional que antendió: */}
                   Lic. {e.historiaclinica.nombreProfesional}
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <button className={styles.buttonContact} >
        <Link to={`/historiaclinica/${idTurno}`}style={{ textDecoration: "inherit", color: "inherit" }}>Crear Historia</Link>
      </button>
    </>
  );
}

export default HistorialPaciente;
