import React from "react";
import SelectProfesionales from "../CrearTurnos/SelectMultipleEspecialidades/SelectProfesionales";

import styles from "./RerservaTurno.module.css";
import ModalReserva from "./ModalReservaTurno/ModalReserva";
import SelectFecha2 from "./SelectFechaMUI";
import ModalPagoReserva from "../../../UsuarioPaciente/ReservaDeTurnos/ModalPAgoReserva";

function ReservaForm(props) {
  // console.log('esto traer el props n click',props)
  return (
    <div className={styles.mainReservarTurnoContainer}>
      <h2 style={{ fontFamily: "monospace", textShadow: "3px 2px 5px grey" }}>
        Reserva un turno
      </h2>
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
            className={styles.botonesReservarTurno}
            onClick={props.handleClickChange}
          >
            Otro Profesional
          </button>
        </>
      )}
      {props.habilitarCalendario && (
        <div style={{ 
          display: "flex ",
          flexWrap: "wrap",
          boxShadow: "2px 3px 11px 2px #9b9b9b",
          borderRadius:"15px",
          maxWidth:"640px",
          padding:"5px",
          marginTop:"15px"
          }}> 

          {/* Calendario */}
          <div style={{ width: "330px"}}>
            <SelectFecha2
              date={props.date}
              onChange={props.onChangeDate}
              diasConTurnos={props.diasConTurnos}
            />
          </div>

          {/* Container Titulo y Btn de Turno */}
          <div style={{maxWidth:" 300px"}}>
            {/* Titulo */}
            <div
              className={styles.elegiTurno}
            >
              Elegir turnos
            </div>

            {/* Botones de turno */}
              <div >
                {props.turnos?.length > 0 &&
                  props.turnos?.map((e) => {
                    return (
                      <button
                        style={{ margin:"2px"}}
                        className={styles.botonesDeHorarios}
                        onClick={props.onClick}
                        value={e.id}
                        key={e.id}
                      >
                        {e.startTime}
                      </button>
                    );
                  })}
              </div>
          </div>
        </div>
      )}
      {props.rol === "usuario" && (
        <ModalPagoReserva
          body={props.eleccion}
          handleSubmit={props.handleSubmit}
          show={props.show}
          title={"Reservar el siguiente turno:"}
          type={"submit"}
          titleBotton={"Guardar"}
          onHide={props.onHide}
          handlePago={props.handlePago}
        />
      )}
      <ModalReserva
        body={props.eleccion}
        handleSubmit={props.handleSubmit}
        show={props.show}
        title={"Reservar el siguiente turno:"}
        type={"submit"}
        titleBotton={"Guardar"}
        onHide={props.onHide}
        handlePago={props.handlePago}
      />
    </div>
  );
}

export default ReservaForm;
