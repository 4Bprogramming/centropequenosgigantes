import React from "react";
import SelectProfesionales from "../CrearTurnos/SelectMultipleEspecialidades/SelectProfesionales";
import SelectFecha from "./SelectFecha";
import styles from "./RerservaTurno.module.css";

function ReservaForm(props) {
  return (
    <div className={styles.mainReservarTurnoContainer}>
      {props.cambioProfesional && (
        <SelectProfesionales
          options={props.options}
          onChange={props.onChangeSelect}
          idProfesional={props.idProfesional}
        />
      )}
      {props.habilitarBoton && (
        <>
          <div className={styles.nombreProfesionalReserva}>
            <strong>Profesional:</strong> <span>{props.nombreProfesional}</span>
          </div>
          <button
            className={styles.botonCambiarProfesional}
            onClick={props.handleClickChange}
          >
            Otro Profesional
          </button>
        </>
      )}
      {props.habilitarCalendario && (
        <div>
          <SelectFecha date={props.date} onChange={props.onChangeDate} />

          <div className={styles.elegiTurno}>Elegir turnos</div>
          {props.turnos?.length > 0 &&
            props.turnos?.map((e) => {
              return (
                <button onClick={props.onClick} value={e.id} key={e.id}>
                  {e.startTime}
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default ReservaForm;
