import React, { useState } from 'react'
import AddProfessional from './AdminComponents/AddProfessional/AddProfessional';
import TodosTurnos from './AdminComponents/TodosLosTurnos/TodosTurnos';
import ReservaTurnos from './AdminComponents/ReservaDeTurnos/ReservaTurnos';
import TurnosPendientes from './AdminComponents/TurnosPendientes/TurnosPendientes';
import TurnosDisponibles from './AdminComponents/TurnosDisponibles/TurnosDisponibles';
import TurnosCancelados from './AdminComponents/TurnosCancelados/TurnosCancelados';


import styles from './Admin.module.css';

function Admin() { 
    const [select, setSelect]=useState("");

    const handleClick=(value)=>{
            setSelect(value);
    }

  return (
    <div className={styles.mainAdminContainer}>
      <div className={styles.menuAdmin}>
        <div className={styles.options} onClick={()=>handleClick('profesional')}>Añadir Profesional</div>
        <div className={styles.options} onClick={()=>handleClick('todosTurnos')}>Todos Los turnos</div>
        <div className={styles.options} onClick={()=>handleClick('reservarTurnos')}>Reservar Turnos</div>
        <div className={styles.options} onClick={()=>handleClick('TurnosPendientes')}>Turnos Pendientes</div>
        <div className={styles.options} onClick={()=>handleClick('TurnosDisponibles')}>Turnos Disponibles</div>
        <div className={styles.options} onClick={()=>handleClick('TurnosCancelados')}>Turnos cancelados</div>
      </div>





  {
    select==="profesional" &&
    <AddProfessional/> ||
    select === "todosTurnos" &&
    <TodosTurnos/> ||
    select==="reservarTurnos" &&
    <ReservaTurnos/> ||
    select === "TurnosPendientes" &&
    <TurnosPendientes/> ||
    select === "TurnosDisponibles" &&
    <TurnosDisponibles/> ||
    select === "TurnosCancelados" &&
    <TurnosCancelados/>
    
  }
    </div>
  )
}

export default Admin