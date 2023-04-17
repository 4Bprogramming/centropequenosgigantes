import React, { useEffect, useState } from 'react'
import AddProfessional from './AdminComponents/AddProfessional/AddProfessional';
import TodosTurnos from './AdminComponents/TodosLosTurnos/TodosTurnos';
import ReservaTurnos from './AdminComponents/ReservaDeTurnos/ReservaTurnos';
import TurnosPendientes from './AdminComponents/TurnosPendientes/TurnosPendientes';
import TurnosDisponibles from './AdminComponents/TurnosDisponibles/TurnosDisponibles';
import TurnosCancelados from './AdminComponents/TurnosCancelados/TurnosCancelados';
import styles from './Admin.module.css';
import TodosProfesionales from './AdminComponents/TodosLosProfesionales/TodosLosProfesionales';
import { getProfesionales, getTurnos, getUsuarios } from '../../../Redux/Action/Actions';
import { useDispatch } from 'react-redux';
import CrearTurnos from './AdminComponents/CrearTurnos/CrearTurnos';
import GifDeEspera from "../../GifsDeEspera/GifDeEspera";
import adminGif from "../../../assets/gifAdmin.gif";
 
function Admin() { 
  const token= JSON.parse(window.localStorage.getItem('token'))
  const rol= JSON.parse(window.localStorage.getItem('rol'))
 
  const dispatch=useDispatch()



  useEffect(()=>{
    
    dispatch(getProfesionales(token))
    dispatch(getTurnos(token))
    dispatch(getUsuarios(token))
  },[]) 
  const [select, setSelect]=useState("");
  const handleClick = (value) => {
    setSelect(value);
  };

  return (
    <div className={styles.mainAdminContainer}>
      <div className={styles.menuAdmin}>
        <h2 className={styles.adminMenuTitle}>Menu</h2>
        <div
          className={styles.options}
          onClick={() => handleClick("profesional")}
        >
          Añadir Profesional
        </div>
        <div
          className={styles.options}
          onClick={() => handleClick("todosProfesionales")}
        >
          Lista Profesionales
        </div>
        <div
          className={styles.options}
          onClick={() => handleClick("todosTurnos")}
        >
          Todos los turnos
        </div>
        <div
          className={styles.options}
          onClick={() => handleClick("reservarTurnos")}
        >
          Reservar Turnos
        </div>
        <div
          className={styles.options}
          onClick={() => handleClick("TurnosPendientes")}
        >
          Turnos Pendientes
        </div>
        <div
          className={styles.options}
          onClick={() => handleClick("TurnosDisponibles")}
        >
          Turnos Disponibles
        </div>
        <div
          className={styles.options}
          onClick={() => handleClick("TurnosCancelados")}
        >
          Turnos Cancelados
        </div>
        <div
          className={styles.options}
          onClick={() => handleClick("CrearTurnos")}
        >
          Crear Turnos
        </div>
      </div>

      {/* Este contenerdor ****mainRenderAdmin*** será el que contenga los componentes que se renderizen mas abajo. */}
      <div className={styles.mainRenderAdmin}>

        {/* gif si no eligio opcion */}
        {select === "" && (
          <GifDeEspera
            titulo={"Elige una opcion del menu"}
            gif={adminGif}
            alt={"gente trabajando"}
          />
        )}

        {(select === "profesional" && <AddProfessional token={token} />) ||
          (select === "CrearTurnos" && <CrearTurnos token={token} />) ||
          (select === "todosProfesionales" && (
            <TodosProfesionales token={token} />
          )) ||
          (select === "todosTurnos" && <TodosTurnos token={token} />) ||
          (select === "TurnosPendientes" && (
            <TurnosPendientes token={token} />
          )) ||
          (select === "TurnosDisponibles" && (
            <TurnosDisponibles token={token} />
          )) ||
          (select === "TurnosCancelados" && (
            <TurnosCancelados token={token} />
          )) ||
          (select === "reservarTurnos" && <ReservaTurnos token={token} rol={rol} />)}
      </div>
    </div>
  );
}

export default Admin;
