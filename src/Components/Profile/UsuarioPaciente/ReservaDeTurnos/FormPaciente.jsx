import React from "react";
import styles from "../../Admin/AdminComponents/ReservaDeTurnos/RerservaTurno.module.css";
import SelectFecha2 from "../../Admin/AdminComponents/ReservaDeTurnos/SelectFechaMUI";
import ModalPagoReserva from "./ModalPAgoReserva";

function FormPaciente(props) {
  console.log('esto traer el props n click==>',props)
  const profesional=props.profesional[0]
  return (
    <div className={styles.mainReservarTurnoContainer}>
      <h2 style={{ fontFamily: "monospace", textShadow: "3px 2px 5px grey" }}>
        Reserva un turno
      </h2>
      
          <div className={styles.nombreProfesionalReserva}>
            <strong>Profesional:</strong> <span>{profesional.fullName}</span>
          </div>

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

        <ModalPagoReserva 
        body={props.eleccion}
        profesional={profesional.fullName}
      handleSubmit={props.handleSubmitUser}
      show={props.show}
      title={"Desea Reservar el siguiente turno:"}
      type={"submit"}
      titleBotton={"Guardar"}
      onHide={props.onHide}
      handlePago={props.handlePago}

        />
     
     
   </div>
  );
}

export default FormPaciente;
