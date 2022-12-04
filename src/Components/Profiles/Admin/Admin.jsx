import React, { useState } from 'react'
import AddProfessional from './AdminComponents/AddProfessional/AddProfessional';
import TodosTurnos from './AdminComponents/TodosLosTurnos/TodosTurnos';
import ReservaTurnos from './AdminComponents/ReservaDeTurnos/ReservaTurnos';
import TurnosPendientes from './AdminComponents/TurnosPendientes/TurnosPendientes';
import TurnosDisponibles from './AdminComponents/TurnosDisponibles/TurnosDisponibles';
import TurnosCancelados from './AdminComponents/TurnosCancelados/TurnosCancelados';


import styles from './Admin.module.css';
import TodosProfesionales from './AdminComponents/TodosLosProfesionales/TodosLosProfesionales';

function Admin() { 
    const [select, setSelect]=useState("");

    const handleClick=(value)=>{
            setSelect(value);
    }

  return (
    <div className={styles.mainAdminContainer}>
      <div className={styles.menuAdmin}>
      <h2 className={styles.adminMenuTitle}>Menu</h2>
        <div className={styles.options} onClick={()=>handleClick('profesional')}>Añadir Profesional</div>
        <div className={styles.options} onClick={()=>handleClick('todosProfesionales')}>Lista Profesionales</div>
        <div className={styles.options} onClick={()=>handleClick('todosTurnos')}>Todos los turnos</div>
        <div className={styles.options} onClick={()=>handleClick('reservarTurnos')}>Reservar Turnos</div>
        <div className={styles.options} onClick={()=>handleClick('TurnosPendientes')}>Turnos Pendientes</div>
        <div className={styles.options} onClick={()=>handleClick('TurnosDisponibles')}>Turnos Disponibles</div>
        <div className={styles.options} onClick={()=>handleClick('TurnosCancelados')}>Turnos Cancelados</div>
      </div>


   {/* Este contenerdor ****mainRenderAdmin*** será el que contenga los componentes que se renderizen mas abajo. */}
   <div className={styles.mainRenderAdmin}>
    
    {
      select==="profesional" &&
      <AddProfessional/> ||
      select==="todosProfesionales" &&
      <TodosProfesionales/> ||
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
    </div>
  )
}

export default Admin