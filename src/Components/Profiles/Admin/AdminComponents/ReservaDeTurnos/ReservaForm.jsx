import React from "react";
import SelectProfesionales from "../CrearTurnos/SelectMultipleEspecialidades/SelectProfesionales";
import SelectFecha from "./SelectFecha";
import styles from "./RerservaTurno.module.css";

function ReservaForm(props) {

  // console.log('esto traer el props n click',props)
  return (

    <>
    <div>Reserva Form</div>
    {
      props.cambioProfesional &&
    <SelectProfesionales 
    options={props.options}
    onChange={props.onChangeSelect}
    idProfesional={props.idProfesional}
    />
    }
    {
      props.habilitarBoton &&
      <>
      <p>Profesional: {props.nombreProfesional}</p>
      <button onClick={props.handleClickChange}>
        Cambiar Profesional
      </button> 
      </>
    }
    {
      props.habilitarCalendario &&
      <div> 
        <p>Elegir Fecha</p>

        <SelectFecha date={props.date} onChange={props.onChangeDate} />
        <p>elegir turnos</p>
        {
      props.turnos?.length>0 &&
      props.turnos?.map(e=>{
        return(
          <button onClick={props.onClick} value={e.id} key={e.id}>
            {e.startTime}

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
                <button className={styles.botonesDeHorarios} onClick={props.onClick} value={e.id} key={e.id}>
                  {e.startTime}
                </button>
              );
            
            })
          }
        </div>
      )}
    </div>
  );
}

export default ReservaForm;
